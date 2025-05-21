import React from 'react';
import css from "./LoadMoreBtn.module.css";

interface Props {
    onClick: () => void; // <--- ВИПРАВЛЕНО: Пропс називається onClick
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => { // <--- ВИПРАВЛЕНО: Деструктуризуємо onClick
    return (
        <div>
            <button className={css.btn} onClick={onClick}>Load More</button> {/* <--- ВИПРАВЛЕНО: Викликаємо onClick */}
        </div>
    );
};

export default LoadMoreBtn;