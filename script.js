
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

localStorage.setItem("users", JSON.stringify(users));


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//skapar tre tomma variabler som sedan fylls när användaren försöker logga in, samt en boolean som växlar vid lyckad inlogg
//////////////////////////////////////////////////////////////////////////////////////////////////////////

let usersLogin = "";
let usersPassword = "";

let yourUsername = "dear user"

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// kör printpage funktionen och avgör sedan vart i koden man hamnar ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



printPage (); 


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// funktionen kollar om boolean login = falsk eller sannt ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function printPage () {


    let inloggad = JSON.parse(localStorage.getItem("status"));
    
    //////////////////// om status = null - välkommna användare och be dem logga in eller skapa konto ///////////////////////////////////

    if (inloggad == null ) {
    
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
        //event skapa ny användare - knapp - tar användarens uppgifter, skapar ett nytt user objekt//////////////////////
        // hämtar localstorage, uppdaterar tidigare array med det ny objektet och sparar ny array i localstorage  ///////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        mainCreateUserBtn.addEventListener("click", function(){

            let createdUser = mainCreateUser.value;
            let createdPassword = mainCreatePassword.value;

            let getMyUsers = JSON.parse(localStorage.getItem("users"));

            let userCreatedAccount = {

                name: createdUser,
                password: createdPassword
            };

            getMyUsers.push(userCreatedAccount);

            localStorage.setItem("users", JSON.stringify(getMyUsers));

            mainCreateUser.value = "";
            mainCreatePassword.value = "";

        });
    

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //event logga in  - knapp - tar användarens uppgifter och uppdaterar globala variabler och kör om Printpage funktionen //////
        // om uppgifterna ej matchar är man tillbaka här igen och då ser man alltid meddelande om fel inlogg  //////////////////////
        ///// om uppgifterna stämmer mot databasen - uppdatera status till true och kör om printpage funktionen/////////////////////

        navInputBtn.addEventListener("click", function(){
        
        let getUsers = JSON.parse(localStorage.getItem("users"));
        let username = navInputUsername.value;
        let userPassword = navInputPassword.value;

        main.innerHTML = "";
        nav.innerHTML = "";
        nav.append(logo);
        main.innerText = "nu skrev du fel lösen gå tillbaka och fixa";


            for (let i = 0; i < getUsers.length; i++) {
                let namn = getUsers[i].name;
                let pass = getUsers[i].password;
               
    
                // kolla om inmatade uppgifter matchar med uppgifter i localstorage
                // om dem matchar är du inloggad, sparar då även ditt användarnamn i localstorage
                if (namn == username && pass == userPassword) {
    
                    let loginstatus = true;

                    yourUsername = namn;

                    localStorage.setItem("yourName", JSON.stringify(yourUsername));

                    localStorage.setItem("status", JSON.stringify(loginstatus));

                    printPage (); 
                };
                
                
            };

        });

    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// om login = true - välkommen in //////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (inloggad == true) {

                let yourUsername = JSON.parse(localStorage.getItem("yourName"));

                main.innerHTML = "";
                nav.innerHTML = "";
                nav.append(logo);
                main.innerText = "Välkommen in till Gamers Inc "+yourUsername+ " du är nu inloggad!";

                let logoutBtn = document.createElement("button");
                logoutBtn.setAttribute("id", "logoutBtn");
                logoutBtn.innerText = "Logga ut";
                nav.append(logoutBtn);

                let mainPassedImg = document.createElement("img")
                mainPassedImg.setAttribute("src", "passed.jpg")

                main.append(mainPassedImg);

                logoutBtn.addEventListener("click", function(){
                    
                    localStorage.removeItem("status");

                    localStorage.removeItem("yourName");

                    printPage ();

                });
        
            

    };

};
