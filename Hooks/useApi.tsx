import axios from "axios";
export function useApi() {

    const host = "http://localhost:8086/appConjuntosApi";

    // peticion get
    const peticionGet = async (endPoint: string) => {
        try {
            const url = `${host}/${endPoint}`;
            return await axios.get(url, { withCredentials: true });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response?.data;
            }
            return error;
        }
    }

    //peticion post
    const peticionPost = async (endPoint: string, parametros: object) => {
        try {
            const url = `${host}/${endPoint}`
            return await axios.post(url, parametros, { withCredentials: true });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response;
            }
            return error;
        }
    }

    // peticion put
    const peticionPut = async (endPoint: string, parametros: object) => {
        try {
            const url = `${host}/${endPoint}`
            return await axios.put(url, parametros,{ withCredentials: true });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response;
            }
            return error;
        }
    }

    return {
        peticionGet,
        peticionPost,
        peticionPut

    }
}