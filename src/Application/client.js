import axios from "axios"
const baseUrl = "http://localhost:4000/api"

export const getGenreRec = async (name) => {
    const response = await axios.get(`${baseUrl}/genreRec/${name}`)
    return response.data
}

export const getPlaylistRec = async () => {
    const response = await axios.get(`${baseUrl}/playlistRec`)
    return response.data
}

export const getPlaylistDetail = async (pid) => {
    const response = await axios.get(`${baseUrl}/playlistdetail/${pid}`)
    return response.data
}

export const increasePlaylistView = async (pid) =>{
    const response = await axios.put(`${baseUrl}/playlistViewUpdate/${pid}`)
    return response
}

export const getTopSongs = async () =>{
    const response = await axios.get(`${baseUrl}/topSongs`)
    return response.data
}

export const getNewRelease = async () =>{
    const response = await axios.get(`${baseUrl}/newRelease`)
    return response.data
}

export const getSearchSongs = async (target) =>{
    const response = await axios.get(`${baseUrl}/searchSongs/${target}`)
    return response.data
}

export const getSearchPlaylist = async (target) =>{
    const response = await axios.get(`${baseUrl}/searchPlaylist/${target}`)
    return response.data
}

export const getSearchUser = async (target) =>{
    const response = await axios.get(`${baseUrl}/searchUsers/${target}`)
    return response.data
}

export const getSongDetail = async (target) => {
    const response = await axios.get(`${baseUrl}/song/${target}`)
    return response.data
}

export const getSongComments = async (id) =>{
    const response = await axios.get(`${baseUrl}/comment/${id}`)
    return response.data
}

export const userLogin = async (userName, passWord) => {
    const response = await axios.post(`${baseUrl}/login?userName=${userName}&password=${passWord}`)
    return response
}