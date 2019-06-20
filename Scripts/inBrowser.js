"use strict";
bookmarklets.workspaces.compileJavaScript.assembleAndExecute = function (URLArray) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute()";
    }
    if (typeof URLArray !== "object") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.compileJavaScriptFromCSV.assembleAndExecute()";
    }
    let iterations = 0;
    while (iterations < URLArray.length) {
        window.open(URLArray[iterations]);
        iterations++;
    }
    return undefined;
};