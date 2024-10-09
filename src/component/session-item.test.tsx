import { render, screen } from '@testing-library/react';
import SessionItem from './session-item';
import { StaticImageData } from 'next/image';

// jest.mock('antd', () => ({
//   Card: jest.fn(({ children }) => <div>{children}</div>),
//   Image: jest.fn(({ alt, src }) => <img alt={alt} src={src} />),
// }));

jest.mock('next/link', () => {
  return ({ children }) => {
    return <div>{children}</div>;
  };
});

describe('SessionItem', () => {
  const mockSession = {
    id: 'session1',
    title: 'Test Session',
    summary: 'This is a test session summary.',
    image: { src: 'test-image.jpg' } as StaticImageData,
  };

  it('renders the session item correctly', () => {
    render(<SessionItem session={mockSession} />);

    expect(screen.getByText(mockSession.title)).toBeDefined();
    expect(screen.getByText(mockSession.summary)).toBeDefined();

    // const image = screen.getByAltText(mockSession.image.src);
    // expect(image).toBeInTheDocument();
    // expect(image).toHaveAttribute('src', mockSession.image.src);
  });

  it('renders the correct link', () => {   
    render(<SessionItem session={mockSession} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `sessions/${mockSession.id}`);
  });
});
