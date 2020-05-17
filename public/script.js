// //const {default:axios} = require('axios');
// const bodyparser = require('body-parser'

const fullName = document.querySelector('#fullName').value;
const mail = document.getElementById('mail').value;
const alert = document.getElementById('alert');
exports = function err(){
    const errorMessage = "Please Input Neccasary Values"
    alert.createTextNode(errorMessage);
}
