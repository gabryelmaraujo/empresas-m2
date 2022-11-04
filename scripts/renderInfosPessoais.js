import { userInfos } from "./pullUserInfos.js"


const infosPessoais = async () => {

const user = await userInfos()

const userName = user.username
const userEmail = user.email
const userLevel = user.level
const userWorkType = user.worktype

const userInfosDiv = document.querySelector(".userInfos")
userInfosDiv.insertAdjacentHTML("beforeend",`

    <div class="userName">${userName}</div>
    <div class="userDesc">
        <p class="userEmail">${userEmail}</p>
        <p class="userLevel">${userLevel}</p>
        <p class="jobType">${userWorkType}</p>
    </div>

`)

}

export { infosPessoais }