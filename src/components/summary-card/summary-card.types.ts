import React from 'react';

export interface SummaryProps {
  title: string;
  value: string;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  additionalFeatures: Array<{
    title: string;
    value: string;
  }>;
}
