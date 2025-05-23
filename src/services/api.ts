
import axios from 'axios';
import { ApiResponse } from '../types/image';

const API_KEY = "bxCWOCG6Ryn-QR9Q9kaus_sxPIUu908puB1XN4bBNhg";
const BASE_URL = 'https://api.unsplash.com/search/photos';

export async function fetchImages(query: string, page: number): Promise<ApiResponse> {
    const params = {
        client_id: API_KEY,
        query: query,
        page: page,
        per_page: 12,
    };

    try {
        const response = await axios.get<ApiResponse>(BASE_URL, { params });
        return response.data; //
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}