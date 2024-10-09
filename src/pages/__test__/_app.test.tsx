// import { render, screen } from '@testing-library/react';
// import MyApp from '../_app';
// import { Provider } from 'react-redux';
// import Header from '../../component/header';
// import store from '../../store/store';

// jest.mock('react-redux', () => ({
//   Provider: jest.fn(({ children }) => <div>{children}</div>),
// }));

// jest.mock('../../component/header', () => jest.fn(() => <div>Mocked Header</div>));

// describe('MyApp', () => {
//   it('renders the Provider with the store', () => {
//     const Component = jest.fn(() => <div>Mocked Component</div>);
//     const pageProps = {};

//     render(<MyApp Component={Component} pageProps={pageProps} />);

//     expect(Provider).toHaveBeenCalledWith({ store, children: expect.anything() }, {});

//     expect(screen.getByText('Mocked Header')).toHaveBeenCalled();

//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//   });
// });
