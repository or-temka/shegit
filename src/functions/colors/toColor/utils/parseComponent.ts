export const parseComponent = (component: string | Function): number => {
  let actual = component;
  if (typeof component === 'function') actual = component();

  const num = Number(actual);
  return Number.isNaN(num) ? 0 : num;
};
