// Gestionnaire d'événements
import {insererLivre} from "../services/livreService.js";
import {afficherLivres} from "./render.js";
export const setupGestionnaire = () => {

    // Récupérer les éléments dans le DOM
    const toogleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection= document.querySelector("#formSection")
    const formCollapse= new bootstrap.Collapse(formSection,{toggle:false})
    const livreForm = document.querySelector('#bookForm')

        //Gestionnaire clic bouton toogleFormBtn
    toogleFormBtn.addEventListener("click",()=> {
        formCollapse.toggle()
    })

    // On reset le formulaire lorsque celui-ci est caché
    formSection.addEventListener('hidden.bs.collapse',()=>{
        livreForm.reset()
    })

    // Traitement du formulaire
    livreForm.addEventListener("submit",(evt)=>{
        // Empêcher le rechargement de la page
        evt.preventDefault()
        // Récupérer les valeurs saisies
        const titre = livreForm.title.value
        const auteur = livreForm.author.value
        const resume = livreForm.summary.value
        const estLu = livreForm.isRead.checked
        console.log(titre,auteur,resume,estLu)

        // Sauvegarder les données saisies
        insererLivre(titre,auteur,resume,estLu)
        formCollapse.hide()
        afficherLivres()

    })
}