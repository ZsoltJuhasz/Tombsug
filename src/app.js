/*
* File: app.ts
* Author: Juhász Zsolt
* Copyright: 2021, Juhász Zsolt
* Group: Szoft 2 N
* Date: 2021-10-24
* Github: https://github.com/ZsoltJuhasz/
* Licenc: GNU GPL
*/
var side = document.querySelector("#side");
var angle = document.querySelector("#angle");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function calculate(side, angle) {
    var rad = angle * Math.PI / 180;
    return 1.0 / 2.0 * side * Math.sin(rad);
}
//console.log(add(30,35));
calcButton.addEventListener('click', function (event) {
    var res = calculate(+side.value, +angle.value);
    result.value = String(res);
});
