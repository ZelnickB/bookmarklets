workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn = function (CSV) {
    if(CSV == undefined) {
        throw "Missing parameter(s)";
    }
    if (typeof CSV !== "string") {
        throw "Parameter of incorrect type in workspaces.compileJavaScriptFromCSV.assembleAndExecute.executeFn()";
    }
    workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray = CSV.split(",");
    workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations = 0;
    while (workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations < workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray.length) {
        window.open(workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray[workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations]);
        workspaces.compileJavaScriptFromCSV.assembleAndExecute.iterations++;
    }
    return workspaces.compileJavaScriptFromCSV.assembleAndExecute.URLArray;
};