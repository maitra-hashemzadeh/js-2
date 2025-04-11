// According to your js10 session, write a code that shows why we shouldn't use var?
if (true) {
    let banana = "I'm banana!";
    const banana2 = "Me too!";
    console.log(banana);   // ✅
    console.log(banana2); // ✅
    
  }
  
//   console.log(banana);   // ❌ Error
//   console.log(banana2); // ❌ Error


  if (true) {
    var apple = "I'm NOT banana!";
  }
  
  console.log(apple); // ✅ 
  