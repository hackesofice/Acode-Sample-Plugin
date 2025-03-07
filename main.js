"use strict";
(() => {
  var e = {
    id: "acode.MyPluginName",
    name: "MyPlyginName",
    main: "main.js",
    version: "1.0.0",
    readme: "readme.md",
    icon: "icon.png",
    files: [],
    minVersionCode: 290,
    license: "MIT",
    changelogs: "changelogs.md",
    keywords: [],
    price: 0,
    author: {
      name: "YouName",
      email: "YourEmail",
      github: "YourGithubUrl"
    }
  };
  var a = class {
    async init() {
      // your main plugin code will be hear this is the main function where you can add your code snippets 
    }
    async destroy() {
      // if you don't know whats it then leave it as it is it would not affect your plugin but its necessary to install plugin 
    }
  };

  // the code below is a setup snippet if you don't know don't do anything just work on init() function thats your workplace 
  if (window.acode) {
    let i = new a;
    acode.setPluginInit(e.id, async (n, o, {
      cacheFileUrl: s,
      cacheFile: d
    }) => {
      n.endsWith("/") || (n += "/"), i.baseUrl = n, await i.init(o, d, s)
    }), acode.setPluginUnmount(e.id, () => {
      i.destroy()
    })
  }
})();
