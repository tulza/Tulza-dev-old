export const highlightBox = {
  hovered: { height: "25%" },
};

export const projectBoxPopUp = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 },
};

export const animateChar = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: 20, opacity: 0 },
};

export const contactsIconVar = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 },
};

export const slideUpText = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 40, opacity: 1 },
};

/**
 * @param {number} x
 * @param {number} y
 */
export const customSlideAnim = (x, y) => {
  x = x ? x : 0;
  y = y ? y : 0;
  return {
    visible: { x: 0, y: 0, opacity: 1 },
    hidden: { x: x, y: y, opacity: 0 },
  };
};
