import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ErrorCard = () => {
  return (
    <Box marginTop={3} marginBottom={3} sx={{ width: "100%" }}>
      <Card variant="outlined" sx={{ flex: 1 }}>
        <CardContent>
            <Typography variant="body1" align="center">
              It seems something went wrong on our end
            </Typography>
            <Typography variant="body1" align="center">
              Would you please try it again?
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ErrorCard;
