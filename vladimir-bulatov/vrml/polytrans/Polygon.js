var last_index;
var last_order;
var ci8_1;
var ci8_2;
var ci8_3;
var ci8_4;
var ci10_1;
var ci10_2;
var ci10_3;
var ci10_4;
var ci10_5;
var ci10_6;
var ci10_7;
var ci10_8;
var ci10_9;
var ci10_10;

function initialize(){
  last_order = 0;
  init();
}

function set_vertices(v,t){
  vertices = v;
  vertex = new MFVec3f();
  init();
}

function init(){
  for(var i=0; i < vertices.length; i++){
    vertex[i] = vertices[i];
  }


  if(vertex.length == 3){
    makeIFS3();
  } else if (vertex.length == 4){
    makeIFS4();    
  } else if (vertex.length == 6){
    makeIFS6();    
  } else if (vertex.length == 8){
    if(last_order != vertex.length){
      init8();
    }
    makeIFS8();    
  } else if (vertex.length == 10){
    if(last_order != vertex.length){
      init10();
    }
    makeIFS10();    
  } else {
    makeIFS();
  }
}

function init8(){
  last_order = 8;

  ci8_1 = new MFInt32();
  for(var i = 0; i < 8; i++){
    ci8_1[i] = i;
  }    
  ci8_1[8] = -1;

  ci8_2 = new MFInt32();

  var c = 0;      
  ci8_2[c++]=8;ci8_2[c++]=9;ci8_2[c++]=10;ci8_2[c++]=11;ci8_2[c++]=-1;

  ci8_2[c++]=0;ci8_2[c++]=1;ci8_2[c++]=8;ci8_2[c++]=-1;
  ci8_2[c++]=6;ci8_2[c++]=7;ci8_2[c++]=9;ci8_2[c++]=-1;
  ci8_2[c++]=4;ci8_2[c++]=5;ci8_2[c++]=10;ci8_2[c++]=-1;
  ci8_2[c++]=2;ci8_2[c++]=3;ci8_2[c++]=11;ci8_2[c++]=-1;


  ci8_3 = new MFInt32();
  var c = 0;      
  ci8_3[c++]=8;ci8_3[c++]=9;ci8_3[c++]=10;ci8_3[c++]=11;ci8_3[c++]=-1;
  
  ci8_3[c++]=13;ci8_3[c++]=11;ci8_3[c++]=21;ci8_3[c++]=-1;
  ci8_3[c++]=14;ci8_3[c++]=10;ci8_3[c++]=22;ci8_3[c++]=-1;
  ci8_3[c++]=15;ci8_3[c++]=9;ci8_3[c++]=23;ci8_3[c++]=-1;
  
  ci8_3[c++]=12; ci8_3[c++]=8; ci8_3[c++]=20; ci8_3[c++]=-1;
  ci8_3[c++]=7; ci8_3[c++]=20; ci8_3[c++]=17; ci8_3[c++]=-1;
  ci8_3[c++]=4; ci8_3[c++]=17; ci8_3[c++]=13; ci8_3[c++]=-1;
  ci8_3[c++]=1; ci8_3[c++]=21; ci8_3[c++]=18; ci8_3[c++]=-1;
  ci8_3[c++]=6; ci8_3[c++]=18; ci8_3[c++]=14; ci8_3[c++]=-1;
  ci8_3[c++]=3; ci8_3[c++]=22; ci8_3[c++]=19; ci8_3[c++]=-1;
  ci8_3[c++]=0; ci8_3[c++]=19; ci8_3[c++]=15; ci8_3[c++]=-1;
  ci8_3[c++]=5; ci8_3[c++]=23; ci8_3[c++]=16; ci8_3[c++]=-1;
  ci8_3[c++]=2; ci8_3[c++]=16; ci8_3[c++]=12; ci8_3[c++]=-1;
  

  ci8_4 = new MFInt32();
  var c = 0;      
  ci8_4[c++]=12;ci8_4[c++]=20;ci8_4[c++]=15;ci8_4[c++]=23;
  ci8_4[c++]=14;ci8_4[c++]=22;ci8_4[c++]=13;ci8_4[c++]=21; ci8_4[c++]=-1;
  
  ci8_4[c++]=2;ci8_4[c++]=16;ci8_4[c++]=20;ci8_4[c++]=8;ci8_4[c++]=-1;
  ci8_4[c++]=7;ci8_4[c++]=8 ;ci8_4[c++]=12;ci8_4[c++]=17;ci8_4[c++]=-1;
  ci8_4[c++]=4;ci8_4[c++]=17;ci8_4[c++]=21;ci8_4[c++]=11;ci8_4[c++]=-1;
  ci8_4[c++]=1;ci8_4[c++]=11;ci8_4[c++]=13;ci8_4[c++]=18;ci8_4[c++]=-1;
  ci8_4[c++]=6;ci8_4[c++]=18;ci8_4[c++]=22;ci8_4[c++]=10;ci8_4[c++]=-1;
  ci8_4[c++]=3;ci8_4[c++]=10;ci8_4[c++]=14;ci8_4[c++]=19;ci8_4[c++]=-1;
  ci8_4[c++]=0;ci8_4[c++]=19;ci8_4[c++]=23;ci8_4[c++]=9;ci8_4[c++]=-1;
  ci8_4[c++]=5;ci8_4[c++]=9;ci8_4[c++]=15;ci8_4[c++]=16;ci8_4[c++]=-1;
  
}

