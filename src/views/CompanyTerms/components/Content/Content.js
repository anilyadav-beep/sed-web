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
    title: '1. Personal information',
    description:
      'We collect personal information (Name, Email-Id, Phone Number, Organisation) from you during the course of a registration or form fill. We may use this information from time to time to contact you to inform you about Sedemac’s services, newsletters or to collect feedback.',
  },
  {
    title: '2. Use of demographic and profile data',
    description:
      'In our efforts to continually improve and provide the best services all the time, we collect and analyze demographic and profile data about our users’ activity on our website. We use your IP address to help diagnose problems with our server and to administer our website. We may also use this data to tailor your experience at our site, providing you with content according to your preferences.',
  },
  {
    title: '3. Sharing of personal information',
    description:
      'Your personal information is secure with us and shall not be shared with external firms or agencies for monetary gain. But we may share personal information to comply with any governmental regulations or as required by law. We may share some of your personal information with our consultants and service providers for the purpose of improving, maintaining, and monitoring the website and facilitating the services that we offer.',
  },
  {
    title: '4. Security precautions',
    description:
      'Our site is HTTPS compliant and security measures are in place to protect the loss, misuse, and alteration of visitor information. While we take every precaution to protect your personally identifiable information, no method of electronic transmission or storage is absolutely secure. We therefore cannot guarantee your information’s total security.',
  },
  {
    title: '5. Cookies',
    description:
    'We may use cookies to track user behavior and to provide a more customized experience. We also use cookies for remarketing purposes. Disabling cookies may limit your ability to use some features or areas of our website and applications.',
  },
  {
    title: '6. Log Files',
    description:
      'Like most websites, we collect information in log files that may include your IP address, browser type, email application, computer platform type, date/time stamp, and user activity. We use this information to help us analyze trends and improve our service. IP addresses are not tied to any personally identifiable information.',
  },
  {
    title: '7. Social Media Widgets',
    description:
      'Our website includes social media features such as Facebook and Linkedin buttons. These features may collect your IP address, track which pages you are visiting on our website, and set cookies to enable the features to function. These features are governed by the privacy policies of the companies that provide them.',
  },
  {
    title:
      '8. Policy Changes',
    description:
      'We may change this Privacy Policy by posting an updated or revised version on our website. Please visit the website periodically to review any revisions.',
  },
  {
    title:
      '9. Your Rights',
    description:
      'If you have submitted personal data to us, e.g. when registering for a newsletter or a service, you enjoy certain rights to gain access to the data processed about you, to rectify the data processed if relevant, to object to the processing of your personal data, and to withdraw your consent to the processing of your personal data, according to applicable regulations. If you wish to exercise any of these rights, please contact support@sedemac.com. We will respond to all legitimate requests, and will, where applicable, correct, amend, or delete your personal data.',
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
