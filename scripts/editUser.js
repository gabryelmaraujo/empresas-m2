
const adminEditUser = async () => {

const editUserBttnArr = Array.from(document.querySelectorAll("#editUserBttn"))

const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))


editUserBttnArr.forEach((bttn)=>{

    const funcId = bttn.parentElement.parentElement.id

    bttn.addEventListener("click", async ()=>{

        const modalsSection = document.querySelector(".modalsSection")
        modalsSection.insertAdjacentHTML("beforeend", `
        
            <section class="editEmployeeModal">
                <section class="editEmployeeModalContainer">
                    <header class="edeModalHeader">
                        <p class="edeModalTitle">
                            Editar usuário
                        </p>
                        <button id="closeModalBttn">
                            <img src="/images/closebttn.svg" alt="">
                        </button>
                    </header>
                    <main class="edeModalMain">
                        <form action="" id="edeModalForm">
                            <select name="workTypeSelect" id="workTypeSelect">
                                <option value="" selected disabled>Selecionar modalidade de trabalho</option>
                                <option value="hibrido">Híbrido</option>
                                <option value="remoto">Remoto</option>
                                <option value="home office">Presencial</option>
                            </select>
                            <select name="userLvlSelect" id="userLvlSelect">
                                <option value="" selected disabled>Selecionar nível profissional</option>
                                <option value="júnior">Junior</option>
                                <option value="pleno">Pleno</option>
                                <option value="sênior">Senior</option>
                            </select>
                            <button id="editUserSubmit">
                                Editar
                            </button>
                        </form>
                    </main>
                </section>
            </section>

        `)
        const edeModalForm = document.getElementById("edeModalForm")
        const formElements = edeModalForm.elements
        // formElements[0] -> worktype
        // formElements[1] -> level
        // formElements[2] -> bttn



        formElements[2].addEventListener("click", async (e)=>{
            e.preventDefault()

            const attBody = {
                "kind_of_work": formElements[0].value,
                "professional_level": formElements[1].value
              }

            
            try{
                const editar = await fetch(`http://localhost:6278/admin/update_user/${funcId}`,{
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${admin.token}`
                    },
                    body: JSON.stringify(attBody)
                })

                const response = await editar.json()
                if(response.uuid){
                    window.location.reload()
                }

            }catch(err){
                console.log(err)
            }

        })


        // FECHAR MODAL
        const closeModalBttn = document.getElementById("closeModalBttn")
        closeModalBttn.addEventListener("click", ()=>{
            modalsSection.innerHTML=''
        })

    })
})

}

export { adminEditUser }