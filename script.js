//Select the elements
let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function pickColors() {
    body.style.background =
		"linear-gradient(to right,"
        + color1.value
        + ", "
        + color2.value
        +")";
//Add CSS in text in body
        css.textContent = body.style.background + ';';
}

color1.addEventListener('input', pickColors);
color2.addEventListener('input', pickColors);



//Add an input function on 'color1'
//Apply color1 values to background
// color1.addEventListener('input', function (){
//     body.style.background =
// 		"linear-gradient(to right,"
//         + color1.value
//         + ", "
//         + color2.value
//         +")";
// })

//Add an input function on 'color2'
//Apply color2 values to background
// color2.addEventListener('input', function (){
//     body.style.background =
// 		"linear-gradient(to right,"
//         + color1.value
//         + ", "
//         + color2.value
//         +")";
// })

