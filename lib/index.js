'use strict';

/*!
 * FFCreatorLite - a lightweight and flexible short video production library.
 * Copyright(c) TNFE Team
 *
 * Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

const FFCreator = require('./creator');
const FFContext = require('./core/context');
const FFCreatorCenter = require('./core/center');
const FFText = require('./node/text');
const FFImage = require('./node/image');
const FFVideo = require('./node/video');
const FFScene = require('./node/scene');
const FFBackGround = require('./node/background');

module.exports = {
  FFCreator,
  FFImage,
  FFText,
  FFVideo,
  FFScene,
  FFContext,
  FFBackGround,
  FFCreatorCenter,
};
