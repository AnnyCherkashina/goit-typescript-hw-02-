import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
    return (
        <div>
            <img
                className={css.image}
                src={image.urls.small}
                alt={image.urls.alt_description}
                onClick={() => {
                    openModal(image.urls.full);
                }}
            />
        </div>
    );
};

export default ImageCard;