const bcrypt = require('bcrypt')
const Users = require('../../models/users.model')

module.exports.createUser = async (req, res) => {
    const saltPass = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('123456', saltPass)

    const saltCode = await bcrypt.genSalt(10)
    const code = await bcrypt.hash('0398', saltCode)

    const user = new Users({
        login: '',
        inits: '',
        pass,
        email: '',
        social: {
            vk: '',
            telegram: ''
        },
        position: '',
        credits: 0,
        code,
        access_level: 2
    })

    await user.save()
}

module.exports.getUsers = async (req, res) => {
    res.json(await Users.find().select('-pass'))
}

module.exports.getUser = async (req, res) => {
    const user = await Users.findOne({login: req.params['login']}).select('-pass')

    if (user) {
        res.json(user)
    } else {
        res.json({message: 'Такого пользователя нет'})
    }
}