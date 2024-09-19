import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateProfileAction } from "../../Redux/Auth/auth.action";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overFlow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firsttName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log("values" + values);
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <p>Edit Profile</p>
            </div>
            <Button type="submit">Save</Button>
          </div>
          <div>
            <div className="h-[15rem]">
              <img
                className="w-full h-full rounded-t-md"
                src="https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png"
                alt=""
              />
            </div>
            <div className="pl-5">
              <Avatar
                className="transform -translate-y-24"
                sx={{ width: "10rem", height: "10rem" }}
                src="https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png"
              />
            </div>
          </div>
          <div className="space-y-3">
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
}
