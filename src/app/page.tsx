import Image, { StaticImageData } from 'next/image';
import styles from './page.module.css';
import logo from '@/assets/logo.svg';
import arrowRight from '@/assets/arrow-right.svg';
import cloud from '@/assets/cloud.svg';
import collab from '@/assets/collab.svg';
import performance from '@/assets/performance.svg';
import tool from '@/assets/tool.png';
import editor from '@/assets/editor.png';
import evaluate from '@/assets/evaluate.png';
import simulate from '@/assets/simulate.png';
import Link from 'next/link';

const features = [
  {
    image: cloud,
    title: 'Cloud based',
    content: 'Everything you created are stored on cloud so you can view and download them anytime',
  },
  {
    image: collab,
    title: 'Collaboration',
    content: 'Feel free to collab with others with our projects structure',
  },
  {
    image: performance,
    title: 'Performance',
    content:
      'Worry not about lagging while doing your works. We can guarantee about our performances',
  },
];

const feats = [
  {
    image: editor,
    title: 'Create your business processes with our tools',
    content:
      'With more than 20+ tools and all elements of BPMN 2.0 that we provide, you can create any process that you want',
  },
  {
    image: evaluate,
    title: 'Evaluate your business processes with one click',
    content:
      'Evaluate you business process 6 criterias include: cycle time, cost, quality, transparency, flexibilty and exception handling',
    isReversed: true,
  },
  {
    image: simulate,
    title: 'Run simulation to see how your processes work',
    content: 'Simulate your process with our token simulator to see how you processes work',
  },
];

const FeatureAnnoucement = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <div className={styles.announcement}>
      <Image src={image} alt="Next.js Logo" priority />
      <h3>{title}</h3>
      <p className={`${styles.subtitle} ${styles.subtitledark}`}>{content}</p>
    </div>
  );
};

const MainFeature = ({
  image,
  title,
  content,
  isReversed,
}: {
  image: StaticImageData;
  title: string;
  content: string;
  isReversed?: boolean;
}) => {
  return (
    <div className={styles.mainfeatures}>
      {!isReversed && <Image src={image} alt="Next.js Logo" priority className={styles.tool} />}
      <div className={styles.mainfeaturescontent}>
        <h2>{title}</h2>
        <p className={`${styles.subtitle} ${styles.subtitledark}`}>{content}</p>
      </div>
      {isReversed && <Image src={image} alt="Next.js Logo" priority className={styles.tool} />}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/">
            <Image src={logo} alt="BPSky Logo" width={120} height={36} priority />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_WEB_URL || 'http://bpsky.online'}>
            <button className={styles.button}>
              <p>Start Now</p>
              <Image
                src={arrowRight}
                alt="Next.js Logo"
                width={24}
                height={24}
                priority
                className={styles.arrowRight}
              />
            </button>
          </Link>
        </div>

        <div className={styles.center}>
          <h1 className={styles.title}>Create and Evaluate your Business Process</h1>
          <h3 className={styles.subtitle}>
            With our tools, you can modelize and evaluate your business process with ease. Feel free
            to collab with others while we provide the best services for you.
          </h3>
          <Link href={process.env.NEXT_PUBLIC_WEB_URL || 'http://bpsky.online'}>
            <button className={`${styles.button} ${styles.buttonbig}`}>
              <p>Try Now</p>
            </button>
          </Link>
          <Image src={tool} alt="Next.js Logo" priority className={styles.tool} />
        </div>

        <h1 className={`${styles.title} ${styles.titledark}`}>Main Features</h1>
        <h4 className={`${styles.subtitle} ${styles.subtitledark}`}>
          With our tools, you can modelize and evaluate your business process with ease. Feel free
          to collab with others while we provide the best services for you.
        </h4>

        <div className={styles.grid}>
          {features.map((feat) => (
            <FeatureAnnoucement
              key={feat.image}
              image={feat.image}
              title={feat.title}
              content={feat.content}
            />
          ))}
        </div>

        {feats.map((feat) => (
          <MainFeature {...feat} key={feat.title} />
        ))}
      </main>
      <footer className={styles.footer}>
        <p>Copyright by BPE © all rights reserved</p>
      </footer>
    </>
  );
}
