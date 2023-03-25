import React, { useState } from 'react';
import { AsambleaColection } from '../api/AsambleaColection';

export const AsambleaForm = () =>
{
    const [name, setname] = useState("");
    const [idSocio, setidSocio] = useState("");
    const [handNumber, sethandNumber] = useState("");

    const saveRegAsamblea = () => {
        console.info("Actualizando Ing Asamblea:\n ");
        console.info({name, handNumber, idSocio});
        AsambleaColection.insert({idSocio, name, handNumber});
        setidSocio("");
        setname("");
        sethandNumber("");
    }

    return(
    <form action="">
        <div className="container text-end mt-3">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <label htmlFor="idSocio" className="form-label">Numero de Documento</label>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <input 
                    value={idSocio}
                    type="text" 
                    id="idSocio" 
                    className="form-control"
                    onChange={(e)=>setidSocio(e.target.value)}
                />
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <label htmlFor="name" className="form-label">Apellidos y Nombres</label>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <input 
                    value={name}
                    type="text" 
                    id="name" 
                    className="form-control"
                    onChange={(e)=> setname(e.target.value)}
                    />
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <label htmlFor="handnumber" className="form-label">Numero Mano</label>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-2">
                <input 
                    value={handNumber}
                    type="text" 
                    id="handNumber" 
                    className="form-control"
                    onChange={(e)=>sethandNumber(e.target.value)}
                    />
            </div>
        </div>

        <div className="row text-center">
            <div className="mb-2">
                <button type="submit" onClick={saveRegAsamblea} className="btn btn-success">Graba Ingreso</button>
            </div>
        </div>
{/*         <div className="row">
            <div className="col-10 col-md-2 border">.col-6</div>
            <div className="col-2 col-md-10 border">.col-6</div>
        </div>
 */}</div>
    </form>
    );
};
