import { EFeature, EPlanFrequency, features } from '../types';

export const formatCurrency = (value: number): string =>
  Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 0,
  }).format(value);

export const getAbbreviatedFrequency = (frequency: EPlanFrequency) =>
  frequency === EPlanFrequency.Monthly ? 'mo' : 'yr';

export const formatCurrencyWithFrequency = (
  value: number,
  frequency: EPlanFrequency,
): string => {
  const formattedCurrency = formatCurrency(value);

  return `${formattedCurrency}/${getAbbreviatedFrequency(frequency)}`;
};

export const getValueWithFeatures = (
  value: number,
  featuresSelected: EFeature[],
  frequency: EPlanFrequency,
) =>
  formatCurrencyWithFrequency(
    featuresSelected.reduce((prev, current) => {
      return prev + features[current][frequency];
    }, value / 100),
    frequency,
  );
