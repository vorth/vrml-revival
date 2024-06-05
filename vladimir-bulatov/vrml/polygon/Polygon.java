/*
  transformation of self intersecting polygon into 
  set of normal polygons. 

  Author: V.Bulatov bulatov@dots.physcis.orst.edu
 */


import java.util.Vector;


class VectorOfFloat {

  float values[];
  int initial_capacity = 5;
  int elementCount = 0;
  int capacityIncrement = -1;
  
  VectorOfFloat(){
    values = new float[initial_capacity];
  }

  void insertElementAt(float v, int index){
    ensureCapacity(elementCount + 1);
    System.arraycopy(values, index, values, index + 1, elementCount - index);
    values[index] = v;
    elementCount++;    
  }
  
  void addElement(float v){

    ensureCapacity(elementCount+1);
    values[elementCount++] = v;

  }
  
  float elementAt(int index){
    return values[index];
  }

  final void ensureCapacity(int minCapacity) {
    int oldCapacity = values.length;
    if (minCapacity > oldCapacity) {
      float oldData[] = values;
      int newCapacity = (capacityIncrement > 0) ?
	(oldCapacity + capacityIncrement) : (oldCapacity * 2);
      if (newCapacity < minCapacity) {
	newCapacity = minCapacity;
      }
      values = new float[newCapacity];
      System.arraycopy(oldData, 0, values, 0, elementCount);
    }
  }
  
}

class VectorOfInt {

  int values[];
  int initial_capacity = 5;
  int elementCount = 0;
  int capacityIncrement = -1;
  
  VectorOfInt(){
    values = new int[initial_capacity];
  }

  void insertElementAt(int v, int index){
    ensureCapacity(elementCount + 1);
    System.arraycopy(values, index, values, index + 1, elementCount - index);
    values[index] = v;
    elementCount++;    
  }
  
  void addElement(int v){

    ensureCapacity(elementCount+1);
    values[elementCount++] = v;

  }
  
  int elementAt(int index){
    return values[index];
  }
  
  void copyInto(int [] anArray){
    int i = elementCount;
    while (i-- > 0) {
      anArray[i] = values[i];
    }
  }

  final void ensureCapacity(int minCapacity) {
    int oldCapacity = values.length;
    if (minCapacity > oldCapacity) {
      int oldData[] = values;
      int newCapacity = (capacityIncrement > 0) ?
	(oldCapacity + capacityIncrement) : (oldCapacity * 2);
      if (newCapacity < minCapacity) {
	newCapacity = minCapacity;
      }
      values = new int[newCapacity];
      System.arraycopy(oldData, 0, values, 0, elementCount);
    }
  }

  final int size(){
    return elementCount;
  }
}

class Vec3f{
  float x,y,z;

  Vec3f(float x,float y,float z){

    this.x = x;
    this.y = y;
    this.z = z;
  }

  Vec3f mulSet(float factor){
    x *= factor;
    y *= factor;
    z *= factor;
    return this;
  }

  Vec3f subSet(Vec3f term){
    x -= term.x;
    y -= term.y;
    z -= term.z;
    return this;
  }
  Vec3f addSet(Vec3f term){
    x += term.x;
    y += term.y;
    z += term.z;
    return this;
  }

  Vec3f cross(Vec3f v){
    return new Vec3f(y*v.z - z*v.y, z*v.x-x*v.z, x*v.y-y*v.x);
  }

  Vec3f multiply(float f){
    return new Vec3f(x*f, y*f, z*f);
  }

  Vec3f subtract(Vec3f v){
    return new Vec3f(x-v.x, y-v.y, z-v.z);
  }
  Vec3f add(Vec3f v){
    return new Vec3f(x+v.x, y+v.y, z+v.z);
  }
  float length(){
    return (float)Math.sqrt(x*x + y*y + z*z);
  }

  Vec3f normalize(){
    Vec3f v = new Vec3f(x,y,z);
    v.mulSet(1/v.length());
    return v;
  }

  float dot(Vec3f v){
    return x*v.x + y*v.y + z*v.z;
  }

}

class Rotation {
  Vec3f axis;
  float angle;

  Rotation(Vec3f axis, float angle){
    this.axis = axis.normalize();
    this.angle = angle;  
  }

