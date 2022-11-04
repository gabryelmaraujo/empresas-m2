import { userInfos } from "./pullUserInfos.js"

const loggedUser = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

const companySection = async () => {

const user = await userInfos()

const userName = user.username
const userEmail = user.email
const userLevel = user.level
const userWorkType = user.worktype
const userDept = user.dept_id

// FETCH PARA RENDERIZAR INFOS DA EMPRESA

const renderComp = await fetch("http://localhost:6278/users/departments/coworkers", {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${loggedUser.token}`
    }
})

const deptInfos = await renderComp.json()

if(deptInfos !== ""){

    deptInfos.forEach(async (comp)=>{

        const compId = comp.company_uuid
        const deptName = comp.name 
        const deptUsersArr = comp.users


        // FETCH NO COMPANY INFOS
        const companyInfosPull = await fetch("http://localhost:6278/users/departments", {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${loggedUser.token}`
            }
        })

        const companyInfos = await companyInfosPull.json()
        const companyName = companyInfos.name


        const companySection = document.querySelector('.companySection')
        companySection.innerHTML=""

        companySection.insertAdjacentHTML("beforeend", `
        
            <div class="companyName">
                <p class="deptName">${companyName} - ${deptName}</p>
            </div>
            <div class="partnersDiv">
                <ul class="partnersList">

                </ul>
            </div>
        
        `)

        // Atualizando lista de funcionários
        deptUsersArr.forEach((user)=>{
            if(user.professional_level == "júnior"){
                user.professional_level = "Junior"
            }else if(user.professional_level == "sênior"){
                user.professional_level = "Senior"
            }else if(user.professional_level == "pleno"){
                user.professional_level = "Pleno"
            }

            const partnersList = document.querySelector(".partnersList")
            partnersList.insertAdjacentHTML("beforeend", `
            
            <li class="partnerInfo">
                <p class="partnerName">${user.username}</p>
                <p class="partnerLevel">${user.professional_level}</p>
            </li>
            
            `)

        })


    })

}


}

export { companySection }