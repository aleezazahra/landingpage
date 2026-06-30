

const App= () => {
 

  return (
    <nav 
      className="w-full py-5 px-8 flex flex-row items-center justify-between transition-all duration-700 backdrop-blur-md sticky top-0 z-50 border-b "
    >
      <div className="flex flex-col group">
        <h1 
          style={{ fontFamily: "Gwendolyn, cursive" }} 
          className="text-5xl font-bold transition-colors duration-700 "
        
        >
          Pomodoro timer
        </h1>
      
       
      </div>
      
      


      <div className="flex items-center gap-4">

  <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-sm">
    <div 
      className="w-2 h-2 rounded-full animate-pulse" 
    
    />
    <span className="text-xs font-bold uppercase tracking-widest opacity-70">
     
    </span>
  </div>

 

</div>
    </nav>
  );
};

export default App;