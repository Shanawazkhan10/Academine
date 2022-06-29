import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
export default function NewMeet() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <h1>
        <h1>Welcome to {router.query.id}</h1>
      </h1>
    </div>
  );
}
