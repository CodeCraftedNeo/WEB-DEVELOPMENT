function darkmode() {
 
document.getElementById('container').style.backgroundColor ="gray";
document.getElementById('container').style.color ="white";
document.getElementById('logo').style.color ="blue";
document.getElementById('label1').style.color ="white";
document.getElementById('label2').style.color ="white";
document.getElementById('label3').style.color ="white";
document.getElementById('label4').style.color ="white";
document.getElementById('darkmode').style.display="none";
document.getElementById('lightmode').style.display="block";

}

function lightmode() {
 
document.getElementById('container').style.backgroundColor ="white";
document.getElementById('container').style.color ="black";
document.getElementById('logo').style.color ="black";
document.getElementById('label1').style.color ="black";
document.getElementById('label2').style.color ="black";
document.getElementById('label3').style.color ="black";
document.getElementById('label4').style.color ="black";
document.getElementById('darkmode').style.display="block";
document.getElementById('lightmode').style.display="none";
}

//darkmode();
//setInterval(show, 1000);