import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavItem = ({ title, id, items, colorInvert = false }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items.find((i) => i.href === activeLink);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => handleClick(e, id)}
      >
        <Typography
          // fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 700}
          color={linkColor}
          variant="h6"
        >
          {title}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: theme.spacing(1 / 4),
            width: 16,
            height: 16,
            transform: openedPopoverId === id ? 'rotate(180deg)' : 'none',
            color: linkColor,
          }}
        />
      </Box>
      <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '.MuiPaper-root': {
            maxWidth: items.length > 12 ? 400 : 320,
            padding: 2,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `#ffd4b1 3px solid`,
            overflowY: 'auto', // ✅ allow content scroll if needed
            scrollbarWidth: 'none', // ✅ Firefox
            '&::-webkit-scrollbar': {
              // ✅ Chrome / Edge
              display: 'none',
            },
          },
        }}
      >
        <Grid container spacing={0.5}>
          {title === 'Products' ? (
            <Typography
              variant="h6"
              paddingX={1}
              color="primary"
              fontWeight={700}
            >
              Mobility
            </Typography>
          ) : null}
          {items.map((p, i) =>
            i < 3 ? (
              <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
                <Button
                  component={'a'}
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
                      backgroundColor: '#ffd4b1',
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant={'h8'}
                      fontWeight={700}
                      marginTop={0}
                      marginBotton={0}
                    >
                      {p.title}
                    </Typography>
                    <br />
                    <Typography variant={'subtitle2'} padding={0} marginTop={0}>
                      {p.subtitle}
                    </Typography>
                  </Box>
                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'primary.dark'}
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
            ) : null,
          )}
        </Grid>
        <Grid container spacing={0.5}>
          {title === 'Products' ? (
            <Typography
              variant="h6"
              paddingX={0.5}
              mt={2}
              color="primary"
              fontWeight={700}
            >
              Industrial
            </Typography>
          ) : null}
          {items.map((p, i) =>
            i > 2 ? (
              <Grid item key={i} xs={items.length > 12 ? 6 : 12}>
                <Button
                  component={'a'}
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
                      backgroundColor: '#ffd4b1',
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant={'h8'}
                      fontWeight={700}
                      marginTop={0}
                      marginBotton={0}
                    >
                      {p.title}
                    </Typography>
                    <br />
                    <Typography variant={'subtitle2'} padding={0} marginTop={0}>
                      {p.subtitle}
                    </Typography>
                  </Box>
                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'primary.dark'}
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
            ) : null,
          )}
        </Grid>
      </Popover>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
