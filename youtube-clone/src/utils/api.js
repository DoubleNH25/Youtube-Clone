import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'x-rapidapi-key': 'ab9c518bcdmshcfdeefc05e06ecdp1724b8jsne7b4864a28f2',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}