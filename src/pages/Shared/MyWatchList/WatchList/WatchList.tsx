import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import withReactContent from "sweetalert2-react-content";
import "./WatchList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  AddToWatchedList,
  AddToWatchingList,
  RemoveFromWatchList,
} from "../../../../app/reducerSlice/watchListSlice";
import Swal from "sweetalert2";
import { Episode } from "../../../../graphql/__generated__/graphql";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

const showSweetAlert = () => {
  MySwal.fire({
    icon: "error",
    text: "No movies exist in your watchList!",
    footer: '<a  href="/">Click here & Add To WatchList</a>',
    customClass: {
      footer: "custom-footer-text-color",
      popup: "sweet-alert-with-margin",
    },
  });
};

const WatchList = () => {
  const { watchList } = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();

  if (watchList.length === 0) {
    showSweetAlert();
    return (
      <>
        <h1 className="text-center font-semibold text-xl text-yellow-400 mt-40">
          ~~~Your watclist is empty!!!Please go to home page & select content~~~
        </h1>
        <Link to="/" className="flex justify-center items-center mt-8">
          <button className="btn ">
            Back To Home Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </Link>
      </>
    );
  }

  const removeFromWatchList = (movieId: string) => {
    dispatch(RemoveFromWatchList({ id: movieId }));
    Swal.fire({
      icon: "success",
      title: "Delete Successfully From WatchList",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleAddToWatching = (movie: Episode) => {
    dispatch(AddToWatchingList(movie));
    Swal.fire({
      icon: "success",
      title: `${movie.name}has been added to your WatchingList.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddToWatched = (movie: Episode) => {
    dispatch(AddToWatchedList(movie));
    Swal.fire({
      icon: "success",
      title: `${movie.name}has been added to your WatchedList.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="movies">
      <h3
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="my-10 main-text text-center text-2xl font-semibold "
      >
        MY WATCHlIST
      </h3>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1 gap-10  ">
          {watchList.map((movie) => (
            <div
              key={movie.id}
              className="card w-96 bg-base-100 shadow-xl image-full "
            >
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt="movies"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-thin ">
                  Movie Name : {movie.name}
                </h2>
                <p>
                  <span className=" font-serif ">Release Date</span> :{" "}
                  <span className=" font-bold text-green-500 ">
                    {movie.air_date}
                  </span>
                </p>

                <div className="card-actions flex-row justify-center mt-10 ">
                  <div className="flex">
                    <button
                      className="btn btn-outline btn-info rounded me-2 font-bold"
                      onClick={() => handleAddToWatching(movie)}
                    >
                      Add To Watching
                    </button>
                    <button
                      className="btn btn-outline btn-accent rounded ms-1 font-bold"
                      onClick={() => handleAddToWatched(movie)}
                    >
                      Already Watched
                    </button>
                  </div>
                  <div className="mt-5 flex justify-center items-center">
                    <div className="flex flex-row  justify-center">
                      <button
                        className="btn btn-secondary font-bold "
                        onClick={() => removeFromWatchList(movie.id as string)}
                      >
                        Remove <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
