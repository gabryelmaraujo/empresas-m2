

const userInfos = async () => {

    const loggedUser = JSON.parse(localStorage.getItem("@KenzieEmpresas/LoggedUser:"))

    const pullInfos = await fetch( "http://localhost:6278/users/profile", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${loggedUser.token}`
        }
    })
    
    const infos = await pullInfos.json()
    
    
    const userName = infos.username
    const userId = infos.uuid
    const userEmail = infos.email
    const userDeptId = infos.department_uuid
    
    if(infos.professional_level == "júnior"){
        infos.professional_level = "Junior"
    }else if(infos.professional_level == "sênior"){
        infos.professional_level = "Senior"
    }else if(infos.professional_level == "pleno"){
        infos.professional_level = "Pleno"
    }
    const userLevel = infos.professional_level
    
    if(infos.kind_of_work == null){
        infos.kind_of_work=""
    }
    const userWorkType = infos.kind_of_work

    const userInfos = {
        "username": userName,
        "id": userId,
        "email": userEmail,
        "level": userLevel,
        "worktype": userWorkType,
        "dept_id": userDeptId

    }

    return userInfos

}

export { userInfos }