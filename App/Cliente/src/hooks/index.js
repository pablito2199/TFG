import { useState, useEffect } from 'react'

export function useNormas(query = '', page = 1) {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const url = `/diario-oficial-galicia/buscarAnunciosPublico.do?method=listado&${query}`
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        };
        getData();
    }, [query])

    return data
}