function init10(){
  last_order = 10;

  ci10_1 = new MFInt32();
  for(var i=0; i < 10; i++){
    ci10_1[i] = i;
  }    
  ci10_1[10] = -1;

  ci10_2 = new MFInt32();
  var c = 0;      
  ci10_2[c++]=1;ci10_2[c++]=0;ci10_2[c++]=10;ci10_2[c++]=-1;
  ci10_2[c++]=3;ci10_2[c++]=2;ci10_2[c++]=11;ci10_2[c++]=-1;
  ci10_2[c++]=5;ci10_2[c++]=4;ci10_2[c++]=12;ci10_2[c++]=-1;
  ci10_2[c++]=7;ci10_2[c++]=6;ci10_2[c++]=13;ci10_2[c++]=-1;
  ci10_2[c++]=9;ci10_2[c++]=8;ci10_2[c++]=14;ci10_2[c++]=-1;
  ci10_2[c++]=10;ci10_2[c++]=11;ci10_2[c++]=12;ci10_2[c++]=13;ci10_2[c++]=14;ci10_2[c++]=-1;
  
  ci10_3 = new MFInt32();
  var c = 0;      
  ci10_3[c++]=10;ci10_3[c++]=11;ci10_3[c++]=12;ci10_3[c++]=13;ci10_3[c++]=14;ci10_3[c++]=-1;

  ci10_3[c++]=10;ci10_3[c++]=16;ci10_3[c++]=30;ci10_3[c++]=20;ci10_3[c++]=15;ci10_3[c++]=-1;
  ci10_3[c++]=11;ci10_3[c++]=15;ci10_3[c++]=34;ci10_3[c++]=24;ci10_3[c++]=19;ci10_3[c++]=-1;
  ci10_3[c++]=12;ci10_3[c++]=19;ci10_3[c++]=33;ci10_3[c++]=23;ci10_3[c++]=18;ci10_3[c++]=-1;
  ci10_3[c++]=13;ci10_3[c++]=18;ci10_3[c++]=32;ci10_3[c++]=22;ci10_3[c++]=17;ci10_3[c++]=-1;
  ci10_3[c++]=14;ci10_3[c++]=17;ci10_3[c++]=31;ci10_3[c++]=21;ci10_3[c++]=16;ci10_3[c++]=-1;
  
  ci10_3[c++]=3;ci10_3[c++]=25;ci10_3[c++]=20;ci10_3[c++]=-1;
  ci10_3[c++]=8;ci10_3[c++]=30;ci10_3[c++]=26;ci10_3[c++]=-1;
  ci10_3[c++]=1;ci10_3[c++]=26;ci10_3[c++]=21;ci10_3[c++]=-1;
  ci10_3[c++]=6;ci10_3[c++]=31;ci10_3[c++]=27;ci10_3[c++]=-1;
  ci10_3[c++]=9;ci10_3[c++]=27;ci10_3[c++]=22;ci10_3[c++]=-1;
  ci10_3[c++]=4;ci10_3[c++]=32;ci10_3[c++]=28;ci10_3[c++]=-1;
  ci10_3[c++]=7;ci10_3[c++]=28;ci10_3[c++]=23;ci10_3[c++]=-1;
  ci10_3[c++]=2;ci10_3[c++]=33;ci10_3[c++]=29;ci10_3[c++]=-1;
  ci10_3[c++]=5;ci10_3[c++]=29;ci10_3[c++]=24;ci10_3[c++]=-1;
  ci10_3[c++]=0;ci10_3[c++]=34;ci10_3[c++]=25;ci10_3[c++]=-1;
	
  ci10_4 = new MFInt32();
  var c = 0;
  ci10_4[c++]=3;ci10_4[c++]=25;ci10_4[c++]=20;ci10_4[c++]=-1;
  ci10_4[c++]=8;ci10_4[c++]=30;ci10_4[c++]=26;ci10_4[c++]=-1;
  ci10_4[c++]=1;ci10_4[c++]=26;ci10_4[c++]=21;ci10_4[c++]=-1;
  ci10_4[c++]=6;ci10_4[c++]=31;ci10_4[c++]=27;ci10_4[c++]=-1;
  ci10_4[c++]=9;ci10_4[c++]=27;ci10_4[c++]=22;ci10_4[c++]=-1;
  ci10_4[c++]=4;ci10_4[c++]=32;ci10_4[c++]=28;ci10_4[c++]=-1;
  ci10_4[c++]=7;ci10_4[c++]=28;ci10_4[c++]=23;ci10_4[c++]=-1;
  ci10_4[c++]=2;ci10_4[c++]=33;ci10_4[c++]=29;ci10_4[c++]=-1;
  ci10_4[c++]=5;ci10_4[c++]=29;ci10_4[c++]=24;ci10_4[c++]=-1;
  ci10_4[c++]=0;ci10_4[c++]=34;ci10_4[c++]=25;ci10_4[c++]=-1;
  
  ci10_4[c++]=18;ci10_4[c++]=30;ci10_4[c++]=20;ci10_4[c++]=-1;
  ci10_4[c++]=19;ci10_4[c++]=31;ci10_4[c++]=21;ci10_4[c++]=-1;
  ci10_4[c++]=15;ci10_4[c++]=32;ci10_4[c++]=22;ci10_4[c++]=-1;
  ci10_4[c++]=16;ci10_4[c++]=33;ci10_4[c++]=23;ci10_4[c++]=-1;
  ci10_4[c++]=17;ci10_4[c++]=34;ci10_4[c++]=24;ci10_4[c++]=-1;
  
  ci10_4[c++]=15;ci10_4[c++]=11;ci10_4[c++]=10;ci10_4[c++]=-1;
  ci10_4[c++]=16;ci10_4[c++]=10;ci10_4[c++]=14;ci10_4[c++]=-1;
  ci10_4[c++]=17;ci10_4[c++]=14;ci10_4[c++]=13;ci10_4[c++]=-1;
  ci10_4[c++]=18;ci10_4[c++]=13;ci10_4[c++]=12;ci10_4[c++]=-1;
  ci10_4[c++]=19;ci10_4[c++]=12;ci10_4[c++]=11;ci10_4[c++]=-1;	
  
  ci10_5 = new MFInt32();
  var c = 0;
  ci10_5[c++]=3;ci10_5[c++]=25;ci10_5[c++]=30;ci10_5[c++]=18;ci10_5[c++]=-1;
  ci10_5[c++]=1;ci10_5[c++]=26;ci10_5[c++]=31;ci10_5[c++]=19;ci10_5[c++]=-1;
  ci10_5[c++]=9;ci10_5[c++]=27;ci10_5[c++]=32;ci10_5[c++]=15;ci10_5[c++]=-1;
  ci10_5[c++]=7;ci10_5[c++]=28;ci10_5[c++]=33;ci10_5[c++]=16;ci10_5[c++]=-1;
  ci10_5[c++]=5;ci10_5[c++]=29;ci10_5[c++]=34;ci10_5[c++]=17;ci10_5[c++]=-1;
  ci10_5[c++]=8;ci10_5[c++]=26;ci10_5[c++]=20;ci10_5[c++]=18;ci10_5[c++]=-1;
  ci10_5[c++]=6;ci10_5[c++]=27;ci10_5[c++]=21;ci10_5[c++]=19;ci10_5[c++]=-1;
  ci10_5[c++]=4;ci10_5[c++]=28;ci10_5[c++]=22;ci10_5[c++]=15;ci10_5[c++]=-1;
  ci10_5[c++]=2;ci10_5[c++]=29;ci10_5[c++]=23;ci10_5[c++]=16;ci10_5[c++]=-1;
  ci10_5[c++]=0;ci10_5[c++]=25;ci10_5[c++]=24;ci10_5[c++]=17;ci10_5[c++]=-1;
  
  ci10_5[c++]=13;ci10_5[c++]=12;ci10_5[c++]=20;ci10_5[c++]=30;ci10_5[c++]=-1;
  ci10_5[c++]=12;ci10_5[c++]=11;ci10_5[c++]=21;ci10_5[c++]=31;ci10_5[c++]=-1;
  ci10_5[c++]=11;ci10_5[c++]=10;ci10_5[c++]=22;ci10_5[c++]=32;ci10_5[c++]=-1;
  ci10_5[c++]=10;ci10_5[c++]=14;ci10_5[c++]=23;ci10_5[c++]=33;ci10_5[c++]=-1;
  ci10_5[c++]=14;ci10_5[c++]=13;ci10_5[c++]=24;ci10_5[c++]=34;ci10_5[c++]=-1;
  
  ci10_7 = new MFInt32();
  var c = 0;
  ci10_7[c++]=6;ci10_7[c++]=5;ci10_7[c++]=15;ci10_7[c++]=-1;
  ci10_7[c++]=2;ci10_7[c++]=1;ci10_7[c++]=16;ci10_7[c++]=-1;
  ci10_7[c++]=8;ci10_7[c++]=7;ci10_7[c++]=17;ci10_7[c++]=-1;
  ci10_7[c++]=4;ci10_7[c++]=3;ci10_7[c++]=18;ci10_7[c++]=-1;
  ci10_7[c++]=0;ci10_7[c++]=9;ci10_7[c++]=19;ci10_7[c++]=-1;
  
  ci10_7[c++]=15;ci10_7[c++]=11;ci10_7[c++]=10;ci10_7[c++]=-1;
  ci10_7[c++]=16;ci10_7[c++]=12;ci10_7[c++]=11;ci10_7[c++]=-1;
  ci10_7[c++]=17;ci10_7[c++]=13;ci10_7[c++]=12;ci10_7[c++]=-1;
  ci10_7[c++]=18;ci10_7[c++]=14;ci10_7[c++]=13;ci10_7[c++]=-1;
  ci10_7[c++]=19;ci10_7[c++]=10;ci10_7[c++]=14;ci10_7[c++]=-1;
  
  ci10_8 = new MFInt32();
  var c = 0;
  ci10_8[c++]=10;ci10_8[c++]=11;ci10_8[c++]=12;ci10_8[c++]=13;ci10_8[c++]=14;ci10_8[c++]=-1;
  
  ci10_8[c++]=8;ci10_8[c++]=7;ci10_8[c++]=15;ci10_8[c++]=10;ci10_8[c++]=19;ci10_8[c++]=-1;
  ci10_8[c++]=4;ci10_8[c++]=3;ci10_8[c++]=16;ci10_8[c++]=11;ci10_8[c++]=15;ci10_8[c++]=-1;
  ci10_8[c++]=0;ci10_8[c++]=9;ci10_8[c++]=17;ci10_8[c++]=12;ci10_8[c++]=16;ci10_8[c++]=-1;
  ci10_8[c++]=6;ci10_8[c++]=5;ci10_8[c++]=18;ci10_8[c++]=13;ci10_8[c++]=17;ci10_8[c++]=-1;
  ci10_8[c++]=2;ci10_8[c++]=1;ci10_8[c++]=19;ci10_8[c++]=14;ci10_8[c++]=18;ci10_8[c++]=-1;
  
  ci10_9 = new MFInt32();
  var c = 0;
  ci10_9[c++]=10;ci10_9[c++]=11;ci10_9[c++]=12;ci10_9[c++]=13;ci10_9[c++]=14;ci10_9[c++]=-1;
  
  ci10_9[c++]=20;ci10_9[c++]=10;ci10_9[c++]=30;ci10_9[c++]=-1;
  ci10_9[c++]=21;ci10_9[c++]=14;ci10_9[c++]=31;ci10_9[c++]=-1;
  ci10_9[c++]=22;ci10_9[c++]=13;ci10_9[c++]=32;ci10_9[c++]=-1;
  ci10_9[c++]=23;ci10_9[c++]=12;ci10_9[c++]=33;ci10_9[c++]=-1;
  ci10_9[c++]=24;ci10_9[c++]=11;ci10_9[c++]=34;ci10_9[c++]=-1;
  
  ci10_9[c++]=4;ci10_9[c++]=25;ci10_9[c++]=20;ci10_9[c++]=-1;
  ci10_9[c++]=8;ci10_9[c++]=26;ci10_9[c++]=21;ci10_9[c++]=-1;
  ci10_9[c++]=2;ci10_9[c++]=27;ci10_9[c++]=22;ci10_9[c++]=-1;
  ci10_9[c++]=6;ci10_9[c++]=28;ci10_9[c++]=23;ci10_9[c++]=-1;
  ci10_9[c++]=0;ci10_9[c++]=29;ci10_9[c++]=24;ci10_9[c++]=-1;
  
  ci10_9[c++]=7;ci10_9[c++]=34;ci10_9[c++]=25;ci10_9[c++]=-1;
  ci10_9[c++]=1;ci10_9[c++]=30;ci10_9[c++]=26;ci10_9[c++]=-1;
  ci10_9[c++]=5;ci10_9[c++]=31;ci10_9[c++]=27;ci10_9[c++]=-1;
  ci10_9[c++]=9;ci10_9[c++]=32;ci10_9[c++]=28;ci10_9[c++]=-1;
  ci10_9[c++]=3;ci10_9[c++]=33;ci10_9[c++]=29;ci10_9[c++]=-1;
  
  ci10_10 = new MFInt32();
  var c = 0;
  ci10_10[c++]=20;ci10_10[c++]=30;ci10_10[c++]=24;ci10_10[c++]=34;ci10_10[c++]=23;ci10_10[c++]=33;
  ci10_10[c++]=22;ci10_10[c++]=32;ci10_10[c++]=21;ci10_10[c++]=31;ci10_10[c++]=-1;
  
  ci10_10[c++]=4;ci10_10[c++]=25;ci10_10[c++]=30;ci10_10[c++]=10;ci10_10[c++]=-1;
  ci10_10[c++]=8;ci10_10[c++]=26;ci10_10[c++]=31;ci10_10[c++]=14;ci10_10[c++]=-1;
  ci10_10[c++]=2;ci10_10[c++]=27;ci10_10[c++]=32;ci10_10[c++]=13;ci10_10[c++]=-1;
  ci10_10[c++]=6;ci10_10[c++]=28;ci10_10[c++]=33;ci10_10[c++]=12;ci10_10[c++]=-1;
  ci10_10[c++]=0;ci10_10[c++]=29;ci10_10[c++]=34;ci10_10[c++]=11;ci10_10[c++]=-1;
  
  ci10_10[c++]=7;ci10_10[c++]=11;ci10_10[c++]=24;ci10_10[c++]=25;ci10_10[c++]=-1;
  ci10_10[c++]=1;ci10_10[c++]=10;ci10_10[c++]=20;ci10_10[c++]=26;ci10_10[c++]=-1;
  ci10_10[c++]=5;ci10_10[c++]=14;ci10_10[c++]=21;ci10_10[c++]=27;ci10_10[c++]=-1;
  ci10_10[c++]=9;ci10_10[c++]=13;ci10_10[c++]=22;ci10_10[c++]=28;ci10_10[c++]=-1;
  ci10_10[c++]=3;ci10_10[c++]=12;ci10_10[c++]=23;ci10_10[c++]=29;ci10_10[c++]=-1;
  
  ci10_6 = new MFInt32();
  var c = 0;
  ci10_6[c++]=5;ci10_6[c++]=6;ci10_6[c++]=11;ci10_6[c++]=10;ci10_6[c++]=-1;
  ci10_6[c++]=1;ci10_6[c++]=2;ci10_6[c++]=12;ci10_6[c++]=11;ci10_6[c++]=-1;
  ci10_6[c++]=7;ci10_6[c++]=8;ci10_6[c++]=13;ci10_6[c++]=12;ci10_6[c++]=-1;
  ci10_6[c++]=3;ci10_6[c++]=4;ci10_6[c++]=14;ci10_6[c++]=13;ci10_6[c++]=-1;
  ci10_6[c++]=9;ci10_6[c++]=0;ci10_6[c++]=10;ci10_6[c++]=14;ci10_6[c++]=-1;

}

