# Summary of Purpose
Workspaces.js is a simple JavaScript library for creating custom bookmarklets in order to open multiple webpages, rather than only one. It is straightforward to use and easy to implement on HTML webpages.  
By using a `javascript:` URL, Workspaces.js is able to create a bookmarklet (which can run on any webpage where popups are allowed) that executes a series of functions to open all of the pages specified. User input of URLs in CSV (comma separated values) format (as show below) may be passed into a Workpsaces.js function in order to generate a bookmarklet to open all of the URLs in one click.  
```text
"google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"
```
An example of how to pass this value into a Workspaces.js function might be:
```javascript
workspaces.compileJavaScriptFromCSV.assemble.executeFn("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org")
```
# Summary of API
*This section is still under development*