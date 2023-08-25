import styles from '../styles/home.module.css'
import Projects from '../components/project'

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Welcome to my home page!</h1>
      <h2>Here's some stuff I've been working on:</h2>
      <Projects />
    </main>
  )
}

