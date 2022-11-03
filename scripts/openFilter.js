

const openFilter = async () => {
    
    const filterOpenBttn = document.getElementById("sFilterOpen")
    filterOpenBttn.addEventListener('click', ()=>{

        const filterDiv = document.querySelector('.sFilterOpen')
        filterDiv.classList.toggle('hide')

    })

}

export { openFilter }