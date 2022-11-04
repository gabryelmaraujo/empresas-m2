import { userInfosEditToastfy } from "./userInfosEditToastfy.js"


const editUserInfos = async () => {

    const loggedUser = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    const editUserBttn = document.getElementById("editUserInfosBttn")
    editUserBttn.addEventListener("click", async ()=>{

        const modalsSection = document.querySelector(".modalsSection")

        modalsSection.insertAdjacentHTML("beforeend", `
        
            <section class="editUserModalContainer">
                <section class="editUserModal">
                    <div class="closeModal">
                        <button id="closeModalBttn">
                            <img src="/images/closebttn.svg" alt="">
                        </button>
                    </div>
                    <div class="modalTitle">
                        <p>Editar perfil</p>
                    </div>
                    <div class="editFormDiv">
                        <form class="editForm" id="editUserForm">
                            <input type="text" name="newUsername" id="newUsername" placeholder="Seu nome">
                            <input type="email" name="newEmail" id="newEmail" placeholder="Seu e-mail">
                            <input type="password" name="newPass" id="newPass" placeholder="Sua senha">
                            <button id="editUserBttn">Editar perfil</button>
                        </form>
                    </div>
            </section>

        `)

        // FECHAR MODAL
        const closeBttn = document.getElementById("closeModalBttn")
        closeBttn.addEventListener("click", ()=>{
            modalsSection.innerHTML=""
        })

        //REQUISIÇÃO PARA EDITAR INFOS

        const form = document.getElementById("editUserForm")
        const formElements = form.elements 

        const attBody = {
            "username": formElements[0].value,
            "email": formElements[1].value,
            "password": formElements[2].value
        }
        
        formElements[3].addEventListener("click", async (e)=> {
            e.preventDefault()

            try{

                const edit = await fetch("http://localhost:6278/users",{
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${loggedUser.token}`
                    },
                    body: JSON.stringify({
                        "username": formElements[0].value,
                        "email": formElements[1].value,
                        "password": formElements[2].value
                    })
                })

                const response = await edit.json()
                

                if(response.uuid){

                    userInfosEditToastfy("sucesso")

                    setTimeout(()=>{
                        window.location.reload()
                    },3000)

                }else{
                    userInfosEditToastfy("erro")
                }


            }catch(err){
                console.log(err)
            }




        })

    })

}

export { editUserInfos }