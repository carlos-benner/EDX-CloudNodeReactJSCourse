//Example of using promises without async/await

const axios = require('axios').default;

const connectToURL = (url) => {
    const req = axios.get(url)          //Pending status
    console.log(req)
    req.then(resp => {                  //Resolved status
        let listOfWork = resp.data.work
        listOfWork.forEach((work)=>{
            console.log(work.titleAuth)
        })
    })
    .catch(err=>{                       //Rejected status
        console.log(err.toString())
    })
}

console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
console.log("After connect URL")