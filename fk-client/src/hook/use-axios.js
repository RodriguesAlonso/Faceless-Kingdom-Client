import {useState, useEffect} from 'react';


export default function useAxios(configRequest){
    const { axiosInstance, method, url, othersConfig = {} } = configRequest
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const [error, setError] = useState('')


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axiosInstance[method](url,{
                    ...othersConfig,})
                    
                console.log(res.data)
                setData(res.data)
            } catch (err) {
                console.log(err.message)
                    setError(err.message)
            } finally {
                setloading(false)
            }

        }
        fetchData()
    }, [])

    return [data, loading, error]
}