"use client";
import styles from "../styles/page.module.scss";
import AsideCats from "./components/AsideCats";
import Box from "./components/Box";
import Header from "./components/Header";
import Winner from "./components/Winner";
import { useState } from "react";

interface CatDetail {
  id: string;
  url: string;
  breeds: {
    name: string;
  }[];
}

export default function Page() {
  const [box1Cat, setBox1Cat] = useState<CatDetail | null>(null);
  const [box2Cat, setBox2Cat] = useState<CatDetail | null>(null);
  const [box1ClickCount, setBox1ClickCount] = useState(0);
  const [box2ClickCount, setBox2ClickCount] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [box1CatSelected, setBox1CatSelected] = useState(false);
  const [box2CatSelected, setBox2CatSelected] = useState(false);

  const handleCatClick = (
    cat: CatDetail,
    setBoxCat: React.Dispatch<React.SetStateAction<CatDetail | null>>,
    setBoxCatSelected: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (winner) return;
    setBoxCat(cat);
    setBoxCatSelected(true);
  };

  const handleBoxClick = (
    boxId: number,
    setClickCount: React.Dispatch<React.SetStateAction<number>>,
    currentCount: number,
    setBoxCat: React.Dispatch<React.SetStateAction<CatDetail | null>>,
    isCatSelected: boolean
  ) => {
    if (winner || !isCatSelected) return;
    const newCount = currentCount + 1;
    setClickCount(newCount);

    if (newCount >= 10) {
      const winningBreed =
        boxId === 1 ? box1Cat?.breeds[0]?.name : box2Cat?.breeds[0]?.name;
      setWinner(winningBreed || "Unknown Breed");
      alert(`Winning Breed: ${winningBreed || "Unknown Breed"}`);
      setBox1Cat(null);
      setBox2Cat(null);
      setBox1ClickCount(0);
      setBox2ClickCount(0);
      setBox1CatSelected(false);
      setBox2CatSelected(false);
      location.reload();
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.asideContainer}>
        <AsideCats
          breed_ids="beng"
          onCatClick={(cat) =>
            handleCatClick(cat, setBox1Cat, setBox1CatSelected)
          }
        />
      </div>
      <section className={styles.content}>
        <Header />
        <div id="main-content" className={styles.mainContent}>
          <div className={styles.boxContainer}>
            <Box
              id={1}
              cat={box1Cat}
              clickCount={box1ClickCount}
              onClick={() =>
                handleBoxClick(
                  1,
                  setBox1ClickCount,
                  box1ClickCount,
                  setBox1Cat,
                  box1CatSelected
                )
              }
            />
            <Box
              id={2}
              cat={box2Cat}
              clickCount={box2ClickCount}
              onClick={() =>
                handleBoxClick(
                  2,
                  setBox2ClickCount,
                  box2ClickCount,
                  setBox2Cat,
                  box2CatSelected
                )
              }
            />
          </div>
        </div>
        <Winner winner={winner} />
      </section>
      <div className={styles.asideContainer}>
        <AsideCats
          breed_ids="abys"
          onCatClick={(cat) =>
            handleCatClick(cat, setBox2Cat, setBox2CatSelected)
          }
        />
      </div>
    </div>
  );
}
