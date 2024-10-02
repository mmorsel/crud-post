import { Box } from "@mui/material";
import NoPostCard from "../../widget/NoPostCard";
import { useStore } from "../../app/model/useStore";
import PostCard from "../../entities/post-card/ui/PostCard";

const PostsPage = () => {
  const posts = useStore((store) => store.posts);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {posts.length === 0 ? (
        <NoPostCard sx={{ mt: 6 }} />
      ) : (
        posts.map((post) => <PostCard post={post} key={post.id} />)
      )}
    </Box>
  );
};

export default PostsPage;
