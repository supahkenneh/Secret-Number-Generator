'use strict';
module.exports = function() {

var secretNumber = Math.floor(Math.random()*1000001);

function randomNumber(){
    return secretNumber;
}

return randomNumber;
};