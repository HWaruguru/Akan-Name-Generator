var isTriangle = function(a, b, c) {
    if (a === b && b === c && a === c) {
        return "an equilateral";
    } else if (a === b || c === a || b === c) {
        return "an isosceles";
    } else if (a + b <= c || b + c <= a || a + c <= b) {
        return "not a triangle";
    } else {

        return "a scalene";
    }
}

var checkTriangle = function() {
    event.preventDefault()
    triForm = document.getElementById('triangle')
    a = parseInt(triForm.elements.sideOne.value)
    b = parseInt(triForm.elements.sideTwo.value)
    c = parseInt(triForm.elements.sideThree.value)
    console.log(a , b, c)
    alert("Your triangle is " + isTriangle(a, b, c))
}