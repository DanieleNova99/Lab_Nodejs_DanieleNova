console.log("Example of different module importing methods.");

const esempioSubClass = require("./lezione2/esempioSubClass");
const esempioClassi = require("./lezione2/esempioClassi");
const esempioIstanza = require("./lezione2/esempioIstance");

esempioSubClass();
esempioSubClass.Persona("Roberto");

const instanceOfEsempioClassi =  new esempioClassi("luca");

instanceOfEsempioClassi.saluta(); 
esempioIstanza.saluta()
// TODO > scrivere app che legge una pagina di wikipedia e la salva su pc (in cartella magari qui dentro)