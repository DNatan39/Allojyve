// var main = document.getElementById('main');
// var div1 = document.createElement('div');
// var h1 = document.createElement('h1');

// div1.id="Truc";

// div1.appendChild(h1);


// h1.textContent="Coucou";
// main.appendChild(div1);

var main = document.getElementById('main');

// Pour le header.

function createElement(el, classname, id, container, href) {
    var element = document.createElement(el);
    element.id = id;
    element.classList.add(classname);
    container.appendChild(element);

    if (href !== null) {
        el.href = "#";
    }
}

// Div main

createElement('header', 'header', 'Nheader', document.getElementById('main'), null);

// Header

createElement('div', 'Nlogoprincipal', 'Nlogoprincipal', document.getElementById('Nheader'), null);
createElement('a', 'NLogo', 'NLogo', document.getElementById('Nlogoprincipal'));
createElement('div', 'NBurger', 'Nburger', document.getElementById('Nheader'), null);

// div nav

createElement('div', 'Nburgercontent', 'Nburgercontent', document.getElementById('Nburger'), null);
createElement('nav', 'Nliste', 'Nliste', document.getElementById('Nburgercontent'), null);
createElement('button', 'Nburgerbutton', 'Nburgerbutton', document.getElementById('Nheader'), null);
Nburgerbutton.textContent = "\u2630";
createElement('div', 'Nburgersidebar', 'Nburgersidebar', document.getElementById('Nheader'), null);
createElement('div', 'Nburgersidebarheader', 'Nburgersidebarheader', document.getElementById('Nburgersidebar'), null);
createElement('div', 'Nburgersidebarbody', 'Nburgersidebarbody', document.getElementById('Nburgersidebar'), null);
createElement('div', 'Nburgeroverlay', 'Nburgeroverlay', document.getElementById('Nheader'), null);
createElement('div', 'Nreseaux', 'Nreseaux', document.getElementById('Nburgersidebar'), null);

// Section

createElement('section', 'Nsection', 'Nsection', document.getElementById('main'));
createElement('div', 'Ndiv', 'Npopulaires', document.getElementById('Nsection'));
createElement('p', 'Npara1', 'Npara1', document.getElementById('Npopulaires'));
Npara1.textContent = "Populaires";
createElement('div', 'Ndiv', 'Ndernière', document.getElementById('Nsection'));
createElement('p', 'Npara2', 'Npara2', document.getElementById('Ndernière'));
Npara2.textContent = "Dernière sorties";
createElement('div', 'Ndiv', 'Navenir', document.getElementById('Nsection'));
createElement('p', 'Npara3', 'Npara3', document.getElementById('Navenir'));
Npara3.textContent = "À Venir";

// Footer

createElement('footer', 'Nfoot', 'Nfoot', document.getElementById('main'));
createElement('div', 'Ndivlogo', 'Ndivlogo', document.getElementById('Nfoot'));

createElement('div', 'Ndivinfo', 'Ndivinfo', document.getElementById('Nfoot'));
createElement('a', 'Nparainfo', 'Nparainfo', document.getElementById('Ndivinfo'));
Nparainfo.textContent = "Contact | Qui sommes-nous | Publicité | CGU | Politique de cookies | Préférences cookies | Données personnelles | Mentions légales  | Les services Allojyvé | ©Allojyvé";

createElement('div', 'Ndivréseaux', 'Ndivréseaux', document.getElementById('Nfoot'));
createElement('p', 'Ntitleréseaux', 'Ntitleréseaux', document.getElementById('Ndivréseaux'));
Ntitleréseaux.textContent = "Suivez-nous"
createElement('div', 'Nfootdivréseaux', 'Nfootdivréseaux', document.getElementById('Ndivréseaux'));

// Liste à puce.

var ul = document.createElement('ul');
Nliste.appendChild(ul);

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href = "#";
li.appendChild(a);
a.textContent = "Acceuil";

var span = document.createElement('span');
ul.appendChild(span);

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href = "#";
li.appendChild(a);
a.textContent = "Populaires";

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href = "#";
li.appendChild(a);
a.textContent = "Dernières Sorties";

var li = document.createElement('li');
ul.appendChild(li);
var a = document.createElement('a');
a.href = "#";
li.appendChild(a);
a.textContent = "À Venir";

// Les icons pour les réseaux sociaux.

var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-instagram color";
Nreseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-twitter color";
Nreseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-facebook-f color";
Nreseaux.appendChild(icontwitter);

var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-instagram color";
Nfootdivréseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-twitter color";
Nfootdivréseaux.appendChild(icontwitter);
var icontwitter = document.createElement('a');
icontwitter.classList = "fa-brands fa-facebook-f color";
Nfootdivréseaux.appendChild(icontwitter);

// Barre de navigation

var content = document.querySelector('#Nburgercontent');
var sidebarBody = document.querySelector('#Nburgersidebarbody');
var button = document.querySelector('#Nburgerbutton');
var overlay = document.querySelector('#Nburgeroverlay');
var activatedClass = 'Nburger-activated'


sidebarBody.innerHTML = content.innerHTML

button.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.add(activatedClass);
});

overlay.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.remove(activatedClass);
});

// Section + Div pour les films.

function createSection(sectionName, sectionId, list, main){
    var section = document.createElement('section');
        section.id = sectionId;
        section.classList.add('Nclass1', 'Nclass2');

    main.appendChild(section);

    var sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = sectionName;
        section.classList.add('Nclass');

    section.appendChild(sectionTitle);

    list.forEach(movie => {
        var card = document.createElement('div');
            card.id = movie.id;
            
        var cardImg = document.createElement('img');
            cardImg.src = movie.img;
            cardImg.classList.add('Ntaclass');

        var cardTitle = document.createElement('h3');
            cardTitle.innerHTML = movie.title;

        card.appendChild(cardImg);
        card.appendChild(cardTitle);

        card.addEventListener('click', function(){
            alert('film avec id '+this.id+' clicked');
        })

        section.appendChild(card);
    });

}

createSection('populaires', 'popular', data, main);