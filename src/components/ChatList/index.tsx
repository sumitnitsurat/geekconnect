import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


export default function MessageCard({name}: {name: string}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ overflow: "initial", mt: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ArrowForwardIosIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
      />
      </Card>
  );
}