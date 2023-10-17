function openMenu(){
	document.getElementById('menu').style.display="block";
	document.getElementById('btn1').style.display="none";
}

function closeMenu(){
	document.getElementById('menu').style.display="none";
	document.getElementById('btn1').style.display="block";
}

function home(){
	
	var userEmail = "Neopfarelo31@gmail.com";
		var userPass = "Pfarelo@1234";
		var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	
	if (email == userEmail)
	{
		if (pass == userPass)
		{
				document.getElementById('div0').style.display="block";
				document.getElementById('div1').style.display="none";
		}
		else 
			{
						document.getElementById('error').style.display="block";
						document.getElementById('div1').style.display="block";
						document.getElementById('error').innerHTML="*Incorrect Password*";
			}	
	}
	else 
			{
						document.getElementById('error').style.display="block";
						document.getElementById('div1').style.display="block";
						document.getElementById('error').innerHTML="*Incorrect Email*";
			}
	
}