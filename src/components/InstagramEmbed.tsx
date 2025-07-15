import React, { useEffect } from "react";

interface InstagramEmbedProps {
  postUrls: string[]; // array of Instagram post URLs to embed
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ postUrls }) => {
  useEffect(() => {
    // Load Instagram embed.js script once
    if (
      !document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-run Instagram embed parse if script already loaded (for dynamic content)
      // @ts-ignore
      window.instgrm?.Embeds.process();
    }
  }, [postUrls]);

  return (
    <>
      {postUrls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ maxWidth: 540, margin: "24px auto" }}
        ></blockquote>
      ))}
    </>
  );
};

export default InstagramEmbed;
