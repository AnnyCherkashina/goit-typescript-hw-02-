import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleLoadMore }) => {
    return (
        <div>
            <button className={css.btn} type="button" onClick={handleLoadMore}>
                Load More
            </button>
        </div>
    );
};

export default LoadMoreBtn;