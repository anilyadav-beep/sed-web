import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Introduction',
    description:
      'SEDEMAC Mechatronics Pvt Ltd (henceforth referred to as ‘we’) is committed to respecting your privacy. That’s why we want to outline the following details about how we collect, use, share, and protect the personal information you provide us through our website (www.sedemac.com).',
  },
  {
    title: '1. Preamble',
    description:
      'You should be aware that when you use our websites, mobile sites, or mobile apps, we may collect information by using cookies. By using our websites, mobile sites, or mobile apps, you accept the use of cookies as described below. Cookies are small pieces of information that are downloaded to your computer or mobile device when you visit a website. Your browser sends these cookies back to the website every time you visit the site again, so it can recognize you and can tailor what you see on the screen according to content which you have previously shown an interest in. No personal information is saved in our cookies, and they cannot contain any viruses.',
  },
  {
    title: '2. Ownership',
    description:
      'This website is owned and managed by: SEDEMAC Mechatronics Private Limited',
  },
  {
    title: '3. Declaration of cookie use',
    description:
      'Cookies can be classified as either first-party cookies (created internally by a service on the same domain as the website).or third-party cookies (created by a third-party service delivered from a separate domain). We use cookies for: (A) Technical functionality (first-party and third-party cookies), (B) Measuring traffic (first-party and third-party cookies), (C) Advertising, frequency, users, etc. (third-party cookies), (D) >Behavior-based individually targeted advertising.',
  },
  {
    title: '4. What are cookies used for on our website?',
    description:
      'This website uses cookies for technical functionality, to collect statistics, and to remember your choices, to give you a better user experience by improving our web sites, and for providing content more accurately suited to your needs. Cookies allow a more detailed level of tracking that helps us to gain a better understanding of potential areas for improvement so as to continually improve the relevance of and accessibility of the content we provide.',
  },
  {
    title: '5. Cookie expiration time',
    description:
    'There are basically two types of cookies: "session cookies" and "persistent cookies". The session cookies are related to the current visit to the website and are deleted automatically when you close your browser. Persistent cookies will be stored on your computer. Persistent cookies self-delete after a certain period but will be renewed every time you visit the website.',
  },
  {
    title: '6. How to avoid and delete cookies',
    description:
      'If you do not want us to place or read cookies on your computer, you can deselect cookies in your browser in the function where you select the cookies that are to be allowed, or blocked, or deleted. Likewise, you can remove cookies already placed on your computer via the support site of your browser, for instance: For Internet Explorer, a help guide is available - https://www.wikihow.com/Clear-Your-Browser%27s-Cookies. To opt out of being tracked by Google Analytics across all websites, visit: https://tools.google.com/dlpage/gaoptout',
  },
  {
    title: '7. End Note',
    description:
      'If you choose not to accept cookies at all, you can still visit our website; however please note that the high quality of our website may be reduced as a consequence thereof.',
  },
];

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'}>
        {description}
        
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
