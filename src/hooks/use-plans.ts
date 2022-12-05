import useSWR from 'swr';
import fetcher from '../services/fetcher';
import { Plan } from '../typing';

export default function () {
  const { data, error } = useSWR<Plan[]>(
    'https://stripe-serverless.vercel.app/api/plans',
    fetcher,
  );

  return {
    data,
    isLoading: !data && !error,
    error,
  };
}
