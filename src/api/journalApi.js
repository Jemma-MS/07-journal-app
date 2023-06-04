
import axios from "axios";


const journalApi = axios.create({
    baseURL: 'https://vue-demos-84142-default-rtdb.firebaseio.com'
})

export default journalApi


