// src/services/api.ts
import axios from 'axios';
import { ApiResponse } from '../types/image'; // Імпортуємо ApiResponse

const API_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Замініть на ваш ключ
const BASE_URL = 'https://api.unsplash.com/search/photos';

export async function fetchImages(query: string, page: number): Promise<ApiResponse> {
    const params = {
        client_id: API_KEY,
        query: query,
        page: page,
        per_page: 12, // Кількість зображень на сторінці
    };

    try {
        const response = await axios.get<ApiResponse>(BASE_URL, { params });
        return response.data; // axios автоматично десеріалізує JSON
    } catch (error) {
        // Тут ви можете обробити помилки більш детально
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
        } else {
            console.error('Unexpected error:', error);
        }
        throw error; // Перекидаємо помилку далі
    }
}