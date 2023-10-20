import { Box } from "@mui/material";
import React from "react";
import { Posts } from "./Posts";

export const Feeds = () => {
  return (
    <Box flex={4} p={2}>
      <Posts
        src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
        text="I had one of the most amazing time of my life here. My partner of
            5yrs proposed to me.Happy me!!"
        title="Jane Mary"
        avatar="J"
      />
      <Posts
        src="https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_1280.jpg"
        text="The most amazing hiking experience with my hubby"
        title="Lizzy Ruthi"
        avatar="L"
      />
      <Posts
        src="https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_640.jpg"
        text="The sunset is my peace"
        title="Isaranwa"
        avatar="I"
      />
      <Posts
        src="https://cdn.pixabay.com/photo/2014/11/19/21/13/sunset-538286_640.jpg"
        text="I want to grow wings and fly..."
        title="Old Young Lady"
        avatar="O"
      />
    </Box>
  );
};
