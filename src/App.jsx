import './global.css';
import styles from './App.module.css';
import { CardQr } from './components/CardQr';

export function App() {
  return (
    <div className={styles.container}>
      <CardQr />
    </div>
  )
}
