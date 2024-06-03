import type { focusNames } from "./focus";

export type LightSetting = {
  [lightName: string]: any;
};

export type LightSettings = {
  [Focus in keyof typeof focusNames]?: LightSetting;
};
