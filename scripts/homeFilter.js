

const homeFilter = async () => {

    const sectorsUrl = "http://localhost:6278/sectors"

    const sectorsPull = await fetch( sectorsUrl, {
        method: "GET"
    } )

    const sectors =  await sectorsPull.json()

    sectors.forEach((e) => {
        const sectorId = e.uuid
        const sectorName  = e.description

        const filterList = document.querySelector('.sFilterList')
        filterList.insertAdjacentHTML('afterbegin', `
        
        <li class="selectSector" id="${sectorId}">
            <p class="selectSectorParag">
            ${sectorName}
            </p>
        </li>

        `)


    })



    const selectSectorArr = Array.from(document.querySelectorAll(".selectSector"))
    
    selectSectorArr.forEach((e)=>{
        e.addEventListener('click', async ()=>{

            const sectorId = e.id
            const companyList = document.querySelector('.enterprisesList')
            const companies = Array.from(companyList.children)

            companies.forEach((company)=>{
                if(company.childNodes[5].id != sectorId){
                    company.classList.add('hide')
                }else{
                    company.classList.remove('hide')
                }
            })



        })
    })



}
export { homeFilter }

