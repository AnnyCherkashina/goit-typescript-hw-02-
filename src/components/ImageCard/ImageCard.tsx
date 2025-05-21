import React from 'react';
import css from './ImageCard.module.css'; // Імпорт CSS-модуля
// ТІЛЬКИ ОДИН ІМПОРТ ТИПІВ:
import type { Image, ModalImage } from "../../types/image"; // <--- ВИПРАВЛЕНО ТУТ (видалено дублюючий імпорт Image)

interface Props {
    image: Image;
    // ТИП openModal МАЄ ВІДПОВІДАТИ: ФУНКЦІЯ ПРИЙМАЄ ModalImage
    openModal: (imgData: ModalImage) => void; // <--- ВИПРАВЛЕНО ТУТ (змінено з string на ModalImage)
}

const ImageCard: React.FC<Props> = ({ image, openModal }) => {
    // Перевіряємо, чи існує alt_description, оскільки API може повертати null
    const altText = image.alt_description || "Зображення";

    return (
        <div>
            <img
                className={css.image}
                src={image.urls.small} // URL для мініатюри
                alt={altText} // Використовуємо altText, який гарантовано не null
                onClick={() => openModal({ // <--- ВИПРАВЛЕНО ТУТ: передаємо ОБ'ЄКТ ModalImage
                    src: image.urls.regular, // Або image.urls.full, якщо ви хочете більший розмір у модалці
                    alt: altText, // Передаємо altText як частину об'єкта ModalImage
                })}
            />
        </div>
    );
};

export default ImageCard;