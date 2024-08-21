import React from "react";

const Map = () => {
  return (
    <>
      
      <div className="relative pt-[50%] sm:pt-[28.125%] overflow-hidden mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.1882720308145!2d-82.31376782574186!3d27.8039751212252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d7633dafd4e7%3A0x7fc5ae162819b170!2sTrinity%20Junk%20Removal%20Inc!5e0!3m2!1sen!2s!4v1721768785990!5m2!1sen!2s"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Trinity Junk Removal Map"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
