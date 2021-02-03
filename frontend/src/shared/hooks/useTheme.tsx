import { createContext, useContext, useState } from 'react';

interface Context {
  theme: string;
  setTheme: (value: string) => void;
}

export const ThemeContext = createContext<Context>({} as Context);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
