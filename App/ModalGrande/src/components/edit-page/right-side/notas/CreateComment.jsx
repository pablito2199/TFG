import React, { useState } from "react"
import { useUser } from "../../../../hooks"

export const CreateComment = ({ notas, setNotas, nota, setCambiosLocales }) => {
    const { user } = useUser()
    const [comentario, setComentario] = useState('')

    const submit = () => {
        if (comentario !== '') {
            let myObj = {
                'contenido': comentario,
                'fecha': new Date().toLocaleDateString(),
                'usuario': user.nome + " " + user.apelidos,
            }
            setNotas(notas.map(notaAux => {
                if (nota.id === notaAux.id) {
                    notaAux.comentarios.push(myObj)
                }
                return notaAux
            }))
            setComentario('')
            setCambiosLocales(true)
        }
    }

    return <div className='mt-2 flex flex-col w-11/12'>
        <textarea value={comentario} onChange={(event) => setComentario(event.target.value)} className='mb-2 w-full h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="comment" placeholder="Novo comentario..." />
        <button onClick={submit} className='focus:outline-none px-3 py-2 text-sm font-semibold text-white bg-blue-green hover:bg-blue-700 text-center w-40 ml-auto mr-0 cursor-pointer'>Engadir comentario</button>
    </div>
}