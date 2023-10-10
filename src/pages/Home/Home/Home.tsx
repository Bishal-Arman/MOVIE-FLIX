import { Helmet } from "react-helmet-async";

import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MOVIE~FLIX | Home</title>
      </Helmet>
      <Banner />

      <Movies />
    </div>
  );
};

export default Home;
