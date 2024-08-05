import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface AdviceCardProps {
  advice: string;
}

const AdviceCard = ({ advice }: AdviceCardProps) => {
  return (
    <Box
      marginTop={3}
      marginBottom={3}
      sx={{ width: '100%' }}
    >
      <Card variant="outlined" sx={{flex: 1}}>
        <CardContent>
          <Typography variant="body1" align="center">
            {advice}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdviceCard;