  Rotation(Vec3f from, Vec3f to){  
    from = from.normalize();
    to = to.normalize();
    this.axis = from.cross(to);
    this.angle = (float)Math.atan2(axis.length(),from.dot(to));
    this.axis = this.axis.normalize();
  }

  Vec3f multVec(Vec3f v){  //!!!!!!!!!!!!!!!
    return new Vec3f(v.x, v.y, v.z);
  }

  Rotation inverse(){ 
    return new Rotation(axis, -angle);
  }

}

class Vertex {

  Vec3f point;
  int index;
  // Vertex constructor 
  Vertex(Vec3f point, int index){
    this.point = point;
    this.index = index;
  }
}


class Intersection{

  Vertex vert;
  Edge edges[];
  int indices[];
  Polygon poly;
  

  // Intersection constructor 
  Intersection(Vertex vert, Edge edge1, Edge edge2, Polygon poly){
    this.vert = vert;
    // array of indices of segments in corresponding edges
    this.indices = new int[2];
    this.edges = new Edge[2];
    this.edges[0] = edge1;
    this.edges[1] = edge2;
    this.poly = poly;
  }

  // Intersection.setSegment
  void setSegment(Edge edge, int segmentIndex){
    int index = -1;
    if(edge == this.edges[0]){
      index = 0;
    } else if(edge == this.edges[1]){
      index = 1;
    } else {
      //trace('wrong edge in setSegment()');
    }
    this.indices[index] = segmentIndex;
  }
  
  // Intersection.initSegments(){
  void initSegments(){
    float epsilon = 0.00001f;
    Segment s00 = this.edges[0].segm[this.indices[0]];
    Segment s01 = this.edges[0].segm[this.indices[0]+1];
    Segment s10 = this.edges[1].segm[this.indices[1]];
    Segment s11 = this.edges[1].segm[this.indices[1]+1];
    Vec3f p1 = s01.vert[1].point;
    Vec3f p2 = s11.vert[1].point;
    Vec3f p0 = this.vert.point;
    Vec3f p = 
      p0.add((p1.subtract(p0).add(p2.subtract(p0))).multiply(epsilon));
    if(poly.InsidePolygon(p)){
      s00.next[0] = s10;
      s10.next[0] = s00;
      s11.next[1] = s01;
      s01.next[1] = s11;
      //trace('In');
    } else {
      s00.next[0] = s11;
      s11.next[1] = s00;
      s10.next[0] = s01;
      s01.next[1] = s10;
      //trace('Out');    
    }
    //trace(segm00.vert[1].index + '-' + segm01.vert[0].index);
    //trace(segm10.vert[1].index + '-' + segm11.vert[0].index);
  }  
}

class Edge {

  Vertex vert[];
  int icount;
  Segment segm[];
  Vector intersections;
  VectorOfFloat intersLength;

  // Edge constructor 
  Edge(Vertex vert1, Vertex vert2){
    this.vert = new Vertex[2];
    this.vert[0] = vert1;
    this.vert[1] = vert2;
    this.icount = 0;
  }
  
  // Edge.addIntersection()
  void addIntersection(Intersection inters){

    if(this.icount == 0){
      this.intersections = new Vector(); 
      this.intersLength = new VectorOfFloat();  
    }
    
    float len = inters.vert.point.subtract(this.vert[0].point).length();
    
    for(int i = 0; i < this.icount; i++){
      
      if(len < this.intersLength.elementAt(i)){ 
	// new vertex is closer to start
	// we should shift old vertices up
	this.intersections.insertElementAt(inters,i);
	this.intersLength.insertElementAt(len,i);
	this.icount++;
	return;		    
      }
    }
    
    this.intersections.addElement(inters);
    this.intersLength.addElement(len);

    this.icount++;
    
  }
  
  // Edge.makeSegments()
  void makeSegments(){
    this.segm = new Segment[this.icount+1];
    if(this.icount == 0){
      // no intersections
      this.segm[0] = new Segment(this.vert[0],this.vert[1]);
    } else {
      // there are intersections
      Vertex v0 = this.vert[0];
      for(int i = 0; i < this.icount; i++){
	Intersection inters = (Intersection)this.intersections.elementAt(i);
	Vertex v1 = inters.vert;
	this.segm[i] = new Segment(v0,v1);
	inters.setSegment(this, i); 
	v0 = v1;
      }
      this.segm[this.icount] = 
	new Segment(((Intersection)this.
		     intersections.elementAt(this.icount-1)).vert,
		    this.vert[1]);    
    }
  }  
}

  
class Segment {

