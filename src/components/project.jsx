import { Link } from 'react-router-dom'

function Vigilante() {
  return (
    <a href='https://drive.google.com/drive/folders/1BXWLEg-0VF07MquV3AfA4FaTCaSFWZRH?usp=sharing'>Vigilante</a>
  )
}

function Mafia() {
  return (
    <a href='https://drive.google.com/drive/folders/1CU8OECKFWecsEuCmOdAXaxyDfEQBi_a_?usp=sharing'>200-Man Mafia</a>
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