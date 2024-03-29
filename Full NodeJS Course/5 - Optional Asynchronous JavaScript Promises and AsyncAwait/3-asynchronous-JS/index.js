const fs = require('fs');
const superagent = require('superagent');

///////////////////////////////////////
// Below code is an example of callback hell mean callback inside callback.

// fs.readFile(`${__dirname}/dog.txt` , (err, data)=>{
//     console.log(`Breed: ${data}`)
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res)=>{
  
//         if(err) return console.log(err.message)
  
//         fs.writeFile('dog-img.txt' , res.body.message, err => {
//             console.log('Random dog image saved to file!')
//         })
//     })
// })





////////////////////////////////////
// Another Way of Writing same Code using then method

// fs.readFile(`${__dirname}/dog.txt` , (err, data)=>{
//     console.log(`Breed: ${data}`)
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
//         if(err) return console.log(err.message)
  
//         fs.writeFile('dog-img.txt' , res.body.message, err => {
//             console.log('Random dog image saved to file!')
//         })
//     }).catch(err => console.log(err.message))
// })





///////////////////////////////
// Another way of writing same code using Promising

const readFilePro = file => {
    return new Promise((res, rej) => {
        fs.readFile(file, (err, data) => {
            if(err) rej('I could not find that file')
            res(data)
        })
    })
}


const writeFilePro = (file, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(file, data, err => {
            if(err) rej('Could not write file')
            res('success')
        })
    })
}


// readFilePro(`${__dirname}/dog.txt`).then((data) => {
//     console.log(`Breed: ${data}`)
//     return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)}
//     ).then(res => {
//         writeFilePro('dog-img.txt', res.body.message)
//         .then(() => {
//             console.log('Random dog image saved to file!')
//         })
//     }).catch(err => console.log(err.message))   


/////////////////////////////////
// Another way of writing same code using async await -> Both are Good Solution using Async/Await

// (async () => {
//     try {
//         const data = await fs.promises.readFile(`${__dirname}/dog.txt`, 'utf-8');
//         console.log(`Breed: ${data}`);
        
//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         await fs.promises.writeFile('dog-img.txt', res.body.message);
        
//         console.log('Random dog image saved to file!');
//     } catch (err) {
//         console.log(err.message);
//     }
// })();



///////////////////////////////
// const getDogPic = async () => {
//     try {
//         const data = await readFilePro(`${__dirname}/dog.txt`);
//         console.log(`Breed: ${data}`);
        
//         const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         await writeFilePro('dog-img.txt', res.body.message);
        
//         console.log('Random dog image saved to file!');
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// getDogPic();



//////////////////////////////////

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);
        
        const res1 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const all =  await Promise.all([res1, res2, res3])

        const img = all.map((el, i) => {
            el.body.message
        })
        console.log(img)
        await writeFilePro('dog-img.txt', img.join('\n'));
        
        console.log('Random dog image saved to file!');
    } catch (err) {
        console.log(err.message);
    }
}

getDogPic();