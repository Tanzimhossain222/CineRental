import { useState } from "react";
import { toast } from "react-toastify";
import tag from "../../assets/tag.svg";
import { useMovieDetails } from "../../context";
import { getImgUrl } from "../../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useMovieDetails();

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = state.cartData.find((item) => item.id === movie.id);

    if (found) {
      toast.error(`The Movie ${movie.title} is already added to the cart!`, {
        position: "bottom-right",
        autoClose: 1500,
      });
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: { ...movie } });
    toast.success(`The Movie ${movie.title} is added to the cart!`, {
      position: "bottom-right",
      autoClose: 1500,
    });
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a
          href="#"
          onClick={() => {
            handleMovieSelection(movie);
          }}
        >
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2"> {movie.genre} </p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
