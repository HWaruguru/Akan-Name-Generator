function getDayofWeek(year, month, day) {
    var date = new Date(year+"/"+month+"/"+day);
    return date.getDay();
}