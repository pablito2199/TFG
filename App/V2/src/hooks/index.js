import { useState, useEffect } from 'react'
import API from '../api'

export function useNormas(query = '') {
    const [data, setData] = useState({})

    useEffect(() => {
        API.instance()
            .findNormas(query)
            .then(normas => {
                setData(normas)
            })
    }, [query])

    return data
}

export function useXmlDocument(id) {
    const [data, setData] = useState({})

    useEffect(() => {
        API.instance()
            .findHtmlDoc(id)
            .then(doc => {
                setData(doc)
            })
    }, [id])

    return data
}

export function useFinalDocument(id) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (id) {
            API.instance()
                .findFinalDocument(id)
                .then(finalDocument => {
                    setData(finalDocument)
                })
        }
    }, [id])

    const put = finalDocument => API.instance()
        .updateFinalDocument(finalDocument)
        .then(updated => { return updated })

    return {
        data,
        put
    }
}

export function useHtmlDoc(id) {
    const [data, setData] = useState('')

    useEffect(() => {
        API.instance()
            .findHtmlDoc(id)
            .then(doc => {
                setData(doc)
            })
    }, [id])

    return data
}