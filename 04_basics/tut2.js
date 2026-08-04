const userLoggedIn = true;
const debitCard = true;
const loggedGoogle = false;
const loggedEmail = true;
if(userLoggedIn && debitCard) {
    console.log("allow shopping");
}
else {
    console.log("nhi chala");
};


if (loggedGoogle || loggedEmail) {
    console.log("chal jayega")
}


let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login");
}