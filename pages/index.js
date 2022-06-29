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
      <Card cardData={props.data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=12"
  ).then((res) => res.json());
  return {
    props: {
      data: res,
    },
    revalidate: 5,
  };
}

// export async function getServerSideProps(context) {
//   const res = context.res;
//   const req = context.req;
//   console.log(res, req, "res");
//   const postData = await fetch(
//     "https://proton.api.atomicassets.io/atomicmarket/v1/sales"
//   ).then((res) => res.json());

//   return {
//     props: {
//       data: postData,
//     },
//   };
// }
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://proton.api.atomicassets.io/atomicmarket/v1/sales"
//   );
//   const dummyData = await res.json();
//   return {
//     props: {
//       data: dummyData,
//     },
//     revalidate: 5,
//   };
// }
