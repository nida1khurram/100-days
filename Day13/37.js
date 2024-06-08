//Question 37: Large Shirts: Default values in make_shirt().
function tShirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "Typescript"; }
    console.log("I wear ".concat(size, " T_Shirt & I love that message ").concat(message));
}
tShirt();
tShirt("small", "I Love Coding");
tShirt("large", "I Love Pakistan");