function makeIFS3(){
  var ci = new SFInt32();
  ci[0] = 0;  ci[1] = 1;  ci[2] = 2;  ci[3] = -1;
  ifs.set_coordIndex = ci;   
  ifs.coord.set_point = vertex;   
}

function makeIFS4(){
  var ci = new MFInt32();
  var res = new SFVec3f(0,0,0);  
  if(intersection3D(vertex[0],vertex[1],vertex[2],vertex[3],res)){
    vertex[4] = res;
    ci[0] = 0;ci[1] = 4; ci[2] = 3; ci[3] = -1;
    ci[4] = 1;ci[5] = 4; ci[6] = 2; ci[7] = -1;    
  } else if(intersection3D(vertex[0],vertex[3],vertex[1],vertex[2],res)){
    vertex[4] = res;
    ci[0] = 0;ci[1] = 1; ci[2] = 4; ci[3] = -1;
    ci[4] = 3;ci[5] = 2; ci[6] = 4; ci[7] = -1;    
  } else {
    ci[0] = 0;ci[1] = 1; ci[2] = 2; ci[3] = 3; ci[4] = -1;   
  }
  ifs.set_coordIndex = ci;   
  ifs.coord.set_point = vertex;   
}

function makeIFS6(){
  var ci = new MFInt32();
  var res6 = new SFVec3f(0,0,0);  
  var res7 = new SFVec3f(0,0,0);  
  var res8 = new SFVec3f(0,0,0);  
  if(intersection3D(vertex[0],vertex[1],vertex[2],vertex[3],res6)){
    vertex[6] = res6;
    intersection3D(vertex[0],vertex[1],vertex[4],vertex[5],res7);
    vertex[7] = res7;
    intersection3D(vertex[2],vertex[3],vertex[4],vertex[5],res8);
    vertex[8] = res8;
    if(res6.subtract(vertex[0]).length() < res7.subtract(vertex[0]).length()){
      // case 2 
      var c = 0;
      ci[c++] = 0;ci[c++] = 5; ci[c++] = 8; ci[c++] = 6;ci[c++] = -1;
      ci[c++] = 3;ci[c++] = 6; ci[c++] = 7; ci[c++] = 4;ci[c++] = -1;
      ci[c++] = 1;ci[c++] = 7; ci[c++] = 8; ci[c++] = 2;ci[c++] = -1;
    } else {
      // case 4
      var c = 0;
      ci[c++] = 0;ci[c++] = 5; ci[c++] = 7; ci[c++] = -1;
      ci[c++] = 2;ci[c++] = 1; ci[c++] = 6; ci[c++] = -1;
      ci[c++] = 4;ci[c++] = 3; ci[c++] = 8; ci[c++] = -1;
      ci[c++] = 7;ci[c++] = 6; ci[c++] = 8; ci[c++] = -1;
    }
  } else if(intersection3D(vertex[0],vertex[5],vertex[3],vertex[4],res6)){
    vertex[6] = res6;
    intersection3D(vertex[0],vertex[5],vertex[1],vertex[2],res7);
    vertex[7] = res7;
    intersection3D(vertex[3],vertex[4],vertex[1],vertex[2],res8);
    vertex[8] = res8;
    if(res6.subtract(vertex[0]).length() < res7.subtract(vertex[0]).length()){
      // case 3
      var c = 0;
      ci[c++] = 0;ci[c++] = 1; ci[c++] = 8; ci[c++] = 6;ci[c++] = -1;
      ci[c++] = 2;ci[c++] = 3; ci[c++] = 6; ci[c++] = 7;ci[c++] = -1;
      ci[c++] = 4;ci[c++] = 5; ci[c++] = 7; ci[c++] = 8;ci[c++] = -1;      
    } else {
      // case 5
      var c = 0;
      ci[c++] = 0;ci[c++] = 1; ci[c++] = 7; ci[c++] = -1;
      ci[c++] = 2;ci[c++] = 3; ci[c++] = 8; ci[c++] = -1;
      ci[c++] = 4;ci[c++] = 5; ci[c++] = 6; ci[c++] = -1;
      ci[c++] = 6;ci[c++] = 8; ci[c++] = 7; ci[c++] = -1;
    }
  } else {
    // case 1 
    for(var i=0; i < 6; i++){
      ci[i] = i;
    }
    ci[6] = -1;
  }
  ifs.set_coordIndex = ci;   
  ifs.coord.set_point = vertex;   
}

