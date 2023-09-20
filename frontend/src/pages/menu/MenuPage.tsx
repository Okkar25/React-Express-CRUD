import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import MenuCard from "../../components/menuCard/MenuCard";
import { Menu } from "../../types/menu";
import CreateMenu from "./CreateMenu";

const MenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]); // from server
  const [open, setOpen] = useState<boolean>(false);

  const fetchMenus = async () => {
    const response = await fetch("http://localhost:5000/menu");
    const menusFromServer = await response.json();
    setMenus(menusFromServer);
  };

  console.log("Current Menus : ", menus);

  useEffect(() => {
    // console.log("Current Menus : ", menus);
    fetchMenus();
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create Menu
        </Button>
      </Box>
      <CreateMenu open={open} setOpen={setOpen} setMenus={setMenus} />

      {/* Displaying Menus */}
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </Box>
    </Box>
  );
};

export default MenuPage;
