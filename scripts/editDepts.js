

const editDept = async () => {

    const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    const editDeptBttns = Array.from(document.querySelectorAll("#editDeptBttn"))
    
    editDeptBttns.forEach(async (e)=>{

        const deptId = e.parentElement.parentElement.id

        e.addEventListener("click", async ()=>{

            const deptInfos = e.parentElement.parentElement

            const modalsSection = document.querySelector(".modalsSection")
            modalsSection.innerHTML=""

            modalsSection.insertAdjacentHTML("beforeend", `

                <section class="editDeptModal">
                    <section class="editDeptContainer">
                        <div class="edmodalHeader">
                            <p class="edmTitle">Editar departamento</p>
                            <button id="closeModalBttn">
                                <img src="/images/closebttn.svg" alt="">
                            </button>
                        </div>
                        <main class="edmMain">
                            <form  id="edmForm">
                                <textarea name="newDescDept" id="newDescDept" cols="30" rows="10" >${deptInfos.children[1].innerText}</textarea>
                                <button id="editBttn">
                                    Salvar alterações
                                </button>
                            </form>

                        </main>
                    </section>
                </section>

            `)


            // Fechar modal

                const closeModalBttn = document.getElementById("closeModalBttn")
                closeModalBttn.addEventListener('click', ()=>{
                    modalsSection.innerHTML=''
                })

            // Editar dept
            const edmForm = document.getElementById("edmForm")
            const formElements = Array.from(edmForm.elements)
            
            const editBttn = formElements[1]
            editBttn.addEventListener('click', async(e)=>{
                e.preventDefault()

                try{

                    const deptInfos = await fetch(`http://localhost:6278/departments/${deptId}`, {
                        method: "PATCH",
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${admin.token}`
                        },
                        body: JSON.stringify({
                            "description": formElements[0].value
                        })
                    })

                    const response = await deptInfos.json()
                    if(response.uuid){
                        window.location.reload()
                    }

                }catch(err){
                    console.log(err)
                }



            })


        })


    })

}

export { editDept }


