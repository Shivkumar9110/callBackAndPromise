
// 3
function fun(arr,call){            
    let BlankNewArray= [];
    for(let i=0;i<arr.length;i++){
        let doubleValue = call(arr[i]);
        BlankNewArray.push(doubleValue);
    }
    console.log(BlankNewArray)
    
  
}
// Execution Started.1
let arr=[1,2,3,4,5,6,7,8,9,0];




 fun(arr,callback);


function callback(rr){
   return rr*2;
}