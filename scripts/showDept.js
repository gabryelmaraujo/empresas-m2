

const showDept = async () => {

    const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    const modalsSection = document.querySelector('.modalsSection')
    const showDeptBttnArr = Array.from(document.querySelectorAll("#viewDeptBttn"))

    showDeptBttnArr.forEach((bttn)=>{

        bttn.addEventListener('click', async () => {

            const deptId = bttn.parentElement.parentElement.id
            const deptName = bttn.parentElement.parentElement.children[0].innerText
            const deptDesc = bttn.parentElement.parentElement.children[1].innerText
            const deptCompName = bttn.parentElement.parentElement.children[2].innerText
            const deptCompId = bttn.parentElement.parentElement.children[2].id

            modalsSection.innerHTML=""
    
            modalsSection.insertAdjacentHTML("beforeend", `
            
                <section class="viewDeptModal">
                    <section class="viewContainer">
                        <header class="viewModalHeader">
                            <p class="deptNameModal">
                                ${deptName}
                            </p>
                            <button id="closeModalBttn">
                                <img src="/images/closebttn.svg" alt="">
                            </button>
                        </header>
                        <div class="deptInfosModalDiv">
                            <div class="deptDescDiv">
                                <p class="deptDesc">
                                    ${deptDesc}
                                </p>
                                <p class="deptComp" id="${deptCompId}">
                                    ${deptCompName}
                                </p>
                            </div>
                            <div class="searchUser">
                                <select name="selectUserModal" id="selectUserModal">
                                    <option value="" selected disabled>
                                        Selecionar usuário
                                    </option>
                                </select>
                                <button id="hireUserBttn">
                                    Contratar
                                </button>
                            </div>

                        </div>
                        <div class="modalMain">
                            <ul class="modalUsersUl">
                                
                            </ul>
                        </div>

                    </section>
                </section>

            `)

            // CLOSE MODAL
            const closeModalBttn = document.getElementById("closeModalBttn")
            closeModalBttn.addEventListener("click", ()=>{
                modalsSection.innerHTML=""
            })

            // REQUISIÇÃO MOSTRAR USERS NO SELECT

            const allUsers = await fetch("http://localhost:6278/admin/out_of_work", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${admin.token}`
                }
            })

            const usersArr = await allUsers.json()

            usersArr.forEach((user)=>{


                if(!user.is_admin){
                    const selectUser = document.getElementById("selectUserModal")

                    selectUser.insertAdjacentHTML("beforeend",`
                        <option value="${user.uuid}">${user.username}</option>
                    `)

                }
            })

            // REQUISIÇÃO DE CONTRATAR USUARIO SELECIONADO

            const selectUser = document.getElementById("selectUserModal")
            const contratarBttn = document.getElementById("hireUserBttn")
            contratarBttn.addEventListener("click", async ()=>{

                const hire = await fetch("http://localhost:6278/departments/hire/", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${admin.token}`
                },
                body: JSON.stringify({
                    "user_uuid": selectUser.value,
                    "department_uuid": deptId
                })
                })

            })

            // MOSTRAR FUNCIONARIOS DO DEPARTAMENTO

            const funcLista = document.querySelector(".modalUsersUl")

            const funcionarios = await fetch("http://localhost:6278/users", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${admin.token}`
                }
            })

            const funcionariosArr = await funcionarios.json()
            funcionariosArr.forEach((func)=>{

                if(func.department_uuid == deptId){


                    if(func.professional_level == 'júnior'){
                        func.professional_level = "Junior"
                    }else if(func.professional_level == 'sênior'){
                        func.professional_level = 'Senior'
                    }else if(func.professional_level == 'pleno'){
                        func.professional_level = 'Pleno'
                    }else if(func.professional_level == 'estágio'){
                        func.professional_level = 'Estágio'
                    }

                    funcLista.insertAdjacentHTML("afterbegin", `
                    
                    <li class="modalUserLi" id="${func.uuid}">
                        <p class="usernameModal">
                            ${func.username}
                        </p>
                        <p class="userLevelModal">
                            ${func.professional_level}
                        </p>
                        <p class="companyModal">
                            ${deptCompName}
                        </p>
                        <div class="dismissBttnDiv">
                            <button class="dismissBttn" id="dismissBttn">
                                Desligar
                            </button>
                        </div>
                    </li>
                    
                    `)

                }
            })

            // DEMITIR FUNCIONÁRIO
            const dismissBttnArr = Array.from(document.querySelectorAll("#dismissBttn"))

            dismissBttnArr.forEach((bttn)=>{
                bttn.addEventListener("click", async (e)=>{
                    const li = bttn.parentElement.parentElement
                    const funcId = bttn.parentElement.parentElement.id

                    try{
                        const demitir = await fetch(`http://localhost:6278/departments/dismiss/${funcId}`, {
                            method: "PATCH",
                            headers: {
                                "Authorization": `Bearer ${admin.token}`
                            }
                        })

                        li.remove()

                    }catch(err){
                        console.log(err)
                    }


                })
            })

    
        })
        
    })




}

export { showDept }