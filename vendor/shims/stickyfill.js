(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Stickyfill'],
      __esModule: true,
    };
  }

  define('stickyfill', [], vendorModule);
})();
