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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.module('Blockly.libraryBlocks.baserovofic');

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
    'type': 'baserovofic_get_dynamic',
    'message0': '%1',
    'args0': [{
      'type': 'field_',
      'name': 'BASEROVOFIC',
      'variable': '%{BKY_BASEROVOFIC_DEFAULT_NAME}',
    }],
    'output': null,
    'style': 'variable_dynamic_blocks',
    'helpUrl': '%{BKY_BASEROVOFIC_GET_HELPURL}',
    'tooltip': '%{BKY_VARIABLES_GET_TOOLTIP}',
    'extensions': ['contextMenu_baserovoficSetterGetter'],
  },
  // Block for variable setter.
  {
    'type': 'baserovofic_set_dynamic',
    'message0': '%{BKY_BASEROVOFIC_SET}',
    'args0': [
      {
        'type': 'field_',
        'name': 'BASEROVOFIC',
        'variable': '%{BKY_BASEROVOFIC_DEFAULT_NAME}',
      },
      {
        'type': 'input_value',
        'name': 'VALUE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'variable_dynamic_blocks',
    'tooltip': '%{BKY_BASEROVOFIC_SET_TOOLTIP}',
    'helpUrl': '%{BKY_BASEROVOFIC_SET_HELPURL}',
    'extensions': ['contextMenu_baserovoficSetterGetter'],
  },
]);
exports.blocks = blocks;


blocks['baserovofic_delay'] = {
  /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(60);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Delay specific time']);
  }
};


blocks['baserovofic_delay_init'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(" START ")
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Program Start']);
  }
};

blocks['baserovofic_delay_fin'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/delay',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField(" END ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setTooltip(Msg['Program End']);
  }
};

blocks['baserovofic_map'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/map',
  init: function() {
    this.setColour(230);
    this.appendValueInput("NUM", 'Number')
        .setCheck('Number')
        .appendField("Map ");
    this.appendValueInput("DMAX", 'Number')
        .setCheck('Number')
        .appendField("value to [0-");
    this.appendDummyInput()
	      .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Msg['Re-maps a number from [0-1024] to another.']);
  }
};

blocks['inout_buildin_led'] = {
    /**
   ** @this {Block}
   */
   helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
   init: function() {
     this.setColour(190);
     this.appendDummyInput()
	       .appendField("Build-in LED Stat")
	       .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Msg['light or off the build-in LED']);
   }
};

blocks['inout_digital_write'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	      .appendField("DigitalWrite PIN#")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      	.appendField("Stat")
      	.appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Write digital value to a specific Port']);
  }
};

blocks['inout_digital_read'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	      .appendField("DigitalRead PIN#")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Msg['']);
  }
};

blocks['inout_analog_write'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("AnalogWrite PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("NUM", 'Number')
        .setCheck('Number')
        .appendField("value")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Write analog value between 0 and 255 to a specific Port']);
  }
};

blocks['inout_analog_read'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("AnalogRead PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Msg['Return value between 0 and 1024']);
  }
};

blocks['inout_tone'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Reference/Tone',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("Tone PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("NUM", "Number")
        .setCheck("Number")
        .appendField("frequency");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg["Generate audio tones on a pin"]);
  }
};

blocks['inout_notone'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Reference/NoTone',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("No tone PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg["Stop generating a tone on a pin"]);
  }
};

blocks['inout_highlow'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://arduino.cc/en/Reference/Constants',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), 'BOOL')
    this.setOutput(true, 'Boolean');
    this.setTooltip(Msg['']);
  }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
blocks['servo_move'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Align.RIGHT)
        .appendField("Degree (0~180)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['move between 0~180 degree']);
  }
};

blocks['servo_read_degrees'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("Servo")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg", 64, 64))
        .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .setAlign(Align.RIGHT)
        .appendField("Read Degrees")
    this.setOutput(true, 'Number');
    this.setTooltip(Msg['return that degree with the last servo move.']);
  }
};



blocks['serial_print'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Prints data to the console/serial port as human-readable ASCII text.']);
  }
};

blocks['serial_printlnn'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial Print Line New");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Prints data to the console/serialln port as human-readable ASCII text.']);
  }
};

blocks['serial_readd'] = {
    /**
   ** @this {Block}
   */
	helpUrl: 'http://arduino.cc/en/Serial/read',
  init: function() {
    this.setColour(20);
	  this.appendDummyInput("")
      .appendField("Serial read");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Msg['Reads incoming serial data. ']);
  }
};


blocks['serial_available'] = {
    /**
   ** @this {Block}
   */
	helpUrl: 'http://arduino.cc/en/Serial/read',
  init: function() {
    this.setColour(20);
	  this.appendDummyInput("")
      .appendField("Serial Available");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Msg['Reads the stade of serial. ']);
  }
};




blocks['serial1_print'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial 1 Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Prints data to the console/serial port as human-readable ASCII text.']);
  }
};

blocks['serial1_printlnn'] = {
    /**
   ** @this {Block}
   */
  helpUrl: 'http://www.arduino.cc/en/Serial/Println',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial 1 Print Line New");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Msg['Prints data to the console/serialln port as human-readable ASCII text.']);
  }
};

blocks['serial1_readd'] = {
    /**
   ** @this {Block}
   */
	helpUrl: 'http://arduino.cc/en/Serial/read',
  init: function() {
    this.setColour(20);
	  this.appendDummyInput("")
      .appendField("Serial 1 read");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Msg['Reads incoming serial data. ']);
  }
};

blocks['aarduino_setup'] = {
    /**
   ** @this {Block}
   */
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Void Setup");
    this.appendStatementInput("MySetup");
    this.appendDummyInput()
        .appendField("Void Loop");
    this.appendStatementInput("MyLoop");
    this.setTooltip(Msg['']);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/HomePage');
    this.setDeletable(true);
  }
};

defineBlocks(blocks);