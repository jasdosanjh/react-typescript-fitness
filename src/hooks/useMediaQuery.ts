import { useState, useEffect } from "react";

/**
 * Custom hook that returns a boolean indicating whether a given media query matches the current viewport.
 *
 * @param {string} query - The media query to match against the viewport.
 * @returns {boolean} - A boolean value indicating whether the media query matches the current viewport.
 */

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", updateMatches);
    updateMatches();

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
