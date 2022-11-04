import { deleteUserToastfy } from "./deleteUserToastfy.js"


const deleteUser = async () => {

const delUserBttnArr = document.querySelectorAll("#delUserBttn")

const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

delUserBttnArr.forEach((bttn)=>{
    bttn.addEventListener("click", async (e)=>{
        
        const funcId = bttn.parentElement.parentElement.id
        const funcName = bttn.parentElement.parentElement.children[0].innerText

        const modalsSection = document.querySelector(".modalsSection")
        modalsSection.insertAdjacentHTML("beforeend", `
        
            <section class="delEmployeeModal">
                <section class="delEmployeeModalContainer">
                    <header class="deleModalHeader">
                        <button id="closeModalBttn">
                            <img src="/images/closebttn.svg" alt="">
                        </button>
                    </header>
                    <main class="deleModalMain">
                        <p class="deleModalParag">
                            Realmente deseja remover o usuário ${funcName}?
                        </p>
                        <button id="delEmployeeBttn">
                            Deletar
                        </button>
                    </main>

                </section>
            </section>

        `)

        // FECHAR MODAL
        const closeModalBttn = document.getElementById("closeModalBttn")
        closeModalBttn.addEventListener("click", ()=>{
            modalsSection.innerHTML=''
        })

        // REQUISIÇÃO DELETAR USER

        const delEmployeeBttnArr = document.querySelectorAll("#delEmployeeBttn")
        
        delEmployeeBttnArr.forEach((delbttn)=>{
            delbttn.addEventListener("click", async ()=>{

                try{
                    const deletar = await fetch(`http://localhost:6278/admin/delete_user/${funcId}`, {
                        method: "DELETE",
                        headers: {
                            "Authorization": `Bearer ${admin.token}`
                        }
                    })

                    deleteUserToastfy('sucesso')
                    setTimeout(()=>{
                        window.location.reload()
                    }, 3000)


                }catch(err){
                    console.log(err)
                }



            })
        })

    })
})

}

export { deleteUser }