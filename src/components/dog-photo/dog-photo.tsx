import './dog-photo.css'

export const DogPhoto = () => {
  const images: string[] = [''];
  return images.map(item => <img className="img" alt="" src={item}/>)
}

