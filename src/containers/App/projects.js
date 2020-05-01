import Pic1 from 'files/projects/Pic1.png';
import Pic2 from 'files/projects/Pic2.png';
import Pic3 from 'files/projects/Pic3.png';
import Pic4 from 'files/projects/Pic4.png';
import Pic5 from 'files/projects/Pic5.png';

export default [
  {
    name: 'Bias Analysis on Yelp',
    description:
      'The problem proposed is to be able to predict bias on Yelp reviews by extracting features via bag of words and part of speech models for three learning models (Naïve Bayes, Multinomial Logistic Regression, SVM). Bias was calculated by comparing predicted star ratings to actual star ratings.',
    result:
      'Recalculated the actual star ratings using the most accurate model, effectively removing bias from the calculations.',
    icon: ['fab', 'r-project'],
    image: Pic1,
    link: 'https://github.com/christina-ho/Yelp-Bias-Analysis',
    lang: 'R',
  },
  {
    name: 'Cannabis Usage Prediction',
    description:
      'The problem proposed is to detect marijuana usage for youth, specifically the people aged 18 and under to utilize these findings for preventative purposes by building 6 predictive learning models. Paper submission accepted to The International Conference on Compute and Data Analysis 2019.',
    result:
      'Showed that depression is the primary risk factor for youth cannabis use.',
    icon: ['fab', 'python'],
    image: Pic2,
    link: 'https://github.com/christina-ho/Detecting-Youth-Cannabis-Usage',
    lang: 'Python',
  },
  {
    name: `Airbnb's Consumer Surplus`,
    description:
      'Predicted elasticity estimates at several points in the demand curve to estimate consumer surplus by using regression and clustering techniques (e.g. K-means).',
    result:
      'Estimated consumer surplus and created actionable marketing techniques for customers in the discrete buckets of Airbnb listing clusters.',
    icon: ['fab', 'r-project'],
    image: Pic3,
    link: 'https://github.com/christina-ho/Airbnb-consumer-surplus',
    lang: 'Python',
  },
  {
    name: 'Anti-Refugee Violence',
    description:
      'Use visualization tools to interpret the drivers and consequences of right-wing violence due to the rise of xenophobic attacks against refugees in Germany. This was done by exploring correlations between time, location, and type of attack.',
    result:
      'Informed areas of frequent attacks to allocate security measures in place.',
    icon: ['fab', 'r-project'],
    image: Pic4,
    link: 'https://github.com/christina-ho/Anti-Refugee-Violence-in-Germany',
    lang: 'R',
  },
  {
    name: 'Tobacco and Gentrification',
    description:
      'Measured the impact of gentrification on the likelihood of holding tobacco licenses in New York by leading a spatial time-series project primarily using ACS Census data and a time series tobacco retailer dataset.',
    result:
      'Race, income, and education all play a statistically significant role in predicting tobacco activity in New York City.',
    icon: ['fab', 'r-project'],
    image: Pic5,
    link: 'https://github.com/christina-ho/tobacco-spatial-timeseries',
    lang: 'R',
  },
];
