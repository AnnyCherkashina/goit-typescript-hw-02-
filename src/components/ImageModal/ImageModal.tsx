// src/components/ImageModal/ImageModal.tsx
import React from 'react';
import Modal from "react-modal";

import css from "./ImageModal.module.css";
import { ModalImage } from "../../types/image"; // 



interface Props {
    isOpen: boolean;
    closeModal: () => void;
    imgURL: ModalImage | null; // 
}

const ImageModal: React.FC<Props> = ({ isOpen, closeModal, imgURL }) => {
    if (!imgURL) {
        return null; // 
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            // 
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: 'none',
                    overflow: 'visible',
                    padding: '0'
                }
            }}
            contentLabel={imgURL.alt || "Image Modal"}
        >
            <div>
                <img className={css.img} src={imgURL.src} alt={imgURL.alt || "Зображення"} />
                <button className={css.btn} onClick={closeModal}>Close</button>
            </div>
        </Modal>
    );
};

export default ImageModal;