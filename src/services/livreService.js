// Service qui va faire du CRUD avec les livres


export const insererLivre = (titre,auteur,resume,estLu) => {
    // 1. Créer un objet javaScript à partir des données saisies
    const livre = {
        titre : titre,
        auteur : auteur,
        resume : resume,
        estLu : estLu,
        id : crypto.randomUUID() , //ID Unique
        createdAt : new Date().toDateString()
    }
   // console.log(livre)

    //Sérialiser (transformer) en JSON (chaîne de caractères)
    const livreJson = JSON.stringify(livre)
    console.log(livreJson)

    // 3. Sauvegarder dans le localstorage
    // 3.1 Récupérer dans le localStorage la valeur liée à la clé "livre"
    const livresJson = localStorage.getItem("livres")
    console.log(livresJson)
    // 3.2 Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson) : []
    //console.log(livres)
    //3.3 Ajouter l'objet livre dans le tableau livres
    livres.push(livre)
    //3.4 Sauvegarder le tableau livre dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livres))

}

export const rechercherTousLesLivres = () => {
    //Récupérer dans le localStorage la valeur liée à la clé "livre"
    const livresJson = localStorage.getItem("livres")
    //Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJson ? JSON.parse(livresJson) : []
    return livres
}