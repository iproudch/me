import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactElement,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface IRouteParameterContext {
  handleChangeView: (view: string) => void;
  view: string;
}

const initialRouteParameterContext: IRouteParameterContext = {
  handleChangeView: () => {},
  view: "home",
};

const RouteParameterContext = createContext<IRouteParameterContext>(
  initialRouteParameterContext
);
RouteParameterContext.displayName = "RouteParameter";

type RouteParameterProviderProps = {
  children: React.ReactNode;
};

function RouteParameterProvider(
  props: RouteParameterProviderProps
): ReactElement {
  const { children } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const view = params.get("view") || "home";

  const handleChangeView = useCallback(
    (newView: string) => {
      params.set("view", newView);
      navigate({ search: params.toString() });
    },
    [navigate, params]
  );

  const context = useMemo(
    () => ({
      handleChangeView,
      view,
    }),
    [handleChangeView, view]
  );

  return (
    <RouteParameterContext.Provider value={context}>
      {children}
    </RouteParameterContext.Provider>
  );
}

function useRouteParameter(): IRouteParameterContext {
  const context = useContext(RouteParameterContext);
  if (!context)
    throw new Error(
      "useRouteParameter must be used within RouteParameterProvider"
    );
  return context;
}

export { RouteParameterContext, RouteParameterProvider, useRouteParameter };
