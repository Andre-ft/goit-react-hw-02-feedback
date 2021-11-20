function changePropName(propName) {
  return [...propName]
    .map(char => {
      return char === char.toUpperCase() ? ` ${char.toLowerCase()}` : char;
    })
    .join('');
}

export default changePropName;
