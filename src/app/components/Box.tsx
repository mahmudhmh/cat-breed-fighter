/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/page.module.scss";
import { CatDetail } from "../types/types";

interface BoxProps {
  id: number;
  cat: CatDetail | null | undefined | "";
  clickCount: number;
  onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ id, cat, clickCount, onClick }) => {
  return (
    <div className={styles.box} onClick={onClick}>
      {cat ? (
        <>
          <img src={cat.url} alt="Cat" className={styles.boxImage} />
          <span className={styles.tooltip}>Clicked: {clickCount}</span>
        </>
      ) : (
        `Breed ${id === 1 ? "beng" : "abys"}`
      )}
    </div>
  );
};

export default Box;
