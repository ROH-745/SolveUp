import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirectOnRefresh(path = "/") {
  const navigate = useNavigate();

  useEffect(() => {
    const nav = window.performance?.getEntriesByType("navigation")[0];
    if (nav?.type === "reload") {
      navigate(path);
    }
  }, [navigate, path]);
}

export default useRedirectOnRefresh;
