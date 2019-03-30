//////This file contains examples that may be used in order to test Bookmarklets.js. These examples will not be able to run without running Bookmarklets.js before it.
////bookmarklets.workspaces.compileJavaScriptFromCSV
//bookmarklets.workspaces.compileJavaScriptFromCSV.assemble()
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble("https://www.google.com,https://www.bing.com,https://www.yahoo.com,https://www.twitter.com,https://www.facebook.com,https://www.youtube.com,https://www.wikipedia.org");
//bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute()
bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org");
////bookmarklets.workspaces.appendBookmarkletPrefix (dependent on bookmarklets.workspaces.compileJavaScriptFromCSV.assemble() functioning properly)
bookmarklets.workspaces.appendBookmarkletPrefix(bookmarklets.workspaces.compileJavaScriptFromCSV.assemble("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"))