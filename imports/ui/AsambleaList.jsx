import React from 'react';
import { AsambleaColection } from '../api/AsambleaColection';
import {useTracker} from 'meteor/react-meteor-data';

export const AsambleaList = () => {

    const socios = useTracker( () => {
        return AsambleaColection.find({}).fetch();
    }
    ) 
    return (
        <>
        <h3 className="text-center mt-4"> Listado Ingreso Asamblea </h3>
        {socios.map(socio => (
            <li key={socio.idSocio}>{socio.idSocio} | {socio.name} | {socio.handNumber}</li>
        ))}
        </>
    )
}