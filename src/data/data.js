import algorithmImg from "/public/algorithms.png"
import diversificationImg from "/public/diversification.png"
import securityImg from "/public/security.png"
import growImg from "/public/grow.png"

const features = [
    {
        featureImg: diversificationImg,
        featureTitle: 'Portfolio Diversification',
        description:'Maximize your profits by diversifying your crypto portfolio effortlessly',
    },
    {
        featureImg: algorithmImg,
        featureTitle: 'Smart Trading',
        description: 'Make more informed trading decisions with the power of AI',
    },
    {
        featureImg: securityImg,
        featureTitle: 'Secure One-Click Transactions',
        description: 'Execute trades swiftly without compromising on security',
    },
    {
        featureImg: growImg,
        featureTitle:'Learn and Thrive',
        description:'Elevate your trading skills with our rich educational resources',
    },
]


const stats = [
    {
        number: '$1 billion',
        description: 'Quarterly volume traded',
    },
    {
        number: '20+',
        description: 'Cryptocurrencies' ,
    },
    {
        number: '1 million',
        description: 'Registered users' ,
    },
    {
        number: '<0.1%',
        description: 'Lowest transaction fee',
    },
]



export {features, stats}