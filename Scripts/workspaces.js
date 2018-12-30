var workspaces = {
    compileJavaScriptFromCSV: {
        assemble: {
            URLArray: undefined,
            iterations: 0,
            compiledCode: ""
        },
        assembleAndExecute: {
            URLArray: undefined,
            iterations: 0
        }
    },
    appendBookmarkletComponents: {
        stringToBeAppended: "",
    }
};
workspaces.appendBookmarkletComponents.executeFn = function (javaScriptCode, configureJSURL, configureInitialAlert) {
    workspaces.appendBookmarkletComponents.stringToBeAppended = "";
    if(javaScriptCode == undefined || configureJSURL == undefined || configureInitialAlert == undefined) {
        throw "Missing parameter(s)";
    }
    if(typeof javaScriptCode != "string" || typeof configureJSURL != "boolean" || typeof configureInitialAlert != "string") {
        throw "Parameter of incorrect type";
    }
    if(configureJSURL) {
        workspaces.appendBookmarkletComponents.stringToBeAppended = workspaces.appendBookmarkletComponents.stringToBeAppended.concat("javascript:");
    }
    if(configureInitialAlert != undefined && configureInitialAlert.split(",").length == 2) {
        if(configureInitialAlert.split(",")[0] == "true") {
            workspaces.appendBookmarkletComponents.stringToBeAppended = workspaces.appendBookmarkletComponents.stringToBeAppended.concat("if(window.confirm('Supernova Workspace Launcher: Are you sure that you would like to launch the workspace titled \"" + configureInitialAlert.split(",")[1] + "\"? Ensure that the webpage on which you are currently has permission to open popups.')){")
        }
    }
    if(configureInitialAlert.split(",")[0] == "true") {
        return workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode + "}"
    }
    else {
        return workspaces.appendBookmarkletComponents.stringToBeAppended + javaScriptCode;
    }
};
workspaces.compileJavaScriptFromCSV.assemble.executeFn = function (CSV) {
    if(CSV == undefined) {
        throw "Missing parameter(s)";
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
workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn = function (CSV) {
    if(CSV == undefined) {
        throw "Missing parameter(s)";
    }
    workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray = CSV.split(",");
    workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations = 0;
    while (workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations < workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray.length) {
        window.open(workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray[workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations]);
        workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations++;
    }
    return workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray;
};