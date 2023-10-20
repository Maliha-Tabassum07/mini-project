import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3" style={{ marginTop: "500px" }}>
      <div className="container">
        <p className="text-light">
          &copy; {new Date().getFullYear()}Online Library
        </p>
      </div>
    </footer>
  );
};

export default Footer;
