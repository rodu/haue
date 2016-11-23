define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Project name</a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\">Dashboard</a></li>\n          <li><a href=\"#\">Settings</a></li>\n          <li><a href=\"#\">Profile</a></li>\n          <li><a href=\"#\">Help</a></li>\n        </ul>\n        <form class=\"navbar-form navbar-right\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n        </form>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-2 sidebar\">\n        <ul class=\"nav nav-sidebar\">\n          <li class=\"active\"><a href=\"#\">Overview <span class=\"sr-only\">(current)</span></a></li>\n          <li><a href=\"#\">Living Room</a></li>\n          <li><a href=\"#\">Kitchen</a></li>\n          <li><a href=\"#\">Bedroom</a></li>\n          <li><a href=\"#\">Hobby Room</a></li>\n          <li><a href=\"#\">Garden Patio</a></li>\n        </ul>\n        <!-- <ul class=\"nav nav-sidebar\">\n          <li><a href=\"\">Nav item</a></li>\n          <li><a href=\"\">Nav item again</a></li>\n          <li><a href=\"\">One more nav</a></li>\n          <li><a href=\"\">Another nav item</a></li>\n          <li><a href=\"\">More navigation</a></li>\n        </ul> -->\n      </div>\n      <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n        <h1>${message}</h1>\n\n        <h1 class=\"page-header\">Dashboard</h1>\n\n        <div class=\"row placeholders\">\n          <div class=\"col-xs-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-xs-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-xs-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-xs-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n        </div>\n\n        <h2 class=\"sub-header\">Section title</h2>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1,001</td>\n                <td>Lorem</td>\n                <td>ipsum</td>\n                <td>dolor</td>\n                <td>sit</td>\n              </tr>\n              <tr>\n                <td>1,002</td>\n                <td>amet</td>\n                <td>consectetur</td>\n                <td>adipiscing</td>\n                <td>elit</td>\n              </tr>\n              <tr>\n                <td>1,003</td>\n                <td>Integer</td>\n                <td>nec</td>\n                <td>odio</td>\n                <td>Praesent</td>\n              </tr>\n              <tr>\n                <td>1,003</td>\n                <td>libero</td>\n                <td>Sed</td>\n                <td>cursus</td>\n                <td>ante</td>\n              </tr>\n              <tr>\n                <td>1,004</td>\n                <td>dapibus</td>\n                <td>diam</td>\n                <td>Sed</td>\n                <td>nisi</td>\n              </tr>\n              <tr>\n                <td>1,005</td>\n                <td>Nulla</td>\n                <td>quis</td>\n                <td>sem</td>\n                <td>at</td>\n              </tr>\n              <tr>\n                <td>1,006</td>\n                <td>nibh</td>\n                <td>elementum</td>\n                <td>imperdiet</td>\n                <td>Duis</td>\n              </tr>\n              <tr>\n                <td>1,007</td>\n                <td>sagittis</td>\n                <td>ipsum</td>\n                <td>Praesent</td>\n                <td>mauris</td>\n              </tr>\n              <tr>\n                <td>1,008</td>\n                <td>Fusce</td>\n                <td>nec</td>\n                <td>tellus</td>\n                <td>sed</td>\n              </tr>\n              <tr>\n                <td>1,009</td>\n                <td>augue</td>\n                <td>semper</td>\n                <td>porta</td>\n                <td>Mauris</td>\n              </tr>\n              <tr>\n                <td>1,010</td>\n                <td>massa</td>\n                <td>Vestibulum</td>\n                <td>lacinia</td>\n                <td>arcu</td>\n              </tr>\n              <tr>\n                <td>1,011</td>\n                <td>eget</td>\n                <td>nulla</td>\n                <td>Class</td>\n                <td>aptent</td>\n              </tr>\n              <tr>\n                <td>1,012</td>\n                <td>taciti</td>\n                <td>sociosqu</td>\n                <td>ad</td>\n                <td>litora</td>\n              </tr>\n              <tr>\n                <td>1,013</td>\n                <td>torquent</td>\n                <td>per</td>\n                <td>conubia</td>\n                <td>nostra</td>\n              </tr>\n              <tr>\n                <td>1,014</td>\n                <td>per</td>\n                <td>inceptos</td>\n                <td>himenaeos</td>\n                <td>Curabitur</td>\n              </tr>\n              <tr>\n                <td>1,015</td>\n                <td>sodales</td>\n                <td>ligula</td>\n                <td>in</td>\n                <td>libero</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map