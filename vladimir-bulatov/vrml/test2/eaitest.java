/* EAITest.java

  Copyright (C) 1998 Gerhard Reitmayr
*/

import java.awt.*;
import java.applet.*;
import vrml.external.*;
import vrml.external.field.*;
import vrml.external.exception.*;

public class EAITest extends Applet  {

  public TextArea input;
  public Button replace, clear;

  public Browser browser;

  public void init() {

    GridBagLayout grid = new GridBagLayout();
    GridBagConstraints con = new GridBagConstraints();
    setLayout( grid );
    con.gridx = 0;
    con.gridy = 0;
    con.gridheight = 1;
    con.gridwidth = 2;
    con.anchor = con.CENTER;
    con.fill = con.BOTH;
    input = new TextArea( 5, 60 );
    grid.setConstraints( input, con );
    add( input );
    con.gridx = 0;
    con.gridy = 1;
    con.gridheight = 1;
    con.gridwidth = 1;
    con.fill = con.NONE;
    replace = new Button("Replace");
    grid.setConstraints( replace, con );
    add( replace );
    con.gridx = 1;
    con.gridy = 1;
    con.gridheight = 1;
    con.gridwidth = 1;
    clear = new Button("Clear");
    grid.setConstraints( clear, con );
    add( clear );
    validate();
  }

  public void start(){
    while(browser==null) {
      try {
        browser = Browser.getBrowser(this);
      }
      catch(NullPointerException e) {System.err.println("No browser pointer "+e);}
    }
    if( browser == null ) {
      System.err.println("PANIC : Didn't get browser pointer");
    }
  }

  public boolean action( Event evt, Object what ) {
    if( evt.target == clear ){
      input.setText("");
      return true;
    }
    if( evt.target == replace ){
      try {
        browser.replaceWorld( browser.createVrmlFromString( input.getText()));
      }
      catch(Exception e){
        System.out.println("Exception setting VRML : "+e);
      }
      return true;
    }
    return super.action( evt, what );
  }
}
