import { Outlet } from "react-router-dom";
import Header from "../../widget/Header";
import { Box, Container, Divider } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Container sx={{ width: "100%", height: "100vh" }}>
      <Header />
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: "flex", gap: 4, flexDirection: "column", pb: 5 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
