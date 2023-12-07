import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from '@mui/icons-material/Share';
import Link from "next/link";
import PublicIcon from '@mui/icons-material/Public';


const MainBody = () => {
  return (
    <div
      style={{
        marginBottom: "5px",
        marginInline: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Divider />
      <div style={{ marginTop: "10px" }}>
        <Typography variant="p" color="initial">
          About 25,340,000,000 results(0.35 seconds){" "}
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="/images/googlelogo2.png"
              style={{
                width: "30px",
                height: "30px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2px",
                fontSize: "15px",
              }}
            >
              <Typography variant="p" color="initial">
                Google
              </Typography>
              <Typography variant="p" color="initial">
                http://www.google.com <MoreVertIcon />
              </Typography>
            </div>
          </div>
          <div
            style={{
              marginTop: "10px",
              width: "550px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="p"
              color="initial"
              style={{ fontSize: "20px" }}
            >
              Google
            </Typography>
            <Typography
              variant="p"
              color="initial"
              style={{ marginTop: "10px" }}
            >
              Search the world's information, including webpages, images, videos
              and more. Google has many special features to help you find
              exactly what you're looking ...
            </Typography>

            <div
              style={{
                display: "flex",
                marginLeft: "30px",
                backgroundColor: "",
                flexDirection:"column",
                marginTop:"30px"
              }}
            >
              <Typography
                variant="p"
                color="initial"
                style={{ marginTop: "10px" }}
              >
                <Link href="" style={{color:"purple", fontSize:"20px"}}>Sign in - Google Accounts</Link>
              </Typography>
              <Typography
                variant="p"
                color="initial"
              >
                Not your computer? Use Guest mode to sign in privately. Learn ...
              </Typography>
              

              <Typography
                variant="p"
                color="initial"
                style={{ marginTop: "20px" }}
              >
                <Link href="" style={{color:"purple", fontSize:"20px"}}>Personal Cloud Storage & File Sharing Platform</Link>
              </Typography>
              <Typography
                variant="p"
                color="initial"
              >
               Learn about Google Drive's file sharing platform that provides a ...
              </Typography>


              <Typography
                variant="p"
                color="initial"
                style={{ marginTop: "20px" }}
              >
                <Link href="" style={{color:"purple", fontSize:"20px"}}>Account</Link>
              </Typography>
              <Typography
                variant="p"
                color="initial"
              >
               Your Google Account makes every service you use personalized to ...
              </Typography>


              
              <Typography
                variant="p"
                color="initial"
                style={{ marginTop: "20px" }}
              >
                <Link href="" style={{color:"purple", fontSize:"20px"}}>Search</Link>
              </Typography>
              <Typography
                variant="p"
                color="initial"
              >
               Your Google Apps keeps you in the know about the topics that ...
              </Typography>

              <Typography
                variant="p"
                color="initial"
                style={{ marginTop: "20px" }}
              >
                <Link href="" style={{color:"purple", fontSize:"15px"}}>More results from google.com »</Link>
              </Typography>
            </div>
          </div>
        </div>

        <div style={{border:"1px solid #dadce0", width:"400px" ,borderRadius:"20px", display:"flex", flexDirection:"column", padding:"20px"}}>
        <div style={{marginTop:"10px",display:"flex",flexDirection:"row"}}>

          <Typography variant="p1" color="initial" style={{fontSize:"30px", marginRight:"30px", marginTop:"30px"}}>Google</Typography>
          <ShareIcon style={{fontSize:"30px", marginRight:"30px",marginTop:"40px"}}/>
          
         <img src="/images/gog3.png" style={{fontSize:"30px"}}></img>

        




        </div>
        <Divider/>
        <div  style= {{display:"flex", marginTop:"10px"}} >
        <PublicIcon/>
        <Link href="" style={{color:"purple", fontSize:"15px",marginLeft:"10px"}}>google.com</Link>
        </div>
        <Divider/>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>CEO: <Link href="/ "style={{color:"purple"}}>Sundar Pichai (Oct 2, 2015–)</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>CMO:  <Link href="/" style={{color:"purple"}}> Lorraine Twohill</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>Founders: <Link href="/" style={{color:"purple"}}> Larry Page, Sergey Brin</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>Parent organization:  <Link href="/" style={{color:"purple"}}>Alphabet Inc.</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>Subsidiaries:  <Link href="/" style={{color:"purple"}}>YouTube, Firebase, Google AI, Google Japan, MORE</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>Area served: <Link href="/" style={{color:"purple"}}> International</Link></Typography>
        <Typography variant="p1" color="initial" style={{fontSize:"15px", marginRight:"30px", marginTop:"10px"}}>Founded:  <Link href="/" style={{color:"purple"}}>September 4, 1998, Menlo Park, California, United States</Link></Typography>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
