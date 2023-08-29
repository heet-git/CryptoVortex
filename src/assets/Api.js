    const globalDataUrl = 'https://api.coingecko.com/api/v3/global'

    const coinsMarketUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&locale=en&precision=2'

    async function getMarketdata(){
        const response = await fetch(globalDataUrl)
        if (!response.ok){
            throw new Error({
                message: "failed to fetch market data",
                statusText: response.statusText,
                status: response.status,
            });
        }
        const data = await response.json();
        return data
    }
    
    async function getCoins() {
        const response = await fetch(coinsMarketUrl);
        if (!response.ok) {
            throw new Error({
                message: "failed to fetch coins data",
                statusText: response.statusText,
                status: response.status,
            });
        }
        const data = await response.json();
        return data
    } 

    const cryptoNewsUrl = 'https://newsdata.io/api/1/news?apikey=pub_28435bef511fe731b7803eb428ee813e64e4e&q=cryptocurrencies';
        
    async function cryptoNewsData() {
        try {
            const response = await fetch(cryptoNewsUrl);
            const result = await response.json();
            return result
        } catch (error) {
            throw error
        }   
    }
        
    export {getMarketdata, getCoins, cryptoNewsData}