function shift_vertices(v){
  var v0 = new SFVec3f(v[0].x,v[0].y,v[0].z);
  var n = v.length-1;
  for(var i = 0; i < n; i++){
    v[i] = v[i+1];
  }
  v[n] = v0;
}

function dist(v1,v2){
  return v1.subtract(v2).length();
}

function makeIFS8(){
  var EPS = 0.01;
  var ci = new MFInt32();
  var cosphi = vertex[1].subtract(vertex[0]).normalize().dot(
                   vertex[2].subtract(vertex[1]).normalize());
  var v = vertex;
  var axis = v[2].subtract(v[1]).cross(v[0].subtract(v[1]));
  var rot1 = new SFRotation(axis,Math.PI/2);
  var rot_1 = new SFRotation(axis,-Math.PI/2);
  if(cosphi > 0){
    //case 1
    ci = ci8_1;
  } else {
    // cases 2, 3, 4
    if(v[1].subtract(v[0]).length() > v[2].subtract(v[1]).length()){
      shift_vertices(v);
    }
    // initialize necessary vertices
    for(var i = 8; i < 24; i+= 4){
      v[i] = new SFVec3f(0,0,0);
    }
    intersection3D(v[1],v[2],v[0],v[7],v[8]);

    if(v[8].subtract(v[0]).length() < v[8].subtract(v[7]).length()){
      // case 2
      
      for(var i = 0; i < 4; i++){
	v[i+9] = rot1.multVec(v[i+8]);
      }
      
      ci = ci8_2;

    } else {
      // case 3 4      
      intersection3D(v[1],v[2],v[4],v[5],v[12]);
      intersection3D(v[3],v[2],v[4],v[5],v[16]);
      intersection3D(v[0],v[7],v[4],v[5],v[20]);
      for(var i = 0; i < 3; i++){
	v[i+9] = rot1.multVec(v[i+8]);
	v[i+13] = rot_1.multVec(v[i+12]);
	v[i+17] = rot_1.multVec(v[i+16]);
	v[i+21] = rot_1.multVec(v[i+20]);
      }
      if( dist(v[12],v[5]) < dist(v[20],v[5])){
	// case 3
	ci = ci8_3;
      } else {
	// case 4
	ci = ci8_4;
      }      
    }
  }
  ifs.set_coordIndex = ci;   
  ifs.coord.set_point = vertex;   
}

