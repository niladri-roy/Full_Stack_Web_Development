let isDOBOpen = false;
const settingsCogEl = document.getElementsById("settingsIcon");
const settingsContentEl = document.getElementsById("settingsContent");

const toggleDOBSelector = () => {

    if(isDOBOpen){
        settingsContentEl.classList.add("hide");
    }else{
        settingsContentEl.classList.remove("hide");
    }

    isDOBOpen = !isDOBOpen;
};

settingsCogEl.add