

const renderCompanies = async () => {
    const empresasUrl = "http://localhost:6278/companies"
    const render = await fetch ( empresasUrl, {
        method: "GET",
    } )

    const renderResponse = await render.json()

    renderResponse.forEach((e)=>{
        const companyId = e.uuid
        const companyName = e.name
        const comapanyOpHours = e.opening_hours
        const companySector = e.sectors.description
        const cSectorId = e.sectors.uuid
        const companyDesc = e.description

        const companyList = document.querySelector(".enterprisesList")
        companyList.insertAdjacentHTML('afterbegin', `

        <li class="enterpriseLi" id="${companyId}">
            <h2 id="enterpriseName">${companyName}</h2>
            <p id="workTime">${comapanyOpHours}</p>
            <div class="jobSector" id="${cSectorId}">
                <p>${companySector}</p>
            </div>
        </li>

        `)

    })
}

const companiesInfos = async () => {
    const empresasUrl = "http://localhost:6278/companies"
    const render = await fetch ( empresasUrl, {
        method: "GET",
    } )

    const renderResponse = await render.json()
    const companies = []
    renderResponse.forEach((e)=>{
        const company =  {
            description: e.description,
            name: e.name,
            opening_hours: e.opening_hours,
            sectors: {
                uuid: e.sectors.uuid,
                description: e.sectors.description
            },
            uuid: e.uuid
        }

        companies.push(company)
        

    })

    return companies

}

export { renderCompanies, companiesInfos }