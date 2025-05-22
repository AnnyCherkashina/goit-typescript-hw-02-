import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import type { Image, ModalImage } from "../../types/image"; //

interface Props {
    images: Image[];
    openModal: (imgData: ModalImage) => void; // 
}

const ImageGallery: React.FC<Props> = ({ images, openModal }) => {
    if (images.length === 0) return null;

    return (
        <ul className={css.ul_list}>
            {images.map(image => (
                <li className={css.list} key={image.id}>
                    <ImageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;