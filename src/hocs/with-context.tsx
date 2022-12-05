import React from 'react';

export default (
  ContextProvider: ({ children }: { children: React.ReactNode }) => JSX.Element,
  Component: () => JSX.Element,
) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render(): React.ReactNode {
      return (
        <ContextProvider>
          <Component />
        </ContextProvider>
      );
    }
  };
};
