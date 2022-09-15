//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.module('Blockly.Arduino.rovofic');
goog.require('Blockly.Arduino');


Blockly.Arduino.rovofic_shield = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 255;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(3,OUTPUT);//M1 A\n"+
  "  pinMode(5,OUTPUT);//M1 B\n"+
  "  pinMode(6,OUTPUT);//M2 A\n"+
  "  pinMode(9,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(3,"+speed+");\n"+
     "  analogWrite(6,"+speed+");\n"+
     "  digitalWrite(5,LOW);\n"+
     "  digitalWrite(9,LOW);\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
    "{\n"+
    "  analogWrite(5,"+speed+");\n"+
    "  analogWrite(6,"+speed+");\n"+
    "  digitalWrite(3,LOW);\n"+
    "  digitalWrite(9,LOW);\n"+
    "}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
    "{\n"+
    "  analogWrite(3,"+speed+");\n"+
    "  analogWrite(9,"+speed+");\n"+
    "  digitalWrite(5,LOW);\n"+
    "  digitalWrite(6,LOW);\n"+
    "}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(5,"+speed+");\n"+
     "  analogWrite(9,"+speed+");\n"+
     "  digitalWrite(3,LOW);\n"+
     "  digitalWrite(6,LOW);\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "digitalWrite(3,LOW);\n"+
     "digitalWrite(5,LOW);\n"+
     "digitalWrite(6,LOW);\n"+
     "digitalWrite(9,LOW);\n"+
     "delay(1000);\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};


Blockly.Arduino.rovofic_motor_shield_b = function() {
  var dropdown_direction1 = this.getFieldValue('DIRECTION1');
  var speed1 = 255;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(3,OUTPUT);//M1 A\n"+
  "  pinMode(5,OUTPUT);//M1 B\n"+
  "  pinMode(6,OUTPUT);//M2 A\n"+
  "  pinMode(9,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_direction1==="forward1"){
    Blockly.Arduino.definitions_['define_forward1'] = "void forward1()\n"+
    "{  analogWrite(3,"+speed1+"); analogWrite(5,0); analogWrite(6,"+speed1+"); analogWrite(9,0); delay(200);\n"+
    "}\n";
    code="forward1();\n";
  } 
  else if (dropdown_direction1==="right1") {
    Blockly.Arduino.definitions_['define_right1'] = "void right1()\n"+
    "{  analogWrite(3,"+speed1+");  analogWrite(5,0); analogWrite(6,0); analogWrite(9,"+speed1+"); delay(75);\n"+
    "}\n\n";
    code="right1();\n";
  } 
  else if (dropdown_direction1==="left1") {
    Blockly.Arduino.definitions_['define_left1'] = "void left1()\n"+
"{\n"+
    "  analogWrite(3,0);\n"+
    "  analogWrite(5,"+speed1+");\n"+
    "  analogWrite(6,0);\n"+
    "  analogWrite(9,"+speed1+");\n"+
    "  delay(75);\n"+
"}\n\n";
    code="left1();\n";
  } else if (dropdown_direction1==="backward1"){
    Blockly.Arduino.definitions_['define_backward1'] = "void backward1()\n"+
"{\n"+
    "  analogWrite(3, 0);\n"+
    "  analogWrite(5,"+speed1+");\n"+
    "  analogWrite(6,"+speed1+");\n"+
    "  analogWrite(9, 0);\n"+
    "  delay(200);\n"+
"}\n\n";
    code="backward1();\n";
  } else if (dropdown_direction1==="stop1"){
    Blockly.Arduino.definitions_['define_stop1'] = "void stop1()\n"+
"{\n"+
     "analogWrite(3,0);\n"+
     "analogWrite(5,0);\n"+
     "analogWrite(6,0);\n"+
     "analogWrite(9,0);\n"+
     "delay(1000);\n"+
"}\n\n"
    code="stop1();\n";
  }
  return code;
};



Blockly.Arduino.rovofic_motor_shield_m = function() {
  var dropdown_motor = this.getFieldValue('MOTOR');
  var speed3 =Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '100';
  
  
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(3,OUTPUT);//M1 A\n"+
  "  pinMode(5,OUTPUT);//M1 B\n"+
  "  pinMode(6,OUTPUT);//M2 A\n"+
  "  pinMode(9,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_motor==="m1"){
    Blockly.Arduino.definitions_['define_m1'] = "int speed3=0;\n"+
    "void motor1(int speed3)\n"+
    "{\n"+
        "  if(speed3>0 && speed3<255)"+
        " { analogWrite(6,speed3); analogWrite(9,0); }\n"+
        " else if(speed3>=255)  "+
        " { analogWrite(6,255); analogWrite(9,0); }\n"+
        " else if(speed3>-255 && speed3<0)  "+
        " { analogWrite(6,0); analogWrite(9,-speed3); }\n"+
        " else if(speed3<=-255)  "+
        " {  analogWrite(6,0); analogWrite(9,255); }\n"+
        " else  "+
        " { analogWrite(6,0);\ analogWrite(9,0); }\n"+
    "}\n\n"

    code="motor1("+speed3+");\n";
  } 
  else if (dropdown_motor==="m2"){
    Blockly.Arduino.definitions_['define_m2'] = "int speed4=0;\n"+
    "void motor2(int speed4)\n"+
    "{\n"+
        "  if(speed4>0 && speed4<255)"+
        " { analogWrite(3,speed4);analogWrite(5,0); }\n"+
        " else if(speed4>=255)  "+
        " { analogWrite(3,255); analogWrite(5,0); }\n"+
        " else if(speed4>-255 && speed4<0)  "+
        " { analogWrite(3,0); analogWrite(5,-speed4); }\n"+
        " else if(speed4<=-255)  "+
        " { analogWrite(3,0); analogWrite(5,255); }\n"+
        " else  "+
        " {  analogWrite(3,0);  analogWrite(5,0); }\n"+
    "}\n";
    
    code="motor2("+speed3+");\n";
  }
  return code;
};





