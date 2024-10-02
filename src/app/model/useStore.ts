import { create } from "zustand";
import { IPost } from "./types";
import { devtools, persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

interface IUseStore {
  posts: IPost[];
  createPost: (post: IPost) => void;
  editPost: (post: IPost) => void;
  deletePost: (id: string) => void;
}

export const useStore = create<IUseStore>()(
  devtools(
    persist(
      (set) => ({
        posts: [],
        editPost: (post: IPost) => {
          set(({ posts }) => {
            const postIndex = posts.findIndex((p) => p.id === post.id);
            if (postIndex >= 0) {
              posts[postIndex] = post;
            }
            return { posts };
          });
        },
        createPost: (post: IPost) => {
          set(({ posts }) => ({
            posts: [post, ...posts],
          }));
        },
        deletePost: (id: string) => {
          set((post) => ({
            posts: post.posts.filter((p) => p.id !== id),
          }));
        },
      }),
      { name: "post_store" }
    ),
    shallow
  )
);