function makeIFS10(){
  var EPS = 0.01;
  var ci = new MFInt32();
  var cosphi = vertex[1].subtract(vertex[0]).normalize().dot(
                   vertex[2].subtract(vertex[1]).normalize());
  var v = vertex;
  var axis = v[9].subtract(v[0]).cross(v[1].subtract(v[0]));
  var rot1 = new SFRotation(axis,2*Math.PI/5);
  var rot_1 = new SFRotation(axis,-2*Math.PI/5);
  if(Math.abs(cosphi-Math.cos(Math.PI/5)) < EPS){
    //case 1
    ci = ci10_1;

  } else if(Math.abs(cosphi-Math.cos(4*Math.PI/5)) < EPS){
    // cases 2, 3, 4, 5
    if(v[1].subtract(v[0]).length() > v[2].subtract(v[1]).length()){
      shift_vertices(v);
    }
    // initialize necessary vertices
    for(var i = 10; i < 35; i+= 5){
      v[i] = new SFVec3f(0,0,0);
    }
    intersection3D(v[1],v[2],v[0],v[9],v[10]);
    if(!intersection3D(v[0],v[1],v[3],v[4],v[20])){
      // case 2           
      for(var i = 0; i < 4; i++){
	v[i+11] = rot1.multVec(v[i+10]);
      }
      ci = ci10_2;
    } else {
      // case 3 4 5 
      intersection3D(v[0],v[1],v[3],v[2],v[25]);
      intersection3D(v[0],v[1],v[7],v[8],v[30]);
      intersection3D(v[0],v[9],v[3],v[4],v[15]);
      for(var i = 0; i < 4; i++){
	v[i+11] = rot1.multVec(v[i+10]);
	v[i+16] = rot_1.multVec(v[i+15]);
	v[i+21] = rot_1.multVec(v[i+20]);
	v[i+26] = rot_1.multVec(v[i+25]);
	v[i+31] = rot_1.multVec(v[i+30]);
      }

      if(v[0].subtract(v[10]).length() < v[9].subtract(v[10]).length()){
	// case 3
	ci = ci10_3;
	
      } else if(v[20].subtract(v[0]).length() < v[30].subtract(v[0]).length()){
	// case 4
	ci = ci10_4;	
      } else {
	// case 5
	ci = ci10_5;
      }
    }

  } else if(Math.abs(cosphi-Math.cos(3*Math.PI/5)) < EPS){
    // cases 7,8,9,10
    if(v[1].subtract(v[0]).length() < v[2].subtract(v[1]).length()){
      shift_vertices(v);
    }
    // initialize necessary vertices
    for(var i = 10; i < 35; i += 5){
      v[i] = new SFVec3f(0,0,0);
    }

    intersection3D(v[0],v[1],v[5],v[4],v[10]);
    if(intersection3D(v[5],v[4],v[6],v[7],v[15])){
      // case 7 8
      for(var i = 0; i < 4; i++){
	v[i+11] = rot1.multVec(v[i+10]);
	v[i+16] = rot1.multVec(v[i+15]);
      }
      if(v[5].subtract(v[15]).length() < v[15].subtract(v[4]).length()){
	// case 7	
	ci = ci10_7;

      } else {
	// case 8
	ci = ci10_8;
      }
    } else {
      // case 9 10
      intersection3D(v[5],v[4],v[7],v[8],v[20]);
      intersection3D(v[4],v[3],v[7],v[8],v[25]);
      intersection3D(v[0],v[1],v[7],v[8],v[30]);

      for(var i = 0; i < 4; i++){
	v[i+11] = rot1.multVec(v[i+10]);
	v[i+21] = rot_1.multVec(v[i+20]);
	v[i+26] = rot_1.multVec(v[i+25]);
	v[i+31] = rot_1.multVec(v[i+30]);
      }

      if(v[20].subtract(v[7]).length() < v[30].subtract(v[7]).length()){
	// case 9
	ci = ci10_9;

      } else {
	// case 10
	ci = ci10_10
      }
    }      
  } else if(Math.abs(cosphi-Math.cos(2*Math.PI/5)) < EPS){
    // case 6    
    if(v[1].subtract(v[0]).length() < v[2].subtract(v[1]).length()){
      shift_vertices(v);
    }
    for(var i = 10; i < 15; i++){
      v[i] = new SFVec3f(0,0,0);      
    }
    intersection3D(v[0],v[1],v[4],v[5],v[10]);
    for(var i = 11; i < 15; i++){
      v[i] = rot_1.multVec(v[i-1]);
    }
    ci = ci10_6;
  } 

  ifs.set_coordIndex = ci;   
  ifs.coord.set_point = vertex;   
}

