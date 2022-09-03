const httpServer = require('http');
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate');


// read data from file
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);

///////////////////////////////////
// Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/templates/templateCourse.html`,
    'utf-8'
);

// const replaceTemplate = (htmlStr, course) => {
//     let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
//     output = output.replace(/{%IMAGE%}/g, course.image);
//     output = output.replace(/{%FROM%}/g, course.from);
//     output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
//     output = output.replace(/{%CREDITS%}/g, course.credits);
//     output = output.replace(/{%DESCRIPTION%}/g, course.description);
//     output = output.replace(/{%ID%}/g, course.id);
//     return output;
// }

const dataObj = JSON.parse(tempCourse);

// create server
const server = httpServer.createServer((req, res) => {
    // const urlParameter = url.parse(req.url, true);
    // console.log(urlParameter.query);
    // console.log(urlParameter.pathname);

    const {query,pathname} = url.parse(req.url, true); // object destructuring

    if (query.id) {
        if(pathname === '/' || pathname.toLowerCase() === '/courses') {
            res.writeHead(200, { // 200 is good/successful
                'Content-type': 'text/html'
            });
            const course = dataObj[Number(query.id)];
            const courseHTML = replaceTemplate(templateHTMLCourse, course);
            // res.end(`we received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
            // ${JSON.stringify(course)}
            // `);
            res.end(courseHTML);
        }
        else {
            res.writeHead(404, { //server did not find what you were looking for
                'Content-type': 'text/html'
            });
            res.end(`resource not found`);
        }
    }
    
    console.log(query.id);
    // console.log(`Request from client ${req}`);
});


// start listening to requests
server.listen(8000, 'localhost', () => {
    console.log('Listening to requests on port 8000');
});