"use client";
/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/page.module.scss";
import { fetchCatData, fetchCatDetails } from "../utils/api";
import { useState, useEffect } from "react";

interface CatDetail {
  id: string;
  url: string;
  breeds: {
    name: string;
  }[];
}

export default function AsideCats() {
  const [cats, setCats] = useState<CatDetail[]>([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const catData = await fetchCatData();
        console.log("Cat Data:", catData); // Add this line to debug
        const catDetailsPromises = catData.map((cat: { id: string }) =>
          fetchCatDetails(cat.id)
        );
        const catDetails = await Promise.all(catDetailsPromises);
        console.log("Cat Details:", catDetails); // Add this line to debug
        setCats(catDetails as CatDetail[]);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    getCats();
  }, []);

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.grid}>
        {cats.slice(0, 5).map((cat) => (
          <li key={cat.id} className={styles.card}>
            <a>
              <img
                id={cat.id}
                className={styles.imgFixed}
                src={cat.url}
                alt="Cat"
              />
              {cat.breeds[0]?.name || "Unknown Breed"}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
