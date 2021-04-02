import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import ResumePDF from "./Edgar_Peña_Resume.pdf";

const Resume = () => {
  return (
    <div>
      <div style={{ width: "auto", height: "auto" }} sm="12">
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="application/pdf" src={ResumePDF} />
        </ResponsiveEmbed>
      </div>
    </div>
  );
};

export default Resume;
