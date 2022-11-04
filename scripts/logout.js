
const logoutFunction = async () => {

    const logoutBttn = document.getElementById("logoutBttn")

    logoutBttn.addEventListener("click", ()=>{

        localStorage.setItem("@KenzieEmpresas/LoggedUser:", "")

        window.location.href="/index.html"

    })

}

export { logoutFunction }