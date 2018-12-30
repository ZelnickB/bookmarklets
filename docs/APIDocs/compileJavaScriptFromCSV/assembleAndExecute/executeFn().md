<!--Update Table of Contents when creating new pages in the API documentation.-->
# API Documentation: `compileJavaScriptFromCSV.assembleAndExecute.executeFn()`
## Summary
### Supported Versions
1.0.0+
### Purpose
Compiles JavaScript code from a string of URLs in comma separated values (CSV) format and executes it; does not return resulting code
### Access Method
```javascript
workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn([parameters])
```
### Other Information
*No content*
## Details
### Return Value
#### Description
The result of splitting `CSV` (parameter) at commas
#### Type
Array
### Parameters
#### `CSV`
##### Description
The list of URLs, including `"http://"` and `"https://"`, separated by commas with no spaces, to be compiled into JavaScript code and opened
##### Type
`String`, required