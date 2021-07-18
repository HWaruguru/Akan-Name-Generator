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
        4: "Yaa",
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
};

function getGender(){
    var gender = null;
    if (document.getElementById("male").checked) {
        gender = "male"
    } else {
        gender = "female"

        };
    return gender;
};


var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var gender = getGender()
    var dayOfWeek = getDayofWeek(year, month, day);
    var name = getName(gender, dayOfWeek)
    alert("Your Akan name is " + name)
})
