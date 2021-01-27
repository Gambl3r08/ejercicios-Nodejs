const os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.release());
//console.log(os.networkInterfaces());
console.log(os.userInfo());
var datos = os.platform() + "\n" + os.release() + "\n";
var cont = JSON.stringify(os.networkInterfaces(),null, '\n');
datos += cont;
cont = JSON.stringify(os.userInfo(), null, '\n');
datos += '\n';
datos += cont

cont = JSON.stringify(os.cpus(), null, '\n');

datos += '\n';
datos += cont

cont = JSON.stringify( os.type(),null, '\n');

datos += '\n';
datos += cont

cont = JSON.stringify(os.totalmem(),null, '\n');

datos += '\n';
datos += cont

cont = JSON.stringify(os.freemem(),null, '\n');

datos += '\n';
datos += cont

fs.writeFile("./dat.txt", datos, function(error){
    if(error) console.log(error);
    else console.log("El archivo fue creado");
});
