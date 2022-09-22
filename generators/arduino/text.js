/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for text blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.module('Blockly.Arduino.texts');

const JavaScript = goog.require('Blockly.Arduino');
const {NameType} = goog.require('Blockly.Names');


Arduino.text = function() {
  // Text value.
  var code = Arduino.quote_(this.getFieldValue('TEXT'));
  return [code, Arduino.ORDER_ATOMIC];
};


Arduino.text_text = function() {
  // Text value.
  var code = Arduino.quote_(this.getFieldValue('TEXT'));
  return [code, Arduino.ORDER_ATOMIC];
};