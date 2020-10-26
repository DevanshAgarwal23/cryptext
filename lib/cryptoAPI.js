const axios = require('axios')
const colors = require('colors')


class CryptoAPI {
    constructor(apiKey) {
       this.apiKey = apiKey;
       this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker' 
    }


    async getPriceData(coinOption, currOption ){
        try{
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`)
        
            let output = '';

            res.data.forEach(coin => {
                output += `coin ${coin.symbol.yellow}  (${coin.name}) | Price: ${coin.price.white} | Rank: ${coin.rank.blue} \n` 
            })
            return output;
        }catch(err){
            console.error(err)
        }
    }
}


module.exports = CryptoAPI;