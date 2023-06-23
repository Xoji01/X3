function time() {
let date = new Date();
let hours = date.getHours (); 
let min = date.getMinutes ();
let sec = date.getSeconds ();
if(min === 10 && hours === 19) {alert('Будульник')}
}setInterval (time,1000)