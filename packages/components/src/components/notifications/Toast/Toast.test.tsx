import React from 'react';
import TestRendered from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { ToastWrapper } from './Toast';
import { variants, ToastOptions, statuses } from './types';
import { Button } from '@chakra-ui/react';

describe('Toast component', () => {
  const wrapperId = 'composer-toast-box-wrapper';

  describe('Content', () => {
    const toastOptions: ToastOptions = {
      title: 'test-title',
      description: 'test-description',
      isClosable: true,
      status: 'success',
      variant: 'top-accent-toast',
    };

    it('Should render', () => {
      renderWithProviders(<ToastWrapper toastOptions={toastOptions} />);
      screen.getByTestId(wrapperId);
    });

    it('Should render the right content after trigger the toast', () => {
      const text = 'show toast';
      renderWithProviders(
        <ToastWrapper toastOptions={toastOptions}>
          <Button data-testid="testId">{text}</Button>
        </ToastWrapper>
      );

      const triggerComponent = screen.getByText(text);
      expect(triggerComponent);

      triggerComponent.click();
      expect(screen.getByTestId(wrapperId));
      expect(screen.getByText('test-title'));
      expect(screen.getByText('test-description'));
      expect(screen.getByLabelText('Close'));
    });
  });

  describe('Variant and Status', () => {
    variants.forEach((variant) => {
      statuses.forEach((status) => {
        it(`Should render with the ${variant} variant and ${status} status`, () => {
          const toastInstance = TestRendered.create(
            <ToastWrapper toastOptions={{ status, variant }} />
          ).root;

          expect(toastInstance.props.toastOptions.variant).toBe(variant);
        });
      });
    });
  });
});
