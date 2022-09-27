import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";

const Languages = ({
  name,
  icon,
  isActive,
  route,
  config
}: {
  name: string;
  icon: any;
  isActive: boolean;
  route: string;
  config: any;
}) => {
  const Component = icon;
  const history = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Card
      sx={{
        minWidth: 75,
        cursor: "pointer",
        textDecoration: "none",
      }}
      //onClick={() => isActive && history.push(route)}
      component="a"
      href={isActive ? route : ""}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 150,
          border: "1px solid #fafafa",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Box component="span" sx={{ color: (theme) => theme.colors.darkGray }}>
          <Component />
        </Box>
        <Typography
          sx={{
            fontSize: matches ? "1.1rem" : "1rem",
            mt: "3px",
            color: (theme) => theme.colors.primary,
            textAlign: "center",
          }}
          color="text.secondary"
          gutterBottom
          variant="body2"
        >
          {name}
        </Typography>
        {config?.version && <Typography
          sx={{
            fontSize: matches ? "1rem" : ".9rem",
            mt: "3px",
            color: (theme) => theme.colors.secondaryText,
            textAlign: "center",
          }}
          color="text.secondary"
          gutterBottom
          variant="overline"
        >
          {config.version}
        </Typography>}
        {isActive && (
          <Button sx={{ mt: 1 }} variant="outlined">
            Go
          </Button>
        )}
        {!isActive && (
          <Button variant="outlined" disabled>
            coming soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Languages;