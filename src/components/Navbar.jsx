import {
  AppBar,
  Avatar,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import React from "react";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));
export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Issah
        </Typography>
        <EmojiNatureIcon
          sx={{ display: { xs: "block", sm: "none", width: 50, height: 40 } }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2023/10/15/05/03/sunflowers-8316194_1280.jpg"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
