const fullName = document.getElementById('fullName').value;
const mail = document.getElementById('mail').value;
const submit = document.getElementById('submit');

function log(e) {
    e.preventDefault();
    console.log(fullName);
    axios.post('http://localhost:3000/post', {
        Fullname: fullName,
        mail: mail
    })
}
submit.addEventListener('click', log, false);