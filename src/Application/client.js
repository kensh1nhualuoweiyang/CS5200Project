import axios from "axios"

export const getGenreRec = async (name) => {
    const response = await axios.get(`http://localhost:4000/api/genreRec/${name}`)
    return response.data
}

export const getPlaylistRec = async () => {
    const response = await axios.get("http://localhost:4000/api/playlistRec")
    return response.data
}

export const getPlaylistDetail = async (pid) => {
    const response = await axios.get(`http://localhost:4000/api/playlistdetail/${pid}`)
    return response.data
}

export const increasePlaylistView = async (pid) =>{
    const response = await axios.put(`http://localhost:4000/api/playlistViewUpdate/${pid}`)
    return response
}

export const getTopSongs = async () =>{
    const response = await axios.get("http://localhost:4000/api/topSongs")
    return response.data
}

export const getNewRelease = async () =>{
    const response = await axios.get("http://localhost:4000/api/newRelease")
    return response.data
}

export const getSearchSongs = async (target) =>{
    const response = await axios.get(`http://localhost:4000/api/searchSongs/${target}`)
    return response.data
}

export const getSearchPlaylist = async (target) =>{
    const response = await axios.get(`http://localhost:4000/api/searchPlaylist/${target}`)
    return response.data
}

export const getSearchUser = async (target) =>{
    const response = await axios.get(`http://localhost:4000/api/searchUsers/${target}`)
    return response.data
}