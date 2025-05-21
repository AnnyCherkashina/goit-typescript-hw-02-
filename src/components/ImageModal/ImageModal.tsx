// src/components/ImageModal/ImageModal.tsx
import React from 'react';
import Modal from "react-modal";

import css from "./ImageModal.module.css";
import { ModalImage } from "../../types/image"; // <--- ДОДАНО: Імпорт ModalImage

// Modal.setAppElement('#root'); // <--- ВИПРАВЛЕНО: ЦЕЙ РЯДОК ПЕРЕНЕСЕНИЙ У main.tsx

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    imgURL: ModalImage | null; // <--- ВИПРАВЛЕНО: imgURL є ModalImage | null
}

const ImageModal: React.FC<Props> = ({ isOpen, closeModal, imgURL }) => {
    if (!imgURL) {
        return null; // Якщо немає URL, не рендеримо модалку
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            // Додайте стилі, якщо потрібно (наприклад, для center модалки)
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