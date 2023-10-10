import { useQuery } from "@apollo/client";
import "./Movies.css";
import { Get_Episodes } from "../../../graphql/queries";
import MovieCard from "./MovieCard";
import { Episode } from "../../../graphql/__generated__/graphql";

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
          className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-10 mx-auto  "
        >
          {data?.episodes?.results?.map((movie) => (
            <MovieCard key={movie?.id} movie={movie as Episode}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
