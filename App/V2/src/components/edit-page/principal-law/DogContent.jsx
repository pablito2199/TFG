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
                return <div key={index}><p className={clase}>{parrafo.innerText}</p></div>
            })
        }
    </div>
}