import React from "react";
import "../style/campo.css";

export const Campo = ({
    identificador,
    texto,
    tipo,
    organismos,
    setOrganismoSeleccionado,
    estados,
    setEstadoSeleccionado
}) => {
    return (
        <div className="campo">
            <label for={identificador}>{texto}</label>
            {
                tipo === "textarea"
                    ?
                    (<textarea className={identificador} />)
                    :
                    tipo === "autocomplete"
                        ?
                        (
                            <select className={identificador}>
                                {
                                    identificador === "organismo"
                                        ?
                                        organismos?.map(r => <option key={r.codigo} onClick={setOrganismoSeleccionado(r.codigo)}>{r.nombre}</option>)
                                        :
                                        estados?.map(r => <option key={r.codigo} onClick={setEstadoSeleccionado(r.codigo)}>{r.nombre}</option>)
                                }
                            </select>
                        )
                        :
                        (
                            <input
                                type={tipo}
                                className={identificador}
                                nombre={identificador}
                                required
                            />
                        )}
        </div>
    );
};
