import { React } from 'react'

export const Intro = ({ data, handleContextMenu }) => {
    return <div>{
        data.intro.p.map((parrafo, index) =>
            <div key={index}>
                <p className='indent-8' onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
            </div>
        )
    }
    </div>
}