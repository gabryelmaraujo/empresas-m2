import { loginToastfy } from "./loginToastfy.js"
import { userVerify } from "./userType.js"


const loginFunction = async () => {

const loginUrl = "http://localhost:6278/auth/login"


const loginForm = document.getElementById("loginForm")
const inputs = Array.from(loginForm.elements)
const loginBttn = inputs[2]


loginBttn.addEventListener("click", async (e)=>{
    e.preventDefault()

    try{

        const login = await fetch( loginUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": inputs[0].value,
                "password": inputs[1].value
            })
        } )
    
        const loginResponse = await login.json()


        if(loginResponse.token){
           
           const userType = await userVerify(loginResponse.token)

           localStorage.setItem("@KenzieEmpresas/LoggedUser:", JSON.stringify({
            "token": `${loginResponse.token}`
           }) )

           if(userType.is_admin){
                window.location.href="/pages/admin/index.html"
           }else{
                window.location.href="/pages/user/index.html"
           }

        }else{
            loginToastfy("erro")
        }
    

    }catch(err){
        console.log(err)
    }


})




}

export { loginFunction }