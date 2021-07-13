module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login'){
        if (req.body.username === 'li' && req.body.password === 'shan'){
            return res.status(200).json({
                user:{
                    tokens: '123'
                }
            })
        }else {
            return res.status(400).json({
                message: '用户名或密码错误！'
            })
        }
    }
    next()
}
