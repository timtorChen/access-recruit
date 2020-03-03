import axios from 'axios'

const base = 'https://api.github.com'
const ax = axios.create({
    baseURL: base
})

export const getUsers = async ({ since= 0, per_page=30 })=>{
    const res = await ax({
        url: '/users',
        params:{since, per_page}})

    return res.data
}


export const getUserProfile = async ({ username }) =>{
    const res = await ax({
        url: `/users/${username}`})
    return res.data
}

