import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, items }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items.find((i) => i.href === activeLink);

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? 'primary' : 'text.primary'}
            sx={{
              color: '#000000',
              '&:hover': {
                color:
                  // activeLink === p.href
                  '#000000',
                // : theme.palette.text.primary, // or any custom color like '#f0f0f0'
              },
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0}}>
          <Grid container spacing={1}>
            {title ==="Products"? (
          <Typography variant="h6" paddingX={1} color="primary" fontWeight={700}>
            Mobility
          </Typography>
           ) : null}
            {items.map((p, i) => (
               i < 3 ? (
              <Grid item key={i} xs={12}>
                <Button
                  size="large"
                  component="a"
                  href={p.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                    '&:hover': {
                      backgroundColor:"#A03811",
                      color:
                        activeLink === p.href
                          ? '#000000'
                          : theme.palette.text.primary,
                      fontWeight: 900, // 👈 bold on hover
                    },
                  }}
                >
                  <Typography sx={{ color: '#000000' }}>{p.title}</Typography>

                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'#A03811'}
                      marginLeft={2}
                      
                    >
                      <Typography
                        variant={'caption'}
                        sx={{ color: 'common.white', lineHeight: 1 }}
                      >
                        NEW
                      </Typography>
                    </Box>
                  )}
                </Button>
              </Grid>
                ) : null
            ))}
            {title ==="Products"? (
          <Typography variant="h6" paddingX={1} color="primary" fontWeight={700}>
            Industrial
          </Typography>
           ) : null}
           {items.map((p, i) => (
               i > 2 ? (
              <Grid item key={i} xs={12}>
                <Button
                  size="large"
                  component="a"
                  href={p.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                    '&:hover': {
                      backgroundColor:"#A03811",
                      color:
                        activeLink === p.href
                          ? '#000000'
                          : theme.palette.text.primary,
                      fontWeight: 900, // 👈 bold on hover
                    },
                  }}
                >
                  <Typography sx={{ color: '#000000' }}>{p.title}</Typography>

                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'#A03811'}
                      marginLeft={2}
                      
                    >
                      <Typography
                        variant={'caption'}
                        sx={{ color: 'common.white', lineHeight: 1 }}
                      >
                        NEW
                      </Typography>
                    </Box>
                  )}
                </Button>
              </Grid>
                ) : null
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
