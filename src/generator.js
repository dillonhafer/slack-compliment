module.exports = {
  randomIndex(maxLength, existingIndex) {
    let newIndex = Math.floor(Math.random() * (maxLength - 0)) + 0;
    if (newIndex === existingIndex) {
      return module.exports.randomIndex(maxLength, existingIndex)
    }
    return newIndex;
  }
}
