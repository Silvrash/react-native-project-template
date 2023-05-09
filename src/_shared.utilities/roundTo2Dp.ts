export const roundTo2Dp = (val: number) => (+(Math.round((val + 'e+2') as any) + 'e-2')).toFixed(2);
