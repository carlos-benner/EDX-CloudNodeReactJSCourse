//Nested Promises without async/await

//EXAMPLE: Let's request the book details based on book id.

const axios = require('axios').default

const connectToURL = (url) =>{
    const req = axios.get(url)
    req.then(resp=>{
        let listOfWork = resp.data.work
        return listOfWork.map((work)=>{
            return work.workid
        })
    }).then((workids) => {
        let promisesArr = []
        workids.forEach((workId)=>{
            const req = axios.get(`https://reststop.randomhouse.com/resources/works/${workId}`);
            promisesArr.push(req)
            //this is called as soon as the response arrived to the client. It could have different timing for each iteration
            req.then(resp=> console.log(resp.data.titleAuth));
        })
    }).catch( err => console.log(err.toString()))
}

connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');