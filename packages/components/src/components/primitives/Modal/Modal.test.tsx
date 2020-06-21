import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './';

describe('Modal', () => {
  it('should render modal when isOpen is true', () => {
    render(<Modal isOpen={true}>foo</Modal>);
    const modal = screen.getByText('foo');
    expect(modal).toBeInTheDocument();
  });
  it('should render close button', () => {
    render(<Modal isOpen closeButton />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  it('should render children', () => {
    render(<Modal isOpen={true}>content</Modal>);
    const body = screen.getByText('content');
    expect(body).toBeInTheDocument();
  });
  it('should close modal when click on close icon', () => {
    render(
      <Modal isOpen={true} closeButton={true}>
        content
      </Modal>
    );
    const icon = screen.getByTestId('icon');
    const modal = screen.getByText('content');
    fireEvent.click(icon);
    expect(modal).not.toBeInTheDocument();
  });
  it('should not render modal by default', () => {
    render(<Modal>content</Modal>);
    const modal = screen.queryByText('content');
    expect(modal).not.toBeInTheDocument();
  });
});
