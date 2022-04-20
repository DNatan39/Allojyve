// Div main

var main = document.getElementById('main');
var popularList;
var upcomingList;
var latestList;


function createElement(el, classname, id, container, href) {
    var element = document.createElement(el);
    element.id = id;
    element.classList.add(classname);
    container.appendChild(element);

    if (href !== null) {
        el.href = "#";
    }
}

// Pour le header.

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
createElement('div', 'NsectionAfter', 'NsectionAfter', document.getElementById('Nsection'));
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
a.textContent = "Accueil";

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

function createSection(sectionName, sectionId, list, main) {
    var section = document.createElement('section');
    section.id = sectionId;
    section.classList.add('Nclass1', 'Nclass2');

    main.appendChild(section);

    list.forEach(movie => {
        var card = document.createElement('div');
        card.id = movie.id;
        card.classList.add('Ncardclass')
        card.setAttribute('list', sectionId);

        var cardImg = document.createElement('img');
        cardImg.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
        cardImg.classList.add('Ntaclass');

        var cardTitle = document.createElement('h3');
        cardTitle.innerHTML = movie.title;

        card.appendChild(cardImg);
        card.appendChild(cardTitle);

        card.addEventListener('click', function () {
            var array;
            var listName = this.getAttribute('list');
            if (listName === "popular") {
                array = popularList;
            }
            if (listName === "upcoming") {
                array = upcomingList;
            }
            if (listName === "latest") {
                array = latestList;
            }

            array.forEach(film => {
                if (parseInt(this.id) === film.id) {
                    createModal(film);
                }
            });

        })

        section.appendChild(card);
    });

}

function createSlider(sectionName, sectionId, list, main){

    var arrayList;

    if (sectionId === "popular") {
        arrayList = popularList;
    }else if(sectionId === "latest"){
        arrayList = latestList;
    }else{
        arrayList = upcomingList;
    }

    let position = 0;

    main.classList.add('mobile');

    var left = document.createElement('button');
        left.classList.add('arrow', 'left-btn');
        left.id = "left-btn-"+sectionId;
        left.addEventListener('click', function(){
            console.log(position); 
            if (position > 0) {
                position--;
                img.src = 'https://image.tmdb.org/t/p/original' + arrayList[position].poster_path;
                img.setAttribute('data-id', arrayList[position].id);
            }else{
                position = arrayList.length - 1;
                img.src = 'https://image.tmdb.org/t/p/original' + arrayList[position].poster_path;
                img.setAttribute('data-id', arrayList[position].id);
            }  
           
        })

    var leftIcon = document.createElement('i');
        leftIcon.classList.add('arrow');
        left.appendChild(leftIcon);

    main.appendChild(left);


    var img = document.createElement('img');
        img.id = "carousel"+sectionId;
        img.src = 'https://image.tmdb.org/t/p/original' + arrayList[0].poster_path
        img.setAttribute('data-id', arrayList[0].id);
        img.setAttribute('data-list', sectionId);
        img.addEventListener('click', function () {
            var array;
            var listName = this.getAttribute('data-list');
            if (listName === "popular") {
                array = popularList;
            }
            if (listName === "upcoming") {
                array = upcomingList;
            }
            if (listName === "latest") {
                array = latestList;
            }

            array.forEach(film => {
                if (parseInt(this.getAttribute('data-id')) === film.id) {
                    createModal(film);
                }
            });

        })

    main.appendChild(img);

    var right = document.createElement('button');
        right.classList.add('arrow', 'right-btn');
        right.id = "right-btn-"+sectionId;
        right.addEventListener('click', function(){
            console.log(position); 
            if (position < 19) {
                position++;
                img.src = 'https://image.tmdb.org/t/p/original' + arrayList[position].poster_path;
                img.setAttribute('data-id', arrayList[position].id);
            }else{
                position = 0;
                img.src = 'https://image.tmdb.org/t/p/original' + arrayList[position].poster_path;
                img.setAttribute('data-id', arrayList[position].id);
            }
        })
    var rightIcon = document.createElement('i');
        rightIcon.classList.add('arrow');
        right.appendChild(rightIcon);

    main.appendChild(right);



}

