 //const coding = ["js", "ruby" ,"java" , "python" , "cpp"]

 //const values =  coding.forEach ( (item) => {
   //// console.log(item);
   // return item;
 //})
 //console.log(values);


 const myNums = [ 1 , 2 , 3, 4, 5 , 6, 7, 8, 9, 10];
/*
 const arr = myNums.filter( (nums) => 
     nums < 5
 )
 console.log(arr);


  const myNums = [ 1 , 2 , 3, 4, 5 , 6, 7, 8, 9, 10];

 const arr = myNums.filter( (nums) => {
    return nums < 5
 })
// console.log(arr);

*/


function sayHello() {
    console.log("Hello");
}

function test(x) {
    x();
}

test(sayHello);


const newNums = []
myNums.forEach( (num) =>  {
    if (num > 4 ) {
        newNums.push(num)
    }
} )
console.log(newNums);