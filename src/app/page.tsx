import Image from 'next/image';
import styles from './styles.module.css';
export default function Home() {
  return (
    <div className={styles.body}>
      <header>
        <h1></h1>
        <nav></nav>
      </header>
      <main>
        <section></section>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <section></section>
      </main>
      <aside></aside>
      <footer></footer>
    </div>
  );
}
