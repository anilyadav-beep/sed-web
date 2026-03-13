// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Link,
//   useMediaQuery,
//   useTheme,
//   NoSsr,
// } from '@mui/material';
// import ControllersNew from '../../../../assets/applications/ControllersNew.png';
// import EM from '../../../../assets/applications/EM.png';

// import TeamIcon from '@mui/icons-material/Groups';
// import Committee from '@mui/icons-material/Group';
// import { useNavigate } from 'react-router-dom';
// import ICEProd from '../../../../assets/applications/ICEProd.png';
// import powerTool from '../../../../assets/applications/PT.png';
// import OPE from '../../../../assets/applications/OPE.png';
// import ACE from '../../../../assets/applications/ACE.png';
// import powergen from '../../../../assets/applications/Genset.png';
// import Evs from '../../../../assets/applications/e2WNew.png';

// const cards = [
//   {
//     title: 'First-to-Market on Several Complex Technologies',
//     icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have been first-to-market on several of our key differentiated, control-intensive propositions, creating strong entry barriers for potential competitors.',
//   },
//   {
//     title: 'Agility at Scale',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have complete ownership of product design, engineering, and manufacturing which enables us to move with agility not only during development but also in problem resolutions, appreciated by Our customers.',
//   },
//   {
//     title: 'Synergies Across Markets',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We actively look for synergies in adjacent markets to transfer our proven technical learnings and solutions which enhances technical performance and robustness of our offerings in new markets while leveraging consolidated procurement and economies of scale.',
//   },
//   {
//     title: 'Ability to build Fresh Technologies',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We consistently turn concepts into real-world, innovative solutions, drawing on the expertise of our highly qualified engineers and scientists. We boast of high concentration of talented engineers with >60% of them being educated from IITs/NITs/BITS.',
//   },
//   {
//     title: 'Quality & Delivery Record',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We are committed to quality and reliability, especially in critical, control-intensive products where a failure results in the end-user’s equipment being rendered unusable. Our products undergo rigorous, validation protocols to ensure robust performance under demanding conditions and we proactively monitor their in-field performance, continuously improving on them. ',
//   },
// ];

// // const items = [
// //   { label: 'Mobility', img: Evs, link: '/products/small-evs' },
// //   { label: 'Industrial', img: powergen, link: '/products/generators' },
// // ];

// const items = [
//   {
//     label: 'Small Engine-Powered Vehicles',
//     img: ICEProd,
//     link: '/products/small-engines',
//   },
//   { label: 'Small Electric Vehicles', img: Evs, link: '/products/small-evs' },
//   {
//     label: 'Commercial Vehicles',
//     img: ACE,
//     link: '/products/commercial-vehicles',
//   },
// ];
// const items2 = [
//   { label: 'Generators', img: powergen, link: '/products/generators' },
//   { label: 'Power tools', img: powerTool, link: '/products/power-tools' },
//   {
//     label: 'Outdoor Powered Equipment',
//     img: OPE,
//     link: '/products/outdoor-powered-equipment',
//   },
// ];

// const Hero = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = React.useState(null);

//   const handleToggle = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const TopSection = () => {
//     const navigate = useNavigate();

//     return (
//       <Box
//         id="1st-part"
//         sx={{
//           minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//           pt: { xs: 6, md: 0 },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           // px: { xs: 2, md: 8 },
//           // pt: { xs: 6, md: 10 }, // Added gentle top spacing
//           pb: { xs: 4, md: 0 }, // Prevents bottom gap on large screens
//           position: 'relative',
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 1400,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             justifyContent: 'space-between',
//             alignItems: { xs: 'center', md: 'flex-start' },
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'start' } }}>
//             <Typography
//               variant="h4"
//               color="text.primary"
//               sx={{ maxWidth: 500, fontWeight: 700 }}
//             >
//               We are a{' '}
//               {/* <b
//                 style={{
//                   color: '#A03811',
//                   textDecoration: 'underline',
//                 }}
//               > */}
//               mid-sized, growing, profitable & capital-efficient
//               {/* </b>{' '} */}
//               <br />
//               company from India
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 3,
//               width: '100%',
//               maxWidth: 400,
//               alignItems: 'center',
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: '#ffe3ccff',
//                 width: '100%',
//                 p: 4,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 cursor: 'pointer',
//               }}
//               onClick={() => navigate('/investors/financial-information')}
//             >
//               <Typography variant="body1" textAlign="center">
//                 Financial Performance &<br/> Investor Presentations
//               </Typography>
//             </Card>

//             {/* <Card
//               sx={{
//                 bgcolor: '#ffe3ccff',
//                 width: '100%',
//                 p: 4,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 cursor: 'pointer',
//               }}
//               onClick={() =>
//                 navigate(
//                   '/investors/financial-information/Investor-presentations',
//                 )
//               }
//             >
//               <Typography variant="body1">Investor Presentations</Typography>
//             </Card> */}
//           </Box>
//         </Box>

//         {/* Navigation Links */}
//         {/* Navigation Links */}
//         <Box
//           display="flex"
//           width="50%"
//           mt={{ xs: 6, md: 8 }}
//           sx={{
//             flexDirection: { xs: 'column', sm: 'row' },
//             alignItems: 'center',
//             textAlign: 'center',
//             justifyContent: 'center',
//             maxWidth: 1400,
//           }}
//         >
//           <Link
//             underline="hover"
//             onClick={() =>
//               document.getElementById('1st-part')?.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start', // ensures element goes to top
//                 inline: 'nearest',
//               })
//             }
//           >
//             <Typography
//               mt={{ sx: 3, md: 0 }}
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               {' '}
//               Home
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>
//           <Link
//             underline="hover"
//             onClick={() =>
//               document
//                 .getElementById('2nd-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               mt={{ xs: 3, md: 0 }}
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               {' '}
//               What We Sell
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>

//           <Link
//             underline="hover"
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//             onClick={() =>
//               document
//                 .getElementById('3rd-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               // mt={{ xs: 5, md: 0 }}
//               sx={{
//                 mt: { xs: 3, md: 0 },
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               Our Markets
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>

//           <Link
//             underline="hover"
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//             onClick={() =>
//               document
//                 .getElementById('4th-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               // mt={{ xs: 5, md: 0 }}
//               sx={{
//                 mt: { xs: 3, md: 0 },
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               Our Competitive Strengths
//             </Typography>
//           </Link>
//         </Box>
//         <Link
//           href="/investors/other-information/ipo-offer-documents/drhp"
//           underline="hover"
//           sx={{
//             paddingY: 1,
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Draft Red Herring Prospectus
//           </Typography>
//         </Link>
//         {/* Scroll Arrow */}
//         <Box mt={{ xs: 5, md: 3 }}>
//           <NoSsr>
//             <Box
//               component="svg"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               width={{ xs: 30, sm: 40 }}
//               height={{ xs: 30, sm: 40 }}
//               onClick={() =>
//                 document
//                   .getElementById('2nd-part')
//                   ?.scrollIntoView({ behavior: 'smooth' })
//               }
//               sx={{ cursor: 'pointer' }}
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </Box>
//           </NoSsr>
//         </Box>
//       </Box>
//     );
//   };

//   const ProductsSection = () => (
//     <Box
//       id="2nd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//         // pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 10 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       <Typography
//         color="#A03811"
//         variant="h3"
//         sx={{
//           fontWeight: 700,
//           mb: { xs: 3, md: 2 },
//           // fontSize: { xs: '28px', md: '36px' },
//         }}
//       >
//         What We Sell
//       </Typography>

