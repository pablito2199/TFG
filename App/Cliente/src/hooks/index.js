import { useState, useEffect } from 'react'

export function useNormas(query = '', page = 1) {
    const [data, setData] = useState({})

    const getData = async () => {
        const url = `/diario-oficial-galicia/buscarAnunciosPublico.do?method=listado&${query}`
        console.log(url)
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData)
    };

    useEffect(() => {
        getData()
    }, [query])

    return data
}