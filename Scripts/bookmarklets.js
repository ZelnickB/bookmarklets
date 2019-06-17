var bookmarklets = {
    workspaces: {
        appendBookmarkletComponents: function (javaScriptCode, configureJSURL, configureInitialAlert) {
            let stringToBeAppended = "";
            if (javaScriptCode === undefined || configureJSURL === undefined) {
                throw String("Missing parameter(s) in bookmarklets.workspaces.appendBookmarkletComponents()");
            }
            if (typeof javaScriptCode !== "string" || typeof configureJSURL !== "boolean" || (typeof configureInitialAlert !== "string" && typeof configureInitialAlert !== "undefined")) {
                throw String("Parameter of incorrect type in bookmarklets.workspaces.appendBookmarkletComponents()");
            }
            if (configureJSURL) {
                stringToBeAppended = stringToBeAppended.concat("javascript:");
            }
            if (configureInitialAlert !== undefined) {
                stringToBeAppended = stringToBeAppended.concat("if(window.confirm('Are you sure that you would like to launch the workspace titled \"" + configureInitialAlert + "\"? Ensure that the webpage on which you are currently has permission to open popups. This bookmarklet was created as a Bookmarklets Workspace Launcher')){");
            }
            if (configureInitialAlert !== undefined) {
                return stringToBeAppended + javaScriptCode + "}";
            }
                else {
                    return stringToBeAppended + javaScriptCode;
                }
        },
        compileJavaScript: {
            assemble: function (URLArray) {
                if (URLArray === undefined) {
                    throw String("Missing parameter(s) in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble()");
                }
                if (typeof URLArray !== "object") {
                    throw String("Parameter of incorrect type in bookmarklets.workspaces.compileJavaScriptFromCSV.assemble()");
                }
                let iterations = 0;
                let compiledCode = "";
                while (iterations < URLArray.length) {
                    compiledCode = compiledCode + "window.open('" + URLArray[iterations] + "'); ";
                    iterations++;
                }
                return compiledCode;
            }
        },
        createCompleteBookmarkletURL: function (URLArray, workspaceTitle) {
            if (URLArray === undefined) {
                throw String("Missing parameter(s) in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV()");
            }
            if (typeof URLArray !== "object") {
                throw String("Parameter of incorrect type in bookmarklets.workspaces.createCompleteBookmarkletURLFromCSV()");
            }
            let iterations = 0;
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
        }
    },
    tools: {
        CSVParser: function (CSVString) {
            if (CSVString === undefined) {
                throw String("Missing parameter(s) in bookmarklets.tools.CSVParser()");
            }
            if (typeof CSVString !== "string") {
                throw String("Parameter of incorrect type in bbookmarklets.tools.CSVParser()");
            }
            return CSVString.split(",");
        },
        appendJavaScriptURL: function (JSString) {
            return "javascript:" + JSString;
        }
    }
};