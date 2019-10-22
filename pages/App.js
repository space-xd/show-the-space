
import AppLayout from '../components/AppLayout'
import dynamic from 'next/dynamic'

const Globe = dynamic(
  () => import('../components/Globe'),
  { ssr: false }
)


const App = () => (
  <AppLayout title="App">
    <Globe></Globe>
  </AppLayout>
)

export default App
