"use client";
import {
  Paper,
  TextField,
  Typography,
  Link,
  Button,
  CircularProgress,
  FormGroup,
  FormControl,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "../../../../components/misc/GoogleIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signIn } from "next-auth/react";
import { getRecordsWhere } from "@/database/airtable/dao";

type User = {
  username: string;
  password: string;
};

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[800],
    },
    info: {
      main: "#d0d0d0",
    },
  },
});

export default function Login() {
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [isSignedIn, setSignedIn] = useState<boolean | undefined>(false);

  const handleChangUsernameInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((user) => ({ ...user, username: e.target.value }));
  };

  const handleChangePasswordInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((user) => ({ ...user, password: e.target.value }));
  };

  // Login provider click handlers
  const handleMainLoginClick = (
    e: MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    setSignedIn(undefined);
    e.preventDefault();
    signIn("credentials", { ...user, redirect: false }).then((res) => {
      console.log(res);
      setSignedIn(true);
    });
  };

  const handleGithubLoginClick = () => {};

  const handleGoogleLoginClick = () => {};

  const handleFacebookLoginClick = () => {};

  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Paper
        sx={{
          width: 400,
          height: "70%",
          minHeight: 500,
          margin: "auto",
          borderRadius: "2%",
          textAlign: "center",
          paddingX: "40px",
          backgroundColor: "Background",
        }}
      >
        <Typography
          color={"GrayText"}
          fontSize={20}
          textAlign={"center"}
          paddingY={4}
          fontWeight={"400"}
        >
          Welcome to Empla
        </Typography>
        <TextField
          id="username"
          name="username"
          label="Email/Username"
          variant="outlined"
          sx={{
            marginBottom: "10px",
            width: "100%",
          }}
          onChange={handleChangUsernameInput}
          required
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          sx={{
            marginBottom: "10px",
            width: "100%",
          }}
          onChange={handleChangePasswordInput}
          required
        />
        <div className="login-control flex-col justify-between align-middle">
          <div className="non-login flex justify-between mb-5">
            <Link
              href="/forgot"
              className="forgot-password"
              style={{ fontSize: "12px" }}
              underline="hover"
            >
              Forgot password?
            </Link>
            <Link
              href="/register"
              className="register-account"
              style={{ fontSize: "12px" }}
              underline="hover"
            >
              Don&apos;t have an account...
            </Link>
          </div>
          <div className="login flex-col justify-between align-middle">
            <Button
              disabled={isSignedIn === undefined}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleMainLoginClick}
              endIcon={
                isSignedIn === undefined && <CircularProgress size={"12px"} />
              }
            >
              LOGIN
            </Button>
          </div>
          <fieldset className="other-login border px-3 py-3 mt-5 relative rounded-md">
            <legend className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Typography
                color={"GrayText"}
                fontSize={12}
                textAlign={"center"}
                marginTop={2}
                bgcolor={"Background"}
                paddingX={2}
              >
                Or using others...
              </Typography>
            </legend>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleGithubLoginClick}
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
              <Button
                variant="contained"
                color="info"
                fullWidth
                onClick={handleGoogleLoginClick}
                startIcon={<GoogleIcon />}
                sx={{ marginY: "10px" }}
              >
                Google
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={handleFacebookLoginClick}
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
            </ThemeProvider>
          </fieldset>
        </div>
      </Paper>
    </main>
  );
}
