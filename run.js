const axios = require('axios');
const path = require('path');
const axiosInstance  =  axios.create({
    baseUrl : 'https://foodmandu.com/', 
    timeout : 3000,
    headers : { 
        'Connection' : 'keep-alive' , 
        'Accept' : 'application/json, text/plain, */*',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 { (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
        // 'Referer': 'https://foodmandu.com/Restaurant/Details/289',
        'Accept-Language': 'en-US,en;q=0.9',
    }
});


// axiosInstance.get('')

const getFoodmanduDetails = (url) => { 
    const vendorID =  path.basename(url);
    const apiUrl = `https://foodmandu.com/webapi/api/Product/getproducts?Keyword=&vendorid=${vendorID}`;
    axiosInstance
    .get(apiUrl , { headers: { 'Referer' : url}} )
    .then( res => { 
        const data = res.data;
        let products  = [];      
        data.forEach( (item , index )  => { 
            // console.log(`Processing: ${index  + 1} out of ${data.length}`);
            let foodItems  = item.items;
            foodItems.forEach( (fVal) => { 
                products.push(fVal.name);
            });
        });
        let randomFood =  products[Math.floor(Math.random() * products.length)]
        console.log(`The bot has randomly selected ${randomFood} for you !!`);

    });

}




getFoodmanduDetails('https://foodmandu.com/Restaurant/Details/289');
//foodmandu random food order bot  


