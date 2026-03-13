// import React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const mock = [
//   {
//     title: 'Introduction',
//     description:
//       'SEDEMAC Mechatronics Limited (formerly SEDEMAC Mechatronics Pvt. Ltd.) ("we," "us," "our", or “SEDEMAC”) develops mobile applications that serve as a utility for our customers to manage and update the firmware on embedded devices manufactured by SEDEMAC. We are committed to protecting your privacy. This Privacy Policy explains what information the App handles and how we protect it. This App does not collect, store, or transmit any Personally Identifiable Information (PII) from you or your mobile device. ',
//   },
//   {
//     title: '1. Information We Do Not Collect ',
//     description:
//       `The App does not collect, store, or transmit any of the following.Your name, email address, or phone number. Your contacts, photos, or other media files. Your device's unique identifiers (like IMEI or Android ID) for tracking purposes. Your precise or approximate location data. `,
//   },
//   {
//     title: '2. Information We Do Handle (Non-Personal Data)',
//     description:
//       `For the App to perform its core function, it handles a limited set of non-personal, technical data. This data is used solely for the operation and processing of the App and is not linked to you as an individual. Communication with Cloud: When you initiate a download of a software package, the App makes a request to our secure repository hosted on Cloud. This request may contain non-personal technical information such as the model of the embedded device you are updating and the specific version of the software package you are requesting. This is necessary to ensure the correct file is downloaded. Your device's IP address is inherently part of this internet communication, but we do not log, store, or use it for any other purpose. Communication with Your Embedded Device (USB Service): The App uses a USB service to transfer the downloaded software package from your mobile device to your SEDEMAC embedded device. This is a direct, local data transfer. The data involved is the firmware itself and communication protocol data. This information is never transmitted to us or any third party.`,
//   },
//   {
//     title: '3. Use of Foreground and Background Services',
//     description:
//       'The App utilizes services that may run in the foreground or background to perform its essential functions reliably. Purpose: The download of software packages and the flashing process can be time-consuming. To ensure these critical operations are not interrupted if you switch to another app or your screen turns off, these tasks continue to run as a background service. User-Initiated: These services are only activated when you, the user, explicitly initiate an action, such as tapping a "Download" or "Flash Device" button within the App. Limited Duration: The services run only for the duration required to complete the specific task (downloading or flashing) and then terminate automatically. They do not run persistently in the background for any other purpose. ',
//   },
//   {
//     title: '4. Data Sharing and Third Parties',
//     description:
//       'We do not sell, trade, or otherwise transfer any information to outside parties.The only third-party service we interact with is Cloud service, which we use as a secure hosting provider for our software packages. Our interaction with Cloud is limited to downloading these packages to the App on your device. We do not share any user data with Cloud service provider. ',
//   },
//   {
//     title: '5. Data Security',
//     description:
//     'We take reasonable measures to protect the integrity of the technical data handled by our App. All communication between the App and our Cloud repository is conducted over a secure, encrypted connection (HTTPS) to prevent unauthorized access during transit. ',
//   },
//   {
//     title: `6.  Children's Privacy`,
//     description:
//       'The App is intended for use by our professional customers and is not directed at children under the age of 13. We do not knowingly collect any information from children under 13. ',
//   },
//   {
//     title: '7. Changes to This Privacy Policy',
//     description:
//       'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes. ',
//   },
//   {
//     title:
//       '8. Governing Law',
//     description:
//       'This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Pune. ',
//   },
//   {
//     title:
//       '9. Grievance Redressal Committee Contact',
//     description:
//       'In compliance with the Information Technology Act, 2000, SPDI Rules, and Digital Personal Data Protection Act 2023, our grievance redressal committee contact is as below Email: grc@sedemac.com Our grievance redressal committee will acknowledge and resolve user concerns within the time prescribed under applicable law. ',
//   },
//   {
//     title: '10. Contact Us',
//     description: 'If you have any questions or concerns about this Privacy Policy or our data handling practices, please contact us at: Email: support@sedemac.com Website: https://www.sedemac.com/contact-page '
//   }
// ];

// const PrivacySection = ({ title, description }) => {
//   return (
//     <Box>
//       <Typography
//         variant={'h6'}
//         gutterBottom
//         sx={{
//           fontWeight: 'medium',
//         }}
//       >
//         {title}
//       </Typography>
//       <Typography component={'p'} color={'text.secondary'}>
//         {description}
//       </Typography>
//     </Box>
//   );
// };

// PrivacySection.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// const Content = () => {
//   return (
//     <Box>
//       {mock.map((item, i) => (
//         <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
//           <PrivacySection {...item} />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Content;

import { Typography } from '@mui/material';
import React from 'react';

