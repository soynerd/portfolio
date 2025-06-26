import React from "react";

function Footer({ bg }) {
  return (
    <div className={`max-w-4xl mx-auto text-center text-sm  py-2 ${bg}`}>
      <p>
        © Naveen. All rights reserved. <span>Last Updated: June 24, 2025</span>
      </p>
    </div>
  );
}

export default Footer;
