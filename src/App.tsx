import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/Routes";

function App() {
  return (
    <HelmetProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
