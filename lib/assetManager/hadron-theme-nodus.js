

var self = module.exports = {
  __module: {
    provides: {
      "assetManager/use_scripts": {},
      "assetManager/use_stylesheets": {},
      "assetManager/register_assets_dir": {after: ['assetManager/bootstrap', 'assetManager/hadron']},
      "assetManager/register_views_dir": {}
    },
    properties: {
      fontAwesome: 'assetManager/font-awesome'
    }
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  },

  use_scripts: function() {
  },

  use_stylesheets: function() {
    return {
      default: [
        self.fontAwesome.exports.stylesheets.all,
        "http://fonts.googleapis.com/css?family=Lato:300,400,700",
        "styles/main.less"
      ],
      admin: [
        "styles/admin.less"
      ]
    };
  }
};