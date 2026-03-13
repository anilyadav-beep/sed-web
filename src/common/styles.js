export const styles = (bgImage, theme) => ({
  position: 'absolute',
  objectFit: 'cover',
  fontFamily: 'object-fit: cover;',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${bgImage})`,
  filter: theme?.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
});

export const scrollToElement = (id) => {
  setTimeout(() => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    }
  }, 0);
};