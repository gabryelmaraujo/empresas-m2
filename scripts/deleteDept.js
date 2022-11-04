import { deleteDeptToastfy } from "./deleteDeptToastfy.js"



const deleteDept = async () => {

const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

const delDeptButtonArr = Array.from(document.querySelectorAll("#delDeptBttn"))

delDeptButtonArr.forEach((bttn)=>{
    bttn.addEventListener('click', async (e)=>{

        const deptId = bttn.parentElement.parentElement.id
        const deptName = bttn.parentElement.parentElement.children[0].innerText

        const modalsSection = document.querySelector(".modalsSection")
        modalsSection.innerHTML=''

        modalsSection.insertAdjacentHTML("beforeend", `

        <section class="delDeptModal">
            <section class="delDeptContainer">
                <header class="ddmHeader">
                    <button id="closeModalBttn">
                        <img src="/images/closebttn.svg" alt="">
                    </button>
                </header>
                <p class="modalParag">
                    Realmente deseja deletar o departamento ${deptName} e demitir seus funcionários?
                </p>
                <div class="ddmBttnDiv">
                    <button id="deletDeptBttn">Confirmar</button>
                </div>

            </section>
        </section>
        `)

        // CLOSE MODAL
        const closeModalBttn = document.getElementById("closeModalBttn")
        closeModalBttn.addEventListener("click", ()=>{
            modalsSection.innerHTML=""
        })

        // REQUISIÇÃO DELETE

        const confirmDeleteBttn = document.getElementById("deletDeptBttn")
        confirmDeleteBttn.addEventListener('click', async ()=> {

            const deleteUrl = `http://localhost:6278/departments/${deptId}`

        try{
            const deleteDept = await fetch( deleteUrl, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${admin.token}`
                }
            } )

                deleteDeptToastfy('sucesso')
                setTimeout(()=>{
                    window.location.reload()
                }, 3000)

            


    

        }catch(err){
            console.log(err)
        }

        })


    })


})


}

export { deleteDept }