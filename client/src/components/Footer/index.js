
import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer(props) {
  return (
    <footer className="footer">
        <h2>❤️ Made with love by REX 2.0</h2>
        <div>
            {/* <a href="./pivacy-policy.html">Read Our Privacy Policy</a><br /> */}
            &copy; 2021 REX Rescue Express 2.0
        </div>
    </footer>
  );
}

export default Footer;