// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
    id: 'kd455',
    age: 24,
    username: 'john2000',
    skills: ['html', 'css', 'js'],
  };
  
  //  !   Answer:
const newObj ={...obj2} 
obj2.id= "John.k"
obj2.skills=["python","css","js"]
console.log(obj2)




// check it 
  