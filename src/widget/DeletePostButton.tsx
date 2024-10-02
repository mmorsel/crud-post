import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useStore } from "../app/model/useStore";
import { useState } from "react";
import { Divider, IconButton } from "@mui/material";
import { RiDeleteBin2Fill } from "react-icons/ri";

const DeletePostButton: React.FC<{ postId: string }> = ({ postId }) => {
  const [open, setOpen] = useState(false);
  const deletePost = useStore((store) => store.deletePost);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePostHandler = () => {
    deletePost(postId ?? "");
    handleClose();
  };

  return (
    <>
      <IconButton color="error" onClick={handleClickOpen}>
        <RiDeleteBin2Fill />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Подверждение удаления</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверены, что хотите удалить данный пост?
          </DialogContentText>
        </DialogContent>
        <Divider sx={{ mb: 2 }} />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="success">
            Отмена
          </Button>
          <Button onClick={deletePostHandler} color="error" variant="contained">
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeletePostButton;
