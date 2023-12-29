/**
 * @param {string} tag name of a tag used in the project 
 * @returns if it is a tag of a tagsColor.jsx returns a color of that tag

 */
export const getTagColor = (tag) => {
  tag = String(tag).toLowerCase();
  switch (tag) {
    case "react":
      return "blue"; //blue
    case "tailwind":
      return "lightblue"; //lightblue
    case "html/css":
      return "red"; //red
    case "unity":
    case "framer motion":
      return "gray"; //gray
    case "javascript":
      return "yellow"; //yellow
    case "api":
      return "green"; //green
    case "c#":
    case "responsive":
      return "purple"; //purple

    default:
      return "white"; //white
  }
};
