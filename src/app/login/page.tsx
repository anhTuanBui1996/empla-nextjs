'use client'
import Box from "@mui/material/Box";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.main",
          borderRadius: "2%"
        }}
      >
        <span>Login to Empla</span>
      </Box>
    </main>
  );
}
