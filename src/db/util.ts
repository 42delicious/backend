export const expand = (columnCount: number, rowCount: number, startAt: number = 1) => {
  let index = startAt;
  return Array(rowCount)
    .fill(0)
    .map(
      () =>
        `(${Array(columnCount)
          .fill(0)
          .map(() => `$${index++}`)
          .join(', ')})`
    )
    .join(', ');
};

export const flatten = (arr: any[]): any[] => {
  return arr.reduce((prev, current) => {
    return [...prev, ...current];
  }, []);
};