  Vertex[] vert;
  Segment[] next;
  int index;

  Segment(Vertex vert1, Vertex vert2){
    this.vert = new Vertex[2];
    this.vert[0] = vert1;
    this.vert[1] = vert2;

    this.next = new Segment[2];
    this.next[0] = null;
    this.next[1] = null;  
  }
}

// class to transform nonconvex selfintersecting 3D polygon into 
// set of non-intersecting polygons
public class Polygon {  

  private int last_index = 0;

  Vec3f  vertex[];
  
  Vec3f[] vert_new; // new vertices
  int [] ci_new;    // new coordIndex;

  public void set_vertices(float v[][]){
    vertex = new Vec3f[v.length]; 
    for(int i=0; i < v.length; i++){
      vertex[i] = new Vec3f(v[i][0], v[i][1], v[1][2]);
    }    
      makeIFS();
  }

  public void set_vertices(Vec3f v[]){

    vertex = new Vec3f[v.length]; 
    for(int i=0; i < v.length; i++){
      vertex[i] = v[i];
    }
    makeIFS();
  }

  public int [] getCoordIndex(){
    return ci_new;
  }
  
  public float[][] getVertices(){
    float[][] v = new float[vert_new.length][3];
    for(int i =0; i < v.length; i++){
      v[i][0] = vert_new[i].x;
      v[i][1] = vert_new[i].y;
      v[i][2] = vert_new[i].z;
    }
    return v;
  }

