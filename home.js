const esempioSubClass = require("./esempioSubClass");
const esempioClassi = require("./esempioClassi");
const esempioIstanza = require("./EsempioInstance");

esempioSubClass();
esempioSubClass.Persona("Roberto");

const instanceOfEsempioClassi =  new esempioClassi("luca");

instanceOfEsempioClassi.saluta(); 
esempioIstanza.saluta()