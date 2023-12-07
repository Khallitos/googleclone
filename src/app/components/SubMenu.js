import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Typography from '@mui/material/Typography'
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FeedIcon from '@mui/icons-material/Feed';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SubMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        marginInline: "80px",
        marginBottom:"5px"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SearchIcon />{" "}
        <Typography variant="body1" color="initial" style={{marginRight:"15px"}}>
          {" "}
          All
        </Typography>
        <PlayCircleIcon />{" "}
        <Typography variant="body1" color="initial" style={{marginRight:"15px"}}>
          {" "}
          Videos
          </Typography>
        <FeedIcon />{" "}
        <Typography variant="body1" color="initial" style={{marginRight:"15px"}}>
          {" "}
          News
        </Typography>

         <ImageSearchIcon />{" "}
        <Typography variant="body1" color="initial" style={{marginRight:"20px"}}>
          {" "}
          Images
        </Typography>

        <MoreVertIcon />{" "}
        <Typography variant="body1" color="initial" style={{marginRight:"15px"}}>
          {" "}
          More
        </Typography>
      </div>

      <div><Typography variant="p" color="initial">Tools</Typography></div>

      <div><Typography variant="p" color="initial">SafeSearch</Typography><ArrowDropDownIcon/></div>
    </div>
  );
};

export default SubMenu;
