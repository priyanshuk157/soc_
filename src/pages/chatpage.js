import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../component/chatpagecomp/SideDrawer";
import MyChats from "../component/chatpagecomp/MyChats";
import ChatBox from "../component/chatpagecomp/ChatBox";

const Chatpage = () => {
 const {user} = ChatState();
  return (

<div style={{width : "100%"}}>
  {user && <SideDrawer/>} 
  <Box
  display={
    "flex"
  }
  justifyContent='space-evenly'
  width={"100%"}
  height={'"91.5vh"'}
  p="10px"
  >
    {user && <MyChats/>}
    {user && <ChatBox/>}
  </Box>

</div>

  )   ;
};

export default Chatpage;
