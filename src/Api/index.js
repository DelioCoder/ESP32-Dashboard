import axios from 'axios';

const url = 'https://esp32-api-gssj.onrender.com/api/data';

export const fetchData = async() => {

    try {
        
        const { data } = await axios.get(`${url}`)

        return data.map(({ temperatura, humedad, createdAt }) => ({ temperatura, humedad, createdAt }));

    } catch (error) {
        return error;
    }

}