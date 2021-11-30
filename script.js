
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fasta elementen på sidan sparade som variabler i script som appendas till sidan//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let root = document.getElementById("root");

let nav = document.createElement("nav");
let logo = document.createElement("h1");
logo.innerText = "Gamers Inc";
nav.append(logo);

let main = document.createElement("main");

let footer = document.createElement("footer");
let footerText = document.createElement("h3");
footerText.innerText = "copyright Gamer Shabandari - Medieinstitutet";
footer.append(footerText);


root.append(nav, main, footer);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// array med users-objekt - två konton med som grund ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//skapar två tomma variabler som sedan fylls när användaren försöker logga in, samt en boolean som växlar vid lyckad inlogg
//////////////////////////////////////////////////////////////////////////////////////////////////////////

let usersLogin = "";
let usersPassword = "";


let login = false;


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// kör printpage funktionen och avgör sedan vart i koden man hamnar ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

printPage (); 


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// funktionen kollar om boolean login = falsk eller sannt ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function printPage () {

    
//////////////////// om login = falsk - välkommna användare och be dem logga in eller skapa konto ///////////////////////////////////


    if (login == false) {

        main.innerHTML = "<h2>Välkommen, logga in ovan eller skapa ett nytt konto nedan om du är ny på sidan</h2>";
        nav.innerHTML = "";
        nav.append(logo);

        ////////////////////////////////////////////////////////////
        //////////////skapar aktuell nav - "inlogg" ////////////////
        ////////////////////////////////////////////////////////////

        let navInputUsername = document.createElement("input");
        navInputUsername.setAttribute("type", "text");
        navInputUsername.setAttribute("id", "navInputUsername");
        navInputUsername.setAttribute("placeholder", "användarnamn");
        let navInputPassword = document.createElement("input");
        navInputPassword.setAttribute("type", "password");
        navInputPassword.setAttribute("id", "navInputPassword");
        navInputPassword.setAttribute("placeholder", "lösenord");
        let navInputBtn = document.createElement("button");
        navInputBtn.innerText = "Login"
        navInputBtn.setAttribute("id", "navInputBtn");
        nav.append(navInputUsername, navInputPassword, navInputBtn);


        ////////////////////////////////////////////////////////////
        //////////////skapar aktuell main - "skapa ny användare" ////////////////
        ////////////////////////////////////////////////////////////

        let mainCreateUser = document.createElement("input");
        mainCreateUser.setAttribute("type", "text");
        mainCreateUser.setAttribute("id", "mainCreateUser");
        mainCreateUser.setAttribute("placeholder", "användarnamn");

        let mainCreatePassword = document.createElement("input");
        mainCreatePassword.setAttribute("type", "password");
        mainCreatePassword.setAttribute("id", "mainCreatePassword");
        mainCreatePassword.setAttribute("placeholder", "lösenord");

        let mainCreateUserBtn = document.createElement("button");
        mainCreateUserBtn.innerText = "skapa användare";
        mainCreateUserBtn.setAttribute("id", "mainCreateUserBtn");

        main.append(mainCreateUser, mainCreatePassword, mainCreateUserBtn);


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //event skapa ny användare - knapp - tar användarens uppgifter, skapar ett nytt objekt///////////////////////////
        // hämtar localstorage, uppdaterar tidigare array med det ny objektet och sparar ny array i localstorage  ///////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        mainCreateUserBtn.addEventListener("click", function(){

            let createdUser = mainCreateUser.value;
            let createdPassword = mainCreatePassword.value;

            //console.log("nu ska vi skapa använadre"+createdUser+createdPassword);


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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //event logga in  - knapp - tar användarens uppgifter och uppdaterar globala variabler och kör om Printpage funktionen //////
        // om uppgifterna ej matchar är man tillbaka här igen och då ser man alltid meddelande om fel inlogg  //////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        navInputBtn.addEventListener("click", function(){


            let mainFailedLogin = document.createElement("h2")
            mainFailedLogin.innerText = "Du skrev fel lösen!";
            let mainFailedImg = document.createElement("img")
            mainFailedImg.setAttribute("src", "fail.jpg")
            
            
            main.innerHTML = "";

            main.append(mainFailedLogin, mainFailedImg);

            //console.log("nu vill du logga in");
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////// om login = sant - testa angivna uppgifter i en loop och jämför med lagrade uppgifter i localstorage /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (login == true) {


        localStorage.getItem("users", JSON.stringify(users));

        //hämta array med alla user-objekt från localstorage
        let getUsers = JSON.parse(localStorage.getItem("users"));

            //console.log(getUsers)

            // loopa igenom ovan array och sätt in värdena i variabler
        for (let i = 0; i < getUsers.length; i++) {
            let namn = getUsers[i].name;
            let pass = getUsers[i].password;
            //console.log(namn);
            //console.log(pass);


            // kolla om inmatade uppgifter matchar med uppgifter i localstorage
            // om dem matchar är du inloggad
            if (namn == usersLogin && pass == usersPassword) {
        
                //console.log("ok du är inne");

            // töm sidan, rendera om med "inloggad vy - presentera knapp för utlogg som tömmer allt och börjar om igen med printpage"

                main.innerHTML = "";
                nav.innerHTML = "";
                nav.append(logo);
                main.innerText = "Välkommen in till Gamers Inc " +namn+ " du är nu inloggad!";

                let logoutBtn = document.createElement("button");
                logoutBtn.setAttribute("id", "logoutBtn");
                logoutBtn.innerText = "Logga ut";
                nav.append(logoutBtn);

                //let loggedInMain = document.createElement("section");
                //let welcomeText = document.createElement("p");
                //welcomeText.innerText = "Välkommen in till Gamers Inc " +namn+ " du är nu inloggad!";

                let mainPassedImg = document.createElement("img")
                mainPassedImg.setAttribute("src", "passed.jpg")

                main.append(mainPassedImg);
                //loggedInMain.append(welcomeText, mainPassedImg);

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
