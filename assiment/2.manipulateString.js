function manipulateString(na,fun){
    console.log(fun(na))
}


manipulateString("hello world!",convert)

function convert(n){
    return n.toUpperCase();
}