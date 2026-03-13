// // import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import Breadcrumbs from '@mui/material/Breadcrumbs';
// // import Typography from '@mui/material/Typography';
// // import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// // const BreadcrumbsNav = () => {
// //   const location = useLocation();
// //   const pathnames = location.pathname.split('/').filter((x) => x);

// //   // Helper to format labels: remove special characters and capitalize words
// //   const formatLabel = (value) => {
// //     const clean = value.replace(/[-_]/g, ' ');
// //     return clean
// //       .split(' ')
// //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //       .join(' ');
// //   };

// //   // Mapping for your main tabs (optional but cleaner)
// //   const navMap = {
// //     investors: 'Investors',
// //     about: 'About',
// //     services: 'Services',
// //     products: 'Products',
// //     governance: 'Governance',
// //     policies: 'Policies',
// //     documents: 'Documents',
// //   };

// //   // Don’t show breadcrumb on root path ("/")
// //   if (pathnames.length === 0) return null;

// //   return (
// //     <Breadcrumbs
// //       aria-label="breadcrumb"
// //       separator={<NavigateNextIcon fontSize="small" />}
// //       sx={{ margin: '8px 0' }}
// //     >
// //       {pathnames.map((value, index) => {
// //         // console.log('value:', value);
// //         const to = `/${pathnames.slice(0, index + 1).join('/')}`;
// //         const isLast = index === pathnames.length - 1;

// //         // Try to use mapped name first, fallback to formatted label
// //         const label = navMap[value.toLowerCase()] || formatLabel(value);
// //         // console.log('label:', label);
// //         return isLast ? (
// //           <Typography key={to} color="text.primary">
// //             {/* {console.log('label in last:', label)} */}
// //             {label}
// //           </Typography>
// //         ) : (
// //           <Link
// //             key={to}
// //             to={to}
// //             style={{ textDecoration: 'none', color: '#A03811' }}
// //           >
// //             {/* {console.log('label in link:', label)} */}
// //             {label}
// //           </Link>
// //         );
// //       })}
// //     </Breadcrumbs>
// //   );
// // };

// // export default BreadcrumbsNav;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// const BreadcrumbsNav = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   // Helper to format labels: remove special characters and capitalize words
//   const formatLabel = (value) => {
//     const clean = value.replace(/[-_]/g, ' ');
//     return clean
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   // Mapping for your main tabs (optional but cleaner)
//   const navMap = {
//     investors: 'Investors',
//     about: 'About',
//     services: 'Services',
//     products: 'Products',
//     governance: 'Governance',
//     policies: 'Policies',
//     documents: 'Documents',
//     careers: 'Careers',
//   };

//   // Paths that should NOT navigate
//   const noNavigatePaths = ['products', 'careers', 'investors', 'more'];

//   if (pathnames.length === 0) return null;

//   return (
//     <Breadcrumbs
//       aria-label="breadcrumb"
//       separator={<NavigateNextIcon fontSize="small" />}
//       sx={{ margin: '8px 0' }}
//     >
//       {pathnames.map((value, index) => {
//         const to = `/${pathnames.slice(0, index + 1).join('/')}`;
//         const isLast = index === pathnames.length - 1;

//         const label = navMap[value.toLowerCase()] || formatLabel(value);

//         const isDisabled = noNavigatePaths.includes(value.toLowerCase());

//         if (isLast) {
//           return (
//             <Typography key={to} color="text.primary">
//               {label}
//             </Typography>
//           );
//         }

//         return isDisabled ? (
//           // Disabled breadcrumb (looks like a link but doesn’t navigate)
//           <Typography
//             key={to}
//             color="#A03811"
//             sx={{
//               cursor: 'not-allowed',
//               opacity: 0.6,
//               textDecoration: 'none',
//             }}
//           >
//             {label}
//           </Typography>
//         ) : (
//           <Link
//             key={to}
//             to={to}
//             style={{
//               textDecoration: 'none',
//               color: '#A03811',
//             }}
//           >
//             {label}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// };

