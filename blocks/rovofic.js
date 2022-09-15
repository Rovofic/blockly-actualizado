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

 goog.module('Blockly.libraryBlocks.rovofic');

goog.require('Blockly.Blocks');

const {Align} = goog.require('Blockly.Input');
const {BlockDefinition} = goog.requireType('Blockly.blocks');
const {Msg} = goog.require('Blockly.Msg');
const {createBlockDefinitionsFromJsonArray, defineBlocks} = goog.require('Blockly.common');
/** @suppress {extraRequire} */

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 const blocks = createBlockDefinitionsFromJsonArray([
  // Block for variable getter.
  {
    'type': 'rovofic_get_dynamic',
    'message0': '%1',
    'args0': [{
      'type': 'field_',
      'name': 'ROVOFIC',
      'variable': '%{BKY_ROVOFIC_DEFAULT_NAME}',
    }],
    'output': null,
    'style': 'variable_dynamic_blocks',
    'helpUrl': '%{BKY_ROVOFIC_GET_HELPURL}',
    'tooltip': '%{BKY_VARIABLES_GET_TOOLTIP}',
    'extensions': ['contextMenu_rovoficSetterGetter'],
  },
  // Block for variable setter.
  {
    'type': 'rovofic_set_dynamic',
    'message0': '%{BKY_ROVOFIC_SET}',
    'args0': [
      {
        'type': 'field_',
        'name': 'ROVOFIC',
        'variable': '%{BKY_ROVOFIC_DEFAULT_NAME}',
      },
      {
        'type': 'input_value',
        'name': 'VALUE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'variable_dynamic_blocks',
    'tooltip': '%{BKY_ROVOFIC_SET_TOOLTIP}',
    'helpUrl': '%{BKY_ROVOFIC_SET_HELPURL}',
    'extensions': ['contextMenu_rovoficSetterGetter'],
  },
]);
exports.blocks = blocks;




blocks['rovofic_shield'] = {
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


blocks['rovofic_motor_shield_b'] = {
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





blocks['rovofic_motor_shield_m'] = {
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





blocks['ROVOFIC_Forward'] = {
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

blocks['ROVOFIC_Backward'] = {
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

blocks['ROVOFIC_Left'] = {
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

blocks['ROVOFIC_Rigth'] = {
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

blocks['ROVOFIC_Stop'] = {
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

blocks['rovofic_motion'] = {
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




blocks['rovofic_motor_motion'] = {
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



blocks['ROVOFIC_m_Forward'] = {
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

blocks['ROVOFIC_m_Backward'] = {
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

blocks['ROVOFIC_m_Left'] = {
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

blocks['ROVOFIC_m_Rigth'] = {
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

blocks['ROVOFIC_m_Stop'] = {
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


blocks['tdrobotica_motor'] = {
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
defineBlocks(blocks);