import { z } from "zod";

import { roomNameValidation } from "./room";

export const lightControlScriptArgsValidation = z
  .object({
    roomName: roomNameValidation,
  })
  .strict();
