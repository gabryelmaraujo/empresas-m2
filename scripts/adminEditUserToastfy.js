

const adminEditUserToastfy = (resultado) => {

    const toastfySection = document.querySelector(".toastfySection")

    if(resultado == "sucesso"){
        toastfySection.insertAdjacentHTML("beforeend", `
        
        <section class="toastfySucces">
            <div class="adminEditUser">
                <main class="toastfyMain">
                    <div class="toastfyIcon">
                        <img src="/images/toastfySucess.png" alt="" class="toastfyIconImg">
                    </div>
                    <div class="toastfyContent">
                        <p class="toastfyText">
                            O usuário foi editado com sucesso!
                        </p>
                    </div>
                    <div class="toastfyClose">
                        <button class=" closeToastfyBttn" id="closeToastfyBttn">
                            <img src="/images/closebttn.svg" alt="" class="closeToastfyBttnImg">
                        </button>
                    </div>
                </main>
                <footer class="toastfyFooter">
                    <div class="resultBarSuccess">
                    </div>
                </footer>
            </div>
        </section>

    `)

    setTimeout(()=>{
        toastfySection.innerHTML=''
    }, 3000)
    }else{
        toastfySection.insertAdjacentHTML("beforeend", `
        
        <section class="toastfyError">
            <div class="adminEditUser">
                <main class="toastfyMain">
                    <div class="toastfyIcon">
                        <img src="/images/toastfyError.png" alt="" class="toastfyIconImgError">
                    </div>
                    <div class="toastfyContent">
                        <p class="toastfyText">
                            Não foi possível editar o usuário.
                        </p>
                    </div>
                    <div class="toastfyClose">
                        <button class=" closeToastfyBttn" id="closeToastfyBttn">
                            <img src="/images/closebttn.svg" alt="" class="closeToastfyBttnImg">
                        </button>
                    </div>
                </main>
                <footer class="toastfyFooter">
                    <div class="resultBarError">
                    </div>
                </footer>
            </div>
        </section>
        
        `)

        setTimeout(()=>{
            toastfySection.innerHTML=''
        }, 3000)
    }

}

export { adminEditUserToastfy }