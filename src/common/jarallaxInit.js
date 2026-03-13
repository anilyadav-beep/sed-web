export const jarallaxInit = async () => {
  const jarallaxElems = document.querySelectorAll('.jarallax');
  if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
    return;
  }

  const { jarallax } = await import('jarallax');
  jarallax(jarallaxElems, { speed: 0.2 });
};