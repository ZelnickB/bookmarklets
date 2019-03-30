<link rel="stylesheet" href="/APIDocs/main.css" type="text/css">
<!--Update Table of Contents when creating new pages in the API documentation.-->
# API Documentation: `appendBookmarkletComponents.executeFn()`
## Summary
### Supported Versions
1.0.0+
### Purpose
Adds necessary parts of a link to previously generated JavaScript code before it is able to be saved as a bookmarklet
### Access Method
```javascript
bookmarklets.workspaces.appendBookmarkletComponents.executeFn([parameters])
```
### Other Information
*No content*
## Details
### Return Value
#### Description
Returns `javaScriptCode` (parameter) with bookmarklet components appended to the beginning of the code as specified by parameters:
* `javascript:` URL
* Code for confirm dialog  

After javascript code (`javaScriptCode` parameter) is passed through this function, it returns a URL which is valid to be used as a bookmarklet.
#### Type
String
### Parameters
#### javaScriptCode
##### Description
The code onto which the necessary components for a bookmarklet will be appended
##### Type
`String`, required
#### configureJSURL
##### Description
**If `true`**: `javascript:` URL will be appended  
**If `false`**: `javascript:` URL will not be appended
##### Type
`boolean`, required
#### configureInitialAlert
##### Description
If `"false"`: No `window.confirm()` dialog will be appended to the beginning of `javaScriptCode` parameter
If `"true,[workspaceName]"`: A `window.confirm()` dialog will be appended to the beginning of `javaScriptCode` parameter with text that says that the workspace name is `[workspaceName]`
##### Type
`string`, required