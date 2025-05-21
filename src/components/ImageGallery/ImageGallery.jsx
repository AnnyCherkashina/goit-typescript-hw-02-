import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
    if (images.length === 0) {
        return null;
    }
    return (
        <ul className={css.ul_list}>
            {images.map((image) => (
                <li className={css.list} key={image.id}>
                    <ImageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;