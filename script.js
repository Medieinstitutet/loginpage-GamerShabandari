
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


// array med users
let users = [

    {
        name: "janne",
        password: "test",
        status : false
    },
    {
        name: "gamer",
        password: "milan",
        status : false
    }
];



localStorage.setItem("users", JSON.stringify(users));



printPage (); 


function printPage () {


    //hämta array med objakt från localstorage
    let getUsers = JSON.parse(localStorage.getItem("users"));

    console.log(getUsers);

    // loopa igenom ovan array och sätt in värdena i variabler
    for (let i = 0; i < getUsers.length; i++) {
        let namn = getUsers[i].name;
        let pass = getUsers[i].password;
        let status = getUsers[i].status;
        //console.log(namn);
        //console.log(pass);


        // kolla om användarens localstorage uppgifter stämmer överens med värden i ovan loop - DÅ ÄR DU INLOGGAD

        if (namn === "janne" && pass === "test" || namn === "gamer" && pass === "milan") {
      
            console.log("ok du är inne");
            status = true;
            console.log(status);

            main.innerHTML = "";
            nav.innerHTML = "";

            let logoutBtn = document.createElement("button");
            logoutBtn.setAttribute("id", "logoutBtn");
            logoutBtn.innerText = "Logga ut";
            nav.append(logoutBtn);


            logoutBtn.addEventListener("click", function(){

                console.log("du vill logga ut");
                localStorage.clear();
                printPage();

            });

            let loggedInMain = document.createElement("section");
            let welcomeText = document.createElement("p");
            welcomeText.innerText = "Välkommen in till Gamers Inc " +namn+ " du är nu inloggad!";

            main.append(loggedInMain);
            loggedInMain.append(welcomeText);
    
        }else {
            console.log("du är inte inloggad");

        };

        
    }




};


//let getUsers = JSON.parse(localStorage.getItem("users"));

//console.log(getUsers);

//console.log(users);



// fel kod men funkar ta den till inlogg sidan sen 
//let navInput = document.createElement("input");
//            navInput.setAttribute("type", "text");
 //           let navInputBtn = document.createElement("button");
   //         navInputBtn.setAttribute("id", "navInputBtn");
     //       nav.append(navInput, navInputBtn);
