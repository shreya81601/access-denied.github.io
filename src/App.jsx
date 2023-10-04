import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import DisclaimerModal from './components/modal/DisclaimerModal';
import Characters from './features/characters/Characters';
import Intro from './features/intro/Intro';
import Salutation from './features/salutation/Salutation';
import Story from './features/story/Story';
import Gallery from "./features/gallery/Gallery";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
          <Route path="/salutation" element={<Salutation/>} />
          <Route path="/characters" element={<Characters/>} />
          <Route path="/story/:id" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<>No Page Found </>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
