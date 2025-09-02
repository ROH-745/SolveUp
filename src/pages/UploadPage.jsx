import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarSimple from "./NavBarSimple";

function UploadPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const goToSolvePage = () => {
    if (!file) {
      alert("PLS UPLOAD A FILE");
      return;
    }

    const fileURL = URL.createObjectURL(file);
    localStorage.setItem("pdfFileURL", fileURL);
    localStorage.setItem("questionPaper", file.name);
    navigate("/solve");
  };

  return (
    <div>
      <NavBarSimple/>
    
    <div style={{ textAlign: "center", marginTop: "250px" }}>
      
      <h2>Upload Question Paper</h2>
      <input type="file" accept=".pdf,.txt" onChange={handleFileChange} />
      <br />
      <br />
      <button onClick={goToSolvePage}>Start Solving</button>
      </div>
      </div>
  );
}

export default UploadPage;
