// //const {default:axios} = require('axios');
// const bodyparser = require('body-parser'

// import Axios from "axios";

// const fullName = document.querySelector('#fullName').value;
// const mail = document.getElementById('mail').value;
const alert = document.getElementById('alert');
exports = function err(){
    const errorMessage = "Please Input Neccasary Values"
    alert.createTextNode(errorMessage);
}

const url = "http://localhost:3000/"
function post(e){
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const mail = document.getElementById('mail').value;
    const data ={fullname,mail}
    console.log(data)
    axios.post(url,data)
    .then(res=>{
        console.log(res)
        const {fullname,mail} = res.data
        // let url = new URL(`http://localhost:3000/admin?fullname=${fullname}&mail=${mail}`);
        let url = new URL(`http://localhost:3000/admin`);

        window.location.href = url;
    })
    .catch(err=>{
        console.log(err)
    })
}

function queryLink(){

}