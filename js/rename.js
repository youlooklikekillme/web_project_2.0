function first_name() {
    const item  = document.getElementById("first_name");
    item.innerHTML = "Matvei";
}

function second_name() {
    const item = document.getElementById("second_name");
    item.innerHTML = "Evseev";
}

function thirty_name() {
    const item = document.getElementById("thirty_name");
    item.innerHTML = "Eugenievich";
}

function sex() {
    const item = document.getElementById("sex");
    item.innerHTML = "male";
}


function first_name_return() {
    const item  = document.getElementById("first_name");
    item.innerHTML = "Матвей";
}

function second_name_return() {
    const item = document.getElementById("second_name");
    item.innerHTML = "Евсеев";
}

function thirty_name_return() {
    const item = document.getElementById("thirty_name");
    item.innerHTML = "Евгеньевич";
}

function sex_return() {
    const item = document.getElementById("sex");
    item.innerHTML = "муж";
}

document.getElementById("for_click").addEventListener("click", function() {
if (document.getElementById("first_name").innerHTML === "Матвей"){
    first_name();
    second_name();
    thirty_name();
    sex();
}
else{
    first_name_return();
    second_name_return();
    thirty_name_return();
    sex_return();
}
});