// export default BreadcrumbsNav;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Container from 'components/Container';

const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Known acronyms to preserve in uppercase
  const acronyms = ['IPO', 'GST', 'FAQ', 'CSR'];

  // Helper to format labels: remove special characters and capitalize words
  const formatLabel = (value) => {
    const clean = value.replace(/[-_]/g, ' ');
    return clean
      .split(' ')
      .map((word) => {
        const upperWord = word.toUpperCase();
        // If it's a known acronym, keep it uppercase
        if (acronyms.includes(upperWord)) return upperWord;
        // Otherwise, capitalize normally
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  const navMap = {
    investors: 'Investors',
    about: 'About',
    services: 'Services',
    products: 'Products',
    governance: 'Governance',
    policies: 'Policies',
    documents: 'Documents',
    careers: 'Careers',
  };

  const noNavigatePaths = ['products', 'careers', 'investors', 'more'];

  if (pathnames.length === 0) return null;

  return (
    // <Container>
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ margin: '8px 0' }}
    >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = navMap[value.toLowerCase()] || formatLabel(value);
        const isDisabled = noNavigatePaths.includes(value.toLowerCase());

        if (isLast) {
          return (
            <Typography key={to} color="text.primary">
              {label}
            </Typography>
          );
        }

        return isDisabled ? (
          <Typography
            key={to}
            color="#A03811"
            sx={{
              cursor: 'not-allowed',
              opacity: 0.6,
              textDecoration: 'none',
            }}
          >
            {label}
          </Typography>
        ) : (
          <Link
            key={to}
            to={to}
            style={{
              textDecoration: 'none',
              color: '#A03811',
            }}
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
    // </Container>
  );
};

export default BreadcrumbsNav;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// const BreadcrumbsNav = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   const acronyms = ['IPO', 'GST', 'FAQ', 'CSR'];

//   const formatLabel = (value) => {
//     const clean = value.replace(/[-_]/g, ' ');
//     return clean
//       .split(' ')
//       .map((word) => {
//         const upperWord = word.toUpperCase();
//         if (acronyms.includes(upperWord)) return upperWord;
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join(' ');
//   };

//   const navMap = {
//     investors: 'Investors',
//     about: 'About',
//     services: 'Services',
//     products: 'Products',
//     governance: 'Governance',
//     policies: 'Policies',
//     documents: 'Documents',
//     careers: 'Careers',
//   };

//   const noNavigatePaths = ['products', 'careers', 'investors', 'more'];

//   if (pathnames.length === 0) return null;

//   return (
//     <Breadcrumbs
//       aria-label="breadcrumb"
//       separator={<NavigateNextIcon fontSize="small" />}
//       sx={{
//         margin: '8px 0',
//         '& .MuiTypography-root, & a': {
//           fontSize: {
//             xs: '0.75rem', // 📱 Mobile font size
//             sm: '0.875rem', // 💻 Tablet and larger
//           },
//         },
//       }}
//     >
//       {pathnames.map((value, index) => {
//         const to = `/${pathnames.slice(0, index + 1).join('/')}`;
//         const isLast = index === pathnames.length - 1;
//         const label = navMap[value.toLowerCase()] || formatLabel(value);
//         const isDisabled = noNavigatePaths.includes(value.toLowerCase());

//         if (isLast) {
//           return (
//             <Typography key={to} color="text.primary">
//               {label}
//             </Typography>
//           );
//         }

//         return isDisabled ? (
//           <Typography
//             key={to}
//             color="#A03811"
//             sx={{
//               cursor: 'not-allowed',
//               opacity: 0.6,
//               textDecoration: 'none',
//             }}
//           >
//             {label}
//           </Typography>
//         ) : (
//           <Link
//             key={to}
//             to={to}
//             style={{
//               textDecoration: 'none',
//               color: '#A03811',
//             }}
//           >
//             {label}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// };

// export default BreadcrumbsNav;
