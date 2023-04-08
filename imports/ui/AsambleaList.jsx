import React from 'react';
import { AsambleaCollection } from '../api/AsambleaCollection';
import {useTracker, useSubscribe, useFind} from 'meteor/react-meteor-data';

export const AsambleaList = () => {

    const isLoading = useSubscribe('allAsamblea')
    const socios = useFind(()=>{
        return AsambleaCollection.find( {}, {sort: {createdAt: -1}
            });
    })
    /* const socios1 = useTracker( () => {
        return AsambleaCollection.find(
                {}, 
                {sort: 
                    {createdAt: -1}
                }).fetch();
    })  */

    const removeRegAsm = (event, _id) => {
        event.preventDefault();
        Meteor.call("Asamblea.remove", {idSocio:_id})
    }

    if (isLoading()){
        return <p>is Loading...</p>
    }

    const AsambleaItem = ({Asamblea}) => {
        return (
        <tr>
            <th scope="row">1</th>
            <td>{Asamblea.idSocio}</td>
            <td>{Asamblea.name}</td>
            <td>{Asamblea.handNumber}</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-danger"
                    onClick = {
                        (event) => removeRegAsm(event, Asamblea.idSocio)
                    }
                >   Eliminar
                </button>
            </td>
        </tr>
        )
    }

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
                        {socios.map((Asamblea, handNumber ) => (
                            <AsambleaItem key={Asamblea._id} Asamblea={Asamblea}/>
                        ))}
                    </tbody>
                </table>
 {/*            </section> */}
        </div>
    )
}