
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


let usersLogin = "";
let usersPassword = "";


let login = false;


printPage (); 


function printPage () {

    if (login == false) {

        main.innerHTML = "<h2>Välkommen, Logga in ovan eller skapa ett nytt konto nedan om du är ny på sidan</h2>" + "<br>";
        nav.innerHTML = "";
        nav.append(logo);

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


        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////

        let mainCreateUser = document.createElement("input");
        mainCreateUser.setAttribute("type", "text");
        mainCreateUser.setAttribute("id", "mainCreateUser");

        let mainCreatePassword = document.createElement("input");
        mainCreatePassword.setAttribute("type", "password");
        mainCreatePassword.setAttribute("id", "mainCreatePassword");

        let mainCreateUserBtn = document.createElement("button");
        mainCreateUserBtn.innerText = "skapa användare";
        mainCreateUserBtn.setAttribute("id", "mainCreateUserBtn");

        main.append(mainCreateUser, mainCreatePassword, mainCreateUserBtn);

        mainCreateUserBtn.addEventListener("click", function(){

            let createdUser = mainCreateUser.value;
            let createdPassword = mainCreatePassword.value;

            console.log("nu ska vi skapa använadre"+createdUser+createdPassword);


                let getMyUsers = JSON.parse(localStorage.getItem("users"));
                //console.log(getMyUsers);

                let userCreatedAccount = {

                    name: createdUser,
                    password: createdPassword
                };

                getMyUsers.push(userCreatedAccount);

                //console.log(getMyUsers);

                localStorage.setItem("users", JSON.stringify(getMyUsers));


        });




        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////


        navInputBtn.addEventListener("click", function(){


            let mainFailedLogin = document.createElement("h1")
            mainFailedLogin.innerText = "DU SKREV FEL LÖSEN!";
            main.innerHTML = "";
            main.append(mainFailedLogin);

            console.log("nu vill du logga in");
            let username = navInputUsername.value;
            //console.log(username);
            let userPassword = navInputPassword.value;
            //console.log(userPassword);

            usersLogin = username;
            usersPassword = userPassword;

            //console.log(users);

            //console.log(usersLogin, usersPassword);

            login = true;

            printPage (); 

        });

    }

    if (login == true) {


        localStorage.getItem("users", JSON.stringify(users));

        //hämta array med objakt från localstorage
        let getUsers = JSON.parse(localStorage.getItem("users"));

            //console.log(getUsers)

            // loopa igenom ovan array och sätt in värdena i variabler
            for (let i = 0; i < getUsers.length; i++) {
                let namn = getUsers[i].name;
                let pass = getUsers[i].password;
                //console.log(namn);
                //console.log(pass);



                if (namn == usersLogin && pass == usersPassword) {
            
                    console.log("ok du är inne");

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
                        login = false;

                        main.innerHTML = "test";
                        nav.innerHTML = "test";


                        printPage ();

                    });
            
                };
                
            };
    };


};
