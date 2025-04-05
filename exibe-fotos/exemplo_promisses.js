// Async/ Await
async function fatorial(n){
    return new Promise((resolve, reject) => {

        if(n >= 1){
            let ac = 1
        
            for (let i = 2; i <= n; i++){
                ac *= i
            }
    
            resolve(ac)
        }else{
            reject('Somente positivos')
        }

    })
   
}

const chamadaComAsyncAwait = async () => {
    // await só pode ser chamada em uma função async em um Promise
    try{

        const f1 = await fatorial(5)
        console.log(f1)

    }catch(err){

        console.log(err)

    }

    try{

        const f1 = await fatorial(-5)
        console.log(f1)

    }catch(err){

        console.log(err)

    }
}

chamadaComAsyncAwait()
console.log('Outros processamentos realizados')

// Async/ Await
// async function fatorial(n){
    
//     let ac = 1
    
//     for (let i = 2; i <= n; i++){
//         ac *= i
//     }

//     return ac

// }

// const r1 = fatorial(5);
// r1.then((f) => console.log(f));


// Desenvolvimento Não Bloqueando ou Assincrono
// const somaDemorada = (n) => {
//     const p = new Promise((resolve, reject) => {

//         if(n >= 1){
//             let ac = 0

//             for(let i = 0; i <= n; i++){
//                 ac += i
//             }

//             resolve(ac)

//         }else{

//             reject("Somente valores positivos")

//         }
        
//     })
//     return p

// }

// const res = somaDemorada(0)

// res.then((soma) => console.log(`Soma: ${soma}`))
// .catch((err) => console.log(`Erro: ${err}`))

// console.log('Outros processamentos realizados')


// Desenvolvimento Bloqueando ou Sincrono
// const somaDemorada = (n) => {
//     let ac = 0

//     for(let i = 0; i <= n; i++){
//         ac += i
//     }

//     return ac

// }

// console.log(somaDemorada(10))
// console.log('Outros processamentos realizados')
