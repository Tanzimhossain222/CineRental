import { createContext, useContext } from "react";

export const MovieContext = createContext();
export const ThemeContext = createContext();

/**
 *  @description - Custom hook for using the MovieContext context. This hook is used to access the context values. Avoids Multiple imports of useContext.
 * @returns {MovieContext}
 */
export function useMovieDetails(){
    return useContext(MovieContext);
}

export function useTheme(){
    return useContext(ThemeContext);
}
