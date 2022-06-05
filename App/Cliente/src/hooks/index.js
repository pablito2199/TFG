import { useState, useEffect } from 'react'
import API from '../api'

export function useUser(id = null) {
    const [data, setData] = useState([])
    const userId = id === null ? id = localStorage.getItem('user') : id

    useEffect(() => {
        API.instance()
            .findUser(userId)
            .then(user => {
                setData(user)
            })
    }, [userId])

    const create = user => API.instance()
        .createUser(user)
        .then(updated => { return updated })

    return {
        user: data,
        create
    }
}

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

export function useFinalDocument(id, metodo) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (metodo === 1) {
            API.instance()
                .findFinalDocument(id)
                .then(finalDocument => {
                    setData(finalDocument)
                })
        } else if (metodo === 2) {
            API.instance()
                .findFinalDocumentById(id)
                .then(finalDocument => {
                    setData(finalDocument)
                })
        }
    }, [id, metodo])

    const post = finalDocument => API.instance()
        .insertFinalDocument(finalDocument)
        .then(updated => { return updated })

    const patch = leiModificada => API.instance()
        .updateEstadoVinculada(leiModificada)
        .then(updated => { return updated })

    const put = finalDocument => API.instance()
        .updateFinalDocument(finalDocument)
        .then(updated => { return updated })

    const deleteNorma = id => API.instance()
        .deleteFinalDocument(id)
        .then(updated => { return updated })

    return {
        data,
        post,
        patch,
        put,
        deleteNorma
    }
}

export function useHtmlDoc(sumario) {
    const [data, setData] = useState('')

    useEffect(() => {
        API.instance()
            .findHtmlDoc(sumario)
            .then(doc => {
                setData(doc)
            })
    }, [sumario])

    return data
}