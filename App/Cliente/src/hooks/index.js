import { useState, useEffect } from 'react'
import { xml2json } from 'xml-js'

export function useNormas(query = '') {
    const [data, setData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const getData = async () => {
            const url = `/local${query}`
            const response = await fetch(url, requestOptions)
            const jsonData = await response.json()
            setData(jsonData)
        }
        getData()
    }, [query])

    return data
}

export function useXmlDocument(id) {
    const [data, setData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/xml"
            }
        }

        const getData = async () => {
            await fetch(`/local/${id}`, requestOptions)
                .then(response => response.text())
                .then(text => setData(JSON.parse(xml2json(text, { compact: true, spaces: 4 })).cdg))
                .catch(error => console.log(error))
        }
        getData()
    }, [id])

    return data
}

export function useFinalDocument(id) {
    const [data, setData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        const getData = async () => {
            const response = await fetch(`/local/${id}/savedData`, requestOptions);
            const jsonData = await response.json()
            setData(jsonData)
        }
        getData()
    }, [id])

    const put = finalDocument => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: finalDocument.id,
                borrador: finalDocument.borrador,
                notes: finalDocument.notes,
                changes: finalDocument.changes,
                laws: finalDocument.laws,
                headerItems: finalDocument.headerItems,
                linkedChanges: finalDocument.linkedChanges,
                urlDog: finalDocument.urlDog
            })
        }
        console.log(requestOptions)

        fetch(`/local/${finalDocument.id}`, requestOptions);
    }

    return {
        data,
        put
    }
}

export function useHtmlDoc(id) {
    const [data, setData] = useState('')

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/xml' }
        }

        const getData = async () => {
            fetch(`/local/${id}/htmlDoc`, requestOptions)
                .then(response => response.text())
                .then(text => {
                    const parser = new DOMParser()
                    setData(parser.parseFromString(text, "text/xml"))
                })
                .catch(error => console.log(error))
        }
        getData()
    }, [id])

    return data
}