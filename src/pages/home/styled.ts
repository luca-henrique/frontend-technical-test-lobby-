import { Box, styled } from "@mui/material";

const Image = styled("img")({
  width: "189px",
  height: "54px",
  marginBottom: "40px",
});

const FullScreenContainer = styled(Box)({
  background: "#EFF6FF",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1000px",
  height: "100%",
  maxHeight: "600px",
  borderRadius: "20px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("mobile")]: {
    maxWidth: "100%",
    maxHeight: "559px",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  maxHeight: "440px",
  marginBottom: "42px",

  [theme.breakpoints.down("mobile")]: {
    maxHeight: "559px",
  },
}));
