import { useNavigate } from "react-router-dom";
import NavBar from "../pages/Navbar";
import { useState, useEffect } from "react";

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
      <div style={{ marginTop: "60px", height: "calc(100vh - 60px)" }}>
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title="Question Paper"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <p>Loading paper…</p>
        )}
      </div>
    </div>
  );
}

export default SolvePage;
