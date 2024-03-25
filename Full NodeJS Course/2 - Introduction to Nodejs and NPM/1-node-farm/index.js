// Reading and Writing data into files using fs module in NodeJS

const fs = require('fs');
const http = require('http');


//////////////////////////////////////
/////// read and Writing in files


// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `This is what we know about the avocado : ${textIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("Write Successfully");



// Blocking and Non-Blocking -> Asynchronous Nature in NodeJS

// fs.readFile('./txt/start.txt', 'utf-8', (err, data_read)=> {
//     fs.readFile(`./txt/${data_read}.txt`, 'utf-8', (err, data_read_file_1)=> {
//         if (err) throw err;
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data_read_file_2)=> {
//             if (err) throw err;
//             fs.writeFile(`./txt/final.txt`, `${data_read_file_1} \n  ${data_read_file_2}`, 'utf-8', (err)=> {
//                 if(err) throw err;
//                 console.log("Write Successfully");
//             })
//         })
//     })  
// })

// console.log("Reading File...");



//////////////////////////////////////
/////// Creating Server in NodeJS


// first this will return string data then we convert it into JSON using JSON.parse()
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);

const replaceTemplate = (tempCard, el)=> {
    let output = tempCard.replace(/{%PRODUCTNAME%}/g, el.productName);
    output = output.replace(/{%IMAGE%}/g, el.image);
    output = output.replace(/{%PRICE%}/g, el.price);
    output = output.replace(/{%FROM%}/g, el.from);
    output = output.replace(/{%NUTRIENTS%}/g, el.nutrients);
    output = output.replace(/{%QUANTITY%}/g, el.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, el.description);
    output = output.replace(/{%ID%}/g, el.id);

    if(!el.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;

}

const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if (pathName === '/' ||  pathName === '/overview'){
        
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');

        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

        res.writeHead(200, {'Content-type':'text/html'});
        res.end(output);

    }else if(pathName === '/product'){
        
        res.end("This is the Product Page");
    
    }else if (pathName === '/api'){
        
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        });
        res.end(data);
   
    }
    else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            "my-own-header" : 'Hello from Noman Ali'
        });
        res.end("<h1>Page Not Found</h1>");
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is Running on Port 3000...')
})