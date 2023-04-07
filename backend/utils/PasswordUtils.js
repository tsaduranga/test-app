import bcrypt from 'bcryptjs'

const generateHashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
    // return hashPassword
}

export { generateHashPassword, }