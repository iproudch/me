import { EScreenSize } from "../enums/screen";

export const SCREEN_SIZE_MAX: Record<EScreenSize, number> = {
  [EScreenSize.EXTRA_LARGE]: 1920,
  [EScreenSize.LARGE]: 1440,
  [EScreenSize.MEDIUM]: 1024,
  [EScreenSize.SMALL]: 720,
  [EScreenSize.EXTRA_SMALL]: 480,
};
