import { Link } from 'react-router-dom'

function Vigilante() {
  return (
    <>
    <img src="/thesispic1.png" alt="vigilante" width='200' height='auto'></img>
    <a href='https://drive.google.com/drive/folders/1BXWLEg-0VF07MquV3AfA4FaTCaSFWZRH?usp=sharing'>Vigilante</a>
    </>
  )
}

function Mafia() {
  return (
    <>
    <img src="/justice.jpg" alt="Justice" width='200' height='auto'></img>
    <a href='https://drive.google.com/drive/folders/1CU8OECKFWecsEuCmOdAXaxyDfEQBi_a_?usp=sharing'>200-Man Mafia</a>
    </>
  )
}

export default function Projects() {
  return (
    <section>
      <Vigilante /><br></br>
      <Mafia />
    </section>
  )
}

