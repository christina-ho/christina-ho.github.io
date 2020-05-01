/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Hero from 'components/Hero';
import Header from 'components/Header';
import Text from 'components/Text';
import Logo from 'files/logo.png';

import links from './links';
import { ContentWrapper, AWrapper } from './styles';

const HeroContent = () => {
  const size = 26;
  const saatchi =
    'https://sswanalytics.com/2019/09/10/my-internship-with-sswanalytics-learning-how-to-use-apis-and-twitter-data-to-analyze-consumer-sentiment-at-scale/';
  const img = <img src={Logo} width={size} height={size} alt="logo" />;

  return (
    <Hero markerColor="black">
      <Header left={img} links={links} />
      <ContentWrapper>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={100}>
          <Text type="headline">Hi! I'm Christina Ho</Text>
          <Text type="subHeadline" color="gray">
            Data scientist. Inspired to create digestible stories by
            synthesizing numbers and business-driven insights.
          </Text>
          <Text type="subHeadline" color="gray" spanColor="logo">
            Master’s in Applied Statistics{' '}
            <span>
              <AWrapper
                href="https://www.nyu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @New York University
              </AWrapper>
            </span>
            .
          </Text>
          <Text type="subHeadline" color="gray" spanColor="logo">
            Previously{' '}
            <span>
              <AWrapper
                href={saatchi}
                target="_blank"
                rel="noopener noreferrer"
              >
                @Saatchi and Saatchi Wellness
              </AWrapper>
            </span>
            .
          </Text>
        </ScrollAnimation>
      </ContentWrapper>
    </Hero>
  );
};

export default HeroContent;
