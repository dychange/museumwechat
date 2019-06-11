import axios from './index'

const getItemDetail=(data)=>{
    return axios.request({
        url:'/weChat/select',
        method:'post',
        data
    })
}

const getCommentList=(data)=>{
    return axios.request({
        url:'/weChat/list',
        method:'post',
        data
    })
}

export {
    getItemDetail,
    getCommentList
}