function getMovieInfos(id) {
    return new Promise((resolve, reject) => {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.themoviedb.org/3/movie/' + id + '?api_key=6c904723a32a3fd1ccc74a46870a083b&language=fr-FR');
        xhr.onload = () => {
            var res = JSON.parse(xhr.response);
            resolve(res);
        }
        xhr.send();

    })
}

function createModal(movie) {

    createElement('div', 'modal', 'modal', document.getElementById('Nsection'));
    var close = document.createElement('i');
    close.classList.add('fa-xmark', 'fa-solid', 'close');
    close.addEventListener('click', function () {
        this.parentNode.remove();
    })
    document.getElementById('modal').appendChild(close);


    var poster = document.createElement('img');
    poster.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path

    var modalContent = document.createElement('div');
    modalContent.id = 'modalContent';

    document.getElementById('modal').appendChild(poster);
    document.getElementById('modal').appendChild(modalContent);

    var modalTitle = document.createElement('h2');
    modalTitle.innerHTML = movie.title;

    document.getElementById('modalContent').appendChild(modalTitle);

    var releaseDate = displayFrenchFullDate(movie.release_date);

    var releaseParagraph = document.createElement('p');
    var spanReleaseParagraph = document.createElement('span');
    spanReleaseParagraph.innerHTML = "Date de sortie : ";
    releaseParagraph.appendChild(spanReleaseParagraph);
    releaseParagraph.innerHTML += releaseDate;

    modalContent.appendChild(releaseParagraph);

    getMovieInfos(movie.id).then(res => {

        var productor = document.createElement('p');
        var spanproductor = document.createElement('span');
        spanproductor.innerHTML = "Société de production : ";
        productor.appendChild(spanproductor);
        productor.innerHTML += res.production_companies[0].name;

        modalContent.appendChild(productor);

        var originaltitle = document.createElement('p');
        var spanoriginaltitle = document.createElement('span');
        spanoriginaltitle.innerHTML = "Titre original : ";
        originaltitle.appendChild(spanoriginaltitle);
        originaltitle.innerHTML += res.original_title;

        modalContent.appendChild(originaltitle);

        var productorCountry = document.createElement('p');
        var spanproductorCountry = document.createElement('span');
        spanproductorCountry.innerHTML = "Pays de production : ";
        productorCountry.appendChild(spanproductorCountry);
        productorCountry.innerHTML += res.production_countries[0].name;

        modalContent.appendChild(productorCountry);

        var overview = document.createElement('p');
        overview.classList.add('modalOverview');
        overview.innerHTML += res.overview;

        modalContent.appendChild(overview);


    });

}

function createAlert(movies) {

    createElement('div', 'alert', 'alert', document.getElementById('Nsection'));
    var close = document.createElement('i');
    close.classList.add('fa-xmark', 'fa-solid', 'close');
    close.addEventListener('click', function () {
        this.parentNode.remove();
    })
    document.getElementById('alert').appendChild(close);

    var title = document.createElement('h3');
    title.innerHTML = "New Releases";

    document.getElementById('alert').appendChild(title);

    var ul = document.createElement('ul');
    ul.id = "alertUl";
    document.getElementById('alert').appendChild(ul);

    console.log(movies);
    movies.forEach(movie => {
        var li = document.createElement('li');
        li.innerHTML = movie;

        document.getElementById('alertUl').appendChild(li);
    });

}

Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) < 0;
    });
};

