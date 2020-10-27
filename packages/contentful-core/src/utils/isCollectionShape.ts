export const isCollectionShape = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  if (Object.keys(object).length !== 1) {
    return false;
  }

  const collectionKey = Object.keys(object)[0];

  if (!collectionKey.match(/\w+Collection/)) {
    return false;
  }

  if (!object[collectionKey].items) {
    return false;
  }

  if (!Array.isArray(object[collectionKey].items)) {
    return false;
  }

  return true;
};
