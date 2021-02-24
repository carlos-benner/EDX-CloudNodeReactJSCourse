//Nested promises with async/await

const axios = require('axios').default

const connectToURL = async (url) =>
{
    const resp = await axios.get(url)
    let listOfWork = resp.data.work
    let workIds = listOfWork.map(work=> work.workid)
    workIds.forEach(workid => getBook(workid).catch(err=>console.error(err.toString())))    
}

const getBook = async (bookId) =>{
    const req = await axios.get(`https://reststop.randomhouse.com/resources/works/${bookId}`)
    console.log(req.data.titleAuth)
}

connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err => {
    console.log(err.toString())
});
