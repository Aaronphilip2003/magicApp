import { useState } from "react";
function App() {

  const [count,setCount]=useState(0);
  const [youtubeURL, setYoutubeURL] = useState('');

  const addButton=()=>{
    setCount(count+1)
  }

  const subButton=()=>{
    setCount(count-1)
  }

  const magBut=()=>{
    setYoutubeURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")
  }

  if (youtubeURL) {
    window.location.href = youtubeURL;
    return null;
  }

  return (
    <div>
      <div class="mx-auto my-auto text-center">
      <div class="bg-gray-200 p-4">
        {count}
      </div>
    </div>
    <div class="h-64 flex items-center justify-center">
  <div class="flex justify-between text-center">
    <button className="btn btn-primary mx-2 font-bold" onClick={addButton}>+</button>
    <button className="btn btn-secondary mx-2 font-bold" onClick={subButton}>-</button>
    <br/>
    <button className="btn btn-secondary mx-2 font-bold" onClick={magBut}>Magic Button</button>
  </div>
</div>


  </div>
  
  );
}

export default App;
