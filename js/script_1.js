/**
 * Created by kozin on 12.09.2016.
 */

var i = 0;
var b = 1;
var a = prompt('Enter a number');
var x = prompt('Enter a degree');

function pow(a, x) {

    if (x >= 0) {

        while (x > i) {
            b = b * a;
            i++;
        }
    } else {

        while (x < i) {
            b = b * a;
            i--;
        }
        b = 1 / b;
    }

    alert(b);
}

pow(a, x);
