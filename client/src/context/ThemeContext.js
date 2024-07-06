import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  //   useEffect(() => {
  //     let existingCartItem = localStorage.getItem("cart");
  //     if (existingCartItem) setCart(JSON.parse(existingCartItem));
  //   }, []);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//customHook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
