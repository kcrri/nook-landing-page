import styles from './AppStoreBanner.module.css';

function AppStoreButton() {
  return (
    <div className={styles.storeBtn} aria-label="Available on the App Store soon">
      <svg className={styles.storeLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className={styles.storeBtnText}>
        <span className={styles.storeBtnSub}>Available soon on</span>
        <span className={styles.storeBtnMain}>App Store</span>
      </div>
    </div>
  );
}

function PlayStoreButton() {
  return (
    <div className={styles.storeBtn} aria-label="Available on Google Play soon">
      <svg className={styles.storeLogo} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5c.5.3.5 1 0 1.3l-14 8.5c-.5.3-1.5.3-1.5-.8z"/>
      </svg>
      <div className={styles.storeBtnText}>
        <span className={styles.storeBtnSub}>Available soon on</span>
        <span className={styles.storeBtnMain}>Google Play</span>
      </div>
    </div>
  );
}

export function AppStoreBanner() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Mobile app</p>
          <h2 className={styles.headline}>Nook is coming to your phone</h2>
          <p className={styles.body}>
            Swipe listings, chat with the AI, and send requests from anywhere.
            The iOS and Android apps are in development. Sign up to be notified at launch.
          </p>
          <div className={styles.buttons}>
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.phoneStack}>
            <div className={`${styles.phonePlaceholder} ${styles.phoneBack}`} />
            <div className={`${styles.phonePlaceholder} ${styles.phoneFront}`}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneContent}>
                  <div className={styles.phoneBar} style={{ width: '60%' }} />
                  <div className={styles.phoneBar} style={{ width: '85%' }} />
                  <div className={styles.phoneCard} />
                  <div className={styles.phoneBar} style={{ width: '45%' }} />
                  <div className={styles.phoneBar} style={{ width: '70%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