function makeIFS(){
  var center = new SFVec3f(0,0,0);
  for(var i =0; i < vertex.length; i++){
    center.x += vertex[i].x;
    center.y += vertex[i].y;
    center.z += vertex[i].z;
  }
  center.x /= vertex.length;
  center.y /= vertex.length;
  center.z /= vertex.length;
  
  for(var i =0; i < vertex.length; i++){
    vertex[i].x -= center.x;
    vertex[i].y -= center.y;
    vertex[i].z -= center.z;
  }
  
  var normal = vertex[0].cross(vertex[1]);
  var rotXY = new SFRotation(normal, new SFVec3f(0,0,1));
  for(var i = 0; i < vertex.length; i++){
    vertex[i] = rotXY.multVec(vertex[i]);
  }
  
  // create an array of edges
  // every edge has reference to both vertices 
  // and every Vertex remember it's index in array of vertices
  var edg = new Array();
  var vert_new = new MFVec3f(); // array of new vertices
  old_vert_len  = vertex.length;
  var vert1 = new Vertex(vertex[vertex.length-1],vertex.length-1);
  for(var i = 0; i < old_vert_len; i++){
    var vert2 = new Vertex(vertex[i],i);
    edg[i] = new Edge(vert1, vert2);
    vert1 = vert2;
    vert_new[i] = vertex[i]; 
  }
  
  // counter of intersections	
  var icount = 0; 
  // array of intersections 
  var intersections = new Array(); 
  // temporary vector to store intersections
  var inters = new SFVec3f(0,0,0);	    

  // make all intersections
  // this is possible to optimize in case of symmetric polygon
  for(var j = 0; j < edg.length; j++){
    var imax = edg.length;
    if(j == 0 )
      imax = edg.length-1;
    for(var i = j+2; i < imax; i++ ){
      if(lines_intersect2d(edg[j].vert[0].point, 
			   edg[j].vert[1].point, 
			   edg[i].vert[0].point, 
			   edg[i].vert[1].point, 
			   inters)){
	var point = new SFVec3f(inters.x, inters.y, inters.z);
	
	vert_new[old_vert_len + icount] = point; 
	var vert = new Vertex(point, old_vert_len + icount);
	var intersij = new Intersection(vert,edg[i],edg[j]);
	edg[i].addIntersection(intersij);
	edg[j].addIntersection(intersij);
	intersections[icount] = intersij;
	icount++;
	//trace('inters(' + i + ', ' + j + '): ' + inters );
      }		    
    }		
  }
  
  // make new segments for every edge
  for(var i = 0; i < edg.length; i++){
    edg[i].makeSegments();
  }
  
  // put all segments in one array
  var segms = new Array();
  var scount = 0;
  
  var flag = makeFlag(vertex, edg[0].segm[0]);
  for(var i = 0; i < edg.length; i++){
    // number of segments in current edge
    var ec = edg[i].icount 
    for(var j =0; j <= ec; j++){
      var s = segms[scount] = edg[i].segm[j];
      s.index = scount; 
      s.flag = flag; 
      scount++;
      //trace('s:'+s.vert[0].index + ' ' + s.vert[1].index);
      if(j < ec ){ 
	// at every intersection flag changes sign, 
	// but not at the end of edge
	flag = -flag;
      }
    }    
  }
  /*
  for(var i=0; i< segms.length; i++){
    trace('f: '+segms[i].flag);
  }
  */
  // for each segment we need to know both it's neighbours

  // first - go through all vertices 
  for(var i = 0; i < edg.length; i++){
    var j = (i+1)%edg.length;
    edg[i].segm[edg[i].icount].next[0] = edg[j].segm[0]; 
    edg[j].segm[0].next[1] = edg[i].segm[edg[i].icount];
  }

  // next - go through all intersections 
  for(var i = 0; i < intersections.length; i++){
    intersections[i].initSegments();
  }

  /*
  for(var i = 0; i < segms.length; i++){
    trace(segms[i].index + ' ' + segms[i].next[0]+' ' + segms[i].next[1]);
  }
  */


  // make new polygons - closed chains of segments 
  last_index = 0;
  var ci_cnt = 0;
  var ci_new = new MFInt32();
  
  var first_segm;
  while((first_segm = getNextUnusedSegment(segms)) != null){

    segms[first_segm.index] = null;
    
    var current_segm = first_segm;    
    var current_next = 1;
    ci_new[ci_cnt++] = first_segm.vert[current_next].index;
    var i = 0;// to prevent infinite cycle
    while(i++ < segms.length){
      var next_segm = current_segm.next[current_next];
      
      if(next_segm == first_segm){ // end of chain
	
	ci_new[ci_cnt++] = -1;
	break;
	
      } else {  // chain continues
	//trace(next_segm);
	segms[next_segm.index] = null;
	
	if(next_segm.next[0] == current_segm)
	  current_next = 1;
	else 
	  current_next = 0;
	ci_new[ci_cnt++] = next_segm.vert[current_next].index;
	current_segm = next_segm; 
      }      
    } 
    
  }
  
  //trace(ci_new);  

  
  // we need to rotate polygon back into 3D 
  var rotXY1 = rotXY.inverse();
  for(var i = 0; i < vert_new.length; i++){
    vert_new[i] = rotXY1.multVec(vert_new[i]);
    vert_new[i].x += center.x;
    vert_new[i].y += center.y;
    vert_new[i].z += center.z;
  }
  
  ifs.set_coordIndex = ci_new;   
  ifs.coord.set_point = vert_new;   
  
}// makeIFS

