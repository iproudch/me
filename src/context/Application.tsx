import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from "react";
import { EScreenSize } from "../enums/screen";
import { SCREEN_SIZE_MAX } from "../constants/screen";

export const SCREEN_SIZE_MIN = 320;

export interface IApplicationContext {
  screenSize: EScreenSize;
  screenWidth: number;
  screenHeight: number;
}

const initialApplicationContext: IApplicationContext = {
  screenSize: EScreenSize.LARGE,
  screenWidth: SCREEN_SIZE_MAX[EScreenSize.MEDIUM],
  screenHeight: SCREEN_SIZE_MAX[EScreenSize.MEDIUM],
};

const ApplicationContext = createContext<IApplicationContext>(
  initialApplicationContext
);
ApplicationContext.displayName = "Application";

type ApplicationProviderProps = {
  children: React.ReactNode;
};

function ApplicationProvider(props: ApplicationProviderProps): ReactElement {
  const { children } = props;
  const [screenSize, setScreenSize] = useState<EScreenSize>(EScreenSize.LARGE);
  const [screenWidth, setScreenWidth] = useState<number>(
    SCREEN_SIZE_MAX[EScreenSize.MEDIUM]
  );
  const [screenHeight, setScreenHeight] = useState<number>(
    SCREEN_SIZE_MAX[EScreenSize.MEDIUM]
  );

  useEffect(() => {
    function getScreenSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Object.entries(SCREEN_SIZE_MAX).reduce(
        (acc, [key, value]) => {
          return width <= value ? (key as EScreenSize) : acc;
        },
        EScreenSize.EXTRA_LARGE
      );
      setScreenWidth(width);
      setScreenHeight(height);
      setScreenSize(size);
    }
    getScreenSize();
    window.addEventListener("resize", getScreenSize);

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);

  const context = useMemo(
    () => ({
      screenSize,
      screenWidth,
      screenHeight,
    }),
    [screenSize, screenWidth, screenHeight]
  );

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

function useApplication(): IApplicationContext {
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error("useApplication must be used within ApplicationProvider");
  return context;
}

export { ApplicationProvider, ApplicationContext, useApplication };
