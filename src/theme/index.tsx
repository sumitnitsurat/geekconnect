import { createTheme } from "@mui/material/styles";

import typography from "./typography";
import palette from "./palette";

const theme = createTheme({
  colors: {
    ...palette,
  },
  typography,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: {},
          style: {
            textTransform: "none",
          },
        },
        {
          props: { variant: "textWhite" },
          style: {
            color: "#fff",
          },
        },
      ],
    },
  },
});

export default theme;