//////This file contains examples that may be used in order to test Bookmarklets.js. These examples will not be able to run without running Bookmarklets.js before it.
////bookmarklets.workspaces.compileJavaScriptFromCSV
//bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn()
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn("https://www.google.com,https://www.bing.com,https://www.yahoo.com,https://www.twitter.com,https://www.facebook.com,https://www.youtube.com,https://www.wikipedia.org");
//bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn()
bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org");
////bookmarklets.workspaces.appendBookmarkletPrefix (dependent on bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn() functioning properly)
bookmarklets.workspaces.appendBookmarkletPrefix(bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"))