




import Card from './Card';

const AllMenu = () => {
    
    
    
     

    

   
    return (
        <div className="min-h-screen pb-16 pt-20 md:pt-28  bg-slate-100 dark:bg-gray-900 dark:text-gray-200 transition duration-300">
            
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-[#544efcba] mb-10">
                    All Menu
                </h1>
                <div className="flex justify-between items-center mb-10">
                    <div className='flex gap-6 justify-between items-center flex-col md:flex-row'>
                        <div className="relative w-full md:w-3/4 lg:w-1/2">
                            <input
                                type="text"
                                placeholder="Search by title"
                                className="border border-gray-700 outline-none pl-12 py-2 rounded-full w-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 shadow-sm focus:ring focus:ring-blue-500"
                                
                            />
                            
                        </div>
                        
                           
                    </div>
                </div>
                 
                    <div className=" w-full grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                
                <div className="mt-8 flex justify-center space-x-2">
                    
                        
                    
                </div>
            </div>
        </div>
    );
};

export default AllMenu;