  void makeIFS(){
        
    Vec3f center = new Vec3f(0,0,0);
    for(int i =0; i < vertex.length; i++){
      center.addSet(vertex[i]);
    }
    center.mulSet(1.f/ vertex.length);
    
    for(int i =0; i < vertex.length; i++){
      vertex[i].subSet(center);
    }
    
    Vec3f normal = vertex[0].cross(vertex[1]);
    Rotation rotXY = new Rotation(normal, new Vec3f(0,0,1));
    for(int i = 0; i < vertex.length; i++){
      vertex[i] = rotXY.multVec(vertex[i]);
    }
    
    // create an array of edges
    Edge[] edg = new Edge[vertex.length];
    Vertex vert1 = new Vertex(vertex[vertex.length-1],vertex.length-1);
    for(int i = 0; i < vertex.length; i++){
      Vertex vert2 = new Vertex(vertex[i],i);
      edg[i] = new Edge(vert1, vert2);
      vert1 = vert2;
    }
  
    Vec3f inters = new Vec3f(0,0,0); 
    int icount = 0; // counter of intersections
    // array of intersections 
    Vector intersections = new Vector(); 
    Vector vert_newVector = new Vector();     // vector of Vec3f

    int old_vert_len  = vertex.length;
    for(int i = 0; i < old_vert_len; i++){
      vert_newVector.addElement(vertex[i]); 
    }
    // make all intersections
    for(int j = 0; j < edg.length; j++){
      int imax = edg.length;
      if(j == 0 )
	imax = edg.length-1;
      for(int i = j+2; i < imax; i++ ){
	if(lines_intersect2d(edg[j].vert[0].point, 
			     edg[j].vert[1].point, 
			     edg[i].vert[0].point, 
			     edg[i].vert[1].point, 
			     inters)){
	  Vec3f point = new Vec3f(inters.x, inters.y, inters.z);
	
	  vert_newVector.addElement(point); 
	  Vertex vert = new Vertex(point, old_vert_len + icount);
	  Intersection intersij = new Intersection(vert,edg[i],edg[j],this);
	  edg[i].addIntersection(intersij);
	  edg[j].addIntersection(intersij);
	  intersections.addElement(intersij);
	  icount++;
	}		    
      }		
    }
  
    // make new segments 
    for(int i = 0; i < edg.length; i++){
      edg[i].makeSegments();
    }
    
    // for each segment we need to know both it's neighbours
    
    // first - go through all vertices 
    for(int i = 0; i < edg.length; i++){
      int j = (i+1)%edg.length;
      edg[i].segm[edg[i].icount].next[0] = edg[j].segm[0]; 
      edg[j].segm[0].next[1] = edg[i].segm[edg[i].icount];
    }
    
    // next - go through all intersections 
    for(int i = 0; i < intersections.size(); i++){
      ((Intersection)intersections.elementAt(i)).initSegments();
    }
    
    // make new polygons - closed chains of segments 
    
    // array of segments
    Vector segms = new Vector(); // vector of segments
    int scount = 0;
    for(int i = 0; i < edg.length; i++){
      int ec = edg[i].icount;
	for(int j =0; j <= ec; j++){
	  Segment s = edg[i].segm[j];
	  s.index = scount; 
	  segms.addElement(s); 
	  scount++;
	}    
    }

    last_index = 0;
    int ci_cnt = 0;
    VectorOfInt ci_newVector = new VectorOfInt(); 
    
    Segment first_segm;
    Segment [] segmsArray = new Segment[segms.size()];

    segms.copyInto(segmsArray);
    while((first_segm = getNextUnusedSegment(segmsArray)) != null){
      segmsArray[first_segm.index] = null;
      
      Segment current_segm = first_segm;    
      int current_next = 1;
      ci_newVector.addElement(first_segm.vert[current_next].index); 
      ci_cnt++;
      int i = 0;// to prevent infinite cycle
      while(i++ < segmsArray.length){
	Segment next_segm = current_segm.next[current_next];	
	if(next_segm == first_segm){ // end of chain	
	  ci_newVector.addElement(-1);
	  ci_cnt++;
	  break;
	  
	} else {  // chain continues
	  //trace(next_segm);
	  segmsArray[next_segm.index] = null;
	  
	  if(next_segm.next[0] == current_segm)
	    current_next = 1;
	  else 
	    current_next = 0;
	  ci_newVector.addElement(next_segm.vert[current_next].index);
	  ci_cnt++;
	  current_segm = next_segm; 
	}      
      } 
      
    }
    
    ci_new = new int[ci_newVector.size()];
    ci_newVector.copyInto(ci_new);
    
    
    Rotation rotXY1 = rotXY.inverse();
    vert_new = new Vec3f[vert_newVector.size()];
    vert_newVector.copyInto(vert_new);
    for(int i = 0; i < vert_new.length; i++){
      vert_new[i] = rotXY1.multVec(vert_new[i]);
      vert_new[i].addSet(center);
    }
    
    //ifs.set_coordIndex = ci_new;   
    //ifs.coord.set_point = vert_new;   
    
  }// makeIFS
  
  Segment getNextUnusedSegment(Segment[] segms){
    Segment segm = null;
    for(int i = last_index; i < segms.length; i++){
      segm = segms[i];
      if(segm != null){
	last_index = i+1;
	break;
      }
    }
    return segm;
  }

  boolean lines_intersect2d( 
			     Vec3f p1, Vec3f p2, // First line segment 
			     Vec3f p3, Vec3f p4, // Second line segment
			     Vec3f result 
			     // Output value: point of intersection 
			     )
    {
      float  a1, a2, b1, b2, c1, c2; // Coefficients of line eqns. 
      float r1, r2, r3, r4;         // 'Sign' values
      float denom;     // Intermediate values
      
      // Compute a1, b1, c1, where line joining points 1 and 2
      // is    a1 x  +  b1 y  +  c1  =  0.
      
      a1 = p2.y - p1.y;
      b1 = p1.x - p2.x;
      c1 = p2.x * p1.y - p1.x * p2.y;
      
      // Compute r3 and r4.
      r3 = a1 * p3.x + b1 * p3.y + c1;
      r4 = a1 * p4.x + b1 * p4.y + c1;
      
      // Check signs of r3 and r4.  If both point 3 and point 4 lie on
      // same side of line 1, the line segments do not intersect.
      
      if ( r3 != 0. && r4 != 0. && r3*r4 > 0)
	return false; //( DONT_INTERSECT );
      
      // Compute a2, b2, c2 
      
      a2 = p4.y - p3.y;
      b2 = p3.x - p4.x;
      c2 = p4.x * p3.y - p3.x * p4.y;
      
      // Compute r1 and r2 
      
      r1 = a2 * p1.x + b2 * p1.y + c2;
      r2 = a2 * p2.x + b2 * p2.y + c2;
      
      // Check signs of r1 and r2.  If both point 1 and point 2 lie
      // on same side of second line segment, the line segments do
      // not intersect.
      
      if ( r1 != 0. && r2 != 0. && r1 * r2 > 0)
	return false; // ( DONT_INTERSECT );
      
      //  Line segments intersect: compute intersection point. 
      
      denom = a1 * b2 - a2 * b1;
      if ( denom == 0 )
	return false; // ( COLLINEAR );
      
      result.x = (b1 * c2 - b2 * c1) / denom;  
      result.y = (a2 * c1 - a1 * c2) / denom;
      
      return true;  //( DO_INTERSECT );
    } // lines_intersect 

