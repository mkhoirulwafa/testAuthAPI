const message = (status)=>{
    switch(status){
        case 200: return 'Success'||'Login Success'; break;
        case 201: return 'Success Create Data'; break;
        case 400: return 'Failed! , Bad Request'; break;
        case 401: return 'Authentication Failed'; break;
        case 401: return 'Forbidden, you can not access this page'; break;
    }
}

const formResponse = (data, res, status) => {
    const post = {
        status: status,
        message: message(status),
        data: data
    }
    return res.status(status).send(post)
}
module.exports = formResponse