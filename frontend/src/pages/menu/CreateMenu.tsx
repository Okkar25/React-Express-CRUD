import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CreateMenuPayload, Menu } from "../../types/menu";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  setMenus: (menus: Menu[]) => void; // from server
}

const CreateMenu = ({ open, setOpen, setMenus }: Props) => {
  //   console.log(open);

  const [menu, setMenu] = useState<CreateMenuPayload>({
    name: "",
    price: 0,
    assetUrl: "",
  });

  // POST Method
  const createMenu = async () => {
    const response = await fetch("http://localhost:5000/menu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menu),
    });
    const dataFromServer = await response.json();
    // console.log(dataFromServer); // show this data on Menu page

    setMenus(dataFromServer); // send the data to Menu Page
    setOpen(false); // to close dialog box
  };

  // DELETE Method
  const deleteMenu = async () => {
    const menuIdToDelete = 3;
    const response = await fetch(
      `http://localhost:5000/menu/${menuIdToDelete}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  // PUT Method
  const updateMenu = async () => {
    const menuToUpdate = { id: 3, name: "Spaghetti", price: 40 };
    const response = await fetch(`http://localhost:5000/menu`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuToUpdate),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ textAlign: "center" }}>Create Your Menu</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: 300,
              mb: 3,
              mt: 1,
            }}
          >
            <TextField
              sx={{ mb: 3, width: "100%" }}
              label="Menu Name"
              onChange={(event) => {
                setMenu({ ...menu, name: event.target.value });
              }}
            />

            <TextField
              sx={{ width: "100%" }}
              label="menu Price"
              onChange={(event) => {
                setMenu({ ...menu, price: parseFloat(event.target.value) });
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{ width: 150, mx: "auto", borderRadius: 5 }}
            onClick={createMenu}
            disabled={menu?.name && menu?.price ? false : true}
          >
            Create Menu
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenu;
