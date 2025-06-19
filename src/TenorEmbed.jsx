import { useEffect } from 'react';

function TenorEmbed({ postId }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [postId]);

  return (
    <div
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    ></div>
  );
}

export default TenorEmbed;
