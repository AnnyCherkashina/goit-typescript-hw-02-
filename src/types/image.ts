// src/types/image.ts

export interface Image {
    id: string;
    alt_description: string | null; // alt_description може бути null
    urls: {
        small: string;
        regular: string;
        full?: string; // full може бути необов'язковим
    };
}

export interface ApiResponse {
    results: Image[];
    total: number;
    total_pages?: number;
}

// Це тип, який очікується для даних модального вікна
export interface ModalImage {
    src: string;
    alt: string;
}