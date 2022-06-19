import { React } from 'react'

export const DogContent = ({ contentVinculada, data }) => {
    let num = 0
    const mostrarCambio = (posicion) => {
        if (contentVinculada.current && contentVinculada.current.querySelector('#cambio-' + posicion)) {
            contentVinculada.current.querySelector('#cambio-' + posicion).scrollIntoView({ behavior: "smooth" })
        }
    }

    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                const posicion = num
                let indicador = false
                let clase = "mt-3"
                if (parrafo.className === "dog-firma-centrada") {
                    clase += " text-center"
                }
                if (parrafo.className === "dog-anexo-encabezado") {
                    clase += " text-center font-bold mt-6"
                }
                if (
                    parrafo.innerText.includes('queda redactado como segue') ||
                    parrafo.innerText.includes('queda redactado nos seguintes termos') ||
                    parrafo.innerText.includes('queda a redacción da seguinte maneira') ||
                    parrafo.innerText.includes('queda redactado da seguinte maneira') ||
                    parrafo.innerText.includes('queda redactado do seguinte xeito')
                ) {
                    clase += " bg-blue-green text-white py-2"
                    indicador = true
                    num += 1
                } else {
                    clase += " "
                }
                if (indicador) {
                    return <div key={index}><button className={clase + ' text-left px-1'} onClick={() => mostrarCambio(posicion)}>{parrafo.innerText}</button></div>
                }
                return <div key={index}><p className={clase}>{parrafo.innerText}</p></div>
            })
        }
    </div>
}