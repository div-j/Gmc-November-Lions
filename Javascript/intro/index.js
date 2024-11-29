//Javascript syntax
/*
commments:
1.single line comment
 
2.multi line comment 
*/

//javascript is case sensitive a isnt same as A
//javascript is object based language
//javascript is dynamically typed language
//javascript runs line by line

// keywords:var, let , const, function, class, else, if, switch

//operator:+,-,/,%,=,==,
//values = datas

/*
types of Data
numbers:123 or 2.3, 
strings:"alex",or 'alex', or `alex`, 
booleans:true or false, 
symbols:+, !, < and more, 
objects: {name:"alex",age:34}, 
null:null and 
arrays:allows us to hold multiple values e.g [23,"james", true, "dan"]
*/
//variable: container, starting with alphabets, _ and $
var age = 30;
var student_name = "yanmife";
console.log(student_name,"is a software student")

var students = ["yanmife","fortune","michael","obinna","wale","wale","class captain","ebuka","light","abiola"]

console.log("my students are:",students); var school ='gmc'


//functions: sets of code that does something when called
/*
syntax:
function functionName(param,or param2){


}

*/

var student_name = "abiola"
var greetSomebody = "how are you "+student_name


function greet(any_name){
    return "how are you "+any_name
}

console.log(greet("wale"))