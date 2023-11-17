import axios from "axios"
const baseUrl = "http://localhost:4000/api"


export const getFollower = async (name) => {
    const response = await axios.get(`${baseUrl}/follower/${name}`)
    return response.data
}

export const getPlaylistCreated = async (name) => {
    const response = await axios.get(`${baseUrl}/playlistCreated/${name}`)
    return response.data
}

export const getFollowing = async (name) => {
    const response = await axios.get(`${baseUrl}/following/${name}`)
    return response.data
}

export const getGenreRec = async (name) => {
    const response = await axios.get(`${baseUrl}/genreRec/${name}`)
    return response.data
}

export const createNewSong = async(item) =>{
    const response = await axios.post(`${baseUrl}/songCreate`,item)
    return response
}

export const createNewPlaylist = async(item) =>{
    const response = await axios.post(`${baseUrl}/playlist`,item)
    return response
}


export const updateSong = async(item) => {
    const response = await axios.put(`${baseUrl}/songUpdate`,item)
    return response
}

export const deleteSong = async (id) => {
    const response = await axios.delete(`${baseUrl}/songs/${id}`)
    return response
}

export const deletePlaylist= async (id) => {
    const response = await axios.delete(`${baseUrl}/playlist/${id}`)
    return response
}

export const getBasicUserInfo = async (userName) => {
    const response = await axios.get(`${baseUrl}/basicInfo/${userName}`)
    return response.data
}

export const getSongCreated = async (userName) => {
    const response = await axios.get(`${baseUrl}/songCreated/${userName}`)
    return response.data
}

export const getAvailableGenre = async () => {
    const response = await axios.get(`${baseUrl}/availableGenre`)
    return response.data
}

export const getPlaylistRec = async () => {
    const response = await axios.get(`${baseUrl}/playlistRec`)
    return response.data
}

export const getPlaylistDetail = async (pid) => {
    const response = await axios.get(`${baseUrl}/playlistDetail/${pid}`)
    return response.data
}

export const getPlaylistSongDetail = async (pid) => {
    const response = await axios.get(`${baseUrl}/playlistSongDetail/${pid}`)
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