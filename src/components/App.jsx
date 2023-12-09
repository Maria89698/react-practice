import { Header } from 'components/Header';
// import painting from './components/Painting/paintingJSON.json'
// import { PaintingList } from "./components/PaintingList/PaintingList";
import { Recipe } from "./recipe/Recipe";
import recipies from "../recipies.json";

export function App() {
  return (
    <>
      <Header>
        <nav>Навігація</nav>
      </Header>
      {/* <PaintingList painting={painting}/> */}
      <Recipe recipe={recipies}/>
    </>
    
  );
}