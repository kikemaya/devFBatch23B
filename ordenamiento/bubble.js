function bubbleSort(numeros) {
  const total = numeros.length

  for (let i = 0; i < total; i++) {
    for (let j = 0; j < total; j++) {
      if (numeros[j] > numeros[j + 1]) {
        [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]]
      }
    }
  }

  return numeros
}

console.log(bubbleSort([0, 14, 67, 4, 2, 1]));
