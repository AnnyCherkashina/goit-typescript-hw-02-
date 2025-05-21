import React from 'react';
import css from './ImageCard.module.css';
import type { Image, ModalImage } from "../../types/image"; // <--- ВИПРАВЛЕНО: Тільки один імпорт типів

interface Props {
    image: Image;
    openModal: (imgData: ModalImage) => void; // <--- ВИПРАВЛЕНО: openModal приймає ModalImage
}

const ImageCard: React.FC<Props> = ({ image, openModal }) => {
    const altText = image.alt_description || "Зображення"; // <--- ВИПРАВЛЕНО: Правильне звернення до alt_description

    return (
        <div>
            <img
                className={css.image}
                src={image.urls.small}
                alt={altText}
                onClick={() => openModal({ // <--- ВИПРАВЛЕНО: Передаємо ОБ'ЄКТ ModalImage
                    src: image.urls.regular, // Або image.urls.full
                    alt: altText,
                })}
            />
        </div>
    );
};

export default ImageCard;