//package VrmlTree;

import vrml.Browser;
import vrml.BaseNode;
import vrml.Event;
//import vrml.*;
import vrml.field.*;
import vrml.node.*;

import VrmlTree.VrmlFrame;
import VrmlTree.VrmlCallback;
import VrmlTree.TreeParser;


public class VrmlParser extends Script implements VrmlCallback{
  private MFString target_url;
  private Browser browser;
  private SFNode node;
  private MFNode addChildren = null;
  private MFNode removeChildren = null;
  private BaseNode[] returned_nodes; 
  private boolean created=false;

  public VrmlFrame frame;
  
  public void initialize() {
    Node tmpnode;

    target_url = (MFString)getField("target_url");
    browser    = this.getBrowser();
    node       = (SFNode)getField("node");
    tmpnode    = (Node)((SFNode)getField("node")).getValue();
    addChildren = (MFNode)tmpnode.getEventIn("addChildren");
    removeChildren = (MFNode)tmpnode.getEventIn("removeChildren");
    
    frame = new VrmlFrame(this);
    frame.pack();
    frame.show();
  }

  // VrmlCallback method
  public void addWorld(String name){
    if (created) {
      removeWorld();
    }
    String[] urls = new String[1];
    urls[0] = name;
    try {
      System.out.println("createVrmlFromURL");
      browser.createVrmlFromURL(urls,this,"newChildren");
    } catch (Exception ex){//(*InvalidVRMLSyntaxException ex) {
      ex.printStackTrace(System.out);
    }
  }     
  
  // VrmlCallback method
  public void removeWorld(){
    if ((returned_nodes!=null)&&created){
      removeChildren.setValue(returned_nodes);
      created = false; 
    }    
  }

  public void processEvent(Event e) { 
    System.out.println("Event:" +e.getName());
    if (e.getName().equals("timeToCreate")){
      if (!created) {
        String[] urls;
        urls = new String[target_url.getSize()];
        target_url.getValue(urls);
	for(int i=0;i<target_url.getSize(); i++){
	  System.out.println(urls[i]);
	}
        try {
          browser.createVrmlFromURL(urls,this,"newChildren");
        } catch (Exception ex){//(*InvalidVRMLSyntaxException ex) {
          ex.printStackTrace(System.out);
        }
      } 
    } else if (e.getName().equals("newChildren")){
      System.out.println("newChildren");


      ConstMFNode val = (ConstMFNode)e.getValue();
      returned_nodes = new BaseNode[val.getSize()];
      val.getValue(returned_nodes);
      addChildren.setValue(returned_nodes);

      TreeParser parsers[] = new TreeParser[returned_nodes.length];
      System.out.println("**************");
      for(int i=0; i < returned_nodes.length; i++){	
	parsers[i] = new VrmlTree.TreeParser((Node)returned_nodes[i]);
      }      

      // inform frame, that world is ready
      frame.newWorld(parsers);
      created=true;
    } else if (e.getName().equals("timeToRemove")) {
      if ((returned_nodes!=null)&&created){
        removeChildren.setValue(returned_nodes);
        created = false; 
      }
    }
  }
}
