import { criarDeptToastfy } from "./criarDeptToastfy.js"
import { companiesInfos } from "./renderCompanies.js"



const createDept = async () => {


const createDeptBttn = document.getElementById("addDeptBttn")
const modalsSection = document.querySelector('.modalsSection')

createDeptBttn.addEventListener("click", async (e)=>{

    const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    modalsSection.innerHTML=''

    modalsSection.insertAdjacentHTML('beforeend', `
    
        <section class="createDeptModal">
            <section class="createDeptContainer">
                <div class="cdmodalHeader">
                    <p class="cdmodalTitle">
                        Criar Departamento
                    </p>
                    <button id="closeModalBttn">
                        <img src="/images/closebttn.svg" alt="">
                    </button>
                </div>
                <main class="cdmodalMain">
                    <form id="cdmodalForm">
                        <input type="text" name="newDeptName" id="newDeptName" placeholder="Nome do departamento">
                        <input type="text" name="newDeptDesc" id="newDeptDesc" placeholder="Descrição">
                        <select name="newDeptCompanies" id="newDeptCompanies">
                            <option value="" selected disabled>Selecionar a empresa</option>
                        </select>
                        <button id="createDeptBttn">
                            Criar o departamento
                        </button>
                    </form>
                </main>
            </section>

        </section>

    `)

    // FECHAR MODAL
    const closeModalBttn = document.getElementById("closeModalBttn")
    closeModalBttn.addEventListener("click", ()=>{
        modalsSection.innerHTML=''
    })
    
    // ADD OPTIONS NO SELECT

    const newDeptForm = document.getElementById("cdmodalForm")
    const newDeptInputs = Array.from(newDeptForm.elements)

    const companies = await companiesInfos()


    companies.forEach((e)=>{
        const companyName = e.name
        const companyId = e.uuid
    
        newDeptInputs[2].insertAdjacentHTML("beforeend", `
        
        <option value="${companyId}">
                ${companyName}
        </option>
        
        `)
    })



    // POST NEW DEPT


    const createDeptBttn = newDeptInputs[3]
    createDeptBttn.addEventListener('click', async (e)=>{
        e.preventDefault()

        const createUrl = "http://localhost:6278/departments"

        try{
            const create = await fetch( createUrl, {
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${admin.token}`
                },
                body: JSON.stringify({
                    "name": newDeptInputs[0].value,
                    "description": newDeptInputs[1].value,
                    "company_uuid": newDeptInputs[2].value
                })
            } )
    
            const response = await create.json()

            if(response.uuid){

                criarDeptToastfy('sucesso')

                setTimeout(()=>{
                    window.location.reload()
                },3000)

            }else{
                criarDeptToastfy('erro')
            }

    
        }catch(err){
            console.log(err)
        }


    })

})

}

export { createDept }