import {formatDate} from './formate'

const handleNotice=(result)=>{
    let list=result.data.info
    for(let i in list){
        list[i].addTime=formatDate(list[i].addTime)
    }
    return list
}

const handleLost=(result)=>{
    let list=result.data.info
    for(let i in list){
        list[i].lostTime=formatDate(list[i].lostTime)
    }
    return list
}

export {
    handleNotice,
    handleLost
}