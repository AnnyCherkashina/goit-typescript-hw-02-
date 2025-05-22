import React from 'react';
import css from './ImageCard.module.css';
import type { Image, ModalImage } from "../../types/image"; // 

interface Props {
    image: Image;
    openModal: (imgData: ModalImage) => void; // 
}

const ImageCard: React.FC<Props> = ({ image, openModal }) => {
    const altText = image.alt_description || "Зображення"; //

    return (
        <div>
            <img
                className={css.image}
                src={image.urls.small}
                alt={altText}
                onClick={() => openModal({ //
                    src: image.urls.regular, // 
                    alt: altText,
                })}
            />
        </div>
    );
};

export default ImageCard;