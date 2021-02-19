import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import movie8 from "../../Assets/movie8.jpg";
import Modal from "@material-ui/core/Modal";
import "./AddMovie.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius : "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AddMovie({ handleMovie }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add your favorite Movie</h2>
      <p>
        Name
        <input
          placeholder="Movie Tile"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Date
        <input placeholder="Date" onChange={(e) => setDate(e.target.value)} />
      </p>
      <p>
        Type
        <input placeholder="Type" onChange={(e) => setType(e.target.value)} />
      </p>
      <p>
        Description
        <input
          placeholder="Short Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>

      <p>
        Rating
        <input
          type="number"
          min={1}
          max={5}
          onChange={(e) => setRating(e.target.value)}
        />
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleMovie({
            id: Math.random(),
            name,
            description,
            type,
            rating,
            date,
            image: movie8,
          });
          handleClose();
        }}
      >
        Add your Movie
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        endIcon={<Icon>send</Icon>}
      >
        Add a Movie
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default AddMovie;
