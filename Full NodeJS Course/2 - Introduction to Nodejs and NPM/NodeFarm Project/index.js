// Reading and Writing data into files using fs module in NodeJS

const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');


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
/////// Creating Server and Making Project Node-Farm Project in NodeJS 


// first this will return string data then we convert it into JSON using JSON.parse()

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);
const slugs = dataObj.map(el => slugify(el.productName, {lower:true}));

const server = http.createServer((req, res)=>{

    const { query , pathname } = url.parse(req.url, true);


    if (pathname === '/' ||  pathname === '/overview'){
        
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');

        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

        res.writeHead(200, {'Content-type':'text/html'});
        res.end(output);

    }else if(pathname === '/product'){

        res.writeHead(200, {'Content-type':'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        
        res.end(output);    

    }else if (pathname === '/api'){
        
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