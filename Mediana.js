/*const lista=[100,100,500,600,4000000];*/


function CalculoMediaAritmetica(lista1){   
    const suma_lista1=lista1.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio_lista1=suma_lista1/lista1.length;
    return promedio_lista1;
    }

function esPar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}

/*let mediana;
if(esPar(lista.length)){
    //necesitamos dos elementos
    const elemento1=lista[mitadLista-1];
    const elemento2=lista[mitadLista];
    //->Promedio
    const promedio_numero1_y_numero2=CalculoMediaAritmetica([elemento1,elemento2]);
    //->mediana
    mediana=promedio_numero1_y_numero2;
}else{
    mediana=lista[mitadLista];
}*/

function ClickCalcularMediana(){
    const inputDatos2 = document.getElementById("InputDatos2").value;
 const DatosOrdenados=Array.from(inputDatos2.split(","), Number);

const ListaOrdenada=DatosOrdenados.sort(
    function(elementoA,elemntoB){
        return elementoA-elemntoB;
    }
);
const mitadLista=parseInt(ListaOrdenada.length/2);
    let mediana;
    if(esPar(ListaOrdenada.length)){
        //necesitamos dos elementos
        const elemento1=ListaOrdenada[mitadLista-1];
        const elemento2=ListaOrdenada[mitadLista];
        //->Promedio
        const promedio_numero1_y_numero2=CalculoMediaAritmetica([elemento1,elemento2]);
        //->mediana
        mediana=promedio_numero1_y_numero2;
    }else{
        mediana=ListaOrdenada[mitadLista];
    }
    const Median = document.getElementById("Mediana");
    Median.innerText = "La mediana es: " + mediana;
    const Ordenada_Lista=document.getElementById("ListOrdenada");
    Ordenada_Lista.innerText="La lista ordenada es: "+ListaOrdenada;
}
//Promedio
function Promedio(){
    const inputDatos2 = document.getElementById("InputDato").value;
    const DatosOrdenados=Array.from(inputDatos2.split(","),Number);
    const promedio=CalculoMediaAritmetica(DatosOrdenados);
    mediana=promedio;

    const Ordenada_Lista=document.getElementById("promedio_resul");
    Ordenada_Lista.innerText="El promedio es: "+ promedio;
}
