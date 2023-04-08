import { Meteor } from "meteor/meteor";
import { check } from "meteor/check"
import { AsambleaCollection } from "./AsambleaCollection"

Meteor.methods({
    'Asamblea.insert'({idSocio, name, handNumber}) {
        check(name, String);
        check(handNumber, String);
        check(idSocio, String);
        if (!name){
            throw new Meteor.Error("Nombre es Requerido");
        }
        return AsambleaCollection.insert({name, handNumber, idSocio, createdAt: new Date()});
    },
    'Asamblea.remove'({idSocio}) {
        check(idSocio, String   );
        return AsambleaCollection.remove({idSocio});
    }
})