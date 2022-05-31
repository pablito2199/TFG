import { React } from 'react'

export const DogContent = ({ data }) => {

    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
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
                    clase += " bg-blue-lex-gal"
                }
                return <div key={index}><p className={clase}>{parrafo.innerText}</p></div>
            })
        }
    </div>
}