var menu = document.getElementsByClassName('menu');
var elem = document.getElementById('hamburg');

function showMenu(){
for(var i=0; i<menu.length; i++){
menu[i].classList.add('showMenu');
}
elem.onclick = hideMenu;
}



function hideMenu(){
for(var i=0; i<menu.length; i++){
menu[i].classList.remove('showMenu');
}
elem.onclick = showMenu;
}