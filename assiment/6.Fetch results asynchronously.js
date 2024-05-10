fetch("https://jsonplaceholder.typicode.com/todos/1" )
.then(function f(reposive){
    return reposive.json()
})
.then(function f(value){
    console.log(value)
})