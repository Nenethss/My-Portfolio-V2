import { create } from "zustand";

const useToggleTheme = create((set) => ({
  isDarkMode: false,
  setIsDarkMode: (value: unknown) => set({ isDarkMode: value }),
}));

export default useToggleTheme;
