import React from 'react';
import { AsambleaCollection } from '../api/AsambleaCollection';
import {useTracker} from 'meteor/react-meteor-data';

export const AsambleaList = () => {

    const removeRegAsm = (event, _id) => {
        event.preventDefault();
        Meteor.call("Asamblea.remove", {idSocio:_id})
    }
    const socios = useTracker( () => {
        return AsambleaCollection.find({}, {sort: {createdAt: -1}}).fetch();
    }
    ) 
    return (
        <div>
{/*             <section> */}
                <table className="table caption-top">
                    <caption>Asociados Inscritos</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nro Documento</th>
                        <th scope="col">Nombres y Apellidos</th>
                        <th scope="col">Nro Mano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {socios.map((socio, handNumber ) => (
                            <tr key={socio.handNumber}>
                            <th scope="row">1</th>
                            <td>{socio.idSocio}</td>
                            <td>{socio.name}</td>
                            <td>{socio.handNumber}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick = {
                                        (event) => removeRegAsm(event, socio.idSocio)
                                    }
                                >   Eliminar
                                </button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
 {/*            </section> */}
        </div>
    )
}