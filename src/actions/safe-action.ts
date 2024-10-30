// Setup for next-safe-action
// see hhttps://next-safe-action.dev/docs/getting-started for more info
import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export const aciton = createSafeActionClient({
  handleServerError(error, utils) {
    // const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;
    // can do something with the error, metadata, ctx, etc e.g log them
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});
