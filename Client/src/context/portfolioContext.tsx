import { CardHeaderPropsWithComponent } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";

type Context = {
  isOn: boolean;
  setIsOn: Function;
  theme: string;
};

const PortfolioContext = createContext<Context>({
  isOn: false || true,
  setIsOn: (value: boolean) => setIsOn(value),
  theme: "light" || "dark",
});

export const PortfolioContextProvider: React.FC<
  CardHeaderPropsWithComponent
> = (props: { children?: any }): any => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (!isOn) {
      document.body.style.background = "rgb(237, 234, 222)";
      setTheme("light");
    }
    if (isOn) {
      setTheme("dark");
      document.body.style.background = "#282b30";
    }
  }, [isOn, setIsOn, theme, setTheme]);

  const context = {
    isOn,
    setIsOn,
    theme,
  };

  return (
    <PortfolioContext.Provider value={context}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
export default PortfolioContext;
function setIsOn(value: boolean): any {
  throw new Error("Function not implemented.");
}