function getNextUnusedSegment(segms){
  var segm = null;
  for(var i = last_index; i < segms.length; i++){
    segm = segms[i];
    if(segm != null){
      last_index = i+1;
      break;
    }
  }
  return segm;
}

// calculates, from which side of given segment is Inside area 
// of polygon
// 1 - Inside from right 
// 0 - Inside from left 
function makeFlag(poly, segment){
  var epsilon = 0.00001;
  var p0 = segment.vert[0].point;
  var p1 = segment.vert[1].point;   
  var ph = p0.add(p1).multiply(0.5).
    add(new SFVec3f((p1.y-p0.y)*epsilon,-(p1.x-p0.x)*epsilon,0));
  if( InsidePolygon(vertex, ph)){
    return 1;
  } else {
    return -1;
  }
}

// Segment constructor 
// argumants are Vertex 
function Segment(vert1, vert2){
  this.vert = new Array();
  this.vert[0] = vert1;
  this.vert[1] = vert2;
  this.next = new Array();
  this.next[0] = null;
  this.next[1] = null;  
}

// Edge.addIntersection()
function addIntersection(inters){
  if(this.icount == 0){
    this.intersections = new Array();
    this.intersLength = new Array();
  }
  var len = inters.vert.point.subtract(this.vert[0].point).length();
  
  for(var i = 0; i < this.icount; i++){
    
    if(len < this.intersLength[i]){ 
      // new vertex is closer to start, 
      // therefore we should shift old vertices up
      for(var j = this.icount; j > i; j--){
	this.intersLength[j] = this.intersLength[j-1];
	this.intersections[j] = this.intersections[j-1];
      }
      this.intersLength[i] = len;
      this.intersections[i] = inters;
      this.icount++;
      return;		    
    }
  }
  
  this.intersLength[this.icount] = len;
  this.intersections[this.icount++] = inters;
  
}

