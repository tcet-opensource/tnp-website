function HugeEvents() {
  
    return ( 
        <div className="flex flex-col md:flex-row md:justify-center p-6 mx-10 md:mx-18">
            <div className="flex flex-col">
               <div className="font-semibold py-3 pl-3 text-3xl font-title bg-blue-100 rounded-lg text-blue-700">Hacknova</div>
               <div><img className="mt-3 object-contain w-full rounded-t-xl" src={"../../events/pic_1.png"} alt="pic_1" /></div>
               <div className="bg-gray-200 text-slate-700 font-Inter text-lg rounded-b-xl p-4">Coding tests were being taken to develop problem solving skills of students and to enhance their understanding of data structures and algorithms (DSA) in order to prepare them for interviews.</div>
            </div>
            
            <div className="flex flex-col mt-4 md:mt-0 md:ml-8">
               <div className="font-semibold py-3 pl-3 text-3xl font-title bg-green-200 rounded-lg text-green-700">Coding Contest</div>
               <div><img className="mt-3 object-contain w-full rounded-t-xl" src={"../../events/pic_2.png"} alt="pic_1" /></div>
               <div className="bg-gray-200 text-slate-700 font-Inter text-lg rounded-b-xl p-4">Coding tests were being taken to develop problem solving skills of students and to enhance their understanding of data structures and algorithms (DSA) in order to prepare them for interviews.</div>
            </div>
        </div>
    );
  }

export default HugeEvents