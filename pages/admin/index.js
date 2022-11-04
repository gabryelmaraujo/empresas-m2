import { adminCompFilter } from "../../scripts/adminCompanyFilter.js";
import { createDept } from "../../scripts/createDept.js";
import { deleteDept } from "../../scripts/deleteDept.js";
import { deleteUser } from "../../scripts/deleteUser.js";
import { editDept } from "../../scripts/editDepts.js";
import { adminEditUser } from "../../scripts/editUser.js";
import { renderAllDepts } from "../../scripts/renderAllDepts.js";
import { renderAllUsers } from "../../scripts/renderAllUsers.js";
import { companiesInfos } from "../../scripts/renderCompanies.js";
import { showDept } from "../../scripts/showDept.js";


renderAllDepts()
renderAllUsers()
adminCompFilter()
await companiesInfos()
createDept()
editDept()
deleteDept()
showDept()
adminEditUser()
deleteUser()