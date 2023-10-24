import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3" style={{ marginTop: "200px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ marginBottom: "20px" }}>
              <a href="/contact-us" className="text-light">
                Contact
              </a>
            </div>
            <div>
              <a href="/about-us" className="text-light mr-3">
                About Us
              </a>
            </div>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="/faq" className="text-light mr-3">
                FAQ
              </a>
            </div>
            <div>
              <a href="/rules" className="text-light">
                Rules
              </a>
            </div>
          </div>
        </div>
        <p className="text-light mt-3">
          &copy; {new Date().getFullYear()} Online Library
        </p>
      </div>
    </footer>
  );
};

export default Footer;
