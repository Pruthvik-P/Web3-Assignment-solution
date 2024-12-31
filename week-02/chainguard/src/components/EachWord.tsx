type prop ={
  word: string
}

export function EachWord({word}:prop) {
return(
  <div className="bg-slate-900 px-10 py-2 rounded hover:bg-slate-800">
    <div className="flex text-slate-400 rounded text-lg font-sans font-medium"> 
      <p>{word}</p>
    </div>

  </div>
)
}