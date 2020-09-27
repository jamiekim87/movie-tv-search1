import axios from 'axios'

const API = {
    getMedia: search => axios.get{`/api/omdb/${search}` },
    getSavedMedia: () => axios.get('/api/media'),
    saveMedia: () => axios.post('/api/media', media),
    deleteMedia: () => axios.delete(`/api/media/${id}`)
}

export default API