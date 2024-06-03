import { z } from "zod";

export const roomNameValidation = z.union([
  z.literal("bathRoom"),
  z.literal("livingRoom"),
  z.literal("hallway"),
  z.literal("office"),
  z.literal("kitchen"),
  z.literal("balcony"),
  z.literal("bedRoom"),
]);

export type RoomName = z.infer<typeof roomNameValidation>;

export const roomMap: {
  [key in RoomName]: string;
} = {
  bathRoom: "Badezimmer",
  livingRoom: "Wohnzimmer",
  hallway: "Vorzimmer",
  office: "Arbeitszimmer",
  bedRoom: "Schlafzimmer",
  kitchen: "Küche",
  balcony: "Balkon",
} as const;
