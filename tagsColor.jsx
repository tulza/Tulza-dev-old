export const getTagColor = (tag) => {
  tag = String(tag).toLowerCase();
  switch (tag) {
    case "react":
      return "blue";
    default:
      return "white";
  }
};
