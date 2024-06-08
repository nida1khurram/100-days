//Question 32: Checking Usernames: Ensure uniqueness in usernames.
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// let current_user:string[]=["user1","user2","user3","user4","admin"];
// let new_user:string[]=["admin","User1","user5",'User6'];
// for(let n_u of new_user){
// if(current_user.some(c_u => c_u.toLowerCase() === n_u.toLowerCase())) {
//     console.log(`${n_u} will need to enter a new username.`);
// }else{
//     console.log(`${n_u} is available.`);
// }};