// Edge.makeSegments()
function makeSegments(){
  this.segm = new Array();
  if(this.icount == 0){
    // no intersections
    this.segm[0] = new Segment(this.vert[0],this.vert[1]);
  } else {
    // there are intersections
    var v0 = this.vert[0];
    for(var i = 0; i < this.icount; i++){
      var v1 = this.intersections[i].vert;
      this.segm[i] = new Segment(v0,v1);
      this.intersections[i].setSegment(this, i); 
      v0 = v1;
    }
    this.segm[this.icount] = new Segment(this.intersections[this.icount-1].vert,
					 this.vert[1]);    
  }
}

// Edge constructor 
function Edge(vert1, vert2){
  this.vert = new Array();
  this.vert[0] = vert1;
  this.vert[1] = vert2;
  this.icount = 0;
  this.addIntersection = addIntersection;
  this.makeSegments = makeSegments;
}

// Intersection.setSegment
function setSegment(edge, segmentIndex){
  var index = -1;
  if(edge == this.edges[0]){
    index = 0;
  } else if(edge == this.edges[1]){
    index = 1;
  } else {
    trace('wrong edge in setSegment()');
  }
  this.indices[index] = segmentIndex;
}

// Intersection.initSegments(){
function initSegments(){

  var s00 = this.edges[0].segm[this.indices[0]];
  var s01 = this.edges[0].segm[this.indices[0]+1];
  var s10 = this.edges[1].segm[this.indices[1]];
  var s11 = this.edges[1].segm[this.indices[1]+1];
  var p0 = s01.vert[1].point;
  var p1 = s11.vert[1].point;
  var p = this.vert.point;
  if(p1.subtract(p).cross(p0.subtract(p)).z * s00.flag < 0){
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

function initSegments_old_and_slow(){
  var epsilon = 0.00001;
  var s00 = this.edges[0].segm[this.indices[0]];
  var s01 = this.edges[0].segm[this.indices[0]+1];
  var s10 = this.edges[1].segm[this.indices[1]];
  var s11 = this.edges[1].segm[this.indices[1]+1];
  var p1 = s01.vert[1].point;
  var p2 = s11.vert[1].point;
  var p0 = this.vert.point;
  var shift = (p1.subtract(p0).add(p2.subtract(p0))).multiply(epsilon);
  var p = p0.add(shift);
  if(InsidePolygon(vertex,p)){
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

// Intersection constructor 
function Intersection(vert, edge1, edge2){
  this.vert = vert;
  // array of indices of segments in corresponding edges
  this.indices = new Array(); 
  this.edges = new Array();
  this.edges[0] = edge1;
  this.edges[1] = edge2;
  this.setSegment = setSegment;
  this.initSegments = initSegments;
}

// Vertex constructor 
function Vertex(point, index){
  this.point = point;
  this.index = index;
}

function showProps(obj, obj_name) {
  var result = '';
  for (var i in obj){
    result += obj_name + '.' + i + ' = ' + obj[i] + '\n';
  }
  return result;
}

function lines_intersect2d( 
			   p1, p2, // ends of first segment 
			   p3, p4, // ends of second line segment
			   result // Output value: point of intersection 
			   )
{
  var a1, a2, b1, b2, c1, c2; // Coefficients of line eqns. 
  var r1, r2, r3, r4;         // 'Sign' values
  var denom;     // Intermediate values
  
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
    return FALSE; //( DONT_INTERSECT );
  
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
    return FALSE; // ( DONT_INTERSECT );
  
  //  Line segments intersect: compute intersection point. 
  
  denom = a1 * b2 - a2 * b1;
  if ( denom == 0 )
    return FALSE; // ( COLLINEAR );
  
  result.x = (b1 * c2 - b2 * c1) / denom;  
  result.y = (a2 * c1 - a1 * c2) / denom;
  
  return TRUE;  //( DO_INTERSECT );
} // lines_intersect 

function  MIN(x,y) {
  return (x < y ? x : y);
}
function MAX(x,y) {
  return (x > y ? x : y);
}

// determines if point p lies inside of polygon 
// for selfintersection polygons it will use 
// even-od rule
function InsidePolygon(polygon, p)
{
  var cnt = 0;
  
  var pnt1 = polygon[polygon.length-1];
  
  for (var i=0; i < polygon.length;i++) {
    
    var pnt2 = polygon[i];    
    if (p.y > MIN(pnt1.y,pnt2.y)) {
      if (p.y <= MAX(pnt1.y,pnt2.y)) {
	if (p.x <= MAX(pnt1.x,pnt2.x)) {
	  if (pnt1.y != pnt2.y) {
	    var xinters = 
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
    return FALSE; //(OUTSIDE);
  else
    return TRUE; //(INSIDE);
}

// intersection of two segments (p0,p1) and (q0,q1)
function intersection3D(p0,p1,q0,q1, res){
  
  var c = p0.add(p1).add(q0).add(q1);
  var pq = p0.add(p1).subtract(q0).subtract(q1);	    
  var p = p0.subtract(p1);
  var q = q0.subtract(q1);
  
  var QQ = q.dot(q);
  var PP = p.dot(p);
  var PQP = pq.dot(p);
  var PQ = p.dot(q);
  var PQQ = pq.dot(q);
  var r = p.multiply(PQP*QQ-PQ*PQQ).add(q.multiply(-PP*PQQ+PQ*PQP));
  var denom = (PQ*PQ-PP*QQ);
  if(Math.abs(denom) < 0.001){
    return false;
  }
  r = r.multiply(1/denom);
  c = c.add(r);
  c = c.multiply(0.25);
  res.x = c.x;
  res.y = c.y;
  res.z = c.z;
  if(c.subtract(q0).dot(c.subtract(q1)) < 0. && 
     c.subtract(p0).dot(c.subtract(p1)) < 0.)
    return true;
  else 
    return false;
  return c;
}
		
