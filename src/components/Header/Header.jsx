import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={["w-96 bg-yellow-400", styles.header].join(" ")}>
      Header
      <div className={styles.inside}>Under</div>
    </div>
  );
};

export default Header;
