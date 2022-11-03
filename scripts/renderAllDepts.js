

const renderAllDepts = async () => {

const allDeptsUrl = "http://localhost:6278/departments"

const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))


const renderDepts = await fetch( allDeptsUrl, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${admin.token}`
    }
} )

const depts = await renderDepts.json()
const deptsList = document.querySelector('.deptsUl')
deptsList.innerHTML=''


depts.forEach((e)=>{

    const deptId = e.uuid
    const deptName = e.name
    const deptDesc = e.description
    const companyId = e.companies.uuid
    const companyName = e.companies.name



    deptsList.insertAdjacentHTML('afterbegin', `
    
        <li class="deptLi">
            <p class="deptName">
                ${deptName}
            </p>
            <p class="deptDesc">
                ${deptDesc}
            </p>
            <p class="deptCompany" id="${companyId}">
                ${companyName}
            </p>
            <div class="deptBttns">
                <button id="viewDeptBttn">
                    <img src="/images/viewbttn.svg" alt="Ver informações do departamento" class="viewDeptBttnImg">
                </button>
                <button id="editDeptBttn">
                    <img src="/images/editbttn.svg" alt="Editar departamento" class="editDeptBttnImg">
                </button>
                <button id="delDeptBttn">
                    <img src="/images/trashbttn.svg" alt="Deletar departamento"
                    class="delDeptBttnImg">
                </button>
                
            </div>
        </li>

    `)

})

}

export { renderAllDepts }