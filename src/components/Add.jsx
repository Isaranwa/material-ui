import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  Add as AddIcon,
  CalendarMonth,
  CropOriginal,
  EmojiEmotions,
  PersonAddAlt,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled("Box")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 5,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} bgcolor="white" borderRadius={5}>
          <Typography variant="h6" color={"grey"} textAlign={"center"}>
            Create New Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://cdn.pixabay.com/photo/2023/10/15/05/03/sunflowers-8316194_1280.jpg"
            />
            <Typography variant="span">Issah</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="secondary" />
            <CropOriginal color="primary" />
            <VideoCameraBack color="success" />
            <PersonAddAlt color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
