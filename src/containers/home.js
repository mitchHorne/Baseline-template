import { Fragment } from "react";

import Banner from "../components/Banner";

import bannerSrc from "../constants/banner.jpg";

const coverText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const Main = () => (
  <Fragment>
    <Banner src={bannerSrc} text={coverText} />
  </Fragment>
);

export default Main;