function checkNewRelease(list, listName) {

    return new Promise((resolve, reject) => {
        var arrayId = [];
        list.forEach(element => {
            arrayId.push(element.id);
        });

        if (!localStorage.getItem(listName)) {
            localStorage.setItem(listName, JSON.stringify(arrayId));
            return;
        }

        var lastArrayId = JSON.parse(localStorage.getItem(listName));
        localStorage.setItem(listName, JSON.stringify(arrayId));
        console.log(lastArrayId)

        var newReleaseId = arrayId.diff(lastArrayId);
        console.log(newReleaseId)
        var newReleaseName = [];
        newReleaseId.forEach(function (id, i) {
            getMovieInfos(id).then(res => {
                newReleaseName.push(res.title);
                if (i + 1 === newReleaseId.length) {
                    resolve(newReleaseName)
                }
            })
        });

    })

    // check difference between arrayId and lastArrayId
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=6c904723a32a3fd1ccc74a46870a083b&language=fr-FR&page=1');
xhr.onload = () => {
    if (xhr.status === 200) {
        // On stock la liste de film récupérée dans la variable res en la convertissant de json à un object JS puis on parcour le tableau pour se rendre dans les résultats
        var res = JSON.parse(xhr.response).results;
        popularList = res;
        console.log(res);
        // res.forEach(element => {
        //     if (element.id === 675353) {
        //         element.id+=10
        //     }
        //     if (element.id === 508947) {
        //         element.id+=3
        //     }
        // });
        if (window.matchMedia("(max-width: 1024px)").matches) {
            createSlider('Populaires', 'popular', res, document.getElementById('Npopulaires'))
        } else{
            createSection('Populaires', 'popular', res, document.getElementById('Npopulaires'));
        }      
       
        checkNewRelease(res, 'popular').then(res => {
            createAlert(res);
        });
    }
}




xhr.send()

var xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=6c904723a32a3fd1ccc74a46870a083b&language=fr-FR&page=1');
xhr3.onload = () => {
    if (xhr3.status === 200) {
        // On stock la list de film récupérer dans la variable res en la convertissant de json à object js puis on parcour le tableau pour se rendre dans results
        var res = JSON.parse(xhr3.response).results;
        latestList = res;
        console.log(res);

        if (window.matchMedia("(max-width: 1024px)").matches) {
            createSlider('Dernières sorties', 'latest', res, document.getElementById('Ndernière'))
        }else{
            createSection('Dernières sorties', 'latest', res, document.getElementById('Ndernière'));
        }
        

    }
}

xhr3.send()

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=6c904723a32a3fd1ccc74a46870a083b&language=fr-FR&page=1');
xhr2.onload = () => {
    if (xhr2.status === 200) {
        // On stock la list de film récupérer dans la variable res en la convertissant de json à object js puis on parcour le tableau pour se rendre dans results
        var res = JSON.parse(xhr2.response).results;
        upcomingList = res;
        console.log(res);

        if (window.matchMedia("(max-width: 1024px)").matches) {
            createSlider('À venir', 'upcoming', res, document.getElementById('Navenir'))
        }else{
            createSection('À venir', 'upcoming', res, document.getElementById('Navenir'));
        }
        

    }
}
xhr2.send()




function displayFrenchFullDate(date) {
    var newDate = new Date(date);

    var month = newDate.getMonth();

    var monthString;

    if (month === 0) {
        monthString = "Janvier";
    } else if (month === 1) {
        monthString = "Février";
    } else if (month === 2) {
        monthString = "Mars";
    } else if (month === 3) {
        monthString = "Avril";
    } else if (month === 4) {
        monthString = "Mai";
    } else if (month === 5) {
        monthString = "Juin";
    } else if (month === 6) {
        monthString = "Juillet";
    } else if (month === 7) {
        monthString = "Août";
    } else if (month === 8) {
        monthString = "Septembre";
    } else if (month === 9) {
        monthString = "Octobre";
    } else if (month === 10) {
        monthString = "Novembre";
    } else if (month === 11) {
        monthString = "Décembre";
    }

    var day = newDate.getDate();
    if (day < 10) {
        day = "0" + day.toString();
    }

    var years = newDate.getFullYear().toString();

    return day + ' ' + monthString + ' ' + years;
}

const img = document.getElementById('popular');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);