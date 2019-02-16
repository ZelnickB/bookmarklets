<link rel="stylesheet" href="/APIDocs/main.css" type="text/css">
<!--Update Table of Contents when creating new pages in the API documentation.-->
# API Documentation: `compileJavaScriptFromCSV.assemble.executeFn()`
## Summary
### Supported Versions
1.0.0+
### Purpose
Compiles JavaScript code from a string of URLs in comma separated values (CSV) format
### Access Method
```javascript
workspaces.compileJavaScriptFromCSV.assemble.executeFn([parameters])
```
### Other Information
*No content*
## Details
### Return Value
#### Description
JavaScript code that opens the URLs listed in CSV format from the `CSV` parameter
#### Type
String
### Parameters
#### CSV
##### Description
The list of URLs, including `"http://"` and `"https://"`, separated by commas with no spaces, to be compiled into JavaScript code
##### Type
`String`, required