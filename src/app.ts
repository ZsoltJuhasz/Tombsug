/*
* File: app.ts
* Author: Juhász Zsolt
* Copyright: 2021, Juhász Zsolt
* Group: Szoft 2 N
* Date: 2021-10-24
* Github: https://github.com/ZsoltJuhasz/
* Licenc: GNU GPL
*/

const side = document.querySelector("#side") as HTMLInputElement;
const angle = document.querySelector("#angle") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function calculate(side: number,angle: number):number{
    let rad = angle * Math.PI/180;
    return  1.0/2.0 * side * Math.sin(rad);
}

//console.log(add(30,35));

calcButton.addEventListener('click',event => {
    let res = calculate(+side.value, +angle.value);
    result.value = String(res);
});