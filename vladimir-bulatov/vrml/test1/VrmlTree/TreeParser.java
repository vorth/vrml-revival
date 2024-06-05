// Vrml Debugger
// Copyright Justin Couch 1997 justin@vlc.com.au
//
// Given a root node This will trace all the children and print out
// a formated version of the list of nodes.

package VrmlTree;

//import vrml.*;
import vrml.Field;
import vrml.field.*;
import vrml.node.Node;

public class TreeParser
{
  private Node _root_node = null;
  
  public TreeParser(Node root_node)
    {
      _root_node = root_node;
    }
  
  public String toString()
    {
      return(parseNode(_root_node, ""));
    }
  
  private String parseNode(Node node, String indent)
    {
      String node_type = node.getType();
      char	char2;
      
      if(node_type == null)
	return(null);
      
      try {
	char2 = node_type.charAt(1);
      }
      catch(StringIndexOutOfBoundsException e) {
	return(indent + "PROTO node: " + node_type + "\n");
      }
      
      switch(node_type.charAt(0))
	{
	case 'A':
	  switch(char2)
	    {
	    case 'n':
	      if(node_type.equals("Anchor"))
		return(Anchor(node, indent));
	      break;
	    case 'p':
	      if(node_type.equals("Appearance"))
		return(Appearance(node, indent));
	      break;
	    case 'u':
	      if(node_type.equals("AudioClip"))
		return(AudioClip(node, indent));
	      break;
	    }
	  break;
	  
	case 'B':
	  switch(char2)
	    {
	    case 'a':
	      if(node_type.equals("Background"))
		return(Background(node, indent));
	      break;
	    case 'i':
	      if(node_type.equals("Billboard"))
		return(Billboard(node, indent));
	      break;
	    case 'o':
	      if(node_type.equals("Box"))
		return(Box(indent));
	      break;
	    }
	  break;
	  
	case 'C':
	  switch(char2)
	    {
	    case 'o':
	      try
		{
		  switch(node_type.charAt(3))
		    {
		    case 'l' :
		      if(node_type.equals("Collision"))
			return(Collision(node, indent));
		      break;
		    case 'o':
		      if(node_type.equals("Color"))
			return(Color(node, indent));
		      else if(node_type.equals("ColorInterpolator"))
			return(ColorInterpolator(node, indent));
		      break;
		    case 'e':
		      if(node_type.equals("Cone"))
			return(Cone(indent));
		      break;
		    case 'r':
		      if(node_type.equals("Coordinate"))
			return(Coordinate(node, indent));
		      else if(node_type.equals("CoordinateInterpolator"))
			return(CoordinateInterpolator(node, indent));
		      break;
		    }
		}
	      catch(StringIndexOutOfBoundsException e)
		{
		}
	      break;
	    case 'y':
	      if(node_type.equals("Cylinder"))
		return(Cylinder(indent));
	      else if(node_type.equals("CylinderSensor"))
		return(CylinderSensor(node, indent));
	      break;
	    }
	  break;
	  
	case 'D':
	  if(node_type.equals("DirectionalLight"))
	    return(DirectionalLight(node, indent));
	  break;
	  
	case 'E':
	  switch(char2)
	    {
	    case 'l':
	      if(node_type.equals("ElevationGrid"))
		return(ElevationGrid(node, indent));
	      break;
	    case 'x':
	      if(node_type.equals("Extrusion"))
		return(Extrusion(node, indent));
	      break;
	    }
	  break;
	  
	case 'F':
	  if(node_type.equals("Fog"))
	    return(Fog(node, indent));
	  else if(node_type.equals("FontStyle"))
	    return(FontStyle(node, indent));
	  break;
	  
	case 'G':
	  if(node_type.equals("Group"))
	    return(Group(node, indent));
	  break;
	  
	case 'I':
	  if(char2 == 'm')
	    {
	      if(node_type.equals("ImageTexture"))
		return(ImageTexture(node, indent));
	      break;
	    }
	  else if(char2 == 'n')
	    {
	      if(node_type.equals("IndexedFaceSet"))
		return(IndexedFaceSet(node, indent));
	      else if(node_type.equals("IndexedLineSet"))
		return(IndexedLineSet(node, indent));
	      else if(node_type.equals("Inline"))
		return(Inline(node, indent));
	      break;
	    }
	  break;
	  
	case 'L':
	  if(node_type.equals("LOD"))
	    return(LOD(node, indent));
	  break;
	  
	case 'M':
	  if(node_type.equals("Material"))
	    return(Material(node, indent));
	  else if(node_type.equals("MovieTexture"))
	    return(MovieTexture(node, indent));
	  break;
	  
	case 'N':
	  if(node_type.equals("NavigationInfo"))
	    return(NavigationInfo(node, indent));
	  else if(node_type.equals("Normal"))
	    return(Normal(node, indent));
	  else if(node_type.equals("NormalInterpolator"))
	    return(NormalInterpolator(node, indent));
	  break;
	  
	case 'O':
	  if(node_type.equals("OrientationInterpolator"))
	    return(OrientationInterpolator(node, indent));
	  break;
	  
	case 'P':
	  try
	    {
	      switch(node_type.charAt(3))
		{
		case 'x':
		  if(node_type.equals("PixelTexture"))
		    return(PixelTexture(node, indent));
		  break;
		case 'a':
		  if(node_type.equals("PlaneSensor"))
		    return(PlaneSensor(node, indent));
		  break;
		case 's':
		  if(node_type.equals("PositionInterpolator"))
		    return(PositionInterpolator(node, indent));
		  break;
		case 'i':
		  if(node_type.equals("PointLight"))
		    return(PointLight(node, indent));
		  else if(node_type.equals("PointSet"))
		    return(PointSet(node, indent));
		  break;
		case 'o':
		  if(node_type.equals("ProximitySensor"))
		    return(ProximitySensor(node, indent));
		  break;
		}
	    }
	  catch(StringIndexOutOfBoundsException e)
	    {
	    }
	  break;
	  
	case 'S':
	  switch(char2)
	    {
	    case 'c':
	      if(node_type.equals("ScalarInterpolator"))
		return(ScalarInterpolator(node, indent));
	      else if(node_type.equals("Script"))
		return(Script(node, indent));
	      break;
	    case 'h':
	      if(node_type.equals("Shape"))
		return(Shape(node, indent));
	      break;
	    case 'o':
	      if(node_type.equals("Sound"))
		return(Sound(node, indent));
	      else if(node_type.equals("SpotLight"))
		return(SpotLight(node, indent));
	      break;
	    case 'p':
	      if(node_type.equals("Sphere"))
		return(Sphere(indent));
	      else if(node_type.equals("SphereSensor"))
		return(SphereSensor(node, indent));
	      break;
	    case 'i':
	      if(node_type.equals("Switch"))
		return(Switch(node, indent));
	      break;
	    }
	  break;
	  
	case 'T':
	  switch(char2)
	    {
	    case 'e':
	      if(node_type.equals("Text"))
		return(Text(node, indent));
	      else if(node_type.equals("TextureCoordinate"))
		return(TextureCoordinate(node, indent));
	      else if(node_type.equals("TextureTransform"))
		return(TextureTransform(node, indent));
	      break;
	    case 'i':
	      if(node_type.equals("TimeSensor"))
		return(TimeSensor(node, indent));
	      break;
	    case 'o':
	      if(node_type.equals("TouchSensor"))
		return(TouchSensor(node, indent));
	      break;
	    case 'r':
	      if(node_type.equals("Transform"))
		return(Transform(node, indent));
	      break;
	    }
	  break;
	  
	case 'V':
	  if(node_type.equals("Viewpoint"))
	    return(Viewpoint(node, indent));
	  else if(node_type.equals("VisibilitySensor"))
	    return(VisibilitySensor(node, indent));
	  break;
	  
	case 'W':
	  if(node_type.equals("WorldInfo"))
	    return(WorldInfo(indent));
	  break;
	default:
	  return(indent + "PROTO node: " + node_type + "\n");
	}
      
      return(indent + "PROTO node: " + node_type + "\n");
    }
  