Blockly.Arduino.ROVOFIC_Forward = function() {
  //var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 255);analogWrite(9, 0);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 255);analogWrite(9, 0);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_Backward = function() {
  //var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 0);analogWrite(9, 255);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 0);analogWrite(9, 255);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_Left = function() {
  //var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 255);analogWrite(9, 0);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 0);analogWrite(9, 255);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_Rigth = function() {
  //var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 0);analogWrite(9, 255);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 255);analogWrite(9, 0);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_Stop = function() {
  var code = 'analogWrite(3, 0);analogWrite(5, 0);analogWrite(6, 0);analogWrite(9, 0);delay(1000);\n';
  return code;
};


/////////////////////////////////////////////// BLOQUES TARJETA MOTION LITE ////////////////////////////////


Blockly.Arduino.rovofic_motion = function() {
  var dropdown_direction1 = this.getFieldValue('DIRECTIONm');
  var speed1 = 255;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(5,OUTPUT);//M1 A\n"+
  "  pinMode(10,OUTPUT);//M1 B\n"+
  "  pinMode(6,OUTPUT);//M2 A\n"+
  "  pinMode(9,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_direction1==="forwardm"){
    Blockly.Arduino.definitions_['define_forwardm'] = "void forwardm()\n"+
    "{  "+
      "analogWrite(5,0); analogWrite(10,"+speed1+");\n"+
      "analogWrite(6,0); analogWrite(9,"+speed1+");\n"+
    "}\n";
    code="forwardm();\n";
  } 
  else if (dropdown_direction1==="rightm") {
    Blockly.Arduino.definitions_['define_rightm'] = "void rightm()\n"+
    "{  "+
      "analogWrite(5,"+speed1+");  analogWrite(10,0);\n"+
      "analogWrite(6,0); analogWrite(9,"+speed1+");\n"+
    "}\n\n";
    code="rightm();\n";
  } 
  else if (dropdown_direction1==="leftm") {
    Blockly.Arduino.definitions_['define_leftm'] = "void leftm()\n"+
"{\n"+
    "  analogWrite(5,0);  analogWrite(10,"+speed1+");\n"+
    "  analogWrite(6,0);  analogWrite(9,"+speed1+");\n"+
    "  delay(75);\n"+
"}\n\n";
    code="leftm();\n";
  } else if (dropdown_direction1==="backwardm"){
    Blockly.Arduino.definitions_['define_backwardm'] = "void backwardm()\n"+
"{\n"+
    "  analogWrite(5, "+speed1+");  analogWrite(10,0);\n"+
    "  analogWrite(6,"+speed1+");  analogWrite(9, 0);\n"+
"}\n\n";
    code="backwardm();\n";
  } else if (dropdown_direction1==="stopm"){
    Blockly.Arduino.definitions_['define_stopm'] = "void stopm()\n"+
"{\n"+
     "analogWrite(5,0);  analogWrite(10,0);\n"+
     "analogWrite(6,0);  analogWrite(9,0);\n"+
"}\n\n"
    code="stopm();\n";
  }
  return code;
};



