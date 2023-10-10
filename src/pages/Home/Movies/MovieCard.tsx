import { Episode } from "../../../graphql/__generated__/graphql";
import { useDispatch } from "react-redux";
import { addToWatchList } from "../../../app/reducerSlice/watchListSlice";

const MovieCard = ({ movie }: { movie: Episode }) => {
  const dispatch = useDispatch();
  const handelAdded = (movie: Episode) => {
    dispatch(addToWatchList(movie));
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="movies"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-thin ">Movie Name : {movie?.name}</h2>
        <p>
          <span className=" font-serif ">Release Date</span> :{" "}
          <span className=" font-bold text-green-500 ">{movie?.air_date}</span>
        </p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-info rounded "
            onClick={() => handelAdded(movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;