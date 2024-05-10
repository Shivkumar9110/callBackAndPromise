
//Creating the Object { title, author, and year}
let BookObj =[
    {title:"Ramayan",author:"Tulsi Das",year:-10000000000000},
    {title:"Mahabharat",author:"Vedwash",year:-100000000000},
    {title:"Gita",author:"ShreeKrishanaJee",year:-4400000},

]
   



function fun(book,call){
   let title = book.map((el)=>el.title)
   call(title);
   console.log("Sort listed  :-  ",title);
}

fun(BookObj,callback)


function callback(NewBook){

    
     return NewBook.sort();
    
}