import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    imgURL: string;
}

const ImageModal: React.FC<Props> = ({ isOpen, closeModal, imgURL }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <div>
                <img className={css.img} src={imgURL} alt="" />
                <button className={css.btn} onClick={closeModal}>Close</button>
            </div>
        </Modal>
    );
};

export default ImageModal;
