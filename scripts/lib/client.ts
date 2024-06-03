import { Client } from "@bene/homeforce";

import { focusMap } from "./focus";
import { roomMap } from "./room";

export const client = new Client<typeof focusMap, typeof roomMap>();
