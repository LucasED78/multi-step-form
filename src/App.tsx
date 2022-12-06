import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import StepperSidebar from './components/stepper-sidebar';
import Wrapper from './components/wrapper';
import { GlobalStyles } from './styles';
import { theme } from './theme';
import Form from './components/form';
import withContext from './hocs/with-context';
import {
  StepperContextProvider,
  useStepperContext,
} from './context/stepper-context';
import { PlanContextProvider } from './context/plan-context';

const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const { step } = useStepperContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Wrapper
        sidebarComponent={
          <StepperSidebar
            step={step}
            steps={[
              'Your info',
              'Select plan',
              'Add-ons',
              'Summary',
              'Confirmation',
            ]}
            variant={isMobile ? 'horizontal' : 'vertical'}
          />
        }
      >
        <PlanContextProvider>
          <Form />
        </PlanContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default withContext(StepperContextProvider, App);
