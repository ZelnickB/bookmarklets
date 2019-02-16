//////This file contains examples that may be used in order to test workspaces.js. These examples will not be able to run without running workspaces.js before it.
////workspaces.compileJavaScriptFromCSV
//workspaces.compileJavaScriptFromCSV.assemble.executeFn()
workspaces.compileJavaScriptFromCSV.assemble.executeFn("https://www.google.com,https://www.bing.com,https://www.yahoo.com,https://www.twitter.com,https://www.facebook.com,https://www.youtube.com,https://www.wikipedia.org");
//workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn()
workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org");
////workspaces.appendBookmarkletPrefix (dependent on workspaces.compileJavaScriptFromCSV.assemble.executeFn() functioning properly)
workspaces.appendBookmarkletPrefix(workspaces.compileJavaScriptFromCSV.assemble.executeFn("google.com,bing.com,yahoo.com,twitter.com,facebook.com,youtube.com,wikipedia.org"))