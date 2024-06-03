import type { roomNames } from "../room";
import type { LightSettings } from "../types";
import { bathroomLightSettings } from "./bathroom";

type AllLightSettings = {
  [RoomName in keyof typeof roomNames]: LightSettings;
};

export const settings: AllLightSettings = {
  bathRoom: bathroomLightSettings,
  livingRoom: {},
  office: {},
  hallway: {},
  kitchen: {},
  balcony: {},
};
