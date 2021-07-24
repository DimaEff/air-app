import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/',
    headers: {
        'x-rapidapi-key': '5cb31833aamshf637b1044711cf2p1fe094jsn28f4c8ed76ed',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    }
})

export const flightAPI = {
    async getFlights(country, currency, locale, originPlace, destinationPlace, outboundPartialDate) {
        const response = await instance.get(`${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}`);
        return response;
    }
}