import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function NewMeet() {
  const [state, setState] = useState({
    name: "",
    img: "",
    address: "",
    link: "",
  });
  const router = useRouter();
  console.log(router);
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const handleSubmit = () => {
    console.log(state);
  };
  return (
    <div className={styles.container}>
      <h1 className="text-center">SetUp new Meet</h1>
      <div className="container">
        <div className="row mt-3 mb-3">
          <div className="col text-center">
            {" "}
            <TextField
              id="outlined-basic"
              name="name"
              label="ENTER NAME"
              variant="outlined"
              required
              value={state.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col text-center">
            {" "}
            <TextField
              id="outlined-basic"
              name="link"
              label="ENTER LINK"
              variant="outlined"
              required
              value={state.link}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col text-center">
            {" "}
            <TextField
              id="outlined-basic"
              name="img"
              label="ENTER IMGAGE URL"
              variant="outlined"
              required
              value={state.img}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col text-center">
            {" "}
            <TextField
              maxRows="5"
              id="outlined-basic"
              name="address"
              label="ENTER ADDRESS"
              variant="outlined"
              required
              value={state.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col text-center">
            <Button onClick={handleSubmit} variant="contained">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
