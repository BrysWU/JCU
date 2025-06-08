import React, { useEffect } from "react";

function FacebookFeed() {
  useEffect(() => {
    // Load FB SDK if not already loaded
    if (!window.FB) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/kingofcanvas"
        data-tabs="timeline"
        data-width="700"
        data-height="1000"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/kingofcanvas"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/kingofcanvas">
            Justin's Marine Canvas and Upholstery
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookFeed;