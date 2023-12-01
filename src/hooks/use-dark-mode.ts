import React from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window != "object") return;

    function callback() {
      const htmlElement = document.querySelector("html");
      if (!htmlElement) return;
      setIsDark(htmlElement.classList.contains("dark"));
    }

    callback();

    const htmlElement = document.querySelector("html");

    if (!htmlElement) return;

    const observer = new MutationObserver(callback);

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      subtree: false,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
}
