
import vrml.Browser;
import vrml.BaseNode;
import vrml.Event;
import vrml.field.*;
import vrml.node.*;

import java.util.Vector;


public class CoulombPotential extends Script{

  Browser browser;

  // eventOut
  SFInt32 _xDimension;
  SFInt32 _yDimension;
  SFFloat _xSpacing;
  SFFloat _ySpacing;
  SFFloat _xmin; 
  SFFloat _ymin;
  MFFloat _data1;
  MFFloat _data2;
  SFBool isReady;
  
  float[] charges;
  float [][] positions;

  int xDimension, yDimension;

  public void initialize() {
    //System.out.println("initialize");
    
    browser    = this.getBrowser();

    init_fields();

  }

  
  void init_fields(){

    _xDimension = (SFInt32)this.getEventOut("_xDimension");
    _yDimension = (SFInt32)this.getEventOut("_yDimension");
    _xSpacing = (SFFloat)this.getEventOut("_xSpacing");
    _ySpacing = (SFFloat)this.getEventOut("_ySpacing");
    _xmin = (SFFloat)this.getEventOut("_xmin");
    _ymin = (SFFloat)this.getEventOut("_ymin");
    _data1 = (MFFloat)this.getEventOut("_data1");
    _data2 = (MFFloat)this.getEventOut("_data2");
    
    isReady = (SFBool)this.getEventOut("isReady");
         	
    xDimension = ((SFInt32)this.getField("xDimension")).getValue();
    yDimension = ((SFInt32)this.getField("yDimension")).getValue();;
	
    MFVec3f p = (MFVec3f)this.getField("positions");
    positions = new float[p.getSize()][3];
    p.getValue(positions);

    MFFloat c = (MFFloat)this.getField("charges");
    charges = new float[c.getSize()];
    c.getValue(charges);

  }

  public void shutdown(){

  }

  float potential(float x, float y, int n){
    float[] pos = positions[n];
    x -= pos[0];
    y -= pos[1];
    float r = (float)Math.sqrt(x*x + y*y);
    if(r < 0.1f){
      r = 0.1f;
    }
    
    return charges[n]/r;
    // return charges[n]*(float)Math.log(r);
  }
  
  void init(){
    if(charges.length == 0 || 
       positions.length == 0){
      return;
    }
    float xmin = positions[0][0];
    float ymin = positions[0][1];
    float xmax = xmin;
    float ymax = ymin;
    for(int i = 1; i < positions.length; i++){
      float [] vect = positions[i];
      if(vect[0] > xmax ){
	xmax = vect[0];
      } else if( vect[0] < xmin){
	xmin = vect[0];
      }
      if(vect[1] > ymax ){
	ymax = vect[1];
      } else if( vect[1] < ymin){
	ymin = vect[1];
      }
    }
    
    float border = 2;
    xmin -= border;
    xmax += border;
    ymin -= border;
    ymax += border;
    
    float xSpacing = (xmax - xmin)/ (xDimension-1);
    float ySpacing = (ymax - ymin)/ (yDimension-1);
    
    float [] pot = new float[xDimension*yDimension];
    int count = 0;
    
    for(int y = 0; y < yDimension; y++){
      float yy = ymin + y * ySpacing;
      for(int x = 0; x < xDimension; x++){
	float xx = xmin + x * xSpacing;
	float v = 0;
	for( int i = 0; i < charges.length; i++){
	  v += potential(xx,yy,i);
	}
	if(v < -5)
	  v = -5;
	else if(v > 5)
	  v = 5;
	pot[count] = v;
	count ++;
      }
    }

    // assign all eventOut's
    
    _data1.setValue(new float[0]);
    _data2.setValue(pot);
    _ySpacing.setValue(ySpacing);
    _xSpacing.setValue(xSpacing);
    _xDimension.setValue(xDimension);
    _yDimension.setValue(yDimension);
    _xmin.setValue(xmin);
    _ymin.setValue(ymin);
    
    isReady.setValue(true);
    System.out.println("java: isReady");
  }

  /**
    processing of all VRML events
  */
  public void processEvent(Event e) { 

    // eventIn MFFloat set_charges;
    // eventIn MFVec3f set_positions
    // eventIn SFBool  recalculate

    String name = e.getName();
    if(name.equals("set_charges")){

      ConstMFFloat c = (ConstMFFloat)e.getValue();
      charges = new float[c.getSize()];
      c.getValue(charges);
      isReady.setValue(false);

    } else if(name.equals("set_positions")){

      ConstMFVec3f p = (ConstMFVec3f)e.getValue();
      positions = new float[p.getSize()][3];
      p.getValue(positions);
      isReady.setValue(false);

    } else if(name.equals("recalculate")){

      init();
      
    }

  }
}
