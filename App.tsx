
import { Navigation } from './pages/Navigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


