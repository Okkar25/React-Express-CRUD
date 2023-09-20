import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Menu from "../../pages/menu/MenuPage";
import MenuCategory from "../../pages/menuCategory/MenuCategory";
import UpdateMenu from "../../pages/updateMenu/UpdateMenu";
import Layout from "../layout/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/menu" Component={Menu} />
          <Route path="/menu/:id" Component={UpdateMenu} />
          <Route path="/menuCategory" Component={MenuCategory} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
