import { colors } from "./colors";

export const button: any = {
  outline: {
    borderWidth: "1px",
    borderStyle: "solid",
    primary: {
      backgroundColor: colors.white,
      borderColor: colors.blue,
      color: colors.blue,
      hover: {
        backgroundColor: colors.blue,
        color: colors.white,
      },
    },
    success: {
      backgroundColor: colors.white,
      borderColor: colors.green,
      color: colors.green,
      hover: {
        backgroundColor: colors.green,
        color: colors.white,
      },
    },
    danger: {
      backgroundColor: colors.white,
      borderColor: colors.red,
      color: colors.red,
      hover: {
        backgroundColor: colors.red,
        color: colors.white,
      },
    },
    warning: {
      backgroundColor: colors.white,
      borderColor: colors.yellow,
      color: colors.yellow,
      hover: {
        backgroundColor: colors.yellow,
        color: colors.white,
      },
    },
    info: {
      backgroundColor: colors.white,
      borderColor: colors.summerSky,
      color: colors.summerSky,
      hover: {
        backgroundColor: colors.summerSky,
        color: colors.white,
      },
    },
  },
  variant: {
    borderStyle: "solid",
    borderWidth: "1px",
    primary: {
      color: colors.white,
      backgroundColor: colors.blue,
      hover: {
        color: colors.blue,
        backgroundColor: colors.white,
      },
    },
    success: {
      color: colors.white,
      backgroundColor: colors.green,
      hover: {
        color: colors.green,
        backgroundColor: colors.white,
      },
    },
    danger: {
      color: colors.white,
      backgroundColor: colors.red,
      hover: {
        color: colors.red,
        backgroundColor: colors.white,
      },
    },
    warning: {
      color: colors.white,
      backgroundColor: colors.yellow,
      hover: {
        color: colors.yellow,
        backgroundColor: colors.white,
      },
    },
    info: {
      color: colors.white,
      backgroundColor: colors.summerSky,
      hover: {
        color: colors.summerSky,
        backgroundColor: colors.white,
      },
    },
  },
  size: {
    xSmall: {
      padding: "0.25rem 0.5rem",
    },
    small: { padding: "0.5rem 0.75rem" },
    medium: { padding: "0.6rem 1rem" },
    large: { padding: "0.75rem 1.25rem" },
  },
};
