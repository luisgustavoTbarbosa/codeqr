import styles from './CardQr.module.css';

import qrCodeImage from '../assets/qr-code.png';

export function CardQr() {
    return (
        <main className={styles.card}>
            <div className={styles.thumbnail}>
                <img src={qrCodeImage} alt="QR code" />
            </div>
            <div className={styles.content}>
                <h1>Melhore suas habilidades de front-end criando projetos</h1>
                <p>
                    Escaneie o QR code para visitar o Frontend Mentor e leve suas habilidades de codificação para o próximo nível!
                </p>
            </div>
        </main>
    )
}