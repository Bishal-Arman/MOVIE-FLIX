import { useQuery } from "@apollo/client";
import "./Movies.css";
import { Get_Episodes } from "../../../graphql/queries";

const Movies = () => {
  const { loading, error, data } = useQuery(Get_Episodes);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // console.log(data);

  return (
    <div className="flex justify-center movies_container pb-8">
      <div>
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="my-8 main-text text-center text-2xl font-semibold "
        >
          World's Most Famous Movies
        </h3>
        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="grid grid-cols-3 gap-10 mx-auto  "
        >
          {data?.episodes?.results?.map((movie) => (
            <div
              key={movie?.id}
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
                  Movie Name : {movie?.name}
                </h2>
                <p>
                  <span className=" font-serif ">Release Date</span> :{" "}
                  <span className=" font-bold text-green-500 ">
                    {movie?.air_date}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info ">
                    Watch Options
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

export default Movies;
