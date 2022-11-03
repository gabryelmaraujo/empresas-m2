

const userVerify = async (token) => {

    const verifyUrl = "http://localhost:6278/auth/validate_user"

    const userVerify = await fetch( verifyUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } )

    const userType = await userVerify.json()

    return userType

}

export { userVerify }