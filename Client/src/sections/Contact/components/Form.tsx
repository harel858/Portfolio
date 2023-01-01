import classes from "../style.module.css";
import React from "react";
import { Snackbar, TextField } from "@mui/material";
/* import axios from "axios"; */
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import PortfolioContext from "../../../context/portfolioContext";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<any>("");
  const [missingName, setMissingName] = React.useState<boolean>(false);
  const [missingEmail, setMissingEmail] = React.useState<boolean>(false);
  const [registerError, setRegisterError] = React.useState<any>();
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { isOn } = React.useContext(PortfolioContext);

  const successStyle = {
    backgroundColor: "#2e7d32",
    position: `fixed`,
    left: `0`,
    right: `0`,
    bottom: `0`,
  } as React.CSSProperties;

  const errorStyle = {
    backgroundColor: "red",
    position: `fixed`,
    left: `0`,
    right: `0`,
    bottom: `0`,
  } as React.CSSProperties;

  const handleCloseSuccess = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessMessage(false);
    setErrorMessage(false);
  };

  const submitHandler = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    !name ? setMissingName(true) : setMissingName(false);
    setMissingEmail(!emailRegex.test(email));

    try {
      const result = await fetch(`${import.meta.env.VITE_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      if (result.ok) {
        setSuccessMessage(true);
      } else {
        const res = await result.json();

        setRegisterError(res);
        setErrorMessage(true);
      }
    } catch (err: any) {
      console.log(err);
      setRegisterError(`error occurs, we on this...`);
      setErrorMessage(true);
    }
  };

  return (
    <Slide duration={800} direction="right">
      <form className={!isOn ? classes.form : classes.darkForm}>
        <TextField
          required
          id="outlined-password-input"
          label="Name"
          type="text"
          autoComplete="current-password"
          variant="filled"
          error={missingName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <TextField
          required
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="filled"
          error={missingEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <TextField
          id="outlined-textarea"
          label="Message"
          className={classes.textarea}
          multiline
          variant="filled"
          onChange={(e) => setMessage(e.target.value)}
        />
        <motion.button
          className={classes.submitBtn}
          type="button"
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.1,
              type: "spring",
              stiffness: 700,
              damping: 7,
            },
          }}
          whileTap={{ scale: 0.9, type: "spring" }}
          onClick={submitHandler}
        >
          Submit
        </motion.button>
        <Snackbar
          open={successMessage || errorMessage}
          autoHideDuration={6000}
          onClose={handleCloseSuccess}
          style={
            successMessage
              ? successStyle
              : errorMessage
              ? errorStyle
              : undefined
          }
        >
          <Alert
            onClose={handleCloseSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage
              ? `Thank you for submitting ${name}!, check your Email inbox`
              : errorMessage && `${registerError}`}
          </Alert>
        </Snackbar>
      </form>
    </Slide>
  );
};

export default Form;
