import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './';

describe('Modal', () => {
  it('should render modal when isOpen is true', () => {
    render(<Modal isOpen>foo</Modal>);
    screen.getByTestId('modal');
  });
  it('should not render modal when isOpen is true', () => {
    render(<Modal isOpen={false}>foo</Modal>);
    const component = screen.queryByTestId('modal');
    expect(component).not.toBeInTheDocument();
  });
  it('should render close button', () => {
    render(<Modal isOpen closeButton />);
    screen.getByTestId('close-button');
  });
  it('should render children', () => {
    render(<Modal isOpen>content</Modal>);
    screen.getByText('content');
  });
  it('should close modal when on close clicked', () => {
    render(
      <Modal isOpen closeButton>
        content
      </Modal>
    );
    const icon = screen.getByTestId('close-button');
    const modal = screen.getByTestId('modal');
    fireEvent.click(icon);
    expect(modal).not.toBeInTheDocument();
  });
  it('should render custom CSS class', () => {
    render(
      <Modal isOpen customCss="customCss">
        content
      </Modal>
    );
    const modal = screen.getByText('content');
    expect(modal).toHaveClass('custom');
  });
  it('should render custom CSS class on overlay', () => {
    render(
      <Modal isOpen overlayCustomCss="overlayCustomCss">
        content
      </Modal>
    );
    const overlay = screen.getByText('content').parentNode;
    expect(overlay).toHaveClass('custom');
  });
});
