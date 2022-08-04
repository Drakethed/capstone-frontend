import React from "react";
import Footer from "./footer";

import MyImage from "../images/it.jpg";
import Image from "../images/conjuring2.jpg";
import Image1 from "../images/thegrayman.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/finch.jpg";

const images = [MyImage, Image, Image1, Image2, Image3];

export default function about() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === images.length - 1 ? 0 : v + 1));
    }, 700);
  }, []);

  return (
    <div className="container">
      <h4>
        We, like everyone else loves movies. I know we do in The Dark
        Collection!! So what we have done is built a collection of movies, we
        would like for you to add to these if you like. In the world we live in
        now, what better way would you like to live but by escaping the things
        we live in now.
      </h4>
      <div className="img-scr">
        <img src={images[value]} />
      </div>
      <h4>
        This is a new age of movie watching. With the internet and mobile
        phones, we have access to everything on the internet. So why not watch a
        movie or play games. On this website we would like to know what movies
        you want. This is easily accessible and always available to give you an
        idea of a list of movies.
      </h4>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
}
