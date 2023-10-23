import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Three = ({ cardName }) => {
  return (
    <Card variant="outlined" className="mt-6">
      <CardContent>
        <Typography>{cardName}</Typography>
      </CardContent>
    </Card>
  );
};

export default Three;
