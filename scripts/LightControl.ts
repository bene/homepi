import { lightControlScriptArgsValidation } from "./lib/utils";

export default function execute(argsRaw: unknown) {
  const args = lightControlScriptArgsValidation.parse(argsRaw);
  console.log("Controlling lights in:", args.roomName);
}
