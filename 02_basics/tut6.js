 function calculateCartPrice (...num1) {
    return num1
 };

 console.log(calculateCartPrice(300,499,388));

   const user = {
    username: "Nitin",
    roll: 69
   };

   function objecttt (check) {
    console.log(`user is ${check.username} and roll is ${check.roll} `)
   }
    //objecttt(user);
   objecttt({
    username: "sam",
    roll : 399
   })






    const mobile = {
        brand: "samsung",
        price : 2000
    }
    function showMobile(anyobject) {
        console.log(anyobject.brand);
        console.log(anyobject.price);
    }
   showMobile({
    brand: "samsung",
        price : 2000
   })




   const myNewArray = [200,300,400,500]

   function returnSecondValue (getArray) {
    return getArray
   }
   //console.log(returnSecondValue(myNewArray));
      console.log(returnSecondValue([200,300,400,500]));

 