var x=22;

// module
// exports
// require
// __dirname
// __filename

global.appCode = "123-Node-app";

console.log(module)

function sub(a, b){
    return a-b;
}

module.exports = {
    // outScriptCallingFun : scriptFunToExport
    subfun : sub,
}

