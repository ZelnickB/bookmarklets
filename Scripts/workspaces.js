var workspaces = {
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
};
workspaces.appendBookmarkletComponents.executeFn = function (javaScriptCode, configureJSURL, configureInitialAlert) {
    workspaces.appendBookmarkletComponents.stringToBeAppended = "";
    if (javaScriptCode === undefined || configureJSURL === undefined || configureInitialAlert === undefined) {
        throw "Missing parameter(s) in workspaces.appendBookmarkletComponents.executeFn()";
    }
    if (typeof javaScriptCode !== "string" || typeof configureJSURL !== "boolean" || typeof configureInitialAlert !== "string") {
        throw "Parameter of incorrect type in workspaces.appendBookmarkletComponents.executeFn()";
    }
    if (configureJSURL) {
        workspaces.appendBookmarkletComponents.stringToBeAppended = workspaces.appendBookmarkletComponents.stringToBeAppended.concat("javascript:");
    }
    if (configureInitialAlert !== undefined && configureInitialAlert.split(",").length === 2) {
        if (configureInitialAlert.split(",")[0] === "true") {
            workspaces.appendBookmarkletComponents.stringToBeAppended = workspaces.appendBookmarkletComponents.stringToBeAppended.concat("if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + configureInitialAlert.split(",")[1] + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){");
        }
    }
    if (configureInitialAlert.split(",")[0] === "true") {
        return workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode + "}";
    }
        else {
            return workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode;
        }
};
workspaces.compileJavaScriptFromCSV.assemble.executeFn = function (CSV) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in workspaces.compileJavaScriptFromCSV.assemble.executeFn()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in workspaces.compileJavaScriptFromCSV.assemble.executeFn()";
    }
    workspaces.compileJavaScriptFromCSV.assemble.URLArray = CSV.split(",");
    workspaces.compileJavaScriptFromCSV.assemble.iterations = 0;
    workspaces.compileJavaScriptFromCSV.assemble.compiledCode = "";
    while (workspaces.compileJavaScriptFromCSV.assemble.iterations < workspaces.compileJavaScriptFromCSV.assemble.URLArray.length) {
        workspaces.compileJavaScriptFromCSV.assemble.compiledCode = workspaces.compileJavaScriptFromCSV.assemble.compiledCode + "window.open('" + workspaces.compileJavaScriptFromCSV.assemble.URLArray[workspaces.compileJavaScriptFromCSV.assemble.iterations] + "'); ";
        workspaces.compileJavaScriptFromCSV.assemble.iterations++;
    }
    return workspaces.compileJavaScriptFromCSV.compiledCode;
};
workspaces.createCompleteBookmarkletURLFromCSV.executeFn = function (CSV, workspaceTitle) {
    if (CSV === undefined) {
        throw "Missing parameter(s) in workspaces.createCompleteBookmarkletURLFromCSV.executeFn()";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in workspaces.createCompleteBookmarkletURLFromCSV.executeFn()";
    }
    workspaces.createCompleteBookmarkletURLFromCSV.iterations = 0;
    workspaces.createCompleteBookmarkletURLFromCSV.URLArray = CSV.split(",");
    if (workspaceTitle !== undefined) {
        workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = "javascript:if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + workspaceTitle + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){";
        while (workspaces.createCompleteBookmarkletURLFromCSV.iterations < workspaces.createCompleteBookmarkletURLFromCSV.URLArray.length) {
            workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "window.open('" + workspaces.createCompleteBookmarkletURLFromCSV.URLArray[workspaces.createCompleteBookmarkletURLFromCSV.iterations] + "'); ";
            workspaces.createCompleteBookmarkletURLFromCSV.iterations++;
        }
        return workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "}";
    }
        else {
            workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = "javascript:";
            while (workspaces.createCompleteBookmarkletURLFromCSV.iterations < workspaces.createCompleteBookmarkletURLFromCSV.URLArray.length) {
                workspaces.createCompleteBookmarkletURLFromCSV.compiledURL = workspaces.createCompleteBookmarkletURLFromCSV.compiledURL + "window.open('" + workspaces.createCompleteBookmarkletURLFromCSV.URLArray[workspaces.createCompleteBookmarkletURLFromCSV.iterations] + "'); ";
                workspaces.createCompleteBookmarkletURLFromCSV.iterations++;
            }
            return workspaces.createCompleteBookmarkletURLFromCSV.compiledURL;
        }
};