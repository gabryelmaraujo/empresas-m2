import { editUserInfos } from "../../scripts/editUserInfos.js";
import { logoutFunction } from "../../scripts/logout.js";
import { userInfos } from "../../scripts/pullUserInfos.js";
import { infosPessoais } from "../../scripts/renderInfosPessoais.js";
import { companySection } from "../../scripts/userCompanySection.js";
import { validacaoLogin } from "../../scripts/validacaoLogin.js";

logoutFunction()
validacaoLogin()
userInfos()
infosPessoais()
editUserInfos()
companySection()
