import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";

// TODO:conditional rendering
const RegisterUserForm = () => {
  return (
    <Formik
      initialValues={{ fullName: "" }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Fullname is required."),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            width: "400px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <Typography variant="h5">Register user</Typography>

          <TextField
            label="Full name"
            variant="outlined"
            {...getFieldProps("fullName")}
            fullWidth
          />

          {touched.fullName && errors.fullName ? (
            <div style={{ color: "red" }}>{errors.fullName}</div>
          ) : null}

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              background: "white",
              color: "black",
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterUserForm;
