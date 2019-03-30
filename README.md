# Summary of Purpose
Bookmarklets.js is a simple JavaScript library for creating custom bookmarklets in order to open multiple webpages, rather than only one. It is straightforward to use and easy to implement on HTML webpages.  
By using a `javascript:` URL, Bookmarklets.js is able to create a bookmarklet (which can run on any webpage where popups are allowed) that executes a series of functions to open all of the pages specified. User input of URLs in CSV (comma separated values) format (as show below) may be passed into a Workpsaces.js function in order to generate a bookmarklet to open all of the URLs in one click.  
```text
"google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"
```
An example of how to pass this value into a Bookmarklets.js function might be:
```javascript
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org")
```
# Links
## API Docs
[General API Information](APIDocs/general)  
[API Docs Table of Contents](APIDocs/tableOfContents)  
[Examples](APIDocs/examples)
## Other
*This section is still under development*
# Summary of API
*This section is still under development*