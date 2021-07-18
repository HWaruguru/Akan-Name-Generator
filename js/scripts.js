function getDayofWeek(year, month, day) {
    var date = new Date(year+"/"+month+"/"+day);
    return date.getDay();
}

function getName(gender, day){
    var female = {
        0: "Akosua",
        1: "Adwoa",
        2: "Abenaa",
        3: "Akua",
        4:  "Yaa",
        5: "Afua",
        6: "Ama"
    };
    var male = {
        0: "Kwasi",
        1: "Kwadwo",
        2: "Kwabena",
        3: "Kwaku",
        4:  "Yaw",
        5: "Kofi",
        6: "Kwame"
    };

    if(gender === "female") {
        return female[day]
    } else {
        return male[day]
    };
}
