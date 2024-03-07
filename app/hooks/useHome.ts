'use client';

import { useQuery } from '@tanstack/react-query';
import { getNewTour, getTopTour } from 'api/tours';

export const useHome = () => {
  const newTour = useQuery({
    queryFn: getNewTour,
    queryKey: ['new-tour'],
    refetchOnWindowFocus: false,
    retry: false,
  });
  const topTour = useQuery({
    queryFn: getTopTour,
    queryKey: ['top-tour'],
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    newTour,
    topTour,
  };
};
