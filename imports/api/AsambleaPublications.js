import { AsambleaCollection } from "./AsambleaCollection";
import {Meteor} from "meteor/meteor";

Meteor.publish("allAsamblea", function publishAllAsamblea(){
    return AsambleaCollection.find();
})