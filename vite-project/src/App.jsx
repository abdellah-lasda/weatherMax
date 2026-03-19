import SearchBaree from "./components/SearchBaree"
import myBackground from "./assets/bg.jpg"
function App() {
  

  return (
  <div className=" py-4 flex flex-col gap-3 px-4 md:px-[10%] lg:px-[12%] bg-cover w-full min-h-screen bg-center bg-no-repeat bg-black/20 bg-blend-overlay"  style={{backgroundImage:`url(${myBackground})`}} >
      <h1 className="text-white text-center font-bold text-4xl" >
        Weather<span className="bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent" >Max</span>
      </h1>
      <p className="px-4 text-center text-white/70 line-clamp-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro atque pariatur ipsam obcaecati excepturi. Asperiores saepe, pariatur sint dolorum aliquid corrupti veniam. A voluptas esse iste hic nemo fuga mollitia.</p>
      
      
      <SearchBaree />
      

  </div>
  )
}

export default App
