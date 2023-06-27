import styles from "./ItemCountry.module.scss";
import React from "react";

import { svgEu, svgPo, svgUK, svgUkrain, svgUSA } from "../../image/Image";

const ItemCountry = (props) => {
  const { country } = props;
  const BoxMoneyAndCountry = [
    { id: 0, svg: svgUkrain, money: "₴" },
    { id: 1, svg: svgUSA, money: "$" },
    { id: 2, svg: svgEu, money: "€" },
    { id: 3, svg: svgPo, money: "zł" },
    { id: 4, svg: svgUK, money: "£" },
  ];

  const finish = BoxMoneyAndCountry.find((e) => e.id == country);

  return (
    <div className={styles.Conteiner}>
      <img className={styles.IconCountry} src={finish.svg}></img>
      <div className={styles.IconMoney}>{finish.money}</div>
    </div>
  );
};

export default ItemCountry;
