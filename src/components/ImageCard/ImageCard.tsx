import css from "./ImageCard.module.css";
import type { Image } from "../types/image";

interface Props {
    image: Image;
    openModal: (url: string) => void;
}

const ImageCard: React.FC<Props> = ({ image, openModal }) => {
    return (
        <div>
            <img
                className={css.image}
                src={image.urls.small}
                alt={image.urls.alt_description || "image"}
                onClick={() => openModal(image.urls.full)}
            />
        </div>
    );
};

export default ImageCard;