// The mock data has been updated to include '\n' newline characters
// where list items or paragraph breaks are desired, matching the user's requested formatting.
const mock = [
  {
    title: 'Introduction',
    description:
      'SEDEMAC Mechatronics Limited (formerly SEDEMAC Mechatronics Pvt. Ltd.) ("we," "us," "our", or “SEDEMAC”) develops mobile applications that serve as a utility for our customers to manage and update the firmware on embedded devices manufactured by SEDEMAC.`<br /><br />' + 

      'We are committed to protecting your privacy. This Privacy Policy explains what information the App handles and how we protect it. <strong>This App does not collect, store, or transmit any Personally Identifiable Information (PII)</strong> from you or your mobile device.',
  },
  {
    title: '1. Information We Do Not Collect',
    description: `The App does not collect, store, or transmit any of the following.
- Your name, email address, or phone number.
- Your contacts, photos, or other media files.
- Your device's unique identifiers (like IMEI or Android ID) for tracking purposes.
- Your precise or approximate location data.`,
  },
  {
    title: '2. Information We Do Handle (Non-Personal Data)',
    description: 'For the App to perform its core function, it handles a limited set of non-personal, technical data. This data is used solely for the operation and processing of the App and is not linked to you as an individual.<br /><br />' +

      '<strong>Communication with Cloud:</strong> When you initiate a download of a software package, the App makes a request to our secure repository hosted on Cloud. This request may contain non-personal technical information such as the model of the embedded device you are updating and the specific version of the software package you are requesting. This is necessary to ensure the correct file is downloaded. Your device\'s IP address is inherently part of this internet communication, but we do not log, store, or use it for any other purpose.<br /><br />' +

      '<strong>Communication with Your Embedded Device (USB Service):</strong> The App uses a USB service to transfer the downloaded software package from your mobile device to your SEDEMAC embedded device. This is a direct, local data transfer. The data involved is the firmware itself and communication protocol data. This information is never transmitted to us or any third party.',
  },
  {
    title: '3. Use of Foreground and Background Services',
    description:
      'The App utilizes services that may run in the foreground or background to perform its essential functions reliably.<br /><br />' +
      '<strong>Purpose:</strong> The download of software packages and the flashing process can be time-consuming. To ensure these critical operations are not interrupted if you switch to another app or your screen turns off, these tasks continue to run as a background service.<br /><br />' +
      '<strong>User-Initiated:</strong> These services are only activated when you, the user, explicitly initiate an action, such as tapping a "Download" or "Flash Device" button within the App.<br /><br />' +
      '<strong>Limited Duration:</strong> The services run only for the duration required to complete the specific task (downloading or flashing) and then terminate automatically. They do not run persistently in the background for any other purpose.',
  },
  {
    title: '4. Data Sharing and Third Parties',
    description:
      'We do not sell, trade, or otherwise transfer any information to outside parties. The only third-party service we interact with is Cloud service, which we use as a secure hosting provider for our software packages. Our interaction with Cloud is limited to downloading these packages to the App on your device. We do not share any user data with Cloud service provider.',
  },
  {
    title: '5. Data Security',
    description:
      'We take reasonable measures to protect the integrity of the technical data handled by our App. All communication between the App and our Cloud repository is conducted over a secure, encrypted connection (HTTPS) to prevent unauthorized access during transit.',
  },
  {
    title: "6. Children's Privacy",
    description:
      'The App is intended for use by our professional customers and is not directed at children under the age of 13. We do not knowingly collect any information from children under 13.',
  },
  {
    title: '7. Changes to This Privacy Policy',
    description:
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.',
  },
  {
    title: '8. Governing Law',
    description:
      'This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Pune.',
  },
  {
    title: '9. Grievance Redressal Committee Contact',
    description: `In compliance with the Information Technology Act, 2000, SPDI Rules, and Digital Personal Data Protection Act 2023, our grievance redressal committee contact is as below
Email: grc@sedemac.com
Our grievance redressal committee will acknowledge and resolve user concerns within the time prescribed under applicable law.`,
  },
  {
    title: '10. Contact Us',
    description:
      'If you have any questions or concerns about this Privacy Policy or our data handling practices, please contact us at:\nEmail: support@sedemac.com\nWebsite: https://www.sedemac.com/contact-page',
  },
];

/**
 * Component to display a single privacy section.
 * It now handles newline characters (\n) in the description by inserting <br /> tags.
 */
const PrivacySection = ({ title, description, i }) => {
  console.log(i);
  // Split the description string by newline characters and map them to JSX elements.
  // This allows the \n characters added in the mock data to render as line breaks.
  const contentWithBreaks = description
    .split('\n')
    .map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {/* Insert <br /> for every newline, except after the last line */}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="mb-8">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      {/* Description - now includes line breaks */}
      {i == 3 || i==2  || i==0? (
        <p
        className='text-gray-600 leading-relaxed whitespace-pre-line'
          variant="body1"
          // color="text.secondary"
          component="div"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {contentWithBreaks}
        </p>
      )}
    </div>
  );
};

// Main App component
const Content = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      {/* Header Banner - Replicating the yellow banner feel */}
      {/* <div className="bg-yellow-500 text-white p-6 rounded-t-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
          Privacy Policy
        </h1>
        <p className="text-sm italic">Effective Date 01 October, 2025</p>
      </div> */}

      {/* Main Content Container */}
      <div className="bg-white p-6 sm:p-10 rounded-b-xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          {/* Mapping through all sections */}
          {mock.map((item, i) => (
            <div
              key={i}
              className={
                i < mock.length - 1 ? 'border-b border-gray-100 pb-8' : ''
              }
            >
              <PrivacySection {...item} i={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Note on how line breaks are handled: the 'whitespace-pre-line' class 
          in the description paragraph is also helping to respect the newlines 
          in the original data if they were for formatting, but the <br/> 
          insertion is the primary driver for list formatting. */}
    </div>
  );
};

export default Content;
