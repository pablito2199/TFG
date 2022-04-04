import data from "./ListData.json"
import { React, useState } from 'react'

export default function List(props) {
    const filteredData = data.filter((data) => {
        if (props.input === '') {
            return data;
        }
        else {
            return data.text.toLowerCase().includes(props.input)
        }
    })

    const [checkedState, setCheckedState] = useState(
        new Array(filteredData.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position && !item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <div className="dataFilteredSearch">
            {
                filteredData?.map((lei, index) =>
                    <div className="normas">
                        <label for="myCheckbox">Norma {lei.id} - {lei.text}</label>
                        <input type="checkbox" checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                    </div>)
            }
        </div>
    )
}