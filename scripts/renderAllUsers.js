

const renderAllUsers = async () => {

    const usersUrl = "http://localhost:6278/users"

    const admin = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    const renderUsers = await fetch(usersUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${admin.token}`
        }
    })

    const users = await renderUsers.json()
    console.log(users)

    const usersList = document.querySelector(".usersUl")
    usersList.innerHTML=''

    users.forEach((e)=>{

        const userType = e.is_admin
        const userName = e.username
        const userId = e.uuid
        const userDept = e.department_uuid
        const userWorkType = e.kind_of_work
        const userLevel = e.professional_level

        if(!userType){

            usersList.insertAdjacentHTML("beforeend", `
            
                <li class="userLi">
                    <p class="userName">
                        ${userName}
                    </p>
                    <p class="userLevel">
                        ${userLevel}
                    </p>
                    <p class="userCompany">
                        Company name
                    </p>
                    <div class="userBttns">
                        <button id="editUserBttn">
                            <img src="/images/editbttnHover.svg" alt="" class="editUserBttnImg">
                        </button>
                        <button id="delUserBttn">
                            <img src="/images/trashbttn.svg" alt="" class="delUserBttnImg">
                        </button>

                    </div>
                    <div id="userInfos" class="hide">
                        <p class="userId">
                            ${userId}
                        </p>
                        <p class="userDept">
                            ${userDept}
                        </p>
                        <p class="userWorkType">
                            ${userWorkType}
                        </p>
                        
                    </div>
                </li>

            `)

        }



    })


}

export { renderAllUsers }