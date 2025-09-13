// import { DogPhoto } from "./components/dog-photo/dog-photo.tsx";
import './App.css'



function App() {
  // const [title, setTitle] = useState('choose the dog');
  // const dispatch = useAppDispatch();




  // const getAllBreeds = useCallback(() => {
  //   dispatch(breedsActions.getAll())
  // }, [dispatch])
  //
  // // fetch on load
  // useEffect(() => {
  //   getAllBreeds()
  // }, [getAllBreeds])
  //
  // const onBreedClick = useCallback((breed: string) => {
  //   setTitle(breed);
  //   dispatch(imagesActions.getImageByBreed(breed))
  // }, [dispatch])

  return (<h1>App component</h1>)
}

export default App

// function shuffle<T>(array: T[]): T[] {
//   const result = array.slice();
//   for (let i = result.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [result[i], result[j]] = [result[j], result[i]];
//   }
//   return result;
// }

