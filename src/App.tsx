// src/App.tsx
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
import { Image, ModalImage, ApiResponse } from "./types/image";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [offset, setOffset] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgURL, setImgURL] = useState<ModalImage | null>(null);

  useEffect(() => {
    const getImages = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const imagesList: ApiResponse = await fetchImages(query, offset);
        setImages(prev => [...prev, ...imagesList.results]);
        setTotalItems(imagesList.total);
      } catch (error) {
        console.log((error as Error).message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) getImages();
  }, [query, offset]);

  function handleLoadMore(): void {
    setOffset(prev => prev + 1);
  }

  const handleChangeQuery = (queryStr: string): void => {
    setQuery(queryStr);
    setImages([]);
    setOffset(1);
  };

  const openModal = (imgData: ModalImage): void => {
    setIsOpen(true);
    setImgURL(imgData);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setImgURL(null);
  };

  return (
    <div> { }
      <SearchBar onSubmit={handleChangeQuery} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {!isLoading && images.length < totalItems && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      <ImageModal closeModal={closeModal} isOpen={isOpen} imgURL={imgURL} />
    </div> //
  );
}

export default App;