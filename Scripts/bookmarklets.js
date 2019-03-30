var bookmarklets = {
    workspaces: {
        // Functions are declared separately
    }
};
bookmarklets.workspaces.appendBookmarkletComponents = function (javaScriptCode, configureJSURL, configureInitialAlert) {
    let stringToBeAppended = "";
    if (javaScriptCode === undefined || configureJSURL === undefined || configureInitialAlert === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.appendBookmarkletComponents()";
    }
    if (typeof javaScriptCode !== "string" || typeof configureJSURL !== "boolean" || typeof configureInitialAlert !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.appendBookmarkletComponents()";
    }
    if (configureJSURL) {
        stringToBeAppended = stringToBeAppended.concat("javascript:");
    }
    if (configureInitialAlert !== undefined && configureInitialAlert.split(",").length === 2) {
        if (configureInitialAlert.split(",")[0] === "true") {
            stringToBeAppended = stringToBeAppended.concat("if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + configureInitialAlert.split(",")[1] + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){");
        }
    }
    if (configureInitialAlert.split(",")[0] === "true") {
        return stringToBeAppended + javaScriptCode + "}";
    }
        else {
            return stringToBeAppended + javaScriptCode;
        }
};
bookmarklets.workspaces.compileJavaScriptFromCSV.assemble = function (CSV) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble()";
    }
    let URLArray = CSV.split(",");
    let iterations = 0;
    let compiledCode = "";
    while (iterations < URLArray.length) {
        compiledCode = compiledCode + "window.open('" + URLArray[iterations] + "'); ";
        iterations++;
    }
    return compiledCode;
};
bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV = function (CSV, workspaceTitle) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV()";
    }
    let iterations = 0;
    let URLArray = CSV.split(",");
    let compiledURL = "";
    if (workspaceTitle !== undefined) {
        compiledURL = "javascript:if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + workspaceTitle + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){";
        while (iterations < URLArray.length) {
            compiledURL = compiledURL + "window.open('" + URLArray[iterations] + "'); ";
            iterations++;
        }
        return compiledURL + "}";
    }
        else {
            compiledURL = "javascript:";
            while (iterations < URLArray.length) {
                compiledURL = compiledURL + "window.open('" + URLArray[iterations] + "'); ";
                iterations++;
            }
            return compiledURL;
        }
};