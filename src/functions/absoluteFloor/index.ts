export function absoluteFloor(value: number): number | undefined {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  return Math.floor(Math.abs(value));
}
