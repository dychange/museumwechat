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

const getNoticeDetail=(data)=>{
    return axios.request({
        url:'/weChatAnnouncement/select',
        method:'post',
        data
    })
}

const getUserInfo=(data)=>{
    return axios.request({
        url:'/wechat/userInfo',
        method:'post',
        data
    })
}

export {
    getNotices,
    getLostInfo,
    getNoticeDetail,
    getUserInfo
}