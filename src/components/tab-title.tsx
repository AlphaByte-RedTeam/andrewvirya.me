"use client";

import { useEffect } from "react";

const awayTitle = "Where u goin? Come back!";

export default function TabTitle() {
  useEffect(() => {
    let pageTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (document.title !== awayTitle) {
          pageTitle = document.title;
        }
        document.title = awayTitle;
      } else {
        document.title = pageTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
