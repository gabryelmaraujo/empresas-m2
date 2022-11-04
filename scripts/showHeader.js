
const showHeader = () => {
    const navButton = document.getElementById('navBttnOpen')

    navButton.addEventListener("click", ()=>{
        const selectPageDiv = document.querySelector(".selectPageHide")
    
        selectPageDiv.classList.toggle("selectPage")
    })
}

export { showHeader }

