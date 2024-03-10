/*

    L'utilisateur arrive sur le site : existe-t-il un localStorage qui s'appelle "theme" ?

        Oui

            Sa valeur est égale à "sombre" ?

                Oui : on appelle la fonction modeSombre()

                Non : on ne fait rien

        Non : on ne fait rien

    L'utilisateur clique sur le bouton pour changer de thème

        Body a-t-il une classe "dark" ?

            Oui

                On retire les classes de Body

                On change le texte du bouton en "Thème sombre"

                On définit le localStorage avec le nom "theme" sur "clair"

            Non

                On appelle la fonction modeSombre()

La fonction modeSombre() va se charger :

    De mettre la classe de Body sur "dark"

    De changer le texte du bouton en "Thème clair"

    De définir le localStorage avec le nom "theme" sur "sombre"

Vous vous demandez pourquoi créer une fonction modeSombre() et ne pas créer une fonction modeClair() ? Vous allez comprendre dans les prochaines étapes !
*/

let btn_mode = document.querySelector('#mode');
let span_text_btn = document.querySelector('span');

btn_mode.addEventListener('click', ()=>{
    if (document.body.classList.contains('dark')){//On vérifie si l'élément body a dans sa liste de classe, la classe dark
        document.body.classList.remove('dark');
        // document.body.className = '';
        span_text_btn.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    }
    else{
        modeSombre();
    }
})

function modeSombre() {
    document.body.classList.add('dark');
    span_text_btn.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
}

if (localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'sombre'){
        modeSombre();
    }
    else{
        
    }
}