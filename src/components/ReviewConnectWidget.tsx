"use client";
import { useEffect } from "react";

export default function ReviewConnectWidget() {
  useEffect(() => {
    // Only load script if not already present
    if (!document.getElementById("reviewconnect-script")) {
      const script = document.createElement("script");
      script.id = "reviewconnect-script";
      script.src = "https://app.reviewconnect.me/embed/4iopQ7q35uDp8y1AZNFCJMDMtwollL92/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Inject global CSS to always hide the footer
    if (!document.getElementById("hide-review-footer-style")) {
      const style = document.createElement("style");
      style.id = "hide-review-footer-style";
      style.innerHTML = `.reviews-widget__footer { display: none !important; }`;
      document.head.appendChild(style);
    }

    return () => {};
  }, []);

  return <div id="reviews-widget-658"></div>;
}
