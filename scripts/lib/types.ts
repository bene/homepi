import type { focusMap } from "./focus";

export type LightSetting = {
  [lightName: string]: any;
};

export type LightSettings = {
  default: LightSetting;
} & {
  [Focus in keyof typeof focusMap]?: LightSetting;
};
