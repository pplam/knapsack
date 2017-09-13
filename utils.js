exports.dotProduct = function dotProduct(v1, v2) {
  return v1.reduce((sum, val, idx) => {
    return sum + val * v2[idx]
  }, 0)
}
