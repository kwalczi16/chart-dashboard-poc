// Tremor chartUtils [v1.0.0]
export const AvailableChartColors = [
  'blue',
  'cyan',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
] as const;

export type AvailableChartColorsKeys = (typeof AvailableChartColors)[number];

export function getColorClassName(
  color: AvailableChartColorsKeys,
  prefix: 'bg' | 'fill' | 'stroke' | 'text',
): string {
  const colorMap: Record<string, Record<AvailableChartColorsKeys, string>> = {
    bg: {
      blue: 'bg-blue-500',
      cyan: 'bg-cyan-500',
      indigo: 'bg-indigo-500',
      violet: 'bg-violet-500',
      purple: 'bg-purple-500',
      fuchsia: 'bg-fuchsia-500',
      pink: 'bg-pink-500',
      rose: 'bg-rose-500',
      red: 'bg-red-500',
      orange: 'bg-orange-500',
      yellow: 'bg-yellow-500',
      lime: 'bg-lime-500',
      green: 'bg-green-500',
      emerald: 'bg-emerald-500',
      teal: 'bg-teal-500',
    },
    fill: {
      blue: 'fill-blue-500',
      cyan: 'fill-cyan-500',
      indigo: 'fill-indigo-500',
      violet: 'fill-violet-500',
      purple: 'fill-purple-500',
      fuchsia: 'fill-fuchsia-500',
      pink: 'fill-pink-500',
      rose: 'fill-rose-500',
      red: 'fill-red-500',
      orange: 'fill-orange-500',
      yellow: 'fill-yellow-500',
      lime: 'fill-lime-500',
      green: 'fill-green-500',
      emerald: 'fill-emerald-500',
      teal: 'fill-teal-500',
    },
    stroke: {
      blue: 'stroke-blue-500',
      cyan: 'stroke-cyan-500',
      indigo: 'stroke-indigo-500',
      violet: 'stroke-violet-500',
      purple: 'stroke-purple-500',
      fuchsia: 'stroke-fuchsia-500',
      pink: 'stroke-pink-500',
      rose: 'stroke-rose-500',
      red: 'stroke-red-500',
      orange: 'stroke-orange-500',
      yellow: 'stroke-yellow-500',
      lime: 'stroke-lime-500',
      green: 'stroke-green-500',
      emerald: 'stroke-emerald-500',
      teal: 'stroke-teal-500',
    },
    text: {
      blue: 'text-blue-500',
      cyan: 'text-cyan-500',
      indigo: 'text-indigo-500',
      violet: 'text-violet-500',
      purple: 'text-purple-500',
      fuchsia: 'text-fuchsia-500',
      pink: 'text-pink-500',
      rose: 'text-rose-500',
      red: 'text-red-500',
      orange: 'text-orange-500',
      yellow: 'text-yellow-500',
      lime: 'text-lime-500',
      green: 'text-green-500',
      emerald: 'text-emerald-500',
      teal: 'text-teal-500',
    },
  };

  return colorMap[prefix]?.[color] ?? '';
}

export function constructCategoryColors(
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> {
  const categoryColors = new Map<string, AvailableChartColorsKeys>();
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length]);
  });
  return categoryColors;
}

export function hasOnlyOneValueForKey(
  data: Record<string, unknown>[],
  key: string,
): boolean {
  let count = 0;
  for (const row of data) {
    if (row[key] !== undefined && row[key] !== null) {
      count++;
      if (count > 1) return false;
    }
  }
  return count === 1;
}

export function getYAxisDomain(
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined,
): [string | number, string | number] {
  const domain: [string | number, string | number] = ['auto', 'auto'];

  if (minValue !== undefined) {
    domain[0] = minValue;
  } else if (autoMinValue) {
    domain[0] = 0;
  }

  if (maxValue !== undefined) {
    domain[1] = maxValue;
  }

  return domain;
}
