<link rel="stylesheet" href="/APIDocs/main.css" type="text/css">
<!--Update Table of Contents when creating new pages in the API documentation.-->
# API Documentation: `Function`
## Summary
### Supported Versions
1.0.0+
### Purpose
Creates a complete bookmarklet URL from a string in CSV format and, optionally, a workpsace title
### Access Method
```javascript
bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.executeFn(CSV, workspaceTitle)
```
### Other Information
*No content*
## Details
### Return Value
#### Description
The complete bookmarklet URL created from a string in CSV format, with code for a confirm dialog, if `workspaceTitle` is defined
#### Type
String
### Parameters
#### CSV
##### Description
The list of URLs, including `"http://"` and `"https://"`, separated by commas with no spaces, to be compiled into a bookmarklet URL
##### Type
`String`, required
#### workspaceTitle
##### Description
The title of the workspace to be included in the `window.confirm` dialog; if not present, no confirm dialog will be added to the bookmarklet URL
##### Type
`String`, optional