import { useState } from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { signIn } from "../../Api/services/authService";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      setLoading(true);
      const res = await signIn(username, password);
      setLoading(false);
      toast.success("Sign In Successful");
    } catch (err) {
      setLoading(false);
      console.error(err); // Log the error for debugging
      toast.error("Sign In Failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ToastContainer />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            color: "black",
            padding: "2rem",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            marginBottom: "10%",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign In
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="username-email"
                label="UserName or Email"
                defaultValue="UserName or Email"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  fontSize: "1.2rem",
                  marginTop: "2%",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="password"
                label="Password"
                defaultValue="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  fontSize: "1.2rem",
                  marginTop: "2%",
                }}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              marginTop: "5%",
              color: "black",
              border: "2px solid black",
              borderRadius: "20px",
              padding: "1%",
              width: "30%",
              fontSize: "1.2rem",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>

          <a href="/forgot-password">
            <Typography
              variant="h6"
              component="h1"
              gutterBottom
              sx={{
                marginTop: "5%",
              }}
            >
              Forgot Password?
            </Typography>
          </a>
        </Box>
      )}
    </div>
  );
}

export default SignIn;
