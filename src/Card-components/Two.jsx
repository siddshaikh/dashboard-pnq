import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Two = ({ cardName }) => {
  return (
    <Card variant="outlined" className="mt-6">
      <CardContent>
        <Typography>{cardName}</Typography>
      </CardContent>
    </Card>
  );
};

export default Two;
