bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn = function (CSV) {
    if(CSV == undefined) {
        throw "Missing parameter(s)";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn()";
    }
    bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray = CSV.split(",");
    bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations = 0;
    while (bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations < bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray.length) {
        window.open(bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray[bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations]);
        bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations++;
    }
    return bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray;
};