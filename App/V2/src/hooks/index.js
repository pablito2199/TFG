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
            await fetch(`/documents/${id}`, requestOptions)
                .then(response => response.text())
                .then(text => setData(JSON.parse(xml2json(text, { compact: true, spaces: 4 })).cdg))
                .catch(error => console.log(error))
        }
        getData()
    }, [id])

    return data
}

export function useDogDocument(url) {
    const [htmlCode, setHtmlCode] = useState('')

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/xml"
            }
        }

        const getUrl = async () => {
            await fetch(`/xunta/norma?url=${url}`, requestOptions)
                .then(response => response.text())
                .then(text => {
                    const parser = new DOMParser()
                    setHtmlCode(parser.parseFromString(text, "text/xml"))
                })
                .catch(error => console.log(error))
        }
        getUrl()
    }, [url])

    return htmlCode
}

export function useFinalDocument(id = 1) {
    const [data, setData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        const getData = async () => {
            const response = await fetch(`/documents/savedDocuments/${id}`, requestOptions);
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
                notes: finalDocument.notes,
                changes: finalDocument.changes,
                laws: finalDocument.laws,
                headerItems: finalDocument.headerItems
            })
        }

        fetch('/documents/savedDocuments', requestOptions);
    }

    return {
        data,
        put
    }
}