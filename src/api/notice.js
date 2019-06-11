import axios from './index'

const getNotices=()=>{
    return axios.request({
        url:'/weChatAnnouncement/list',
        method:'get',
    })
}

const getLostInfo=()=>{
    return axios.request({
        url:'/weChatLost/list',
        method:'get'
    })
}

export {
    getNotices,
    getLostInfo
}