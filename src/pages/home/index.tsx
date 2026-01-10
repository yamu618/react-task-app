import { Link } from 'react-router-dom';
import styles from "../../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タスク管理アプリ</h1>
      <p className={styles.description}>
        ReactxVitexReact Routerで作るタスク管理アプリです。
        Reactの学習用に作成しています。
      </p>
      <Link to="/tasks" className={styles.link}>
        タスク一覧へ
      </Link>
    </div>
  );
}
