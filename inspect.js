﻿/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define:true */
define(function (require, exports) {
  'use strict';
  var EX = exports, mf = require('cjs-minifake-pmb'),
    modReg = mf.require.internalCache();

  EX.names = function () {
    var names = [];
    Object.keys(modReg).map(function (key) {
      if (key[0] === ':') { names[names.length] = key.substr(1); }
    });
    return names;
  };

  EX.files = function () {
    return Object.keys(modReg).filter(RegExp.prototype.exec.bind(/:\/{2}/));
  };























  return EX;
});