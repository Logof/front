import axios from 'axios'
import { useUserStore } from '../store/modules/user'

const userStore = useUserStore()

const service  = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 3000000,
    withCredentials: true,
})
export default service