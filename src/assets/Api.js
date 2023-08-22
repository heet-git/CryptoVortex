    const globalDataUrl = 'https://api.coingecko.com/api/v3/global'
    
    const coinsMarketurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&locale=en&precision=2'

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
                const response = await fetch(coinsMarketurl);
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

        export {getMarketdata , getCoins}