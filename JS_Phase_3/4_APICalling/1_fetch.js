let url = 'https://dg.ceo/api/breeds/image/random'
fetch(url)
    .then((response)=>{
        console.log("Promise resolve ",response);
        
        // console.log(response.body);
        
    })
    .catch((err)=>{
        console.log("Promise Reject : ");
        console.log(err);
    })