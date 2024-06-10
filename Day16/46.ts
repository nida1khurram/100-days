//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties
// make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop={
    name:"Toshiba",
    model:" PTSE3U-06NOOG",
    year:2022,
    describe:function(){
             console.log(`This laptop is a ${this.name} ${this.model} ${this.year}.`);
                }
            };
    laptop.describe()
