
// fasta elementen på sidan sparade som variabler i script

let root = document.getElementById("root");

let nav = document.createElement("nav");
let logo = document.createElement("h1");
logo.innerText = "Gamers Inc";
nav.append(logo);

let main = document.createElement("main");

let footer = document.createElement("footer");
let footerText = document.createElement("h5");
footerText.innerText = "copyright Gamer Shabandari - Medieinstitutet";
footer.append(footerText);


root.append(nav, main, footer);


// array med users-objekt
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



//localStorage.setItem("users", JSON.stringify(users));



printPage (); 


function printPage () {

    if (localStorage = "null") {

        main.innerHTML = "Välkommen, Logga in ovan";
        nav.innerHTML = "";

        let navInputUsername = document.createElement("input");
        navInputUsername.setAttribute("type", "text");
        navInputUsername.setAttribute("id", "navInputUsername");
        let navInputPassword = document.createElement("input");
        navInputPassword.setAttribute("type", "password");
        navInputPassword.setAttribute("id", "navInputPassword");
        let navInputBtn = document.createElement("button");
        navInputBtn.innerText = "Login"
        navInputBtn.setAttribute("id", "navInputBtn");
        nav.append(navInputUsername, navInputPassword, navInputBtn);


        navInputBtn.addEventListener("click", function(){

            console.log("nu vill du logga in");
            let username = navInputUsername.value;
            console.log(username);
            let userPassword = navInputPassword.value;
            console.log(userPassword);


            let users = [
                {
                    name: username,
                    password: userPassword
                }
            ];
            

            console.log(users);

            localStorage.setItem("users", JSON.stringify(users));

            printPage ();

        });

    }

    //hämta array med objakt från localstorage
    let getUsers = JSON.parse(localStorage.getItem("users"));

        console.log(getUsers);

        // loopa igenom ovan array och sätt in värdena i variabler
        for (let i = 0; i < getUsers.length; i++) {
            let namn = getUsers[i].name;
            let pass = getUsers[i].password;
            console.log(namn);
            console.log(pass);


            // kolla om användarens localstorage uppgifter stämmer överens med värden i ovan loop - DÅ ÄR DU INLOGGAD

            if (namn === "janne" && pass === "test" || namn === "gamer" && pass === "milan") {
        
                console.log("ok du är inne");
                console.log(status);

                main.innerHTML = "";
                nav.innerHTML = "";

                let logoutBtn = document.createElement("button");
                logoutBtn.setAttribute("id", "logoutBtn");
                logoutBtn.innerText = "Logga ut";
                nav.append(logoutBtn);

                let loggedInMain = document.createElement("section");
                let welcomeText = document.createElement("p");
                welcomeText.innerText = "Välkommen in till Gamers Inc " +namn+ " du är nu inloggad!";

                main.append(loggedInMain);
                loggedInMain.append(welcomeText);

                logoutBtn.addEventListener("click", function(){

                    console.log("du vill logga ut");
                    localStorage.clear();
                    printPage ();

                });
        
            };
            
        };


};
