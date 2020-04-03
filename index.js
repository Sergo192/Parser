const request = require('request')
const json = 'https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0'
request(json ,(error,response,html)=>{
    if(!error && response.statusCode == 200){
        const obj = JSON.parse(html);
        for(var i = 0;i<198;i++){
        console.log(obj['chart'][i]['share']['subject'])
        console.log(obj['chart'][i]['share']['href'])
    }}
})