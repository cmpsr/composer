

export const normalizeValue = (value: number, min: number, max: number) => {
  return (value - min) / (max - min)
}
