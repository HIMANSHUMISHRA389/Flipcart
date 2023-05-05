
import Slider from 'react-slick'; // example with react-slick package

import { bannerData } from "../../constants/data";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};


const Banner = () => {
  return (
    <>
      {/* <Slider {...settings}>
        {bannerData.map((data) => {
          <img src={data.url} key={data.id} />;
        })}
      </Slider> */}
      <div>
        <h1>Images</h1>
        {bannerData.map((data) => {
          <img src={data.url} key={data.id} />;
        })}
      </div>
    </>
  );
};

export default Banner;
