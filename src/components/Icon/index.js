export default ({ brand, icon }) => (
  <i className={`fa${brand ? "b" : "s"} fa-fw fa-${icon}`} />
);
