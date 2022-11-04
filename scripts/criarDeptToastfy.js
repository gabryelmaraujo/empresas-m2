

const criarDeptToastfy = (resultado) =>{

    const toastfySection = document.querySelector(".toastfySection")

    if(resultado == 'sucesso'){
        toastfySection.insertAdjacentHTML("beforeend", `
        
        <section class="toastfySucces">
            <div class="toastfyContainer">
                <main class="toastfyMain">
                    <div class="toastfyIcon">
                        <img src="/images/toastfySucess.png" alt="" class="toastfyIconImg">
                    </div>
                    <div class="toastfyContent">
                        <p class="toastfyText">
                            O departamento foi criado!
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
            <div class="toastfyContainer">
                <main class="toastfyMain">
                    <div class="toastfyIcon">
                        <img src="/images/toastfyError.png" alt="" class="toastfyIconImgError">
                    </div>
                    <div class="toastfyContent">
                        <p class="toastfyText">
                            Não foi possível criar o departamento.
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

export { criarDeptToastfy }