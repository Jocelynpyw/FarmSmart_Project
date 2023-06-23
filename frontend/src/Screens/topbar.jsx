import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
// import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutLinedIcon";
// import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLinedIcon";
// import NotificationsModeOutLinedIcon from "@mui/icons-material/NotificationsModeOutLinedIcon";
// import SettingModeOutLinedIcon from "@mui/icons-material/SettingModeOutLinedIcon";
// import PersonModeOutLinedIcon from "@mui/icons-material/PersonModeOutLinedIcon";
// import SearchIcon from "@mui/icons-material/SearchIcon";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import colors from "../utils/colors";
const Topbar = () => {
  // const { collapseSidebar } = useProSidebar();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <Box
      display="flex"
      width="100%"
      height="60px"
      justifyContent="space-between"
      p={2}
      // backgroundColor="lime"
      boxShadow="0px 0px 5px rgba(0,0,0,0.3)"
    >
      {/* SEARCH */}
      <Box display="flex">
        <Box>
          <MenuOutlinedIcon
            onClick={() => collapseSidebar()}
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </Box>
        <Box display="flex" borderRadius="3px">
          <InputBase placeholder="Search..." sx={{ ml: 2, flex: 1 }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlinedIcon
              sx={{ cursor: "pointer", color: colors.app.greyIcon }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* ICON  */}
      <Box display="flex">
        <IconButton>
          <EmailOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>

        <IconButton>
          <PowerSettingsNewOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
