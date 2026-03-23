import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Universal Integration',
    Svg: require('@site/static/img/landing_img1.svg').default,
    description: (
      <>
        One unified API to process all major payment methods including MMQR, MPU, and international credit cards seamlessly.
      </>
    ),
  },
  {
    title: 'Secure & Reliable',
    Svg: require('@site/static/img/landing_img2.svg').default,
    description: (
      <>
        Bank-grade security and advanced encryption mean your merchants and customers can transact safely with 99.9% uptime.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/landing_img3.svg').default,
    description: (
      <>
        Comprehensive API references, clear code snippets, and helpful guides get you up and running in just minutes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
