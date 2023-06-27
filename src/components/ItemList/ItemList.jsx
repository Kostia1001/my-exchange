import styles from "./ItemList.module.scss";
import ItemCountry from "./ItemCountry/ItemCountry";
import Button from "./ItemCountry/Button/Button";
import Input from "./ItemCountry/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { countryState } from "../store/exchangeSlice";
import { pushStateValue } from "../store/exchangeSlice";
const ItemList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getRates = () => {
      fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
        .then((res) => res.json())
        .then((data) => dispatch(countryState(data)));
    };
    getRates();
  }, []);

  const handleClickInput = (event) => {
    const value = event.target.value;
    dispatch(pushStateValue(value));
    // dispatch(pushStateValue(value))
    // console.log(value)
  };


  const boxCountry = useSelector((store) => store.money);
  const exchange = useSelector((store) => store.exchange);

  const ItemCountryUp = [{ key: 1, country: boxCountry.iconCountryUp }];
  const ItemCountryDown = [{ key: 2, country: boxCountry.iconCountryDovn }];

  const buttonObj = [
    { id: 0, text: "₴" },
    { id: 1, text: "$" },
    { id: 2, text: "€" },
    { id: 3, text: "zł" },
    { id: 4, text: "£" },
  ];

  buttonObj.forEach((e) =>
    e.id == boxCountry.iconCountryUp ? (e.activeUp = true) : (e.activeUp = false)
  );
  buttonObj.forEach((e) =>
    e.id == boxCountry.iconCountryDovn ? (e.activeDown = true) : (e.activeDown = false)
  );

  return (
    <div className={styles.Container}>
      <div className={styles.Box}>
        <Input style={1} handleClick={handleClickInput} id={1} />
        <div className={styles.BoxCountry}>
          {ItemCountryUp.map((e) => (
            <ItemCountry country={e.country} key={e.key} />
          ))}
          <div className={styles.ButtonBox}>
            {buttonObj.map((e) => (
              <Button
                iconButton={e.text}
                id={e.id}
                active={e.activeUp}
                isUp={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.Box}>
        <Input
          value={exchange.valueResult ? exchange.valueResult.toFixed(2) : ""}
          id={2}
        />
        <div className={styles.BoxCountry}>
          {ItemCountryDown.map((e) => (
            <ItemCountry country={e.country} key={e.key} />
          ))}
          <div className={styles.ButtonBox}>
            {buttonObj.map((e) => (
              <Button
                iconButton={e.text}
                id={e.id}
                key={e.key}
                active={e.activeDown}
                isUp={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
