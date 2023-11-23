import React from 'react';


const tableData = [
	{
		name: 'John Doe',
		age: 25,
		gender: 'Male',
		department: 'Cardiologist',
	}
]
const DashBoard = () => {
	return (
		<section id='dashboard'>
			<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-fixed  text-xl text-center card-gradient">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Age</th>
                            <th className="py-3 px-6">Gender</th>
                            <th className="py-3 px-6">Department</th>
                            <th className="py-3 px-6"></th>
                            
                        </tr>
                    </thead>
                    <tbody className="dark:text-white divide-y">
                        {
                           tableData.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.department}</td>
									<td><button className='px-4 py-2 hover:bg-red-500  dark:text-white rounded justify-center' onClick={() => handleRemove(idx)}>Remove</button></td>																					
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
		</section>
	);
};

export default DashBoard;

