// var main = document.getElementById('main');
// var div1 = document.createElement('div');
// var h1 = document.createElement('h1');

// div1.id="Truc";

// div1.appendChild(h1);


// h1.textContent="Coucou";
// main.appendChild(div1);



var main = document.getElementById('main');

// background

// var trianglenoir = document.createElement('div');
// trianglenoir.id="trianglenoir";
// main.appendChild(trianglenoir);

// var trianglejaune = document.createElement('div');
// trianglejaune.id="trianglejaune";
// main.appendChild(trianglejaune);


// Pour le header.

function createElement(el, classname, id, container, href){
    var element = document.createElement(el);
    element.id=id;
    element.classList.add(classname);
    container.appendChild(element);

    if (href !== null) {
        el.href="#";
    }
}

createElement('header', 'header' , 'Nheader', document.getElementById('main'), null);
createElement('div', 'Nlogoprincipal' , 'Nlogoprincipal', document.getElementById('Nheader'), null);
createElement('a', 'NLogo' , 'NLogo', document.getElementById('Nlogoprincipal'), null);





// var header = document.createElement('header');
// main.appendChild(header);

// Le logo principal.

// var Nlogoprincipal = document.createElement('div');
// Nlogoprincipal.id="Nlogoprincipal";
// Nheader.appendChild(Nlogoprincipal);

var NLogo = document.createElement('a');
NLogo.href="#";
NLogo.id="NLogo";
Nlogoprincipal.appendChild(NLogo);

// Menu nav pour le header.

var Nburger = document.createElement('div');
Nburger.id="Nburger";
Nheader.appendChild(Nburger);

var Nburgercontent = document.createElement('div');
Nburgercontent.id="Nburgercontent";
Nburger.appendChild(Nburgercontent);

var Nliste = document.createElement('nav');
Nliste.classList="Nliste";
Nburgercontent.appendChild(Nliste);

// Liste à puce.

var ul = document.createElement('ul');
Nliste.appendChild(ul);

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href="#";
li.appendChild(a);
a.textContent="Acceuil";

var span = document.createElement('span');
ul.appendChild(span);

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href="#";
li.appendChild(a);
a.textContent="Populaires";

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href="#";
li.appendChild(a);
a.textContent="Dernières Sorties";

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href="#";
li.appendChild(a);
a.textContent="À Venir";

var Nburgerbutton = document.createElement('button');
Nheader.appendChild(Nburgerbutton);
Nburgerbutton.id="Nburgerbutton";
Nburgerbutton.textContent="\u2630";

var Nburgersidebar = document.createElement('div');
Nburgersidebar.id="Nburgersidebar";
Nheader.appendChild(Nburgersidebar);

var Nburgersidebarheader = document.createElement('div');
Nburgersidebarheader.id="Nburgersidebarheader";
Nburgersidebar.appendChild(Nburgersidebarheader);

var Nburgersidebarbody = document.createElement('div');
Nburgersidebarbody.id="Nburgersidebarbody";
Nburgersidebar.appendChild(Nburgersidebarbody);

var Nburgeroverlay = document.createElement('div');
Nburgeroverlay.id="Nburgeroverlay";
Nheader.appendChild(Nburgeroverlay);

var Nreseaux = document.createElement('div');
Nreseaux.id="Nreseaux";
Nburgersidebar.appendChild(Nreseaux);

// Les icons pour les réseaux sociaux.

var icontwitter = document.createElement('a');
icontwitter.classList="fa-brands fa-instagram color";
Nreseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList="fa-brands fa-twitter color";
Nreseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList="fa-brands fa-facebook-f color";
Nreseaux.appendChild(icontwitter);

// les Sections 

var NBarrefix = document.createElement('section');
NBarrefix.id="NBarrefix";
main.appendChild(NBarrefix);

var NBarrediv = document.createElement('div');
NBarrediv.id="NBarrediv";
NBarrefix.appendChild(NBarrediv);

var textContentTitle = ['Populaires','Dernières Sorties', 'À Venir']
for (let i = 0; i < textContentTitle.length; i++) {
var NTitlediv1 = document.createElement('p');
NTitlediv1.id="NTitlediv"+(i+1);
NBarrediv.appendChild(NTitlediv1);
NTitlediv1.textContent=textContentTitle[i];
}

var NSection1 = document.createElement('section')
NSection1.id="NSection1";
main.appendChild(NSection1)


// Barre de navigation

var content = document.querySelector('#Nburgercontent');
var sidebarBody = document.querySelector('#Nburgersidebarbody');
var button = document.querySelector('#Nburgerbutton');
var overlay = document.querySelector('#Nburgeroverlay');
var activatedClass = 'Nburger-activated'


sidebarBody.innerHTML = content.innerHTML

button.addEventListener('click', function(e){
    e.preventDefault();
    
    this.parentNode.classList.add(activatedClass);
});

overlay.addEventListener('click', function(e){
    e.preventDefault();
    
    this.parentNode.classList.remove(activatedClass);
});





