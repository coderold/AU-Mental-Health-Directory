const submit = document.getElementById("loginsubmit");


const adminEmail = "123";
const adminPass = "123";

submit.onclick = load();

function load() {
    var logEmail = document.getElementById("logEmail").value;
    var logPass = document.getElementById("logPass").value;
    if (logEmail == adminEmail && logPass == adminPass){
        window.open("http://127.0.0.1:5500/getStarted.html");
    }
}