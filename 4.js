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
newObj.id= "John.k"
newObj.skills=["python","css","js"]
console.log(newObj)




  