  float MIN(float x,float y) {
    return (x < y ? x : y);
  }
  float MAX(float x, float y) {
    return (x > y ? x : y);
  }

  boolean InsidePolygon( Vec3f p) {
    return InsidePolygon(vertex,  p);
  }
  
  // determines if point p lies inside of polygon 
  // for selfintersection polygons it will use 
  // even-od rule
  boolean InsidePolygon(Vec3f[] polygon, Vec3f p) {
    
    int cnt = 0;
    
    Vec3f pnt1 = polygon[polygon.length-1];
    
    for (int i=0; i < polygon.length;i++) {
      
      Vec3f pnt2 = polygon[i];    
      if (p.y > MIN(pnt1.y,pnt2.y)) {
	if (p.y <= MAX(pnt1.y,pnt2.y)) {
	  if (p.x <= MAX(pnt1.x,pnt2.x)) {
	    if (pnt1.y != pnt2.y) {
	      double xinters = 
		(p.y-pnt1.y)*(pnt2.x-pnt1.x)/(pnt2.y-pnt1.y)+pnt1.x;
	      if (pnt1.x == pnt2.x || p.x <= xinters)
		cnt++;
	    }
	  }
	}
      }   
      pnt1 = pnt2;
      
    }
    
    if (cnt % 2 == 0)
      return false; //(OUTSIDE);
    else
      return true; //(INSIDE);
  }  
    
public static void main(String[] args){

  /*
  Vec3f v[] = new Vec3f(args.length/2);
  for(int i = 0; i < v.length; i++){
    v[i] = new Vec3f(Float.valueOf(args[2*i]),Float.valueOf(args[2*i+1]),0);
  }
  */
  
  Polygon poly = new Polygon();
  Vec3f v[] = new Vec3f[4];
  v[0] = new Vec3f( 2, 0, 0);
  v[1] = new Vec3f(-1, 1, 0);
  v[2] = new Vec3f( 1,-1, 0);
  v[3] = new Vec3f( 1, 1, 0);
  poly.set_vertices(v);
  /*
  Polygon poly = new Polygon();
  int n = 20;
  int skip = 7;
  Vec3f v[] = new Vec3f[n];
  for(int i = 0; i < n; i++){
    float fi = (float)(i*skip*2*Math.PI/n);
    v[i] = new Vec3f((float)Math.cos(fi), (float)Math.sin(fi), 0.f);
  }

  trace("Start!\n");

  long s = System.currentTimeMillis();
  int m = 100;

  for(int i = 0; i < m; i++){
    poly.set_vertices(v);
  }
  long e = System.currentTimeMillis();

  */
  for(int i = 0; i < poly.vert_new.length; i++){
    trace(" " + i + " : (" +  poly.vert_new[i].x + " " +  
	  poly.vert_new[i].y + " " +  poly.vert_new[i].z + ")\n");
  }
  for(int i = 0; i < poly.ci_new.length; i++){
    trace(" " + poly.ci_new[i]);
    if(poly.ci_new[i] == -1){
      trace("\n");
    }      
  }
  trace("\n");

  //trace("End: " + (e - s)/m + " ms per polygon\n");

}

  static void trace(String s){
    System.out.print(s);
  }
  
}// class polygon 
