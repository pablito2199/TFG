import { useEffect } from 'react'

export function useNormas(query = '') {
    const getData = async () => {
        const response = await fetch(`https://www.xunta.gal/diario-oficial-galicia/buscarAnunciosPublico.do?method=listado&${query}`);
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
    };

    useEffect(() => {
        getData()
    })
}