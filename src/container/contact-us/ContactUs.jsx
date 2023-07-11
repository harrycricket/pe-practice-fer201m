import { Draw } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import s from "./contactUs.module.scss";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      nation: 0,
      content: "",
      agree: false,
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid number")
        .required("Required."),
      email: Yup.string().required("Required.").email("Invalid email"),
      nation: Yup.number()
        .integer()
        .required("Required.")
        .typeError("Please select a favorite nation."),
      content: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  console.log(formik.touched);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
          padding: "20px 50px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography color="text.brands" variant="h3">
          Contact us
        </Typography>
        <TextField
          id="name"
          name="name"
          label="Your name"
          sx={s}
          variant="filled"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        <TextField
          id="phone"
          name="phone"
          label="Your phone"
          variant="filled"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <Typography variant="caption" color="red">
            {formik.errors.phone}
          </Typography>
        )}
        <TextField
          id="email"
          name="email"
          label="Your email"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <Typography variant="caption" color="red">
            {formik.errors.email}
          </Typography>
        )}
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            sx={s.select}
            value={formik.values.nation}
            onChange={(e) => formik.setFieldValue("nation", e.target.value)}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                style: {
                  maxHeight: "20rem",
                  width: 250,
                  fontSize: "2rem",
                },
              },
            }}
          >
            <MenuItem value="0" selected>
              <em>Favorite genre of movie</em>
            </MenuItem>
            <MenuItem value={1}>Action</MenuItem>
            <MenuItem value={2}>Drama</MenuItem>
            <MenuItem value={3}>Comedy</MenuItem>
            <MenuItem value={4}>Romance</MenuItem>
            <MenuItem value={5}>Science Fiction</MenuItem>
            <MenuItem value={6}>Horror</MenuItem>
          </Select>
          {formik.errors.nation && (
            <Typography variant="caption" color="red">
              {formik.errors.nation}
            </Typography>
          )}
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
          <Draw color="primary" mt={2} />
          <TextField
            id="content"
            name="content"
            label="Your content"
            variant="filled"
            multiline
            rows={4}
            sx={{ flex: 1 }}
            value={formik.values.content}
            onChange={formik.handleChange}
          />
        </Box>
        {formik.errors.content && (
          <Typography variant="caption" color="red">
            {formik.errors.content}
          </Typography>
        )}
        <FormControlLabel
          control={<Switch />}
          color="text.main"
          label={
            <Typography color="text.brands">
              Agree to terms and conditions.
            </Typography>
          }
          name="agree"
          value={formik.values.agree}
          onClick={formik.handleChange}
        />
        {formik.errors.agree && (
          <Typography variant="caption" color="red">
            {formik.errors.agree}
          </Typography>
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" sx={{ fontSize: 20 }} type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
