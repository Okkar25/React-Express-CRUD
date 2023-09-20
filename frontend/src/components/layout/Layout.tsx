import FastfoodIcon from "@mui/icons-material/Fastfood";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#252B48",
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#F7E987" }}>
          Back Office Application
        </Typography>
      </Box>

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box
          sx={{
            width: 350,
            backgroundColor: "#445069",
            borderTopRightRadius: 20,
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "#FFF0F5", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: "#FFF0F5", fontSize: 20 }}>
                    Home
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>

          <Link to={"/menu"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <FastfoodIcon sx={{ color: "#FFF0F5", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: "#FFF0F5", fontSize: 20 }}>
                    Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>

          <Link to={"/menuCategory"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <WidgetsIcon sx={{ color: "#FFF0F5", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: "#FFF0F5", fontSize: 20 }}>
                    Menu Category
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </Box>

        <Box sx={{ width: "100%", p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
