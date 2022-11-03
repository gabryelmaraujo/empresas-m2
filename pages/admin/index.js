import { adminCompFilter } from "../../scripts/adminCompanyFilter.js";
import { renderAllDepts } from "../../scripts/renderAllDepts.js";
import { renderAllUsers } from "../../scripts/renderAllUsers.js";
import { companiesInfos } from "../../scripts/renderCompanies.js";


renderAllDepts()
renderAllUsers()
adminCompFilter()
await companiesInfos()