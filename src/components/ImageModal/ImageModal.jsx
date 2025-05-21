import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

function ImageModal({ closeModal, isOpen, imgURL }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <img className={css.img} src={imgURL} alt="" />
                    <button className={css.btn} onClick={closeModal}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );

}

export default ImageModal;