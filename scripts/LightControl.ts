import { client } from "./lib/client";
import { lightControlScriptArgsValidation } from "./lib/utils";

export default function execute(argsRaw: unknown) {
  const args = lightControlScriptArgsValidation.parse(argsRaw);
  const focus = client.getCurrentFocus();

  console.log("Controlling lights in:", args.roomName, focus);
}
