// sample 1 - promise

/*let p = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a==3){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('in then '+message)
})
.catch((message)=>{
    console.log('in catch '+message)
})
*/

// sample 2 - promise
/*const UserLeft = false;
const UserWatchingCatmeme = false;

function watchtutorial(){
    return new Promise((resolve,reject) => {
        if(UserLeft){
            reject({
                name : 'User Left',
                message : ':('
            })
        }else if(UserWatchingCatmeme){
            reject({
                name : 'User watching cat meme',
                message : 'webdev'
            })
        }else{
            resolve('Thumbs Up and Subscribe')
        }
    })
}

watchtutorial().then((message)=>{
    console.log('in function '+message)
}).catch((error)=>{
    console.log(error.name+' '+error.message)
})
*/

//sample 3 - promise

/*const RecordVideoOne = new Promise((resolve,reject)=>{
    resolve('Video one recorded')
})

const RecordVideoTwo = new Promise((resolve,reject)=>{
    resolve('Video two created')
})

const RecordVideoThree = new Promise((resolve,reject)=>{
    resolve('Video three created')
})

Promise.all([
    RecordVideoOne,
    RecordVideoTwo,
    RecordVideoThree
]).then((message)=>{
    console.log(message)
})
*/

//sample 4 - promise
const axiosRequest = require('axios')