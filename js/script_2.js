/**
 * Created by kozin on 12.09.2016.
 */


function authorization() {

    var userNames = [];
    var test = false;

    for (var i = 0; i < 5; i++) {

        var name = prompt('Enter a name');
        userNames.push(name);
    }


    var myName = prompt('Enter your name');

    for (var j = 0; j < userNames.length; j++) {

        if (myName == userNames[j]) {

            test = true;
        }
    }

    if (test == true) {

        alert(myName + ', you have successfully entered')

    } else {

        alert('Error!!! You are not authorized')
    }
}

authorization();


