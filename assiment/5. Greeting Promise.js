function Grettingmassage(Name){
    return new Promise((resolve,reject) =>{
        if(!Name || typeof Name !== 'string'){
            reject(new Error ("This input is invalid Name."))
        }else{
            let massage = `Hello ${Name}!`
            resolve(massage)
        }
    })

}
let fullName = "Shiv kumar";

Grettingmassage(fullName)
.then(massage => {
    console.log(massage);
}).catch(error => {
    console.error("Error ",Error.massage)
})


