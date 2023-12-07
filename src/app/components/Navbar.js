import Link from "next/link";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Height } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navbarMainBody = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "20px",
  marginInline: "100px",
  padding: "10px",
};
const Navbar = () => {
  return (
    <div style={navbarMainBody}>
      <div>
        <img
          src="/images/googlelogo.png"
          style={{ width: "85px", marginTop: "15px", marginRight: "10px" }}
        ></img>
      </div>
      <div style={{ marginRight: "400px" }}>
        <input
          type="text"
          placeholder="search"
          style={{
            padding: "5%",
            width: "500px",
            borderRadius: "50px",
            borderColor: "white",
            position: "relative",
            marginX: "",
            height: "50px",
            border: "5px white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          
        ></input>
        <CloseIcon
          style={{
            position: "absolute",
            left: "44%",
            top: "45px",
            marginX: "2px",
          }}
        />
        <span style={{ position: "absolute", left: "46%", top: "45px" }}>
          {" "}
          |
        </span>
        <MicIcon
          style={{ position: "absolute", left: "47%", top: "45px" }}
        ></MicIcon>
        <CameraAltIcon
          style={{ position: "absolute", left: "49%", top: "45px" }}
        ></CameraAltIcon>
        <SearchIcon
          style={{ position: "absolute", left: "51%", top: "45px" }}
        ></SearchIcon>
      </div>
      <div style={{ display: "flex", marginTop: "16px" }}>
        <SettingsIcon style={{ marginRight: "10px" }} />
        <GridViewIcon style={{ marginRight: "10px" }} />
        <AccountCircleIcon style={{ marginRight: "10px" }} />
      </div>
    </div>
  );
};

export default Navbar;
