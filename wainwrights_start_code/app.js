let dataWainwrights;
const wainwrightsList = document.getElementById("wainwrights-list"); //ul
const wainwrightsContainer = document.getElementById("wainwrightsContainer"); //section
const wainwrightsHeader = document.getElementById("wainwrights-header"); //h1

//Header Message
const headerMessage = (text) => {
    wainwrightsHeader.innerText = "";
    wainwrightsHeader.innerText = text;
}

//Get data from form
const form = document.getElementById("WainwrightForm");
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let userInput = evt.target[0].value;

    wainwrightsList.innerHTML = "";
    headerMessage("Filtering Result");

    //FILTERING the wainwrightsList
    const filterResult = dataWainwrights.filter(element => element.name.toLowerCase().includes(userInput.toLowerCase()));
    mapWainwrights(filterResult);

    if(filterResult.length == 0){
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "The query entered does not exist inside the array"
        wainwrightsContainer.appendChild(errorMsg);
    }
    headerMessage("JS Wainwrights Lab");
})


//GET all Wainwrights data
const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json")
    const data =  await response.json();
    dataWainwrights = data;
    headerMessage("Awaiting API...");
    mapWainwrights(data); 
}


//looping through each items in wainwrightsLists
const mapWainwrights = (dataWainwrights) => {
    // console.log(dataWainwrights);
    for (let item of dataWainwrights) {
        console.log(item);
        wainwrightsListItem(item);
    }
    headerMessage("JS Wainwrights Lab");
}

//Creating and populating Item inside wainwrightsLists
const wainwrightsListItem = (item) => {
    let list = document.createElement("li");
    let name = document.createElement("h3");
    let height = document.createElement("h4");
    let areaAbout = document.createElement("p");

    name.innerText = item.name;
    height.innerText = item.heightFeet;
    areaAbout.innerText = item.area.about;

    list.appendChild(name);
    list.appendChild(height);
    list.appendChild(areaAbout);
    wainwrightsList.appendChild(list);
}

getAllWainwrights();