//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//         sx={{ maxWidth: 1400, width: '100%' }}
//       >
//         {/* Left Text */}
//         <Grid item xs={12} md={5.5}>
//           <Typography
//             color="text.primary"
//             fontWeight={700}
//             variant="h5"
//             sx={{
//               // fontSize: { xs: '20px', sm: '24px', md: '30px' },
//               // lineHeight: 1.3,
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//           >
//             <b style={{ textDecoration: 'none' }}>
//               Control-intensive, critical-to-the-application
//             </b>{' '}
//             Electronic Control Units (
//             <b style={{ textDecoration: 'none' }}>"ECUs"</b>) incorporating
//             novel, control technologies developed in-house.
//           </Typography>
//         </Grid>

//         {/* Right Product Cards */}
//         <Grid item xs={12} md={6.5}>
//           <Grid container spacing={3} justifyContent="center">
//             {[
//               { image: ControllersNew, label: 'Millions /yr' },
//               { image: EM, label: 'Soon' },
//             ].map((item, i) => (
//               <Grid item xs={12} sm={6} key={i}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: 1,
//                     p: 2,
//                     height: { xs: 230, sm: 260, md: 300, lg: 330 },
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={item.image}
//                     alt={item.label}
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'contain',
//                       borderRadius: 2,
//                     }}
//                   />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//       {/* Scroll Arrow */}
//       <Box mt={{ xs: 6, md: 2 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 28, sm: 36 }}
//             height={{ xs: 28, sm: 36 }}
//             onClick={() =>
//               document.getElementById('3rd-part')?.scrollIntoView({
//                 behavior: 'smooth',
//               })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const ThirdPart = () => (
//     <Box
//       id="3rd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//         pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 10 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         textAlign="center"
//         mb={4}
//         color="#A03811"
//         variant="h3"
//         fontWeight={700}
//         // sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
//       >
//         Our Markets
//       </Typography>

//       {/* <Grid
//         container
//         spacing={{ xs: 4, md: 6 }}
//         alignItems="center"
//         justifyContent="center"
//         width="100%"
//         maxWidth="1300px"
//         px={{ xs: 2, md: 0 }}
//       >
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             sx={{
//               // fontSize: { xs: '1.4rem', md: '2rem' },
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//           >
//             Our Markets are{' '}
//             <span style={{ textDecoration: 'none' }}>
//               leaders of large markets
//             </span>
//             , based in India, the US and the EU.
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6} display="flex" justifyContent="center">
//           <Grid container spacing={3} justifyContent="center">
//             {items.map((item, i) => (
//               <Grid
//                 item
//                 xs={6}
//                 sm={4}
//                 md={5}
//                 key={i}
//                 display="flex"
//                 justifyContent={{ xs: 'center', md: 'flex-end' }}
//               >
//                 <Card
//                   sx={{
//                     width: { xs: 140, sm: 160, md: 190 },
//                     height: { xs: 180, sm: 200, md: 220 },
//                     borderRadius: 4,
//                     cursor: 'pointer',
//                     overflow: 'hidden',
//                     backgroundColor: '#ffe3ccff',
//                     boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                     transition: 'transform 0.2s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-2px)',
//                       boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
//                     },
//                     display: 'flex',
//                     flexDirection: 'column',
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={item.img}
//                     alt={item.label}
//                     sx={{
//                       width: '100%',
//                       height: { xs: 100, sm: 120, md: 130 },
//                       objectFit: 'contain',
//                       mt: 1,
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       p: 1,
//                       textAlign: 'center',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexGrow: 1,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}
//                     >
//                       <b>{item.label}</b>
//                     </Typography>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid> */}
//       <Box>
//         <Box
//           maxWidth={'100%'}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           // marginTop="10px"
//           spacing={2}
//         >
//           <Grid
//             container
//             paddingX={3}
//             justifyContent="center"
//             spacing={4} // <-- this adds space between parent cards
//             width="100%"
//             // paddingY={6}
//           >
//             {/* Parent Card 1 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Mobility
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>

//             {/* Parent Card 2 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Industrial
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items2.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Grid item xs={12} md={6} paddingTop={1}>
//         <Typography
//           variant="h5"
//           fontWeight={700}
//           sx={{
//             // fontSize: { xs: '1.4rem', md: '2rem' },
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           Our customers are{' '}
//           <span style={{ textDecoration: 'none' }}>
//             leaders of large markets
//           </span>
//           , based in India, the US and the EU.
//         </Typography>
//       </Grid>

//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 1 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//       {/* Down Arrow */}
//       <Box mt={{ xs: 5, md: 0 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 30, sm: 40 }}
//             height={{ xs: 30, sm: 40 }}
//             onClick={() =>
//               document
//                 .getElementById('4th-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const FourthPart = () => (
//     <Box
//       id="4th-part"
//       sx={{
//         minHeight: '80vh', // <--- REMOVE forced height
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         // justifyContent: 'center',  // <--- REMOVE THIS
//         position: 'relative',
//         paddingTop: { xs: 10, md: 10 }, // <--- use padding instead for spacing
//       }}
//     >
//       <Box width="100%" maxWidth="1400px">
//         <Typography
//           color="#A03811"
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             textAlign: 'center',
//             mb: { xs: 3, md: 3 },
//             // fontSize: { xs: '28px', md: '36px' },
//           }}
//         >
//           Our Competitive Strengths
//         </Typography>

//         <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
//           {cards.map((item, index) => (
//             <Grid item xs={10} sm={4} md={2.4} key={index}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: 200,
//                   borderRadius: 4,
//                   cursor: 'pointer',
//                   backgroundColor: '#ffe3ccff',
//                   boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                   transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-3px)',
//                     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: 'bold',
//                     color: 'text.primary',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       {/* <Box display="flex" justifyContent="center" mt={3}>
//         <Link
//           href="/investors/other-information/ipo-offer-documents/drhp"
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Link>
//       </Box> */}
//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//     </Box>
//   );

//   return (
//     <Box sx={{ bgcolor: 'alternate.light', width: 1 }}>
//       <Box>
//         <TopSection />
//       </Box>
//       <ProductsSection />
//       <ThirdPart />
//       <FourthPart />
//     </Box>
//   );
// };

// export default Hero;






import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Link,
  useMediaQuery,
  useTheme,
  NoSsr,
} from '@mui/material';
import ControllersNew from '../../../../assets/applications/ControllersNew.png';
import EM from '../../../../assets/applications/EM.png';

import TeamIcon from '@mui/icons-material/Groups';
import Committee from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import ICEProd from '../../../../assets/applications/ICEProd.png';
import powerTool from '../../../../assets/applications/PT.png';
import OPE from '../../../../assets/applications/OPE.png';
import ACE from '../../../../assets/applications/ACE.png';
import powergen from '../../../../assets/applications/Genset.png';
import Evs from '../../../../assets/applications/e2WNew.png';

