import { Box } from '@chakra-ui/layout'
import Topbar from './Topbar/Topbar'
import MainSection from './MainSection/MainSection'

function App() {

  return (
    <Box height={"100vh"}>
      <Topbar></Topbar>
      <MainSection></MainSection>
    </Box>
  )
}

export default App
