//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
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

 goog.module('Blockly.Python.rovofic');
 const Python = goog.require('Blockly.Python');

Python.addReservedWords('Math');

const {Align} = goog.require('Blockly.Input');
const {BlockDefinition} = goog.requireType('Blockly.blocks');
const {Msg} = goog.require('Blockly.Msg');
const {createBlockDefinitionsFromJsonArray, defineBlocks} = goog.require('Blockly.common');
/** @suppress {extraRequire} */

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */

Python['rovofic_shield'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("ROVOFIC SHIELD BASIC")
        .appendField(new Blockly.FieldImage("http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};


Python['rovofic_motor_shield_b'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("ROVOFIC MOTION BASIC")
        .appendField(new Blockly.FieldImage("http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["Stop", "stop1"], ["Forward", "forward1"], ["Right", "right1"], ["Left", "left1"], ["Backward", "backward1"]]), "DIRECTION1");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};





Python['rovofic_motor_shield_m'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("ROVOFIC SHIELD MOTOR")
        .appendField(new Blockly.FieldImage("http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["M1", "m1"], ["M2", "m2"] ]), "MOTOR");
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Align.RIGHT)
        .appendField("Speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};





Python['ROVOFIC_Forward'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField(" FORWARD ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Forward']);
  }
};

Python['ROVOFIC_Backward'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField(" BACKWARD ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Backward']);
  }
};

Python['ROVOFIC_Left'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField(" LEFT ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Left']);
  }
};

Python['ROVOFIC_Rigth'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField(" RIGTH ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Right']);
  }
};

Python['ROVOFIC_Stop'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField(" STOP ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Stop']);
  }
};


/////////////////////////////////////////////// BLOQUES TARJETA MOTION LITE ////////////////////////////////

Python['rovofic_motion'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField("ROVOFIC MOTION BASIC")
        .appendField(new Blockly.FieldImage("http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["Stop", "stopm"], ["Forward", "forwardm"], ["Right", "rightm"], ["Left", "leftm"], ["Backward", "backwardm"]]), "DIRECTIONm");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};




Python['rovofic_motor_motion'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField("ROVOFIC MOTION MOTOR")
        .appendField(new Blockly.FieldImage("http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["M1", "m1m"], ["M2", "m2m"] ]), "MOTORm");
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Align.RIGHT)
        .appendField("Speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};



Python['ROVOFIC_m_Forward'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField(" FORWARD MOTION ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Forward']);
  }
};

Python['ROVOFIC_m_Backward'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField(" BACKWARD MOTION ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Backward']);
  }
};

Python['ROVOFIC_m_Left'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField(" LEFT MOTION ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Left']);
  }
};

Python['ROVOFIC_m_Rigth'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField(" RIGTH MOTION ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Right']);
  }
};

Python['ROVOFIC_m_Stop'] = {
      /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField(" STOP MOTION ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Robot Stop']);
  }
};

/////////////////////////// tdrobotica  ///////////////////////////


Python['tdrobotica_motor'] = {
      /**
   ** @this {Block}
   */
  helpUrl: 'http://www.rovofic.com',
  init: function() {
    this.setColour(170);
    this.appendDummyInput()
        .appendField("TDROBOTICA MOTOR")
        .appendField(new Blockly.FielbdImage("http://wikib.seeedstudio.com/images/4/4d/Smotoshield2.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["M1", "m1m"], ["M2", "m2m"] ]), "MOTORm");
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Align.RIGHT)
        .appendField("Speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Drive two brushed DC motors']);
  }
};
defineBlocks(Python);