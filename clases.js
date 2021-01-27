function Persona(Name, LastN){
    return{
        Name: Name,
        LastN: LastN
    };
}

function Puntos(x, y){
    return{
        x : x,
        y : y
    };
}

var P1 = Persona('Roberto', 'Lozada');

console.log(P1.Name, P1.LastN)