import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import { Call, Mail } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Vanilla Export
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <IconButton
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Call /> <Typography>+261 34 00 025 00</Typography>
            </IconButton>
            <IconButton
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Mail /> <Typography>vanillaexport.com</Typography>
            </IconButton>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
