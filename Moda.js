const lista1=[1,2,3,1,2,3,4,2,2,2,2,1];

/*const lista1Count={};
lista1.map(function(elemento){
    if(lista1Count[elemento]){
        lista1Count[elemento]+=1;
    }else{
        lista1Count[elemento]=1;
    }
});

const listaArrayObj=Object.entries(lista1Count);

const ListaOrdenada=listaArrayObj.sort(
    function(elementoA,elemntoB){
        return elementoA[1]-elemntoB[1]
    }
);
const moda=ListaOrdenada[ListaOrdenada.length-1];*/

function ClickCalcularModa(){
    const inputDatos = document.getElementById("InputDatos").value;
    const DatosOrdenados=Array.from(inputDatos.split(","), Number);

    const lista1Count={};
DatosOrdenados.map(function(elemento){
    if(lista1Count[elemento]){
        lista1Count[elemento]+=1;
    }else{
        lista1Count[elemento]=1;
    }
});
const listaArrayObj=Object.entries(lista1Count);
const ListaOrdenada=listaArrayObj.sort(
    function(elementoA,elemntoB){
        return elementoA[1]-elemntoB[1]
    }
);
const moda=ListaOrdenada[ListaOrdenada.length-1];
const Moda= document.getElementById("Moda");
    Moda.innerText = "La moda es el numero: " + moda + " veces repetido";

}