import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AirAccount and more infra was designed from the ground up to be easily registered and
        used to get your Web3 account up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on UX',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SuperPaymaster and Cards system lets you focus on your transactions, and we&apos;ll do the chores. Go
        ahead and move your transactions into the <code>Blockchain</code>.
      </>
    ),
  },
  {
    title: 'Open Source and DPT',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All the code is open source and transparent. You can find the code on 
        <a href="https://github.com/aastarcommunity"> GitHub</a> All infra is aligned with DPT(<bold>Decentralized Permissionless and Trustless</bold>) principles.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
