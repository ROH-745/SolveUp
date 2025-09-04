import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../pages/Navbar";
import "../Style/SolvePage.css";

function SolvePage() {
  const [pdfUrl, setPdfUrl] = useState();
  const [paperName, setPaperName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = localStorage.getItem("pdfFileURL");
    const name = localStorage.getItem("questionPaper");
    if (!url) {
      navigate("/upload");
      return;
    }
    setPdfUrl(url);
    setPaperName(name || "");
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div className="solve-container">
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title={paperName || "Question Paper"}
            className="solve-frame"
          />
        ) : (
          <p>Loading paper…</p>
        )}
      </div>
    </div>
  );
}

export default SolvePage;
