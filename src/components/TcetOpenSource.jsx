function TcetOpenSource() {
  
    return ( 
        <div className="flex flex-col sm:flex-row sm:justify-around border-t-2 border-gray-100 p-6 bg-gradient-to-t from-purple-200 ...">
            <div className="flex flex-col items-center sm:items-start">
                <div><img className="h-24 object-contain" src={"../../imgs/tcet_os.png"} alt="tcet_os" /></div>
                <div className="font-bold pt-2 text-4xl font-title">TCET Open Source</div>
                <div className="text-slate-700 pt-2 font-Inter text-lg text-justify sm:w-4/6">For promotion of Open Source, TCET has opened an organization TCET Open Source where we incubate all college projects and maintain them for all TCET students and others to contribute to them. </div>
            </div>
            
            <div className="hidden sm:block"><img className="h-30 object-contain" src={"../../imgs/astronaut.png"} alt="astronaut" /></div>
        </div>
    );
  }
  
  export default TcetOpenSource;
