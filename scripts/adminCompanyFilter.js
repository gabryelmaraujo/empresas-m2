import { companiesInfos } from "./renderCompanies.js"


const adminCompFilter = async () => {


const selectForm = document.getElementById("selectForm")
const formElements = Array.from(selectForm.elements)


const selectCompany = formElements[0]
const companies = await companiesInfos()


companies.forEach((e)=>{
    const companyName = e.name
    const companyId = e.uuid

    selectCompany.insertAdjacentHTML("beforeend", `
    
    <option value="${companyId}">
            ${companyName}
    </option>
    
    `)
})

selectCompany.addEventListener("change", ()=>{
    const selectedOpt = formElements[0].value

    const deptsList = document.querySelector(".deptsUl")
    const depts = Array.from(deptsList.children)

    depts.forEach((dept)=>{

        if(selectedOpt !== dept.children[2].id){
            dept.classList.add('hide')
        }else{
            dept.classList.remove('hide')
        }
    })

})




}

export { adminCompFilter }