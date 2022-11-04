

const validacaoLogin = () =>{

    const loggedUser = localStorage.getItem("@KenzieEmpresas/LoggedUser:")

    if( loggedUser == ""){
        window.location.href="/index.html"
    }


}

export { validacaoLogin }