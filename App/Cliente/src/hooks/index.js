import { useState, useEffect } from 'react'
import { xml2json } from 'xml-js'

export function useNormas(query = '') {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const url = `/xunta/normas?${query}`
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
        }
        getData()
    }, [query])

    return data
}

export function useDocument(id) {
    const [data, setData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/xml"
            }
        }

        const getData = async () => {
            await fetch(`/documents/${id}`, requestOptions)
                .then(response => response.text())
                .then(text => setData(JSON.parse(xml2json(text, { compact: true, spaces: 4 })).cdg))
                .catch(error => console.log(error))
        }
        getData()
    }, [id])

    return data
}