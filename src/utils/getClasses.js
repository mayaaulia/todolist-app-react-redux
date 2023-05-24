export const getClasses = (classes) =>
  classes
    //   filter out classes if any item empty
    .filter((item) => item !== '')
    // join with space
    .join(' ')
    // trim it out if any space in the begining or in the end
    .trim();
