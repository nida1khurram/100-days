//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let usernames:string[]= ["admin","user1","user2"];
usernames.forEach(username =>{
if(username === "admin"){
    console.log(`Hello admin`);
} else {
    console.log(`Hello ${username}, thank you for logging in again.`);
}
});
