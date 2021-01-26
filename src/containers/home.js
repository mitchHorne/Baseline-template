import { Fragment } from "react";

import Banner from "../components/Banner";

import bannerSrc from "../constants/banner.jpg";

const Main = () => (
  <Fragment>
    <Banner src={bannerSrc} />
  </Fragment>
);

export default Main;
