const { default: axios } = require("axios")

exports.getGpsData = async (apiKey) => {

    try {
        const data = await axios.get(`https://intouch.mapmyindia.com/IntouchAdminApi/getDataByPin?pin=${apiKey}`)
        return data
    }catch(err) {
        return err
    }
}