import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from './components/ErrorAlert';
import { SuccessAlert } from './components/SuccessAlert';

export const AsambleaForm = () =>
{
    const [name, setname] = React.useState("");
    const [idSocio, setidSocio] = React.useState("");
    const [handNumber, sethandNumber] = React.useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const showSuccess = ( {message} ) => {
        console.log("showSucces vamos  a ver: ", message);
        setSuccess(message);
        setTimeout(() => {
           setSuccess("");
        }, 9000);
    }

    const showError = ( {message} ) => {
        console.log("Show Error vamos  a ver: ", message);
        setError(message);
        setTimeout(() => {
           setError("");
        }, 9000);
    }


    const saveRegAsamblea = () => {
        console.log("Grabando Registro: \n")
        console.info({name, handNumber, idSocio});
        Meteor.call('Asamblea.insert', {name, handNumber, idSocio}, (errorResponse) => {
            if(errorResponse){
                console.info("ErrorResponse: ", errorResponse);
                showError({message:errorResponse.error});
            }
            else{
                console.log("Inicializando Variables: \n");
                setidSocio("");
                setname("");
                sethandNumber("");
                showSuccess({message:"**Registro grabado correctamente!!"})
            }
        });
    }

    return(
    <form action="">
        {error && <ErrorAlert message={error}/>}
        {success && <SuccessAlert message={success}/>}
        <div className="container mt-3">
            <div className="row bg-info-subtle text-emphasis-info mb-3">
                <div className="col-12 col-sm-6 col-md-4 mb-2">
                    <label htmlFor="idSocio" className="form-label">Numero de Documento</label>
                    <input 
                        value={idSocio}
                        type="text" 
                        id="idSocio" 
                        className="form-control"
                        onChange={(e)=>setidSocio(e.target.value)}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-2">
                    <label htmlFor="name" className="form-label">Apellidos y Nombres</label>
                    <input 
                        value={name}
                        type="text" 
                        id="name" 
                        className="form-control"
                        onChange={(e)=> setname(e.target.value)}
                        />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-2">
                    <label htmlFor="handnumber" className="form-label">Numero Mano</label>
                    <input 
                        value={handNumber}
                        type="text" 
                        id="handNumber" 
                        className="form-control"
                        onChange={(e)=>sethandNumber(e.target.value)}
                        />
                </div>
            </div>

            <div className="row text-end">
                <div className="mb-2">
                    <button 
                        type="submit" 
                        onClick={saveRegAsamblea} 
                        className="btn btn-success "
                        >Graba Ingreso
                    </button>
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
