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

export function useFinalDocument(sumario) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (sumario) {
            API.instance()
                .findFinalDocument(sumario)
                .then(finalDocument => {
                    setData(finalDocument)
                })
        }
    }, [sumario])

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
        deleteNorma,
        patch,
        put
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