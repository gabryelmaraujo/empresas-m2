

const registerFunction = async () => {

const registerForm = document.getElementById('registerForm')
const inputs = Array.from(registerForm.elements)

if(inputs[3].value == "Junior"){
    inputs[3].value = "júnior"
}else if(inputs[3].value == "Pleno"){
    inputs[3].value = "pleno"
}else if(inputs[3].value == "Senior"){
    inputs[3].value = "sênior"
}

registerBttn.addEventListener('click', async (e)=>{
    e.preventDefault()
    try{

    const registerUrl = "http://localhost:6278/auth/register"
    const createUser = await fetch( registerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username":  inputs[0].value,
            "email":  inputs[1].value,
            "password":  inputs[2].value,
            "professional_level":  inputs[3].value,
            "kindofwork": "opcional"
          })
    })

    const response = await createUser.json()
    if(response.uuid){
        window.location.href="/pages/login/index.html"
    }

    }catch(err){
        console.log(err)
    }
    
})

}

export { registerFunction }