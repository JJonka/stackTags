export const sortByCount = (
  arr: { name: string; count: number }[],
  sortDirection: "asc" | "desc"
) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    const condition = () =>
      sortDirection === "asc"
        ? arr[j]["count"] > current["count"]
        : arr[j]["count"] < current["count"];

    while (j >= 0 && condition()) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

export const sortByName = (
  arr: { name: string; count: number }[],
  sortDirection: "asc" | "desc"
) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    const isGreater = () => arr[j]["name"].localeCompare(current["name"]);
    const condition = () =>
      sortDirection === "asc" ? isGreater() === 1 : isGreater() === -1;

    while (j >= 0 && condition()) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};
