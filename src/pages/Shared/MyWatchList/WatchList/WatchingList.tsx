import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  AddToWatchedList,
  RemoveFromWatchingList,
} from "../../../../app/reducerSlice/watchListSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Episode } from "../../../../graphql/__generated__/graphql";

const MySwal = withReactContent(Swal);

const showSweetAlert = () => {
  MySwal.fire({
    icon: "error",
    text: "No movies exist in your WatchingList!",
    customClass: {
      footer: "custom-footer-text-color",
      popup: "sweet-alert-with-margin",
    },
  });
};

const WatchingList = () => {
  const { watching } = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();
  const handleRemove = (movieId: string) => {
    dispatch(RemoveFromWatchingList({ id: movieId }));
    Swal.fire({
      icon: "success",
      title: "Delete Successfully From WatchingList",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  if (watching.length === 0) {
    showSweetAlert();
    return (
      <>
        <h1 className="text-center font-semibold text-xl text-yellow-400 mt-40">
          ~~~Your watchinglist is empty~~~
        </h1>
      </>
    );
  }
  const handleWatched = (movie: Episode) => {
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
        MY WATCHINGlIST
      </h3>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-1  sm:grid-cols-1 gap-10  ">
          {watching.map((movie) => (
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
                      className="btn btn-outline btn-accent rounded me-1 font-bold"
                      onClick={() => handleWatched(movie)}
                    >
                      Already Watched
                    </button>
                    <button
                      className="btn btn-secondary font-bold ms-1 "
                      onClick={() => handleRemove(movie.id as string)}
                    >
                      Remove <FontAwesomeIcon icon={faTrash} />
                    </button>
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

export default WatchingList;
