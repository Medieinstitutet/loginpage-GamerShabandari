
// fasta elementen på sidan sparade som variabler i script

let root = document.getElementById("root");

let nav = document.createElement("nav");
let logo = document.createElement("h1");
logo.innerText = "Gamer test inlogg";
nav.append(logo);

let main = document.createElement("main");

let footer = document.createElement("footer");
let footerText = document.createElement("h2");
footerText.innerText = "copyright Gamer S";
footer.append(footerText);


root.append(nav, main, footer);


printPage ();

function printPage () {

    let getUsers = JSON.parse(localStorage.getItem("users"));

    console.log(getUsers);

    for (let i = 0; i < getUsers.length; i++) {
        let namn = getUsers[i].name;
        let pass = getUsers[i].password;
        console.log(namn);
        console.log(pass);
        
    }

    if (getUsers.name === "janne" && getUsers.password === "test" || getUsers.name === "gamer" && getUsers.password === "milan") {
      
        console.log("hejhejhejhejeh");

    };




};



let users = [

    {
        name: "janne",
        password: "test"
    },
    {
        name: "gamer",
        password: "milan"
    }
];

localStorage.setItem("users", JSON.stringify(users));


//let getUsers = JSON.parse(localStorage.getItem("users"));

//console.log(getUsers);

//console.log(users);

