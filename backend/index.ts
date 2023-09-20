import cors from "cors";
import express from "express";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

interface Menu {
  id: number;
  name: string;
  price: number;
  isArchived: boolean;
  assetUrl?: string;
}

let menus: Menu[] = [];

app.get("/menu", (req, res) => {
  res.status(200).send(menus);
});

app.post("/menu", (req, res) => {
  const newMenuId = menus.length === 0 ? 1 : menus[menus.length - 1].id + 1;
  const isArchived = false;
  const newMenu = {
    ...req.body,
    id: newMenuId,
    isArchived,
    assetUrl:
      "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
  };
  menus.push(newMenu);
  console.log("Current menus : ", menus);
  res.send(menus);
});

app.delete("/menu/:id", (req, res) => {
  const menuIdToDelete = Number(req.params.id);
  const menuToDelete = menus.find((menu) => menu.id === menuIdToDelete);

  if (menuToDelete) {
    // filtering out menu to delete
    menus = menus.filter((menu) => menu.id !== menuIdToDelete);

    res.send(menus);
  } else {
    res.send(menus);
  }
});

app.put("/menu", (req, res) => {
  const menuToUpdate = req.body;
  const updateMenu = menus.find((menu) => menu.id === menuToUpdate.id);

  if (updateMenu) {
    menus = menus.map((menu) => {
      if (menu.id === menuToUpdate.id) {
        return {
          ...menuToUpdate,
          isArchived: false,
          assetUrl:
            "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
        };
      } else {
        return menu;
      }
    });
    res.send(menus);
  } else {
    res.send(menus);
  }
});

app.listen(port, () => console.log("Server is listening on port - ", port));
