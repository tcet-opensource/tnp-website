function ProfessionalBodies() {
    return (
        <div className="w-100 flex flex-1 flex-col p-3 justify-center sm:flex-row">
          <div className="flex flex-col justify-center align-middle md:w-2/5 sm:w-full">
            <div className="font-bold text-3xl font-Inter sm:pb-4 uppercase">
              professional student bodies of training and placement cell
            </div>
            <div className="text-slate-700 font-Inter text-lg">
              Working together for a better Future!!
            </div>
          </div>
          <div className="md:flex-col">
            {/* Shastra */}
            <div className="flex justify-center items-center bg-gray-200 rounded-lg p-6">
          
                <img
                  className="h-8 object-contain"
                  src={"../../imgs/tcet_shastra.png"}
                  alt="tcet_shastra"
                />
                <span className="text-2xl ml-2">TCET Shastra Coding Club</span>
             
            </div>
            <div className="flex flex-wrap sm:flex-nowrap sm:flex-row mt-2 sm:mt-0 sm:pt-6">
              {/* GFG */}
              <div className="flex justify-center items-center  bg-gray-200 rounded-lg p-6 w-full">
                <img
                  className="h-8 object-contain"
                  src={"../../imgs/tcet_gfg.png"}
                  alt="tcet_gfg"
                />
                <span className="text-2xl ml-2">Geeks For Geeks Student Club</span>
              </div>
            {/* GDSC */}
              <div className="flex justify-center items-center mt-2 sm:mt-0 sm:ml-4 bg-gray-200 rounded-lg p-6 w-full">
                <img
                  className="h-8 sm:h-8  object-contain"
                  src={"../../imgs/tcet_gdsc.png"}
                  alt="tcet_gdsc"
                />
                <span className="text-2xl ml-2">Google Developer Student Club</span>
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default ProfessionalBodies;