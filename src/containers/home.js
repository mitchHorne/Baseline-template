import { Fragment } from "react";

import Banner from "../components/Banner";

import bannerSrc from "../constants/banner.jpg";

const coverText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const coverButtons = [
  { href: "#", text: "Get Quote" },
  { href: "#", text: "Get Other" },
];

const Main = () => (
  <Fragment>
    <Banner buttons={coverButtons} src={bannerSrc} text={coverText} />
  </Fragment>
);

export default Main;
