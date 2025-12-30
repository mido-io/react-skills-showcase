import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://picsum.photos/v2/list";
  const page = 1;
  const limit = 8;

  async function fetchImages() {
    try {
      setLoading(true);

      const response = await fetch(`${baseURL}?page=${page}&limit=${limit}`);
      const data = await response.json();

      setImages(data);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }


  function handlePrevious() {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  function handleNext() {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }


  useEffect(() => {
    fetchImages();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-yellow-400 text-2xl">
        Loading...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        Error: {errorMsg}
      </div>
    );
  }

  // ---------------------
  // UI
  // ---------------------
  return (
    <div className="min-h-screen flex flex-col justify-center items-center dark:bg-black p-4 sm:p-10">

      <h1 className="text-4xl font-bold text-white mb-10 tracking-wide">
        Image Slider
      </h1>

      <div className="relative w-full max-w-[600px] h-[300px] sm:h-[400px] overflow-hidden rounded-xl">

        <BsArrowLeftCircleFill
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl cursor-pointer hover:scale-110 transition"
          onClick={handlePrevious}
        />

        {images.length > 0 && (
          <img
            src={images[currentSlide].download_url}
            alt="slider"
            className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500"
          />
        )}

        <BsArrowRightCircleFill
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl cursor-pointer hover:scale-110 transition"
          onClick={handleNext}
        />
      </div>

      <div className="flex gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition 
              ${index === currentSlide ? "bg-white" : "bg-gray-600"}
            `}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;
