import React, { useEffect, useState, useContext } from 'react'
import { InputContext } from '../App';
import axios from "axios";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

function ResultList() {
    const { inputValue } = useContext(InputContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData(inputValue)
        }
    }, [inputValue]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h3 className='text-center mt-10 font-semibold text-gray-500'>No definition found</h3>
    }
  return (
    <div className='container mx-auto p-4 max-w-2xl'>
        {response && <div>
            <h3 className='text-2xl font-bold mt-4'>Meanings & definitions </h3>
            <h3 className='text-2xl font-bold mt-4'>Examples</h3>
            <h3 className='text-2xl font-bold mt-4'>Synonyms</h3>
            <h3 className='text-2xl font-bold mt-4'>Antonyms</h3>
        </div>}
    </div>
  )
}

export default ResultList