import axios from "axios";
import { Image } from "../types/image";

const API_KEY = "bxCWOCG6Ryn-QR9Q9kaus_sxPIUu908puB1XN4bBNhg";

axios.defaults.baseURL = "https://api.unsplash.com";

export interface FetchImagesResponse {
    total: number;
    results: Image[];
}

export async function fetchImages(query: string, page: number): Promise<FetchImagesResponse> {
    const response = await axios.get("/search/photos", {
        params: {
            query,
            per_page: 12,
            page,
            client_id: API_KEY,
        },
    });

    return response.data;
}
