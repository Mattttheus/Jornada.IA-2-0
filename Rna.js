///Function numero ala=eatorio 
 
 
 function randomRange(min,max){

    return Math.random( ) *( max - min) + min;

 }


 function lerp( a , b, t){

    return a + (b - a) * t

 }

class Neuron {

    constructor (inputs){

        this.bias = randomRange(-1,1);

        this.weightList= new Array(inputs)

        .fill()

        .map(() => randomRange(-1,1) )
    }
};


g(signalList = [] ); {

    let u = 0;

    for (let i = 0;i < this.weightList.lenght; i++) {

        u += signalList[i] * this.weightList[i]
    }

    if(Math.tanh(u) > this.bias) return 1
    else return 0 ;
}

mutate( rate = 1);{

    this.weightList = this.weightList.map(()=>{

        return larp(w, randomRange (-1,1), rate)

    });

    this.bias = lerp ( this.bias, randomRange(-1,1), range)


}

class RNA {

    constructor(inputCount =1 , leveList =[]){

        this.score = 0;

        this.leveList = leveList.map((l,i)=>{

            const inputSize =i === 0? inputCount: leveList[ i - 1 ]

            return new Array(l).fill().map(() => new Neuron(inputSize) );

        });
    }

    compute ( list =[]){

        for ( let i=0; i < this.leveList.length;i++ ){

            const tempList=[]

            for(const neuron of this.leveList[i]){

                if (list.length !== neuron.weightList.length) throw new     Error("Entrada invalida")
                tempList.push(neuron.g(list))
            }
            list=tempList;
        }

        return list;
    }
}

mutate(rate = 1);{

    for ( const lavel of this.leveList){

        for (const neuro of lavel) neuron.mutate(rate)
    }
}

load(rna);{

    if (!rna) return;

    try{

        this.leveList= rna.map((neuronList)=>{

            return neuronList.map((neuron)=>{
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList= neuron.weightList;

                return n;
            });
        });
    } catch(e){
         return;
    }

    save();{

        return this.leveList;
    }
}

export default Rna;