confirm("🖥CODE_PREDAT⭕RS⌨️ would like to send you Notifications 🔔");

function main() {
	
	document.getElementById("selectOne").style.display ="block";

	
	var page1 = document.getElementById("page_1");
	var page2 = document.getElementById("student");
	var page3 = document.getElementById("teacher");
	
	var selectedRadio  = document.querySelector('input[name="rad_select"]:checked');
	var radio = selectedRadio.value;
	
	if(radio == "student")
	{
		document.getElementById("selectOne").style.display ="block";
		page1.style.display = "none";
		page2.style.display = "block";
		confirm("You are going to the STUDENT's 👩‍🎓 Portal");
		
	}else if(radio == "teacher")
	{
		confirm("You are going to the TEACHER's 👨‍🏫 Portal");
		document.getElementById("selectOne").style.display ="none";
		page1.style.display = "none";
		page2.style.display = "none";
		page3.style.display = "block";
		
	}
}

function Studlogin() {

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	if(email != "224653867@tut4life.ac.za" && password != "Pfarelo1234")
	{
		document.getElementById("incorrect").style.display ="block";
		document.getElementById("left_side").style.display ="none";
	}else {
		document.getElementById("login").style.display ="none";
		document.getElementById("left_side").style.display ="block";
		
	}
	
}