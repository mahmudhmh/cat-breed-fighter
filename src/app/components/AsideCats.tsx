/* eslint-disable @next/next/no-img-element */
"use client";
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

interface AsideCatsProps {
  breed_ids: string;
  onCatClick: (cat: CatDetail) => void;
}

export default function AsideCats({ breed_ids, onCatClick }: AsideCatsProps) {
  const [cats, setCats] = useState<CatDetail[]>([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const catData = await fetchCatData(breed_ids);
        const catDetailsPromises = catData.map(async (cat: { id: string }) => {
          const details = await fetchCatDetails(cat.id);
          return details ? (details as CatDetail) : null;
        });
        const catDetails = await Promise.all(catDetailsPromises);
        setCats(catDetails.filter((cat): cat is CatDetail => cat !== null)); // Filter out null values
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    getCats();
  }, [breed_ids]);

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.grid}>
        {cats.slice(0, 5).map((cat) => (
          <li key={cat.id} className={styles.card}>
            <a onClick={() => onCatClick(cat)}>
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
