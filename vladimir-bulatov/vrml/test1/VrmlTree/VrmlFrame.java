package VrmlTree;

import java.awt.*;
import PVS.Utils.*;

public class VrmlFrame extends Frame {

  VrmlCallback script;
  
  public VrmlFrame frame;
  public StringR Url = new StringR("test.wrl");

  Button addButton = new Button("Add world");
  Button removeButton = new Button("Remove world");
  TextArea textArea = new TextArea("");

  public VrmlFrame(String name){
    super(name);
    init();
  }

  public VrmlFrame(VrmlCallback script){
    super("vrml tree browser");
    this.script = script;
    init();
  }


  public void init(){
    setBackground(new Color(192,192,192));
    GridBagLayout gridbag = new GridBagLayout();
    this.setLayout(gridbag);
    WindowUtils.constrain(this,new StringField("url:",Url,gridbag,40), 0,0,2,1, 
                          GridBagConstraints.HORIZONTAL,
                          GridBagConstraints.CENTER,1.,0.);
    WindowUtils.constrain(this,addButton, 0,1,1,1, 
                          GridBagConstraints.NONE,
                          GridBagConstraints.CENTER,1.,0.);
    WindowUtils.constrain(this,removeButton, 1,1,1,1, 
                          GridBagConstraints.NONE,
                          GridBagConstraints.CENTER,1.,0.);
    WindowUtils.constrain(this,textArea, 0,2,2,1, 
                          GridBagConstraints.BOTH,
                          GridBagConstraints.CENTER,1.,1.);
  }
  
  public boolean action(Event e, Object what){   

    System.out.println(e);
    if(e.target == addButton){
      if(script != null){
	script.addWorld(Url.value);
      }      
    } else if(e.target == removeButton){
      if(script != null){
	script.removeWorld();
      }
    }
    return true;
  }

  // called afrer new world was loaded successfully
  public void newWorld(TreeParser parsers[]){
    textArea.appendText("*********\n");
    for(int i=0; i < parsers.length; i++){
      textArea.appendText(parsers[i].toString());
      textArea.appendText("*********\n");
    }
    
  }

  public static void main(String args[]){
    VrmlFrame frame = new VrmlFrame("vrml tree browser");
    frame.pack();
    frame.show();
  }

}
