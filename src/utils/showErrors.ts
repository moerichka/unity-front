/* eslint-disable import/prefer-default-export */
import ApiError from "classes/ApiError";
import { enqueueSnackbar } from "notistack";

export const showErrors = (error: Error) => {
  if (error instanceof ApiError && error?.errors?.length > 0) {
    error.errors.forEach((err) => {
      enqueueSnackbar(err.meta.error, {
        title: "Error",
        variant: "error",
      });
    });
  } else if (error.message) {
    enqueueSnackbar(error.message, {
      title: "Error",
      variant: "error",
    });
  }
};
