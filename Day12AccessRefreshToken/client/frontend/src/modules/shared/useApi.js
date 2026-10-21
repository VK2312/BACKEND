import axios from 'axios';
import { useAuthContext } from '../auth/context/AuthProvider';

export default function useApi() {
    const authContext = useAuthContext();

    const api = axios.create({
        baseURL: "http://localhost:5173/api"
    })

    //for sending accessToken in each request we have use the interceptors
    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${authContext.accessToken}`
        return config
    })

    return api
}

