import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Landing from './Landing';
import ToolBox from './ToolBox';
export default function App() {
  // const [createWalletActive, setCreateWalletActive] = useState<boolean>(false)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Landing />} />
        <Route path='/create-wallet' element={<ToolBox />} />
      </Route>
    </Routes>
  );
}
