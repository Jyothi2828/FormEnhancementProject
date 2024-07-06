//Bug 1 - Undefined Variable
try {
    let a='I have declared a variable' 
    //console.log(a); // Trying to print undefined variable
} catch (error) {
    console.log("Error with undefined variable:", error);
}

//Bug 2 - Syntax Error
try {
    //console.log('I am fixed now')//Fixed Syntax error by keeping a single quote
} catch (error) {
    console.log("Syntax error caught:", error);
}
