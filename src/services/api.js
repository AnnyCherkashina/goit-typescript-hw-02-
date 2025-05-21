import axios from "axios";

const API_KEY = "bxCWOCG6Ryn-QR9Q9kaus_sxPIUu908puB1XN4bBNhg";

axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchImages(query, page) {
    try {
        const response = await axios.get(`/search/photos`, {
            params: {
                query,
                per_page: 12,
                page,
                client_id: API_KEY,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}