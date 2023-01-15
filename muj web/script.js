function loadMainPage(){
    window.location.replace('index.html');
}
function loadSchoolPage(){
    window.location.replace('school.html');
}
function loadPersonalPage(){
    window.location.replace('personal.html');
}
function loadContactsPage(){
    window.location.replace('contacts.html');
}
function displayDate(){
	var date = new Date();
	var current_date = date.getDate() + "." +(date.getMonth()+1) + ". " +date.getFullYear();
	document.getElementById("datum").innerHTML = current_date;
}