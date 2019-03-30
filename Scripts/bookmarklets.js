var bookmarklets = {
    workspaces: {
        compileJavaScriptFromCSV: {
            assemble: {
                URLArray: undefined,
                iterations: 0,
                compiledCode: undefined
            },
            assembleAndExecute: {
                URLArray: undefined,
                iterations: 0
            }
        },
        appendBookmarkletComponents: {
            stringToBeAppended: undefined
        },
        createCompleteBookmarkletURLFromCSV: {
            URLArray: undefined,
            iterations: 0,
            compiledURL: undefined
        }
    }
};
bookmarklets.workspaces.appendBookmarkletComponents.executeFn = function (javaScriptCode, configureJSURL, configureInitialAlert) {
    bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended = "";
    if (javaScriptCode === undefined || configureJSURL === undefined || configureInitialAlert === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.appendBookmarkletComponents.executeFn()";
    }
    if (typeof javaScriptCode !== "string" || typeof configureJSURL !== "boolean" || typeof configureInitialAlert !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.appendBookmarkletComponents.executeFn()";
    }
    if (configureJSURL) {
        bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended = bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended.concat("javascript:");
    }
    if (configureInitialAlert !== undefined && configureInitialAlert.split(",").length === 2) {
        if (configureInitialAlert.split(",")[0] === "true") {
            bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended = bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended.concat("if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + configureInitialAlert.split(",")[1] + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){");
        }
    }
    if (configureInitialAlert.split(",")[0] === "true") {
        return bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode + "}";
    }
        else {
            return bookmarklets.workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode;
        }
};
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn = function (CSV) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.executeFn()";
    }
    bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.URLArray = CSV.split(",");
    bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.iterations = 0;
    bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.compiledCode = "";
    while (bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.iterations < bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.URLArray.length) {
        bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.compiledCode = bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.compiledCode + "window.open('" + bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.URLArray[bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.iterations] + "'); ";
        bookmarklets.workspaces.compileJavaScriptFromCSV.assemble.iterations++;
    }
    return bookmarklets.workspaces.compileJavaScriptFromCSV.compiledCode;
};
bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.executeFn = function (CSV, workspaceTitle) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.executeFn()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.executeFn()";
    }
    bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations = 0;
    bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.URLArray = CSV.split(",");
    if (workspaceTitle !== undefined) {
        bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = "javascript:if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + workspaceTitle + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){";
        while (bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations < bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.URLArray.length) {
            bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "window.open('" + bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.URLArray[bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations] + "'); ";
            bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations++;
        }
        return bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "}";
    }
        else {
            bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = "javascript:";
            while (bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations < bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.URLArray.length) {
                bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "window.open('" + bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.URLArray[bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations] + "'); ";
                bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.iterations++;
            }
            return bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV.compiledURL;
        }
};