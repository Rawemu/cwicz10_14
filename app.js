/**
 * Created by Szpak on 2015-11-24.
 */

//Zadanie10
/*
//Ten kod symetrycznie formatuje "polozoną choinke" niezaleznie od liczby kolumn oraz wierszy

var maxColumn = 5;
var maxRow = 10;
var line = "";
var j = 1;
var diff = maxRow/2 - maxColumn; //diff jest tutaj

for (var i=1; i <= maxRow; i++) {
    if (i <= (maxRow/2)) {
        for (j = 1; j <= maxColumn; j++) {
            if (i >= j) {
                line = line + "*";
            }
            else {
                line = line + j;
            }
        }
    }
    else {
        for (j = 1; j <= maxColumn; j++){
            if (((i+j) - (maxRow/2)) <= maxColumn + 1 + diff) {       //diff jest tutaj
                line = line + "*";
            }
            else{
                line = line + j;
            }
        }
    }
    console.log(line);
    line = "";
}
*/
//Zadanie11
/*
var n = 20;

for (var i = 0; i <= n; i++){
    if ((i % 2) ===  0){
        console.log(i + " - parzysta");
    }
    else if ((i % 2) === 1){
        console.log(i + " - nieparzysta");
    }
    else{
        console.log("Error");
    }
}
 */
//Zadanie12
/*
var n = 8;
line = "";

for (var i = 1; i <= n; i++){
    for (var j = 1; j <= n; j++){
        line = line + i + " x " + j + " = " + i*j + "   ";
    }
    console.log(line);
    line = "";
}
*/
//Zadanie13 (wersja a)
/*
var pi = 0;
var n = 10000;

for (var i = 1; i < n; i = i + 4){
    pi = pi + ((1 / i) - (1 / (i + 2)));
}

pi = 4 * pi;

console.log(pi);
*/
//Zadanie13 (wersja b)
/*
var pi = 0;
var n = 10000;
var NextNumberPlus = true;

for (var i = 1; i < n; i = i + 2){
    if (NextNumberPlus == true){
        pi = pi + (1/i);
        NextNumberPlus = false;
    }
    else{
        pi = pi - (1/i);
        NextNumberPlus = true;
    }
}

pi = 4 * pi;

console.log(pi);
*/
//Zadanie15
/*
var line = ""

function FooBar(n){
    for (var i = 1; i <= n; i++){
        if((i%3===0)&&(i%5===0)) {
            line = line + "FOOBAR";
        }
        else{
            if(i%3===0){
                line = line + "Foo";
            }
            else if (i%5===0){
                line = line + "Bar";
            }
            else{
                line = line + i;
            }
        }
    }
    console.log(line);
    line = "";
};

FooBar(15);
FooBar(25);
*/