  private String getExposedField(Node node, String name, String indent){

    //LiquidReality:      sf_node == null
    //CosmoPlayer beta3a: sf_node.toString() returns null  
    //WorldView2.0        sf_node.toString() returns "NULL"	
    String str = "";
    String newindent = indent + "    ";
    try{    
      Field field = node.getExposedField(name);
      if(field instanceof SFNode){
	SFNode  sf_node = (SFNode)field;
	if(!sf_node.toString().equals("NULL")){	
	  Node ch_node = (Node)sf_node.getValue();
	  str += parseNode(ch_node,newindent + name+" ");
	}
      } else {	
	str += newindent + name + " "+ field.toString()+"\n";
      }
    } catch (Exception e){
      e.printStackTrace(System.out);
    }
    return str;
  }

  // now all the methods for each node.
  private String Anchor(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "Anchor\n";
      
      MFNode children = (MFNode)node.getExposedField("children");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String Appearance(Node node, String indent)
    {
      String	str =  indent + "Appearance\n";
      str += getExposedField(node,"textureTransform",indent+"    ");
      str += getExposedField(node,"texture",indent+"    ");
      str += getExposedField(node,"material",indent+"    ");
      return(str);
    }
  
  private String AudioClip(Node node, String indent)
    {
      return(indent + "AudioClip\n");
    }
  
  private String Background(Node node, String indent)
    {
      return(indent + "Background\n");
    }
  
  private String Billboard(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "Background\n";
      
      MFNode children = (MFNode)node.getExposedField("children");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String Box(String indent)
    {
      return(indent + "Box\n");
    }
  
  private String Collision(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "Collision\n";
      
      MFNode children = (MFNode)node.getExposedField("children");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String Color(Node node, String indent)
    {
      return(indent + "Color\n");
    }
  
  private String ColorInterpolator(Node node, String indent)
    {
      return(indent + "ColorInterpolator\n");
    }
  
  private String Cone(String indent)
    {
      return(indent + "Cone\n");
    }
  
  private String Coordinate(Node node, String indent)
    {
      return(indent + "Coordinate\n");
    }
  
  private String CoordinateInterpolator(Node node, String indent)
    {
      return(indent + "CoordinateInterpolator\n");
    }
  
  private String Cylinder(String indent)
    {
      return(indent + "Cylinder\n");
    }
  
  private String CylinderSensor(Node node, String indent)
    {
      return(indent + "CylinerSensor\n");
    }
  
  private String DirectionalLight(Node node, String indent)
    {
      return(indent + "DirectionalLight\n");
    }
  
  private String ElevationGrid(Node node, String indent)
    {
      String	str =  indent + "ElevationGrid\n";
      Node	ch_node;
      SFNode	color = (SFNode)node.getExposedField("color");
      SFNode	norm  = (SFNode)node.getExposedField("normal");
      SFNode	tex  = (SFNode)node.getExposedField("texCoord");
      
      if(color != null)
	{
	  ch_node = (Node)color.getValue();
	  str += parseNode(ch_node, indent + "    ");
	}
      
      if(tex != null)
	{
	  ch_node = (Node)tex.getValue();
	  str += parseNode(ch_node, indent + "    ");
	}
      
      if(norm != null)
	{
	  ch_node = (Node)norm.getValue();
	  str += parseNode(ch_node, indent + "    ");
	}
      
      return(str);
    }
  
  private String Extrusion(Node node, String indent)
    {
      return(indent + "Extrusion\n");
    }
  
  private String Fog(Node node, String indent)
    {
      return(indent + "Fog\n");
    }
  
  private String FontStyle(Node node, String indent)
    {
      return(indent + "FontStyle\n");
    }
  
  private String Group(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "Group\n";
      
      MFNode children = (MFNode)node.getExposedField("children");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String ImageTexture(Node node, String indent)
    {
      return(indent + "ImageTexture\n");
    }
  
  private String IndexedFaceSet(Node node, String indent)
    {
      String	str =  indent + "IndexedFaceSet\n";
      str += getExposedField(node,"color",indent+"    ");
      str += getExposedField(node,"coord",indent+"    ");
      str += getExposedField(node,"normal",indent+"    ");
      str += getExposedField(node,"texCoord",indent+"    ");
      /*
      Node	ch_node;

      SFNode	color = (SFNode)node.getExposedField("color");
      SFNode	coord = (SFNode)node.getExposedField("coord");
      SFNode	norm  = (SFNode)node.getExposedField("normal");
      SFNode	tex  = (SFNode)node.getExposedField("texCoord");
      
      try {
	ch_node = (Node)color.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      try {
	  ch_node = (Node)coord.getValue();
	  str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
       
      
      try{
	ch_node = (Node)tex.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      try{
	ch_node = (Node)norm.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      */
      return(str);
    }
  
  private String IndexedLineSet(Node node, String indent)
    {
      String	str =  indent + "IndexedLineSet\n";
      Node	ch_node;
      SFNode	color = (SFNode)node.getExposedField("color");
      SFNode	coord = (SFNode)node.getExposedField("coord");
      
      try {
	ch_node = (Node)color.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      try {
	ch_node = (Node)coord.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      return(str);
    }
  
  private String Inline(Node node, String indent)
    {
      return(indent + "Inline\n");
    }
  
  private String LOD(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "LOD\n";
      
      MFNode children = (MFNode)node.getExposedField("level");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String Material(Node node, String indent)
    {
      return(indent + "Material\n");
    }
  
  private String MovieTexture(Node node, String indent)
    {
      return(indent + "MovieTexture\n");
    }
  
  private String NavigationInfo(Node node, String indent)
    {
      return(indent + "NavigationInfo\n");
    }
  
  private String Normal(Node node, String indent)
    {
      return(indent + "Normal\n");
    }
  
  private String NormalInterpolator(Node node, String indent)
    {
      return(indent + "NormalInterpolator\n");
    }
  
  private String OrientationInterpolator(Node node, String indent)
    {
      return(indent + "OrientationInterpolator\n");
    }
  
  private String PixelTexture(Node node, String indent)
    {
      return(indent + "PixelTexture\n");
    }
  
  private String PlaneSensor(Node node, String indent)
    {
      return(indent + "PlaneSensor\n");
    }
  
  private String PointLight(Node node, String indent)
    {
      return(indent + "PointLight\n");
    }
  
  private String PointSet(Node node, String indent)
    {
      String	str =  indent + "PointSet\n";
      Node	ch_node;
      SFNode	color = (SFNode)node.getExposedField("color");
      SFNode	coord = (SFNode)node.getExposedField("coord");
      
      try {
	ch_node = (Node)color.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      try {
	ch_node = (Node)coord.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      return(str);
    }
  
  private String PositionInterpolator(Node node, String indent)
    {
      return(indent + "PositionInterpolator\n");
    }
  
  private String ProximitySensor(Node node, String indent)
    {
      return(indent + "ProximitySensor\n");
    }
  
  private String ScalarInterpolator(Node node, String indent)
    {
      return(indent + "ScalarInterpolator\n");
    }
  
  private String Script(Node node, String indent)
    {
      return(indent + "Script\n");
    }
  
  private String Shape(Node node, String indent)
    {
      String	str = indent + "Shape\n";
      Node	ch_node;
      SFNode	geom = (SFNode)node.getExposedField("geometry");
      SFNode	app  = (SFNode)node.getExposedField("appearance");
      
      try{
	ch_node = (Node)geom.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      try{
	ch_node = (Node)app.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch (Exception e) {}
      
      return(str);
    }
  
  private String Sound(Node node, String indent)
    {
      String	str = indent + "Sound\n";
      Node	ch_node;
      SFNode	src = (SFNode)node.getExposedField("source");
      
      try {
	ch_node = (Node)src.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      return(str);
    }
  
  private String Sphere(String indent)
    {
      return(indent + "Sphere\n");
    }
  
  private String SphereSensor(Node node, String indent)
    {
      return(indent + "SphereSensor\n");
    }
  
  private String SpotLight(Node node, String indent)
    {
      return(indent + "SpotLight\n");
    }
  
  private String Switch(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String str = indent + "Switch\n";
      
      MFNode children = (MFNode)node.getExposedField("choice");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], indent + "    ");
      
      return(str);
    }
  
  private String Text(Node node, String indent)
    {
      String	str = indent + "Text\n";
      Node	ch_node;
      SFNode	fs = (SFNode)node.getExposedField("fontStyle");
      
      try {
	ch_node = (Node)fs.getValue();
	str += parseNode(ch_node, indent + "    ");
      } catch(Exception e){}
      
      return(str);
    }
  
  private String TextureCoordinate(Node node, String indent)
    {
      return(indent + "TextureCoordinate\n");
    }
  
  private String TextureTransform(Node node, String indent)
    {
      return(indent + "TextureTransform\n");
    }
  
  private String TimeSensor(Node node, String indent)
    {
      return(indent + "TimeSensor\n");
    }
  
  private String TouchSensor(Node node, String indent)
    {
      return(indent + "TouchSensor\n");
    }
  
  private String Transform(Node node, String indent)
    {
      int	i;
      int	size;
      Node[]	child_list = null;
      String	str = indent + "Transform\n";
      String newindent = indent + "    ";
      

      str += getExposedField(node,"center",newindent);
      str += getExposedField(node,"rotation",newindent);
      str += getExposedField(node,"scale",newindent);
      str += getExposedField(node,"scaleOrientation",newindent);
      str += getExposedField(node,"translation",newindent);

      MFNode children = (MFNode)node.getExposedField("children");
      
      size = children.getSize();
      child_list = new Node[size];
      
      children.getValue(child_list);
      
      for(i = 0; i < size; i++)
	str += parseNode(child_list[i], newindent);


      return(str);
    }
  
  private String Viewpoint(Node node, String indent)
    {
      return(indent + "Viewpoint\n");
    }
  
  private String VisibilitySensor(Node node, String indent)
    {
      return(indent + "VisibilitySensor\n");
    }
  
  private String WorldInfo(String indent)
    {
      return(indent + "WorldInfo\n");
    }
}
