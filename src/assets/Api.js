    const globalDataUrl = 'https://coingecko.p.rapidapi.com/global';
    const globalDataOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57e80cd26msh5898b169528186fp1f068fjsn8af7bd3d4369',
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
	}
    };

    async function getMarketdata(){
        const response = await fetch(globalDataUrl, globalDataOptions)
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

    const coinsMarketUrl = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&page=1&sparkline=true&per_page=100&order=market_cap_desc';
    const coinMarketOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c57e80cd26msh5898b169528186fp1f068fjsn8af7bd3d4369',
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
	}
    };
    
    async function getCoins() {
        const response = await fetch(coinsMarketUrl, coinMarketOptions);
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
        const response = await fetch(cryptoNewsUrl);
        if (!response.ok){
            throw new Error({
                message: "failed to fetch crypto news",
                statusText: response.statusText,
                status: response.status,
            });
        }
        const data = await response.json()
        return data.results
    }
        
    export {getMarketdata, getCoins, cryptoNewsData}