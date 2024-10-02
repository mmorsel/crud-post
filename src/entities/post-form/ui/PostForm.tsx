import { Box, Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../../app/model/types";
import { useEffect } from "react";
import FormField from "../../../widget/FormField";
import UploadFile from "../../../widget/UploadFile";
import { useStore } from "../../../app/model/useStore";

const initPost: IPost = {
  title: "",
  content: "",
  createdAt: new Date().toLocaleDateString(),
  author: "",
  cover: "",
  id: "",
};

const formConfig = [
  {
    name: "title",
    label: "Заголовок поста",
    required: true,
  },
  {
    name: "author",
    label: "Автор",
    required: true,
  },
  {
    name: "content",
    label: "Содержание поста",
    required: true,
    type: "textarea",
  },
];

const PostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const form = useForm<IPost>({ defaultValues: initPost });

  const createPost = useStore((store) => store.createPost);
  const editPost = useStore((store) => store.editPost);
  const posts = useStore((store) => store.posts);

  const isEditMode = postId != null;

  useEffect(() => {
    if (isEditMode) {
      const post = posts.find((post) => post.id === postId);
      if (post) {
        form.reset(post);
      }
    } else {
      form.reset(initPost);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, postId]);

  const createPostHandler = (data: IPost) => {
    const newPost: IPost = {
      ...data,
      id: postId ?? Math.random().toString(36).substr(2, 9),
    };

    if (isEditMode) {
      editPost(newPost);
    } else {
      createPost(newPost);
    }

    form.reset(initPost);
    navigate("/");
  };

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        noValidate
        onSubmit={form.handleSubmit(createPostHandler)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
          mt: 3,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 800,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {formConfig.map((item) => (
            <FormField key={item.name} {...item} />
          ))}
          <UploadFile name="cover" />
        </Stack>
        <Button variant="contained" size="large" type="submit">
          {isEditMode ? "Редактировать пост" : "Создать пост"}
        </Button>
      </Box>
    </FormProvider>
  );
};

export default PostForm;
