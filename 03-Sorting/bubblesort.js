//NOTA: La implementacion de este bubble sort es poco efectiva porque sigue comparando el length del array  aunque ya no haya swaps para hacer. En la review esta la manera optima

let valor1
let valor2
let bubble={}
bubble.swap= function (arreglo, queue=[]){
    queue[0]= arreglo[valor1]
    queue[1]= arreglo[valor2]
            arreglo[valor1]=queue[1]
            arreglo[valor2]=queue[0]
            queue=[]  
}
bubble.comparacion= function (valor, otroValor){
    if(valor>otroValor) return true
    return false
}

function bubbleSort(arreglo) {
for (let j=0; j<arreglo.length; j++){
    let comparador= 1
    
    for(let i=0; i<arreglo.length; i++){
        valor1= i
        valor2= comparador
        if (bubble.comparacion(arreglo[valor1], arreglo[valor2])){
            
            bubble.swap(arreglo)
        }
        comparador++   
    }
   }
   return arreglo
}








