
import { Provider } from 'react-redux';
import { Navigation } from './pages/Navigation';
import { store } from './redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


