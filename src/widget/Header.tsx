import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { pages } from "../app/routes/pages";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }} component="nav">
            {pages.map((page) => (
              <Link
                component={RouterLink}
                to={page.path}
                key={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