const cards = [
  {
    title: 'First-to-Market on Several Complex Technologies',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    description:
      'We have been first-to-market on several of our key differentiated, control-intensive propositions, creating strong entry barriers for potential competitors.',
  },
  {
    title: 'Agility at Scale',
    icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
    description:
      'We have complete ownership of product design, engineering, and manufacturing which enables us to move with agility not only during development but also in problem resolutions, appreciated by Our customers.',
  },
  {
    title: 'Synergies Across Markets',
    icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
    description:
      'We actively look for synergies in adjacent markets to transfer our proven technical learnings and solutions which enhances technical performance and robustness of our offerings in new markets while leveraging consolidated procurement and economies of scale.',
  },
  {
    title: 'Ability to build Fresh Technologies',
    icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
    description:
      'We consistently turn concepts into real-world, innovative solutions, drawing on the expertise of our highly qualified engineers and scientists. We boast of high concentration of talented engineers with >60% of them being educated from IITs/NITs/BITS.',
  },
  {
    title: 'Quality & Delivery Record',
    icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
    description:
      'We are committed to quality and reliability, especially in critical, control-intensive products where a failure results in the end-user’s equipment being rendered unusable. Our products undergo rigorous, validation protocols to ensure robust performance under demanding conditions and we proactively monitor their in-field performance, continuously improving on them. ',
  },
];

// const items = [
//   { label: 'Mobility', img: Evs, link: '/products/small-evs' },
//   { label: 'Industrial', img: powergen, link: '/products/generators' },
// ];

