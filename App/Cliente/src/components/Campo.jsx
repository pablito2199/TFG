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
                                        organismos?.map(org => <option key={org.codigo} onClick={setOrganismoSeleccionado(org.codigo)}>{org.nombre}</option>)
                                        :
                                        estados?.map(est => <option key={est.codigo} onClick={setEstadoSeleccionado(est.codigo)}>{est.nombre}</option>)
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
