module.exports = {
  randomIndex(maxLength, existingIndex) {
    let newIndex = Math.floor(Math.random() * (maxLength - 0)) + 0;
    if (newIndex === existingIndex) {
      return module.exports.randomIndex(maxLength, existingIndex)
    }
    return newIndex;
  },

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
}
