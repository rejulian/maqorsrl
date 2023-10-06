import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Header from "../Components/Layout/Header/Header";
import Footer from "../Components/Layout/Footer/Footer";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
