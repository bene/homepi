import type { roomMap } from "../room";
import type { LightSettings } from "../types";
import { bathroomLightSettings } from "./bathroom";

type AllLightSettings = {
  [RoomName in keyof typeof roomMap]: LightSettings;
};

export const settings: AllLightSettings = {
  bathRoom: bathroomLightSettings,
  livingRoom: {
    default: {},
  },
  office: {
    default: {},
  },
  bedRoom: {
    default: {},
  },
  hallway: {
    default: {},
  },
  kitchen: {
    default: {},
  },
  balcony: {
    default: {},
  },
};