Blockly.Arduino.rovofic_motor_motion = function() {
  var dropdown_motor = this.getFieldValue('MOTORm');
  var speed3 =Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '100';
  
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(5,OUTPUT);//M1 A\n"+
  "  pinMode(10,OUTPUT);//M1 B\n"+
  "  pinMode(6,OUTPUT);//M2 A\n"+
  "  pinMode(9,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_motor==="m1m"){
    Blockly.Arduino.definitions_['define_m1'] = "int speed3=0;\n"+
    "void motor1(int speed3)\n"+
    "{\n"+
        "  if(speed3>0 && speed3<255)"+
        " { analogWrite(6,speed3); analogWrite(9,0); }\n"+
        " else if(speed3>=255)  "+
        " { analogWrite(6,255); analogWrite(9,0); }\n"+
        " else if(speed3>-255 && speed3<0)  "+
        " { analogWrite(6,0); analogWrite(9,-speed3); }\n"+
        " else if(speed3<=-255)  "+
        " {  analogWrite(6,0); analogWrite(9,255); }\n"+
        " else  "+
        " { analogWrite(6,0); analogWrite(9,0); }\n"+
    "}\n\n"

    code="motor1("+speed3+");\n";
  } 
  else if (dropdown_motor==="m2m"){
    Blockly.Arduino.definitions_['define_m2'] = "int speed4=0;\n"+
    "void motor2(int speed4)\n"+
    "{\n"+
        "  if(speed4>0 && speed4<255)"+
        " { analogWrite(5,0);analogWrite(10,speed4); }\n"+
        " else if(speed4>=255)  "+
        " { analogWrite(5,255); analogWrite(10,0); }\n"+
        " else if(speed4>-255 && speed4<0)  "+
        " { analogWrite(5,-speed4); analogWrite(10,0); }\n"+
        " else if(speed4<=-255)  "+
        " { analogWrite(5,0); analogWrite(10,255); }\n"+
        " else  "+
        " {  analogWrite(5,0);  analogWrite(10,0); }\n"+
    "}\n";
    
    code="motor2("+speed3+");\n";
  }
  return code;
};


Blockly.Arduino.ROVOFIC_m_Forward = function() {
  //var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 255);analogWrite(9, 0);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(5, 0);analogWrite(10, 255);analogWrite(6, 0);analogWrite(9, 255);delay(300);  analogWrite(5,0);analogWrite(10,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_m_Backward = function() {
  //var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 0);analogWrite(9, 255);delay(300);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(5, 255);analogWrite(10, 0);analogWrite(6, 255);analogWrite(9, 0);delay(300);  analogWrite(5,0);analogWrite(10,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_m_Left = function() {
  //var code = 'analogWrite(3, 255);analogWrite(5, 0);analogWrite(6, 255);analogWrite(9, 0);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(5, 255);analogWrite(10, 0);analogWrite(6, 0);analogWrite(9, 255);delay(100);  analogWrite(5,0);analogWrite(10,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_m_Rigth = function() {
  //var code = 'analogWrite(3, 0);analogWrite(5, 255);analogWrite(6, 0);analogWrite(9, 255);delay(100);  analogWrite(3,0);analogWrite(5,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  var code = 'analogWrite(5, 0);analogWrite(10, 255);analogWrite(6, 255);analogWrite(9, 0);delay(100);  analogWrite(5,0);analogWrite(10,0);analogWrite(6,0);analogWrite(9,0);delay(1000);\n';
  return code;
};

Blockly.Arduino.ROVOFIC_m_Stop = function() {
  var code = 'analogWrite(5, 0);analogWrite(10, 0);analogWrite(6, 0);analogWrite(9, 0);delay(1000);\n';
  return code;
};


////////////////////////////////////////// tdrobotica ////////////////////////////////////////

Blockly.Arduino.tdrobotica_motor = function() {
  var dropdown_motor = this.getFieldValue('MOTORtd');
  var speed5 =Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '100';
  
  Blockly.Arduino.setups_["setup_motor"] =
  "  pinMode(7,OUTPUT);//M1 A\n"+
  "  pinMode(8,OUTPUT);//M1 B\n"+
  "  pinMode(5,OUTPUT);//M2 A\n"+
  "  pinMode(6,OUTPUT);//M2 B\n";
  var code = "";
  if(dropdown_motor==="m1m"){
    Blockly.Arduino.definitions_['define_m1'] = "int speed5=0;\n"+
    "void motor1(int speed5)\n"+
    "{\n"+
        "  if(speed5>0 && speed5<255)"+
        " { analogWrite(6,speed5); digitalWrite(8,HIGH); }\n"+
        " else if(speed5>=255)  "+
        " { analogWrite(6,255); digitalWrite(8,HIGH); }\n"+
        " else if(speed5>-255 && speed5<0)  "+
        " { analogWrite(6,-speed5); digitalWrite(8,LOW); }\n"+
        " else if(speed5<=-255)  "+
        " {  analogWrite(6,0); digitalWrite(8,LOW); }\n"+
        " else  "+
        " { analogWrite(6,0); digitalWrite(8,LOW) }\n"+
    "}\n\n"

    code="motor1("+speed5+");\n";
  } 
  else if (dropdown_motor==="m2m"){
    Blockly.Arduino.definitions_['define_m2'] = "int speed6=0;\n"+
    "void motor2(int speed6)\n"+
    "{\n"+
        "  if(speed6>0 && speed6<255)"+
        " { analogWrite(5,0);analogWrite(10,speed6); }\n"+
        " else if(speed6>=255)  "+
        " { analogWrite(5,255); analogWrite(10,0); }\n"+
        " else if(speed6>-255 && speed6<0)  "+
        " { analogWrite(5,-speed6); analogWrite(10,0); }\n"+
        " else if(speed6<=-255)  "+
        " { analogWrite(5,0); analogWrite(10,255); }\n"+
        " else  "+
        " {  analogWrite(5,0);  analogWrite(10,0); }\n"+
    "}\n";
    
    code="motor2("+speed5+");\n";
  }
  return code;
};