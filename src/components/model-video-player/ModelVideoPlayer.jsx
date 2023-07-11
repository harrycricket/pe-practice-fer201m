import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModelVideoPlayer({ open, setOpen, player }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" color="text.primary" textAlign="center">
          Video for {player.title}
        </Typography>

        <p>
          <iframe
            width={"600px"}
            height={"400px"}
            title={player.title}
            src={player.video}
            frameBorder={0}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </p>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => handleClose()}
            color="brands"
            variant="outlined"
            sx={{ marginLeft: "auto" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
