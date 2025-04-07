//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer: 
setTimeout(()=>{
    console.log("wait 5 sec");
    
})
setTimeout(()=>{
    console.log("reday?");
    let i = 0;
    let time = setInterval(()=>{
          console.log("🚀");
          i++
        if( i=== 10){
            clearInterval(time)
        }
      
    },1000)
},5000)
