import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useAuthContext } from "../Store/AuthContext";
import { useUserContext } from "../Store/UserContext";

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { setToken } = useAuthContext();
  const { setUserData } = useUserContext();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errors, setErrors] = useState<Joi.ValidationErrorItem[]>([]);
  let navigate = useNavigate();

  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validation = () => {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().required(),
    });

    return schema.validate(formData, { abortEarly: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = validation();
    if (error) {
      setErrors(error.details);
      return;
    } else {
      setErrors([]);
    }

    try {
      const res = await axios.post(
        "http://localhost:9000/api/auth/login",
        formData
      );
      localStorage.setItem("Token", res.data.token);
      setToken(res.data.token);
      const { id, username, email, avatar, currentWorkspace } = res.data;
      setUserData(id, username, email, avatar, currentWorkspace);
      setErrorMessage("");
      console.log(res); // Clear previous error messages
      navigate("/");
    } catch (err: any) {
      console.log(err);
      // Use 'any' type for the error
      setErrorMessage(err.response?.data.error || "An error occurred");
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Container maxWidth="lg">
          <Grid item xs={12}>
            <Typography variant={"h2"} sx={{ textAlign: "center", mt: "70px" }}>
              Welcome Back.
            </Typography>
          </Grid>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          {errors.length > 0 && (
            <Alert severity="error">
              {errors.map((err) => (
                <div key={err.message}>{err.message}</div>
              ))}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                variant={"outlined"}
                label={"Email Address"}
                type="email"
                name="email"
                onChange={getData}
                sx={{ width: "60%", mt: "40px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                variant={"outlined"}
                label={"Enter A Password"}
                type="password"
                name="password"
                onChange={getData}
                sx={{ width: "60%", mt: "40px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  width: "60%",
                  mt: "40px",
                  backgroundColor: "#3754DB",
                  color: "white",
                  py: "13px",
                  borderRadius: "9px",
                }}
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </Grid>
          </form>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              component={RouterLink}
              to="/signUp"
              variant="contained"
              sx={{ mt: "20px" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
