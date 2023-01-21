const shipFactory = (length) => {
  let hits = 0;
  const hit = () => (hits += 1);

  const isSunk = () => {
    if (length <= hits) return true;
    return false;
  };
  return { length, hits, isSunk, hit };
};

module.exports = shipFactory;
