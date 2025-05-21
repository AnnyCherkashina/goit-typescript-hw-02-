import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./services/api";
//components
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgURL, setImgURL] = useState({});

  useEffect(() => {
    const getImages = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const imagesList = await fetchImages(query, offset);
        setImages([...images, ...imagesList.results]);
        setTotalItems(imagesList.total);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, offset]);

  function handleLoadMore() {
    setOffset(offset + 1);
  }

  const handleChangeQuery = (queryStr) => {
    setQuery(queryStr);
    setImages([]);
  };

  const openModal = (imgURL) => {
    setIsOpen(true);
    setImgURL(imgURL);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar setQuery={handleChangeQuery} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {!isLoading && images.length < totalItems && !error && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      {isLoading && <Loader />}
      <ImageModal closeModal={closeModal} isOpen={isOpen} imgURL={imgURL} />
    </div>
  );
}

export default App;