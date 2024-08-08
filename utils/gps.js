const { default: axios } = require("axios")

//Get GPS Data Function ( From MapMyIndia API )
//Arguments - apiKey
exports.getGpsData = async (apiKey) => {
    //Try-Catch 
    try {
        //Get Request To The MAPMYINDIA API Using Axios 
        const data = await axios.get(`https://intouch.mapmyindia.com/IntouchAdminApi/getDataByPin?pin=${apiKey}`)
        //Return The Data
        return data
    }catch(err) {
        //If Error Return err
        return err
    }
}