const items = [
  {
    label: 'Small Engine-Powered Vehicles',
    img: ICEProd,
    link: '/products/small-engines',
  },
  { label: 'Small Electric Vehicles', img: Evs, link: '/products/small-evs' },
  {
    label: 'Commercial Vehicles',
    img: ACE,
    link: '/products/commercial-vehicles',
  },
];
const items2 = [
  { label: 'Generators', img: powergen, link: '/products/generators' },
  { label: 'Power tools', img: powerTool, link: '/products/power-tools' },
  {
    label: 'Outdoor Powered Equipment',
    img: OPE,
    link: '/products/outdoor-powered-equipment',
  },
];

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const TopSection = () => {
    const navigate = useNavigate();

    return (
      <Box
        id="1st-part"
        sx={{
          minHeight: "100vh",
          // pt: { xs: 6, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // px: { xs: 2, md: 8 },
          // pt: { xs: 6, md: 10 }, // Added gentle top spacing
          pb: { xs: 2, md: 0 }, // Prevents bottom gap on large screens
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1400,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: { xs: 8, md: 8 },
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'start' }, paddingX:{xs:4, md:0} }}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ maxWidth: 500, fontWeight: 700 }}
            >
              We are a{' '}
              {/* <b
                style={{
                  color: '#A03811',
                  textDecoration: 'underline',
                }}
              > */}
              mid-sized, growing, profitable & capital-efficient
              {/* </b>{' '} */}
              <br />
              company from India
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              width: '100%',
              maxWidth: 400,
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                bgcolor: '#ffe3ccff',
                width: '100%',
                p: 4,
                borderRadius: 2,
                boxShadow: 1,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/investors/financial-information')}
            >
              <Typography variant="body1" textAlign="center">
                Financial Performance &<br /> Investor Presentations
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* Navigation Links */}
        {/* <Box
          display="flex"
          width="50%"
          mt={{ xs: 6, md: 8 }}
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            maxWidth: 1400,
          }}
        >
          <Link
            underline="hover"
            onClick={() =>
              document.getElementById('1st-part')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // ensures element goes to top
                inline: 'nearest',
              })
            }
          >
            <Typography
              mt={{ sx: 3, md: 0 }}
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: '#A03811',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {' '}
              Home
            </Typography>
          </Link>

          <Typography
            sx={{
              color: '#A03811',
              mx: 1,
              display: { xs: 'none', md: 'inline' },
            }}
          >
            |
          </Typography>
          <Link
            underline="hover"
            onClick={() =>
              document
                .getElementById('2nd-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Typography
              mt={{ xs: 3, md: 0 }}
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: '#A03811',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {' '}
              What We Sell
            </Typography>
          </Link>

          <Typography
            sx={{
              color: '#A03811',
              mx: 1,
              display: { xs: 'none', md: 'inline' },
            }}
          >
            |
          </Typography>

          <Link
            underline="hover"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
            onClick={() =>
              document
                .getElementById('3rd-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Typography
              // mt={{ xs: 5, md: 0 }}
              sx={{
                mt: { xs: 3, md: 0 },
                fontSize: 18,
                fontWeight: 500,
                color: '#A03811',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Our Markets
            </Typography>
          </Link>

          <Typography
            sx={{
              color: '#A03811',
              mx: 1,
              display: { xs: 'none', md: 'inline' },
            }}
          >
            |
          </Typography>

          <Link
            underline="hover"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
            onClick={() =>
              document
                .getElementById('4th-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Typography
              // mt={{ xs: 5, md: 0 }}
              sx={{
                mt: { xs: 3, md: 0 },
                fontSize: 18,
                fontWeight: 500,
                color: '#A03811',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Our Competitive Strengths
            </Typography>
          </Link>
        </Box> */}
        <Link
          href="/investors/other-information/ipo-offer-documents/drhp"
          underline="hover"
          sx={{
            paddingTop: {xs:12, md:10},
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Draft Red Herring Prospectus and Audio-Visual
          </Typography>
        </Link>
        <Box mt={{ xs: 5, md: 0 }}>
          <NoSsr>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={{ xs: 30, sm: 40 }}
              height={{ xs: 30, sm: 40 }}
              onClick={() =>
                document
                  .getElementById('2nd-part')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              sx={{ cursor: 'pointer' }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Box>
          </NoSsr>
        </Box>
      </Box>
    );
  };

  const ProductsSection = () => (
    <Box
      id="2nd-part"
      sx={{
        minHeight: { xs: 'auto', md: '85vh', lg: '90vh' },
        // pt: { xs: 6, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        // px: { xs: 2, md: 8 },
        pt: { xs: 10, md: 10 }, // Added gentle top spacing
        // pb: { xs: 4, md: 0 }, // Prevents bottom gap on large screens
        position: 'relative',
      }}
    >
      <Typography
        color="#A03811"
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: { xs: 3, md: 2 },
          // fontSize: { xs: '28px', md: '36px' },
        }}
      >
        What We Sell
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1400, width: '100%' }}
      >
        <Grid item xs={12} md={5.5}>
          <Typography
            color="text.primary"
            fontWeight={700}
            variant="h5"
            sx={{
              // fontSize: { xs: '20px', sm: '24px', md: '30px' },
              // lineHeight: 1.3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <b style={{ textDecoration: 'none' }}>
              Control-intensive, critical-to-the-application
            </b>{' '}
            Electronic Control Units (
            <b style={{ textDecoration: 'none' }}>"ECUs"</b>) incorporating
            novel, control technologies developed in-house.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6.5}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { image: ControllersNew, label: 'Millions /yr' },
              { image: EM, label: 'Soon' },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 1,
                    p: 2,
                    height: { xs: 230, sm: 260, md: 300, lg: 330 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.label}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: 2,
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <Box
        display="flex"
        width="50%"
        mt={{ xs: 6, md: 3 }}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          maxWidth: 1400,
        }}
      >
        <Link
          underline="hover"
          onClick={() =>
            document.getElementById('1st-part')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start', // ensures element goes to top
              inline: 'nearest',
            })
          }
        >
          <Typography
            mt={{ sx: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Home
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>
        <Link
          underline="hover"
          onClick={() =>
            document
              .getElementById('2nd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            mt={{ xs: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            What We Sell
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('3rd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Markets
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('4th-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Competitive Strengths
          </Typography>
        </Link>
      </Box>
      <Link
        href="/investors/other-information/ipo-offer-documents/drhp"
        underline="hover"
        sx={{
          paddingY: 1,
          fontSize: 18,
          fontWeight: 500,
          color: '#A03811',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        <Typography
          // mt={{ xs: 5, md: 0 }}
          sx={{
            mt: { xs: 3, md: 0 },
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Draft Red Herring Prospectus
        </Typography>
      </Link> */}
      <Box mt={{ xs: 6, md: 5 }}>
        <NoSsr>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={{ xs: 28, sm: 36 }}
            height={{ xs: 28, sm: 36 }}
            onClick={() =>
              document.getElementById('3rd-part')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            sx={{ cursor: 'pointer' }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </Box>
        </NoSsr>
      </Box>
    </Box>
  );

  const ThirdPart = () => (
    <Box
      id="3rd-part"
      sx={{
        minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
        // pt: { xs: 6, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        // px: { xs: 2, md: 8 },
        pt: { xs: 10, md: 12 }, // Added gentle top spacing
        // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
        position: 'relative',
      }}
    >
      {/* Heading */}
      <Typography
        textAlign="center"
        mb={4}
        color="#A03811"
        variant="h3"
        fontWeight={700}
        // sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
      >
        Our Markets
      </Typography>
      <Box>
        <Box
          maxWidth={'100%'}
          display="flex"
          justifyContent="center"
          alignItems="center"
          // marginTop="10px"
          spacing={2}
        >
          <Grid
            container
            paddingX={3}
            justifyContent="center"
            spacing={4} // <-- this adds space between parent cards
            width="100%"
            // paddingY={6}
          >
            {/* Parent Card 1 */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  width: '100%',
                  p: 1,
                  borderRadius: 3,
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                  backgroundColor: '#ffffff',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#A03811',
                    fontWeight: 'bold',
                    mb: 1,
                    textAlign: 'center',
                  }}
                >
                  Mobility
                </Typography>

                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {items.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Box textAlign="center">
                        <Card
                          onClick={() => navigate(item.link)}
                          sx={{
                            height: 200,
                            borderRadius: 4,
                            cursor: 'pointer',
                            overflow: 'hidden',
                            backgroundColor: '#ffe3ccff',
                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                            transition:
                              'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                            },
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                              width: '100%',
                              height: 130,
                              objectFit: 'contain',
                              display: 'block',
                              mt: 1,
                            }}
                          />

                          <Box
                            sx={{
                              p: 1,
                              pt: 0,
                              textAlign: 'center',
                              flexGrow: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: '8px',
                                textTransform: 'capitalize',
                                color: 'text.primary',
                              }}
                            >
                              <b>{item.label}</b>
                            </Typography>
                          </Box>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>

            {/* Parent Card 2 */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  width: '100%',
                  p: 1,
                  borderRadius: 3,
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                  backgroundColor: '#ffffff',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#A03811',
                    fontWeight: 'bold',
                    mb: 1,
                    textAlign: 'center',
                  }}
                >
                  Industrial
                </Typography>

                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {items2.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Box textAlign="center">
                        <Card
                          onClick={() => navigate(item.link)}
                          sx={{
                            height: 200,
                            borderRadius: 4,
                            cursor: 'pointer',
                            overflow: 'hidden',
                            backgroundColor: '#ffe3ccff',
                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                            transition:
                              'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-1px)',
                              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                            },
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                              width: '100%',
                              height: 130,
                              objectFit: 'contain',
                              display: 'block',
                              mt: 1,
                            }}
                          />

                          <Box
                            sx={{
                              p: 1,
                              pt: 0,
                              textAlign: 'center',
                              flexGrow: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: '8px',
                                textTransform: 'capitalize',
                                color: 'text.primary',
                              }}
                            >
                              <b>{item.label}</b>
                            </Typography>
                          </Box>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid item xs={12} md={6} paddingTop={1}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            // fontSize: { xs: '1.4rem', md: '2rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Our customers are{' '}
          <span style={{ textDecoration: 'none' }}>
            leaders of large markets
          </span>
          , based in India, the US and the EU.
        </Typography>
      </Grid>

      {/* <Box
        display="flex"
        width="50%"
        mt={{ xs: 6, md: 1 }}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          maxWidth: 1400,
        }}
      >
        <Link
          underline="hover"
          onClick={() =>
            document.getElementById('1st-part')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start', // ensures element goes to top
              inline: 'nearest',
            })
          }
        >
          <Typography
            mt={{ sx: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Home
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>
        <Link
          underline="hover"
          onClick={() =>
            document
              .getElementById('2nd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            mt={{ xs: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            What We Sell
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('3rd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Markets
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('4th-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Competitive Strengths
          </Typography>
        </Link>
      </Box>
      <Link
        href="/investors/other-information/ipo-offer-documents/drhp"
        underline="hover"
        sx={{
          paddingY: 1,
          fontSize: 18,
          fontWeight: 500,
          color: '#A03811',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        <Typography
          // mt={{ xs: 5, md: 0 }}
          sx={{
            mt: { xs: 3, md: 0 },
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Draft Red Herring Prospectus
        </Typography>
      </Link> */}
      {/* Down Arrow */}
      <Box mt={{ xs: 5, md: 0 }}>
        <NoSsr>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={{ xs: 30, sm: 40 }}
            height={{ xs: 30, sm: 40 }}
            onClick={() =>
              document
                .getElementById('4th-part')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            sx={{ cursor: 'pointer' }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </Box>
        </NoSsr>
      </Box>
    </Box>
  );

  const FourthPart = () => (
    <Box
      id="4th-part"
      sx={{
        minHeight: '80vh', // <--- REMOVE forced height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',  // <--- REMOVE THIS
        position: 'relative',
        paddingTop: { xs: 10, md: 10 }, // <--- use padding instead for spacing
      }}
    >
      <Box width="100%" maxWidth="1400px">
        <Typography
          color="#A03811"
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 3, md: 3 },
            // fontSize: { xs: '28px', md: '36px' },
          }}
        >
          Our Competitive Strengths
        </Typography>

        <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
          {cards.map((item, index) => (
            <Grid item xs={10} sm={4} md={2.4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  borderRadius:4,
                  cursor: 'pointer',
                  backgroundColor: '#ffe3ccff',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.2s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize:{xs:16,md:16},
                    fontWeight: 'bold',
                    color: 'text.primary',
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box display="flex" justifyContent="center" mt={3}>
        <Link
          href="/investors/other-information/ipo-offer-documents/drhp"
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            textDecoration: 'underline',
          }}
        >
          Draft Red Herring Prospectus
        </Link>
      </Box> */}
      {/* <Box
        display="flex"
        width="50%"
        mt={{ xs: 6, md: 3 }}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          maxWidth: 1400,
        }}
      >
        <Link
          underline="hover"
          onClick={() =>
            document.getElementById('1st-part')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start', // ensures element goes to top
              inline: 'nearest',
            })
          }
        >
          <Typography
            mt={{ sx: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            Home
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>
        <Link
          underline="hover"
          onClick={() =>
            document
              .getElementById('2nd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            mt={{ xs: 3, md: 0 }}
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            {' '}
            What We Sell
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('3rd-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Markets
          </Typography>
        </Link>

        <Typography
          sx={{
            color: '#A03811',
            mx: 1,
            display: { xs: 'none', md: 'inline' },
          }}
        >
          |
        </Typography>

        <Link
          underline="hover"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() =>
            document
              .getElementById('4th-part')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography
            // mt={{ xs: 5, md: 0 }}
            sx={{
              mt: { xs: 3, md: 0 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Our Competitive Strengths
          </Typography>
        </Link>
      </Box>
      <Link
        href="/investors/other-information/ipo-offer-documents/drhp"
        underline="hover"
        sx={{
          paddingY: 1,
          fontSize: 18,
          fontWeight: 500,
          color: '#A03811',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        <Typography
          // mt={{ xs: 5, md: 0 }}
          sx={{
            mt: { xs: 3, md: 0 },
            fontSize: 18,
            fontWeight: 500,
            color: '#A03811',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Draft Red Herring Prospectus
        </Typography>
      </Link> */}
    </Box>
  );

  return (
    <Box sx={{ bgcolor: 'alternate.light', width: 1 }}>
      <Box mt={{ md:-8}}>
        <TopSection />
      </Box>
      <Box mt={3}>
      <ProductsSection />
      </Box>
      <ThirdPart />
      <FourthPart />
    </Box>
  );
};

export default Hero;


// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Link,
//   useMediaQuery,
//   useTheme,
//   NoSsr,
// } from '@mui/material';
// import ControllersNew from '../../../../assets/applications/ControllersNew.png';
// import EM from '../../../../assets/applications/EM.png';

// import TeamIcon from '@mui/icons-material/Groups';
// import Committee from '@mui/icons-material/Group';
// import { useNavigate } from 'react-router-dom';
// import ICEProd from '../../../../assets/applications/ICEProd.png';
// import powerTool from '../../../../assets/applications/PT.png';
// import OPE from '../../../../assets/applications/OPE.png';
// import ACE from '../../../../assets/applications/ACE.png';
// import powergen from '../../../../assets/applications/Genset.png';
// import Evs from '../../../../assets/applications/e2WNew.png';

// const cards = [
//   {
//     title: 'First-to-Market on Several Complex Technologies',
//     icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have been first-to-market on several of our key differentiated, control-intensive propositions, creating strong entry barriers for potential competitors.',
//   },
//   {
//     title: 'Agility at Scale',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have complete ownership of product design, engineering, and manufacturing which enables us to move with agility not only during development but also in problem resolutions, appreciated by Our customers.',
//   },
//   {
//     title: 'Synergies Across Markets',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We actively look for synergies in adjacent markets to transfer our proven technical learnings and solutions which enhances technical performance and robustness of our offerings in new markets while leveraging consolidated procurement and economies of scale.',
//   },
//   {
//     title: 'Ability to build Fresh Technologies',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We consistently turn concepts into real-world, innovative solutions, drawing on the expertise of our highly qualified engineers and scientists. We boast of high concentration of talented engineers with >60% of them being educated from IITs/NITs/BITS.',
//   },
//   {
//     title: 'Quality & Delivery Record',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We are committed to quality and reliability, especially in critical, control-intensive products where a failure results in the end-user’s equipment being rendered unusable. Our products undergo rigorous, validation protocols to ensure robust performance under demanding conditions and we proactively monitor their in-field performance, continuously improving on them. ',
//   },
// ];

// // const items = [
// //   { label: 'Mobility', img: Evs, link: '/products/small-evs' },
// //   { label: 'Industrial', img: powergen, link: '/products/generators' },
// // ];

// const items = [
//   {
//     label: 'Small Engine-Powered Vehicles',
//     img: ICEProd,
//     link: '/products/small-engines',
//   },
//   { label: 'Small Electric Vehicles', img: Evs, link: '/products/small-evs' },
//   {
//     label: 'Commercial Vehicles',
//     img: ACE,
//     link: '/products/commercial-vehicles',
//   },
// ];
// const items2 = [
//   { label: 'Generators', img: powergen, link: '/products/generators' },
//   { label: 'Power tools', img: powerTool, link: '/products/power-tools' },
//   {
//     label: 'Outdoor Powered Equipment',
//     img: OPE,
//     link: '/products/outdoor-powered-equipment',
//   },
// ];

// const Hero = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = React.useState(null);

//   const handleToggle = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const TopSection = () => {
//     const navigate = useNavigate();

//     return (
//       <Box
//         id="1st-part"
//         sx={{
//           minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//           pt: { xs: 6, md: 0 },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           // px: { xs: 2, md: 8 },
//           // pt: { xs: 6, md: 10 }, // Added gentle top spacing
//           pb: { xs: 4, md: 0 }, // Prevents bottom gap on large screens
//           position: 'relative',
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 1400,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             justifyContent: 'space-between',
//             alignItems: { xs: 'center', md: 'flex-start' },
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'start' } }}>
//             <Typography
//               variant="h4"
//               color="text.primary"
//               sx={{ maxWidth: 500, fontWeight: 700 }}
//             >
//               We are a{' '}
//               {/* <b
//                 style={{
//                   color: '#A03811',
//                   textDecoration: 'underline',
//                 }}
//               > */}
//               mid-sized, growing, profitable & capital-efficient
//               {/* </b>{' '} */}
//               <br />
//               company from India
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 3,
//               width: '100%',
//               maxWidth: 400,
//               alignItems: 'center',
//             }}
//           >
//             <Card
//               sx={{
//                 bgcolor: '#ffe3ccff',
//                 width: '100%',
//                 p: 4,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 cursor: 'pointer',
//               }}
//               onClick={() => navigate('/investors/financial-information')}
//             >
//               <Typography variant="body1" textAlign="center">
//                 Financial Performance &<br/> Investor Presentations
//               </Typography>
//             </Card>

//             {/* <Card
//               sx={{
//                 bgcolor: '#ffe3ccff',
//                 width: '100%',
//                 p: 4,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 cursor: 'pointer',
//               }}
//               onClick={() =>
//                 navigate(
//                   '/investors/financial-information/Investor-presentations',
//                 )
//               }
//             >
//               <Typography variant="body1">Investor Presentations</Typography>
//             </Card> */}
//           </Box>
//         </Box>

//         {/* Navigation Links */}
//         {/* Navigation Links */}
//         <Box
//           display="flex"
//           width="50%"
//           mt={{ xs: 6, md: 8 }}
//           sx={{
//             flexDirection: { xs: 'column', sm: 'row' },
//             alignItems: 'center',
//             textAlign: 'center',
//             justifyContent: 'center',
//             maxWidth: 1400,
//           }}
//         >
//           <Link
//             underline="hover"
//             onClick={() =>
//               document.getElementById('1st-part')?.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start', // ensures element goes to top
//                 inline: 'nearest',
//               })
//             }
//           >
//             <Typography
//               mt={{ sx: 3, md: 0 }}
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               {' '}
//               Home
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>
//           <Link
//             underline="hover"
//             onClick={() =>
//               document
//                 .getElementById('2nd-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               mt={{ xs: 3, md: 0 }}
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               {' '}
//               What We Sell
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>

//           <Link
//             underline="hover"
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//             onClick={() =>
//               document
//                 .getElementById('3rd-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               // mt={{ xs: 5, md: 0 }}
//               sx={{
//                 mt: { xs: 3, md: 0 },
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               Our Markets
//             </Typography>
//           </Link>

//           {/* Show only on md+ */}
//           <Typography
//             sx={{
//               color: '#A03811',
//               mx: 1,
//               display: { xs: 'none', md: 'inline' },
//             }}
//           >
//             |
//           </Typography>

//           <Link
//             underline="hover"
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//             onClick={() =>
//               document
//                 .getElementById('4th-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             <Typography
//               // mt={{ xs: 5, md: 0 }}
//               sx={{
//                 mt: { xs: 3, md: 0 },
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               Our Competitive Strengths
//             </Typography>
//           </Link>
//         </Box>
//         <Link
//           href="/investors/other-information/ipo-offer-documents/drhp"
//           underline="hover"
//           sx={{
//             paddingY: 1,
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Draft Red Herring Prospectus
//           </Typography>
//         </Link>
//         {/* Scroll Arrow */}
//         <Box mt={{ xs: 5, md: 3 }}>
//           <NoSsr>
//             <Box
//               component="svg"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               width={{ xs: 30, sm: 40 }}
//               height={{ xs: 30, sm: 40 }}
//               onClick={() =>
//                 document
//                   .getElementById('2nd-part')
//                   ?.scrollIntoView({ behavior: 'smooth' })
//               }
//               sx={{ cursor: 'pointer' }}
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </Box>
//           </NoSsr>
//         </Box>
//       </Box>
//     );
//   };

//   const ProductsSection = () => (
//     <Box
//       id="2nd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//         // pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 10 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       <Typography
//         color="#A03811"
//         variant="h3"
//         sx={{
//           fontWeight: 700,
//           mb: { xs: 3, md: 2 },
//           // fontSize: { xs: '28px', md: '36px' },
//         }}
//       >
//         What We Sell
//       </Typography>

//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//         sx={{ maxWidth: 1400, width: '100%' }}
//       >
//         {/* Left Text */}
//         <Grid item xs={12} md={5.5}>
//           <Typography
//             color="text.primary"
//             fontWeight={700}
//             variant="h5"
//             sx={{
//               // fontSize: { xs: '20px', sm: '24px', md: '30px' },
//               // lineHeight: 1.3,
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//           >
//             <b style={{ textDecoration: 'none' }}>
//               Control-intensive, critical-to-the-application
//             </b>{' '}
//             Electronic Control Units (
//             <b style={{ textDecoration: 'none' }}>"ECUs"</b>) incorporating
//             novel, control technologies developed in-house.
//           </Typography>
//         </Grid>

//         {/* Right Product Cards */}
//         <Grid item xs={12} md={6.5}>
//           <Grid container spacing={3} justifyContent="center">
//             {[
//               { image: ControllersNew, label: 'Millions /yr' },
//               { image: EM, label: 'Soon' },
//             ].map((item, i) => (
//               <Grid item xs={12} sm={6} key={i}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: 1,
//                     p: 2,
//                     height: { xs: 230, sm: 260, md: 300, lg: 330 },
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={item.image}
//                     alt={item.label}
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'contain',
//                       borderRadius: 2,
//                     }}
//                   />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//       {/* Scroll Arrow */}
//       <Box mt={{ xs: 6, md: 2 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 28, sm: 36 }}
//             height={{ xs: 28, sm: 36 }}
//             onClick={() =>
//               document.getElementById('3rd-part')?.scrollIntoView({
//                 behavior: 'smooth',
//               })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const ThirdPart = () => (
//     <Box
//       id="3rd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//         pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 10 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         textAlign="center"
//         mb={4}
//         color="#A03811"
//         variant="h3"
//         fontWeight={700}
//         // sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
//       >
//         Our Markets
//       </Typography>

//       {/* <Grid
//         container
//         spacing={{ xs: 4, md: 6 }}
//         alignItems="center"
//         justifyContent="center"
//         width="100%"
//         maxWidth="1300px"
//         px={{ xs: 2, md: 0 }}
//       >
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             sx={{
//               // fontSize: { xs: '1.4rem', md: '2rem' },
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//           >
//             Our Markets are{' '}
//             <span style={{ textDecoration: 'none' }}>
//               leaders of large markets
//             </span>
//             , based in India, the US and the EU.
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6} display="flex" justifyContent="center">
//           <Grid container spacing={3} justifyContent="center">
//             {items.map((item, i) => (
//               <Grid
//                 item
//                 xs={6}
//                 sm={4}
//                 md={5}
//                 key={i}
//                 display="flex"
//                 justifyContent={{ xs: 'center', md: 'flex-end' }}
//               >
//                 <Card
//                   sx={{
//                     width: { xs: 140, sm: 160, md: 190 },
//                     height: { xs: 180, sm: 200, md: 220 },
//                     borderRadius: 4,
//                     cursor: 'pointer',
//                     overflow: 'hidden',
//                     backgroundColor: '#ffe3ccff',
//                     boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                     transition: 'transform 0.2s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-2px)',
//                       boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
//                     },
//                     display: 'flex',
//                     flexDirection: 'column',
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={item.img}
//                     alt={item.label}
//                     sx={{
//                       width: '100%',
//                       height: { xs: 100, sm: 120, md: 130 },
//                       objectFit: 'contain',
//                       mt: 1,
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       p: 1,
//                       textAlign: 'center',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       flexGrow: 1,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}
//                     >
//                       <b>{item.label}</b>
//                     </Typography>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid> */}
//       <Box>
//         <Box
//           maxWidth={'100%'}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           // marginTop="10px"
//           spacing={2}
//         >
//           <Grid
//             container
//             paddingX={3}
//             justifyContent="center"
//             spacing={4} // <-- this adds space between parent cards
//             width="100%"
//             // paddingY={6}
//           >
//             {/* Parent Card 1 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Mobility
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>

//             {/* Parent Card 2 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Industrial
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items2.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Grid item xs={12} md={6} paddingTop={1}>
//         <Typography
//           variant="h5"
//           fontWeight={700}
//           sx={{
//             // fontSize: { xs: '1.4rem', md: '2rem' },
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           Our customers are{' '}
//           <span style={{ textDecoration: 'none' }}>
//             leaders of large markets
//           </span>
//           , based in India, the US and the EU.
//         </Typography>
//       </Grid>

//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 1 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//       {/* Down Arrow */}
//       <Box mt={{ xs: 5, md: 0 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 30, sm: 40 }}
//             height={{ xs: 30, sm: 40 }}
//             onClick={() =>
//               document
//                 .getElementById('4th-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const FourthPart = () => (
//     <Box
//       id="4th-part"
//       sx={{
//         minHeight: '80vh', // <--- REMOVE forced height
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         // justifyContent: 'center',  // <--- REMOVE THIS
//         position: 'relative',
//         paddingTop: { xs: 10, md: 10 }, // <--- use padding instead for spacing
//       }}
//     >
//       <Box width="100%" maxWidth="1400px">
//         <Typography
//           color="#A03811"
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             textAlign: 'center',
//             mb: { xs: 3, md: 3 },
//             // fontSize: { xs: '28px', md: '36px' },
//           }}
//         >
//           Our Competitive Strengths
//         </Typography>

//         <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
//           {cards.map((item, index) => (
//             <Grid item xs={10} sm={4} md={2.4} key={index}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: 200,
//                   borderRadius: 4,
//                   cursor: 'pointer',
//                   backgroundColor: '#ffe3ccff',
//                   boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                   transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-3px)',
//                     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: 'bold',
//                     color: 'text.primary',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       {/* <Box display="flex" justifyContent="center" mt={3}>
//         <Link
//           href="/investors/other-information/ipo-offer-documents/drhp"
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Link>
//       </Box> */}
//       <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         {/* Show only on md+ */}
//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link>
//     </Box>
//   );

//   return (
//     <Box sx={{ bgcolor: 'alternate.light', width: 1 }}>
//       <Box>
//         <TopSection />
//       </Box>
//       <ProductsSection />
//       <ThirdPart />
//       <FourthPart />
//     </Box>
//   );
// };

// export default Hero;

// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Link,
//   useMediaQuery,
//   useTheme,
//   NoSsr,
// } from '@mui/material';
// import ControllersNew from '../../../../assets/applications/ControllersNew.png';
// import EM from '../../../../assets/applications/EM.png';

// import TeamIcon from '@mui/icons-material/Groups';
// import Committee from '@mui/icons-material/Group';
// import { useNavigate } from 'react-router-dom';
// import ICEProd from '../../../../assets/applications/ICEProd.png';
// import powerTool from '../../../../assets/applications/PT.png';
// import OPE from '../../../../assets/applications/OPE.png';
// import ACE from '../../../../assets/applications/ACE.png';
// import powergen from '../../../../assets/applications/Genset.png';
// import Evs from '../../../../assets/applications/e2WNew.png';
// import Container from 'components/Container';

// const cards = [
//   {
//     title: 'First-to-Market on Several Complex Technologies',
//     icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have been first-to-market on several of our key differentiated, control-intensive propositions, creating strong entry barriers for potential competitors.',
//   },
//   {
//     title: 'Agility at Scale',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We have complete ownership of product design, engineering, and manufacturing which enables us to move with agility not only during development but also in problem resolutions, appreciated by Our customers.',
//   },
//   {
//     title: 'Synergies Across Markets',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We actively look for synergies in adjacent markets to transfer our proven technical learnings and solutions which enhances technical performance and robustness of our offerings in new markets while leveraging consolidated procurement and economies of scale.',
//   },
//   {
//     title: 'Ability to build Fresh Technologies',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We consistently turn concepts into real-world, innovative solutions, drawing on the expertise of our highly qualified engineers and scientists. We boast of high concentration of talented engineers with >60% of them being educated from IITs/NITs/BITS.',
//   },
//   {
//     title: 'Quality & Delivery Record',
//     icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
//     description:
//       'We are committed to quality and reliability, especially in critical, control-intensive products where a failure results in the end-user’s equipment being rendered unusable. Our products undergo rigorous, validation protocols to ensure robust performance under demanding conditions and we proactively monitor their in-field performance, continuously improving on them. ',
//   },
// ];

// // const items = [
// //   { label: 'Mobility', img: Evs, link: '/products/small-evs' },
// //   { label: 'Industrial', img: powergen, link: '/products/generators' },
// // ];

// const items = [
//   {
//     label: 'Small Engine-Powered Vehicles',
//     img: ICEProd,
//     link: '/products/small-engines',
//   },
//   { label: 'Small Electric Vehicles', img: Evs, link: '/products/small-evs' },
//   {
//     label: 'Commercial Vehicles',
//     img: ACE,
//     link: '/products/commercial-vehicles',
//   },
// ];
// const items2 = [
//   { label: 'Generators', img: powergen, link: '/products/generators' },
//   { label: 'Power tools', img: powerTool, link: '/products/power-tools' },
//   {
//     label: 'Outdoor Powered Equipment',
//     img: OPE,
//     link: '/products/outdoor-powered-equipment',
//   },
// ];

// const Hero = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = React.useState(null);

//   const handleToggle = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const TopSection = () => {
//     const navigate = useNavigate();

//     return (
//       <Container>
//         <Box
//           // id="1st-part"
//           sx={{
//             minHeight: '80vh',
//             // pt: { xs: 6, md: 0 },
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'space-evenly',
//             // px: { xs: 2, md: 8 },
//             // pt: { xs: 6, md: 10 }, // Added gentle top spacing
//             // pb: { xs: 2, md: 0 }, // Prevents bottom gap on large screens
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: 1400,
//               display: 'flex',
//               flexDirection: { xs: 'column', md: 'row' },
//               justifyContent: 'space-between',
//               alignItems: { xs: 'center', md: 'center' },
//               gap: { xs: 8, md: 8 },
//             }}
//           >
//             <Box
//               sx={{
//                 flex: 1,
//                 textAlign: { xs: 'center', md: 'start' },
//                 paddingX: { xs: 4, md: 0 },
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 color="text.primary"
//                 sx={{ maxWidth: 500, fontWeight: 700 }}
//               >
//                 We are a{' '}
//                 {/* <b
//                 style={{
//                   color: '#A03811',
//                   textDecoration: 'underline',
//                 }}
//               > */}
//                 mid-sized, growing, profitable & capital-efficient
//                 {/* </b>{' '} */}
//                 <br />
//                 company from India
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3,
//                 width: '100%',
//                 maxWidth: 400,
//                 alignItems: 'center',
//               }}
//             >
//               <Card
//                 sx={{
//                   bgcolor: '#ffe3ccff',
//                   width: '100%',
//                   p: 4,
//                   borderRadius: 2,
//                   boxShadow: 1,
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => navigate('/investors/financial-information')}
//               >
//                 <Typography variant="body1" textAlign="center">
//                   Financial Performance &<br /> Investor Presentations
//                 </Typography>
//               </Card>
//             </Box>
//           </Box>
//           <Link
//             href="/investors/other-information/ipo-offer-documents/drhp"
//             underline="hover"
//             sx={{
//               paddingTop: { xs: 12, md: 10 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             <Typography
//               // mt={{ xs: 5, md: 0 }}
//               sx={{
//                 mt: { xs: 3, md: 0 },
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#A03811',
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//               }}
//             >
//               Draft Red Herring Prospectus and Audio-Visual
//             </Typography>
//           </Link>
//           <Box mt={{ xs: 5, md: 0 }}>
//             <NoSsr>
//               <Box
//                 component="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 width={{ xs: 30, sm: 40 }}
//                 height={{ xs: 30, sm: 40 }}
//                 onClick={() =>
//                   document
//                     .getElementById('2nd-part')
//                     ?.scrollIntoView({ behavior: 'smooth' })
//                 }
//                 sx={{ cursor: 'pointer' }}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </Box>
//             </NoSsr>
//           </Box>
//         </Box>
//       </Container>
//     );
//   };

//   const ProductsSection = () => (
//     <Box
//       id="2nd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '85vh', lg: '90vh' },
//         // pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 10 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 0 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       <Typography
//         color="#A03811"
//         variant="h3"
//         sx={{
//           fontWeight: 700,
//           mb: { xs: 3, md: 2 },
//           // fontSize: { xs: '28px', md: '36px' },
//         }}
//       >
//         What We Sell
//       </Typography>

//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//         sx={{ maxWidth: 1400, width: '100%' }}
//       >
//         <Grid item xs={12} md={5.5}>
//           <Typography
//             color="text.primary"
//             fontWeight={700}
//             variant="h5"
//             sx={{
//               // fontSize: { xs: '20px', sm: '24px', md: '30px' },
//               // lineHeight: 1.3,
//               textAlign: { xs: 'center', md: 'left' },
//             }}
//           >
//             <b style={{ textDecoration: 'none' }}>
//               Control-intensive, critical-to-the-application
//             </b>{' '}
//             Electronic Control Units (
//             <b style={{ textDecoration: 'none' }}>"ECUs"</b>) incorporating
//             novel, control technologies developed in-house.
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6.5}>
//           <Grid container spacing={3} justifyContent="center">
//             {[
//               { image: ControllersNew, label: 'Millions /yr' },
//               { image: EM, label: 'Soon' },
//             ].map((item, i) => (
//               <Grid item xs={12} sm={6} key={i}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: 1,
//                     p: 2,
//                     height: { xs: 230, sm: 260, md: 300, lg: 330 },
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={item.image}
//                     alt={item.label}
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'contain',
//                       borderRadius: 2,
//                     }}
//                   />
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link> */}
//       <Box mt={{ xs: 6, md: 5 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 28, sm: 36 }}
//             height={{ xs: 28, sm: 36 }}
//             onClick={() =>
//               document.getElementById('3rd-part')?.scrollIntoView({
//                 behavior: 'smooth',
//               })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const ThirdPart = () => (
//     <Box
//       id="3rd-part"
//       sx={{
//         minHeight: { xs: 'auto', md: '80vh', lg: '90vh' },
//         // pt: { xs: 6, md: 0 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         // px: { xs: 2, md: 8 },
//         pt: { xs: 10, md: 12 }, // Added gentle top spacing
//         // pb: { xs: 4, md: 6 }, // Prevents bottom gap on large screens
//         position: 'relative',
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         textAlign="center"
//         mb={4}
//         color="#A03811"
//         variant="h3"
//         fontWeight={700}
//         // sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
//       >
//         Our Markets
//       </Typography>
//       <Box>
//         <Box
//           maxWidth={'100%'}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           // marginTop="10px"
//           spacing={2}
//         >
//           <Grid
//             container
//             paddingX={3}
//             justifyContent="center"
//             spacing={4} // <-- this adds space between parent cards
//             width="100%"
//             // paddingY={6}
//           >
//             {/* Parent Card 1 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Mobility
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>

//             {/* Parent Card 2 */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   width: '100%',
//                   p: 1,
//                   borderRadius: 3,
//                   boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
//                   backgroundColor: '#ffffff',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: '#A03811',
//                     fontWeight: 'bold',
//                     mb: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Industrial
//                 </Typography>

//                 <Grid
//                   container
//                   spacing={2}
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   {items2.map((item, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                       <Box textAlign="center">
//                         <Card
//                           onClick={() => navigate(item.link)}
//                           sx={{
//                             height: 200,
//                             borderRadius: 4,
//                             cursor: 'pointer',
//                             overflow: 'hidden',
//                             backgroundColor: '#ffe3ccff',
//                             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                             transition:
//                               'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'translateY(-1px)',
//                               boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
//                             },
//                             display: 'flex',
//                             flexDirection: 'column',
//                           }}
//                         >
//                           <Box
//                             component="img"
//                             src={item.img}
//                             alt={item.label}
//                             sx={{
//                               width: '100%',
//                               height: 130,
//                               objectFit: 'contain',
//                               display: 'block',
//                               mt: 1,
//                             }}
//                           />

//                           <Box
//                             sx={{
//                               p: 1,
//                               pt: 0,
//                               textAlign: 'center',
//                               flexGrow: 1,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontWeight: '8px',
//                                 textTransform: 'capitalize',
//                                 color: 'text.primary',
//                               }}
//                             >
//                               <b>{item.label}</b>
//                             </Typography>
//                           </Box>
//                         </Card>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Grid item xs={12} md={6} paddingTop={1}>
//         <Typography
//           variant="h5"
//           fontWeight={700}
//           sx={{
//             // fontSize: { xs: '1.4rem', md: '2rem' },
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           Our customers are{' '}
//           <span style={{ textDecoration: 'none' }}>
//             leaders of large markets
//           </span>
//           , based in India, the US and the EU.
//         </Typography>
//       </Grid>

//       {/* <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 1 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link> */}
//       {/* Down Arrow */}
//       <Box mt={{ xs: 5, md: 0 }}>
//         <NoSsr>
//           <Box
//             component="svg"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             width={{ xs: 30, sm: 40 }}
//             height={{ xs: 30, sm: 40 }}
//             onClick={() =>
//               document
//                 .getElementById('4th-part')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//             sx={{ cursor: 'pointer' }}
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </Box>
//         </NoSsr>
//       </Box>
//     </Box>
//   );

//   const FourthPart = () => (
//     <Box
//       id="4th-part"
//       sx={{
//         minHeight: '80vh', // <--- REMOVE forced height
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center', // <--- REMOVE THIS
//         position: 'relative',
//         paddingTop: { xs: 10, md: 10 }, // <--- use padding instead for spacing
//       }}
//     >
//       <Box width="100%" maxWidth="1400px">
//         <Typography
//           color="#A03811"
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             textAlign: 'center',
//             mb: { xs: 3, md: 3 },
//             // fontSize: { xs: '28px', md: '36px' },
//           }}
//         >
//           Our Competitive Strengths
//         </Typography>

//         <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
//           {cards.map((item, index) => (
//             <Grid item xs={10} sm={4} md={2.4} key={index}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: 200,
//                   borderRadius: 4,
//                   cursor: 'pointer',
//                   backgroundColor: '#ffe3ccff',
//                   boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
//                   transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-3px)',
//                     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 16, md: 16 },
//                     fontWeight: 'bold',
//                     color: 'text.primary',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       {/* <Box display="flex" justifyContent="center" mt={3}>
//         <Link
//           href="/investors/other-information/ipo-offer-documents/drhp"
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Link>
//       </Box> */}
//       {/* <Box
//         display="flex"
//         width="50%"
//         mt={{ xs: 6, md: 3 }}
//         sx={{
//           flexDirection: { xs: 'column', sm: 'row' },
//           alignItems: 'center',
//           textAlign: 'center',
//           justifyContent: 'center',
//           maxWidth: 1400,
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() =>
//             document.getElementById('1st-part')?.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start', // ensures element goes to top
//               inline: 'nearest',
//             })
//           }
//         >
//           <Typography
//             mt={{ sx: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             Home
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>
//         <Link
//           underline="hover"
//           onClick={() =>
//             document
//               .getElementById('2nd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             mt={{ xs: 3, md: 0 }}
//             sx={{
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             {' '}
//             What We Sell
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('3rd-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Markets
//           </Typography>
//         </Link>

//         <Typography
//           sx={{
//             color: '#A03811',
//             mx: 1,
//             display: { xs: 'none', md: 'inline' },
//           }}
//         >
//           |
//         </Typography>

//         <Link
//           underline="hover"
//           sx={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//           onClick={() =>
//             document
//               .getElementById('4th-part')
//               ?.scrollIntoView({ behavior: 'smooth' })
//           }
//         >
//           <Typography
//             // mt={{ xs: 5, md: 0 }}
//             sx={{
//               mt: { xs: 3, md: 0 },
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#A03811',
//               cursor: 'pointer',
//               textDecoration: 'underline',
//             }}
//           >
//             Our Competitive Strengths
//           </Typography>
//         </Link>
//       </Box>
//       <Link
//         href="/investors/other-information/ipo-offer-documents/drhp"
//         underline="hover"
//         sx={{
//           paddingY: 1,
//           fontSize: 18,
//           fontWeight: 500,
//           color: '#A03811',
//           cursor: 'pointer',
//           textDecoration: 'underline',
//         }}
//       >
//         <Typography
//           // mt={{ xs: 5, md: 0 }}
//           sx={{
//             mt: { xs: 3, md: 0 },
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#A03811',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//           }}
//         >
//           Draft Red Herring Prospectus
//         </Typography>
//       </Link> */}
//     </Box>
//   );

//   return (
//     <Box sx={{ bgcolor: 'alternate.light', width: 1 }}>
//       <Box mt={{ md: -8 }}>
//         <TopSection />
//       </Box>
//       {/* <Box mt={3}>
//       <ProductsSection />
//       </Box>
//       <ThirdPart />
//       <FourthPart /> */}
//     </Box>
//   );
// };

// export default Hero;
