import { IPost } from "../../../app/model/types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { BiEdit } from "react-icons/bi";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeletePostButton from "../../../widget/DeletePostButton";
import { memo } from "react";

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 800, width: "100%" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
        title={post.title}
        subheader={post.createdAt}
      />
      <CardMedia component="img" sx={{ maxWidth: 800 }} image={post.cover} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", wordWrap: "break-word" }}
        >
          {post.content}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">Автор: {post.author}</Typography>
        <Stack direction="row" spacing={1}>
          <DeletePostButton postId={post.id ?? ""} />
          <IconButton
            color="success"
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <BiEdit />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default memo(PostCard);
