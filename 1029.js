// const users = ['irangi', 'camel', 'ghost', 'sunny', 'henry'];
// let userIndex=3;
// users.forEach((user, idx) => {
//   if (idx === 2) {
//     console.log(`${idx + 1}번째 user는 ${user}님 입니다.`);
//   }
// });
const users = ['irangi', 'camel', 'ghost', 'sunny', 'henry'];
let userIndex = 4; 

users.forEach((user, idx) => {
  if (idx === userIndex - 1) { 
    console.log(`${userIndex}번째 user는 ${user}님 입니다.`);
  }
});
