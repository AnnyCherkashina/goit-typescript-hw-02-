import css from "./LoadMoreBtn.module.css";

interface Props {
    handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ handleLoadMore }) => {
    return (
        <div>
            <button className={css.btn} onClick={handleLoadMore}>Load More</button>
        </div>
    );
};

export default LoadMoreBtn;
