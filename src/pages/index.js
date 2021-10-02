import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const cards = [
  {
    title: 'Learn',
    image: 'img/learn.svg',
    link: 'docs/learn/about-iota/an-introduction-to-iota',
    description:
      'Learn about IOTA, the Tangle, its features, industry applications, network and more.',
  },
  {
    title: 'Participate',
    image: 'img/participate.svg',
    link: 'docs/participate/support-the-network/about-nodes',
    description:
      'Join the network and start using solutions built on top of the Tangle.',
  },
  {
    title: 'Build',
    image: 'img/build.svg',
    link: 'docs/build/getting-started/architecture',
    description:
      'Access documentation and guides to build with IOTA in Rust, C, Go, Java or Python.',
  },
];

function Card({ title, image, link, description }) {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <div className='col margin-vert--md'>
      <div className='card card--full-height' onClick={handleClick}>
        {image && (
          <div className='card__image'>
            <img alt={title} src={useBaseUrl(image)} />
          </div>
        )}
        <div className='card__body padding-horiz--lg padding-bottom--lg'>
          {title && <h3>{title}</h3>}
          {description}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>{siteConfig.title}</h1>
            <p className='hero__subtitle margin--none'>{siteConfig.tagline}</p>
          </div>
          {cards && (
            <div className='row'>
              {cards.map((props, idx) => (
                <Card key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
