import { cache } from "react";
import "server-only";
import { prisma } from "./db";

export const revalidate = 1860; // revalidate the data at most every 31 minute

export const getEmojisCount = cache(async () =>
  prisma.emoji.count({
    cacheStrategy: {
      ttl: 1800,
    },
  })
);
