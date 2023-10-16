import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Feeds } from "./components/Feeds";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feeds />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
