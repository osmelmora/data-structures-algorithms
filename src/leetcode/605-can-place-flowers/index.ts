export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    const current = flowerbed[i];
    const isPrevEmpty = !flowerbed[i - 1];
    const isNextEmpty = !flowerbed[i + 1];

    if (current === 0 && isPrevEmpty && isNextEmpty) {
      if (--n === 0) return true;
    }
  }

  return false;
}
