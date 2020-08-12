export const getStyles = (place, backgroundColor) => {
  const color = backgroundColor.substring(2);

  const placeClasses = {
    top: `bottom-0 left-0 mb-0-063 h-1 w-4 before:border-t${color} before:border-r-transparent before:border-l-transparent before:border-t-10 before:border-r-8 before:border-b-0 before:border-l-8`,
    bottom: `top-0 left-0 -mt-1 h-1 w-4 before:border-t-transparent before:border-r-transparent before:border-b${color} before:border-l-transparent before:border-t-0 before:border-r-8 before:border-b-10 before:border-l-8`,
    right: `left-0 -ml-1 h-4 w-1 before:border-t-transparent before:border-r${color} before:border-b-transparent before:border-l-transparent before:border-t-8 before:border-r-10 before:border-b-8 before:border-l-0`,
    left: `right-0 mr-0-063 h-4 w-1 before:border-t-transparent before:border-r-transparent before:border-b-transparent before:border-l${color} before:border-t-8 before:border-r-0 before:border-b-8 before:border-l-10`,
  };

  return {
    defaultColor: `${backgroundColor} px-5 py-1 text-white rounded-sm`,
    arrowClasses: `before:empty-content before:m-auto before:block before:w-0 before:h-0 before:border-solid ${placeClasses[place]}`,
  };
};
