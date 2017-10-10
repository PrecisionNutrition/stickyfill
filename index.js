/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'stickyfill',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/stickyfill.min.js');
    this.import('vendor/shims/stickyfill.js');
  },

  treeForVendor(vendorTree) {
    let stickyTree = new Funnel(path.dirname(require.resolve('stickyfilljs')), {
      files: ['stickyfill.min.js'],
    });

    return new MergeTrees([vendorTree, stickyTree]);
  },

  afterInstall() {
    this.addPackageToProject('stickyfilljs');
  },
};
