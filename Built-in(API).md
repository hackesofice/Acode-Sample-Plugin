# Acode Plugin Development: Built-in Methods Overview

This guide provides an overview of the key global objects and their built-in methods available in Acode for plugin development. These APIs allow you to interact with the editor, manage files, handle settings, and more.

## Table of Contents

1. [editorManager](#1-editormanager)
2. [acode](#2-acode)
3. [actionStack](#3-actionstack)
4. [appSettings](#4-appsettings)
5. [Toast and Storage](#5-toast-and-storage)
6. [Native APIs: FsOperation and WcPage](#6-native-apis-fsoperation-and-wcpage)
7. [Additional Built-in Modules](#7-additional-built-in-modules)
8. [Final Note](#8-final-note)

---

## 1. `editorManager`

The `editorManager` object allows you to interact with the current editor and its files.

**Properties & Methods:**

- **`editor`**  
  Reference to the Ace editor instance.

- **`addNewFile(filename, options)`**  
  Creates a new file in the workspace. Options can include initial text, whether the file is unsaved, and more.

- **`getFile(test, type)`**  
  Retrieves a file by its id, URI, name, or other criteria.

- **`switchFile(id)`**  
  Switches the active tab to the specified file.

- **`activeFile`**  
  Contains the current file’s object, including properties such as `name` and `uri` or `path`.

- **`hasUnsavedFiles()`**  
  Returns the count of unsaved files.

- **`files`**  
  An array of all open files.

- **`setSubText(file)`**  
  Sets a subtitle (e.g., the file path) in the editor’s header.

- **`container`**  
  The HTML container (a div element) that hosts the editor.

- **`state`**  
  A string representing whether the editor is focused or blurred.

- **`on(event, listener)`** / **`off(event, listener)`**  
  Attach or remove listeners for events such as `"switch-file"`, `"rename-file"`, `"save-file"`, and `"file-content-changed"`.

- **`emit(event, ...args)`**  
  Manually trigger an event (useful for custom behaviors).

---

## 2. `acode`

The global `acode` object provides several methods and utility functions to work with commands, plugin lifecycle, formatting, and file operations.

**Methods:**

- **`exec(command, value)`**  
  Execute a built-in command.

- **`setPluginInit(id, callback)`**  
  Register your plugin’s initialization function. The callback receives arguments like the base URL for your plugin files.

- **`setPluginUnmount(id, callback)`**  
  Define a cleanup function to run when the plugin is unmounted.

- **`registerFormatter(id, extensions, format)`**  
  Register a code formatter for specified file extensions.

- **`fsOperation(file)`**  
  Returns an object that lets you perform file system operations on the given file.

- **`require(moduleName)`**  
  Access additional built-in modules such as:
  - `fs`
  - `projects`
  - `selectionMenu`
  - `alert`
  - `confirm`
  - `multiPrompt`
  - `prompt`
  - `select`
  - `loader`
  - `fileBrowser`
  - `toInternalUrl`
  - `Url`

---

## 3. `actionStack`

This API manages a stack of actions (callbacks), which can be useful for handling back navigation or undo operations.

**Methods & Properties:**

- **`push(action)`**  
  Push an action (with an identifier and callback) onto the stack.

- **`pop()`**  
  Remove the top-most action.

- **`remove(id)`**  
  Remove a specific action using its identifier.

- **`length`**  
  Get the number of actions currently in the stack.

- **`setMark()`**  
  Set a marker at the current stack length.

- **`clearfromMark()`**  
  Clear all actions added after the marker.

---

## 4. `appSettings`

This object handles the application settings.

**Methods & Properties:**

- **`value`**  
  Object containing all current settings.

- **`on(event, listener)`** / **`off(event, listener)`**  
  Listen for changes to specific settings (e.g., update events).

- **`update(settings, showToast)`**  
  Update one or more settings; optionally display a toast notification.

- **`reset(setting)`**  
  Reset a setting to its default.

- **`get(setting)`**  
  Retrieve the value of a particular setting.

---

## 5. Toast and Storage

- **Toast:**
  - **`window.toast(msg, milliSeconds)`**  
    Show a toast message (a brief notification) for the specified duration.

- **Data and Cache Storage:**
  - **`window.DATA_STORAGE`**  
    URL pointing to the data storage directory.

  - **`window.CACHE_STORAGE`**  
    URL for cache storage.

---

## 6. Native APIs: `FsOperation` and `WcPage`

For operations that require direct file system access or native features, you can use:

- **`FsOperation`** (accessed via `acode.fsOperation(file)`):
  - **`lsDir()`**  
    List the contents of a directory.

  - **`readFile(encoding)`**  
    Read file contents.

  - **`createFile(name, content)`**  
    Create a new file.

  - **`writeFile(content)`**  
    Write content to a file.

  - **`createDirectory(name)`**  
    Create a directory.

  - **`delete()`**  
    Delete a file or directory.

  - **`copyTo(destination)`**  
    Copy a file to the specified destination.

  - **`moveTo(destination)`**  
    Move a file.

  - **`renameTo(newName)`**  
    Rename a file.

  - **`exists()`**  
    Check if a file exists.

  - **`stat()`**  
    Retrieve file statistics (like size, modified date, etc.).

- **`WcPage`**:
  - **`show()`**  
    Display a web container page.

  - **`hide()`**  
    Hide the web container page.

---

## 7. Additional Built-in Modules

Using `acode.require(moduleName)`, you can access other modules that offer extended functionality such as:

- `projects`
- `selectionMenu`
- `alert` / `confirm`
- `multiPrompt` / `prompt` / `select`
- `loader`
- `fileBrowser`
- `toInternalUrl` and `Url`

---

## 8. Final Note

This summary covers the core built-in methods and properties available in A
::contentReference[oaicite:0]{index=0}

 
