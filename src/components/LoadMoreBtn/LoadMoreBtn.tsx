import React from 'react';
import css from "./LoadMoreBtn.module.css";

interface Props {
    onClick: () => void; //
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => { //
    return (
        <div>
            <button className={css.btn} onClick={onClick}>Load More</button> { }
        </div>
    );
};

export default LoadMoreBtn;