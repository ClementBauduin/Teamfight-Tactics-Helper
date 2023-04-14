import styles from './page.module.css'
import logo from '../public/assets/tftactics.svg'
import Image from 'next/image'
import App from './components/appContainer/App'

const imageStyle = {
  //make a shadow around the edge of the svg
  filter: 'drop-shadow(0 0 0.4rem var(--green5))'

}

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} alt="TFT Logo" width={220} style={imageStyle}/>
      </header>
      <main className={styles.main}>
          <App />
      </main>
    </div>

  )
}
