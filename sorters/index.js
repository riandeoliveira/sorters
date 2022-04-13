// Bubble sort

// Melhor caso: O(n²)
// Pior caso: O(n²)

const useBubbleSort = (x) => {
  for (let n = 1; n <= x.length; n++) {
    for (let i = 0; i <= x.length - 2; i++) {
      if (x[i] > x[i + 1]) {
        let aux = x[i];
        x[i] = x[i + 1];
        x[i + 1] = aux;
      }
    }
  }

  return x;
};

// Bubble sort melhorado

// Melhor caso: O(n)
// Pior caso: O(n²)

const useBetterBubbleSort = (x) => {
  let n = 1;
  let replace = 1;

  while (n <= 5 && replace === 1) {
    replace = 0;

    for (let i = 0; i <= x.length - 2; i++) {
      if (x[i] < x[i + 1]) {
        replace = 1;
        let aux = [i];
        x[i] = x[i + 1];
        x[i + 1] = aux;
      }
    }

    n = n + 1;
  }

  return x;
};

// Insertion sort

// Melhor caso: O(n - 1)
// Pior caso: O(n²)

const useInsertionSort = (x) => {
  for (let i = 1; i <= x.length; i++) {
    let elected = x[i];
    let j = i - 1;

    while (j >= 0 && x[j] > elected) {
      x[j + 1] = x[j];
      j = j - 1;
    }
    x[j + 1] = elected;
  }

  return x;
};

// Selection sort

// Melhor caso: O(n²)
// Pior caso: O(n²)

const useSelectionSort = (x) => {
  for (let i = 0; i <= 3; i++) {
    let elected = x[i];
    let smaller = x[i + 1];
    let pos = i + 1;

    for (let j = i + 2; j <= 4; j++) {
      if (x[j] < smaller) {
        smaller = x[j];
        pos = j;
      }
    }

    if (smaller < elected) {
      x[i] = x[pos];
      x[pos] = elected;
    }
  }

  return x;
};

module.exports = {
  useBubbleSort,
  useBetterBubbleSort,
  useInsertionSort,
  useSelectionSort
};
