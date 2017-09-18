export function getFirstFromObject(object) {
  const keys = Object.keys(object);
  return object[keys[0]];
}

