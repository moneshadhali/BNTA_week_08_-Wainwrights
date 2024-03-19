let dataWainwrights;

const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json")
    const data =  await response.json();
    dataWainwrights = data;
    console.log(dataWainwrights);
}


getAllWainwrights();

