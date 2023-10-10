import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./WatchList.css";

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

  if (watchList.length === 0) {
    showSweetAlert();
    return <></>;
  }

  return (
    <div className="watchList">
      <h3
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="my-10 main-text text-center text-2xl font-semibold "
      >
        MY WATCHlIST
      </h3>
      <div className="mx-auto w-9/12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-10  ">
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

                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info rounded ">
                    Watching
                  </button>
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
