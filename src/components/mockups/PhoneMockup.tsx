import styles from './PhoneMockup.module.css';

function MapView() {
  return (
    <div className={styles.mapView}>
      <div className={styles.mapGrid}>
        <div className={`${styles.mapBlock} ${styles.blockLg}`} style={{ background: '#c4b5a5', gridColumn: '1 / 3', gridRow: '1 / 3' }} />
        <div className={`${styles.mapBlock} ${styles.blockSm}`} style={{ background: '#9c3e1f', opacity: 0.7 }} />
        <div className={`${styles.mapBlock} ${styles.blockSm}`} style={{ background: '#d4c4b4' }} />
        <div className={`${styles.mapBlock} ${styles.blockMd}`} style={{ background: '#b8a898', gridColumn: '1 / 2', gridRow: '3 / 4' }} />
        <div className={`${styles.mapBlock} ${styles.blockMd}`} style={{ background: '#cfc0af', gridColumn: '2 / 4', gridRow: '3 / 4' }} />
        <div className={`${styles.mapBlock} ${styles.blockSm}`} style={{ background: '#9c3e1f', opacity: 0.5, gridColumn: '3 / 4', gridRow: '1 / 2' }} />
        <div className={`${styles.mapBlock} ${styles.blockSm}`} style={{ background: '#a89888', gridColumn: '3 / 4', gridRow: '2 / 3' }} />
      </div>
      <div className={styles.mapPin}>
        <div className={styles.mapPinDot} />
      </div>
      <div className={styles.mapNeighbourhood}>Le Plateau</div>
    </div>
  );
}

function ListingCard() {
  return (
    <div className={styles.listingCard}>
      <div className={styles.listingPhoto} />
      <div className={styles.listingInfo}>
        <div className={styles.listingHeader}>
          <span className={styles.listingPrice}>$1,650 / mo</span>
          <span className={styles.listingBadge}>Available now</span>
        </div>
        <p className={styles.listingAddress}>4½ · 840 Rachel Est</p>
        <div className={styles.listingTags}>
          <span className={styles.tag}>Pets OK</span>
          <span className={styles.tag}>Furnished</span>
          <span className={styles.tag}>Heat incl.</span>
        </div>
      </div>
      <div className={styles.swipeRow}>
        <button className={`${styles.swipeBtn} ${styles.swipeNo}`} aria-label="Skip">✕</button>
        <button className={`${styles.swipeBtn} ${styles.swipeAsk}`} aria-label="Ask AI">Ask AI</button>
        <button className={`${styles.swipeBtn} ${styles.swipeYes}`} aria-label="Like">♥</button>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span className={styles.statusTime}>9:41</span>
            <div className={styles.statusIcons}>
              <span className={styles.statusIcon}>●●●</span>
            </div>
          </div>
          <div className={styles.appHeader}>
            <span className={styles.appLogo}>Nook</span>
            <div className={styles.appTabs}>
              <span className={`${styles.appTab} ${styles.appTabActive}`}>Swipe</span>
              <span className={styles.appTab}>Map</span>
            </div>
          </div>
          <MapView />
          <ListingCard />
        </div>
        <div className={styles.homeBar} />
      </div>
      <div className={styles.phoneShadow} />
    </div>
  );
}
