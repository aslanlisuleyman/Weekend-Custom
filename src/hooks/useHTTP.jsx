
import { useEffect, useState } from "react";
import axios from "axios";

function useHTTP(BaseUrl) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getData = () => {
        axios.get(BaseUrl)
            .then(res => {
                setData(res.data);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message);
            });
    };

    const postData = (newData) => { 
        axios.post(BaseUrl, newData)
            .then(res => {
                console.log(res);
                
            })
            .catch(error => {
                console.error("Error", error);
            });
    };
    const editData=(id, editedData)=>{
        axios.put(`${BaseUrl}/${id}`,editedData)
        .then(res=>{
            console.log(res)
        })
        .catch(error => {
            console.error("Error", error);
        });
    }
      
    
   

    useEffect(() => {
        getData();
    }, [BaseUrl]);

    return { data, loading, error, getData, postData,editData};
}

export default useHTTP;
