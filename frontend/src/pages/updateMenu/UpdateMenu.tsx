import { useParams } from "react-router-dom";

const UpdateMenu = () => {
  const params = useParams(); // to detect with params route to access - use hooks
  const menuId = params.id;
  console.log(menuId);
  return <h1>Update Menu Page - {menuId}</h1>;
};

export default UpdateMenu;


