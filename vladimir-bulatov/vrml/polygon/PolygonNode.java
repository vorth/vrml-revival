
import vrml.Browser;
import vrml.BaseNode;
import vrml.Event;
import vrml.field.*;
import vrml.node.*;

import java.util.Vector;


public class PolygonNode extends Script{

  MFInt32 set_coordIndex;
  MFVec3f set_point;

  public void initialize() {

    System.out.println("PolygonNode: initialize()");
    

    Node ifs = (Node)((SFNode)this.getField("ifs")).getValue();

    set_coordIndex = (MFInt32)ifs.getEventIn("set_coordIndex");
    Node coord = (Node)((SFNode)ifs.getExposedField("coord")).getValue(); 
    set_point = (MFVec3f)coord.getEventIn("set_point");

    MFVec3f vertF = (MFVec3f)this.getField("vertices");
    int size = vertF.getSize();

    if(size > 2){
      float [][] vert = new float[size][3];
      vertF.getValue(vert);      
      init(vert);
    }

  }
  
  public void shutdown(){

  }
  
  /**
     creation of polygon geometry and passing it to IFS     
   */
  void init(float [][] vert){
    
    Polygon poly = new Polygon();
    
    poly.set_vertices(vert);
    float [][] v = poly.getVertices();
    int ci[] = poly.getCoordIndex();

    set_coordIndex.setValue(ci);
    set_point.setValue(v);
    //System.out.println("init(vert)");
    
    /*
    int ci[] = new int[vert.length+1];
    for(int i =0; i < vert.length; i++){
      ci[i] = i;
    }
    ci[vert.length] = -1;
    set_coordIndex.setValue(ci);
    set_point.setValue(vert);
    System.out.println("init()");
    */
    
  }

  /**
    processing of all VRML events
  */
  public void processEvent(Event e) { 

    // eventIn MFFloat set_vertices;

    String name = e.getName();
    if(name.equals("set_vertices")){

      //System.out.println("set_vertices");
      
      ConstMFVec3f vertF = (ConstMFVec3f)e.getValue();
      float [][] vert = new float[vertF.getSize()][3];
      vertF.getValue(vert);
      init(vert);
      
    }
  }
}
