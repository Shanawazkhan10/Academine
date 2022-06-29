import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../component/Card";
const data = [
  {
    id: 1,
    name: "Qatar",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Al_Zubarah_%286989829695%29.jpg",
    address:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 2,
    name: "Dubai",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Al_Zubarah_%286989829695%29.jpg",
    address:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 3,
    name: "NewYouk",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Al_Zubarah_%286989829695%29.jpg",
    address:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
];
export default function Home(props) {
  const router = useRouter();
  console.log("router", props.data);

  return (
    <div className={styles.container}>
      <Card cardData={data} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://proton.api.atomicassets.io/atomicmarket/v1/sales"
  );
  const dummyData = await res.json();
  return {
    props: {
      data: dummyData,
    },
  };
  // console.log(pr);
}
