---
title: Bookmarklets.js Home
---
[![JavaScript Standard Code Style Seal](https://cdn.rawgit.com/standard/standard/master/badge.svg "JS Standard Code Style may not be enforced between releases or during pre-releases.")](https://standardjs.com/)  

[![License](https://img.shields.io/github/license/NovaDevelopment/bookmarklets.js.svg?style=for-the-badge "All open-source projects derived from this repository must follow the conditions laid out in this license.")](https://github.com/NovaDevelopment/bookmarklets.js/blob/master/LICENSE)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/NovaDevelopment/workspaces.js.svg?style=for-the-badge&logo=github)
![GitHub Tag (latest SemVer)](https://img.shields.io/github/tag/NovaDevelopment/bookmarklets.js.svg?label=latest%20version&style=for-the-badge&logo=github)
![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/NovaDevelopment/bookmarklets.js.svg?style=for-the-badge&logo=github)
![GitHub Commits since Latest Release](https://img.shields.io/github/commits-since/NovaDevelopment/bookmarklets.js/latest.svg?style=for-the-badge&logo=github)
![Code Style](https://img.shields.io/badge/code%20style-JavaScript%20Standard%20Code%20Style-9cf.svg?style=for-the-badge&logo=JavaScript "JS Standard Code Style may not be enforced between releases.")  
[![jsDelivr Hits per Month](https://data.jsdelivr.com/v1/package/gh/NovaDevelopment/bookmarklets.js/badge?style=square "Hits on the jsDelivr content delivery network, which is the officially supported method for integrating bookmarklets.js.")](https://www.jsdelivr.com/package/gh/NovaDevelopment/bookmarklets.js)
# Links
- [Bookmarklet Generator](/Tools/BookmarkletGenerator)
- [Bookmarklets Gallery](/Tools/BookmarkletsGallery)

# Summary of Purpose
Bookmarklets.js is a simple JavaScript library for creating and manipulating custom bookmarklets. Formerly known as Workspaces.js, Bookmarklets.js includes a revolutionary feature that quickly generates a workspace bookmarklet that automatically opens multiple webpages, rather than only one. It is straightforward to use and easy to implement on HTML webpages.  
By using a `javascript:` URL, the Workspaces feature is able to create a bookmarklet (which can run on any webpage except for the default new tab page) that executes a series of functions to open all of the pages specified. User input information, such as a list of URLs in CSV (comma separated values) format (as shown below) may be passed into a Workpsaces.js function in order to generate a bookmarklet.
```text
"google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"
```
An example of how to pass this value into a Bookmarklets.js function might be:
```javascript
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org");
```
This function would return the link to a bookmarklet to open all of the pages in the list:
```javascript
javascript:window.open('google.com'); window.open('bing.com'); window.open('yahoo.com'); window.open('twitter.com'); window.open('facebook.com'); window.open('youtube.com'); window.open('wikipedia.org');
```
# Summary of API
## Importing the Library
In order to access the Bookmarklets.js library, you must first import the Bookmarklets.js script to your HTML file. The best way to do this is to use jsDelivr's CDN to access a minified file:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/NovaDevelopment/bookmarklets.js@[Insert Bookmakrlets.js Version Here]/Scripts/bookmarklets.min.js"></script>
```
Alternatively, you can access the original JavaScript file (without minification):
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/NovaDevelopment/bookmarklets.js@[Insert Bookmakrlets.js Version Here]/Scripts/bookmarklets.js"></script>
```
## Using the API
All variables, functions, constants, etc. associated with Bookmarklets.js may be accessed via the `bookmarklets` object.  
For more detailed information on the API, see the [Wiki on GitHub](https://github.com/NovaDevelopment/bookmarklets.js/wiki).
<!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d6a80132ce82e69"></script> 