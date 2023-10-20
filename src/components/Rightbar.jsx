import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/04/25/20/20/lady-739664_640.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2019/12/31/12/34/girl-4731823_640.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/08/14/19/53/vacation-888817_640.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2016/08/17/04/27/mother-1599653_640.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2018/05/23/16/06/woman-3424409_640.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2017/08/07/16/29/red-2605450_640.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2020/03/27/19/56/girl-4974728_640.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2019/07/29/08/57/girl-4370196_640.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2020/06/06/14/29/girl-5266760_640.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} sx={{ width: 400, height: 100 }}>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/08/14/19/53/vacation-888817_640.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2019/12/31/12/34/girl-4731823_640.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/25/20/20/lady-739664_640.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
      </Box>
    </Box>
  );
};
