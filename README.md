# Declaimer 
Hey There Future Developer 👋 if you are new in Acode plugin Development like me let's work Together. This Repository is focused on building a Acode simple plugin by using minimum files or complexity. Always remember its for beginners.

# Necessary Files *
1. `main.js`
2. `plugin.json`
3. `changelog.md`
4. `icon.png`
5. `readme.md`


# Files Explanation 

**1. Main.js**
well This is The most important file which contains our main plugin code. in this file we have some important functions and variables which are necessary for a successful install

1. `init()` function
2. `destroy()` function
3. `setPluginInit()` function
4. `setPluginUnmount()` function 

All the above listed Function are the mendetory functions `setPluginInit()` and `setPluginUnmount()` are defined inside a class named `acode` so we can call them using `acode.FunctionName()` These are Acode's inbuilt function and we just need to call them with actual arguments if you wanna explore more about those functions just click <a href=""> me </a> but if you are bigner 
I'll suggest you to use the files instead of exploring Documentations to avoid any confusion build a basic plugin and then explore according to the problems.


**2. plugin.json**

this is also called as an manifest file and we are have to pass some fields like -

```
{
  "name": "plugin name",
  "id": "pluginId",
  "main": "main",
  "readme": "readme.md",
  "icon": "icon.png",
  "version": "1.0.0"
  "author": {
          nam,GitHub,etc
       }
}
```

Acode uses this file to get required file's for showing the plugin window or installing the plugin 

**3. changelogs.md**

this is a md file or a document where a developer needs to describe the new features or whats new on later versions also you can lef it empty but its necessary to add this file

**4. icon.png**

this is a png image acode usages this image on plugin page basically this is an icon which is used by the  acode self to show your plugin on plugin store or a separate page 

**5. readme.md**
this file is used for showing information on plugin installation page these all details comes from this file its a necessary file and you need to describe hear why your plugin is useful how can a user use or anything you wanna show you to the user's 
