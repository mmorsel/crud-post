import {
  Card,
  CardContent,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import { SlPlus } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

interface INoPostCard {
  sx?: SxProps;
}

const NoPostCard: React.FC<INoPostCard> = ({ sx }) => {
  const navigate = useNavigate();

  const createPost = () => {
    navigate("/post");
  };

  return (
    <Card sx={{ maxWidth: 600, width: "100%", ...sx }}>
      <CardContent
        sx={{
          opacity: "0.5",
          minHeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="span">
          Скоро появятся новые посты
        </Typography>
        <IconButton onClick={createPost}>
          <SlPlus size={60} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NoPostCard;
