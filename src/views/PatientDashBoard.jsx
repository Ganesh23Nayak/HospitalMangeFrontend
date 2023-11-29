import React from 'react';


const tableData = [
	{
		name: 'John Doe',
		gender: 'Male',
		department: 'Cardiologist',
        time:'10AM',
        date:'yyyy-mm-dd',

	}
]
const DashBoard = () => {
	return (
		<section id='dashboard'>
			<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-fixed  text-xl text-center card-gradient">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Doctor Name</th>
                            <th className="py-3 px-6">Gender</th>
                            <th className="py-3 px-6">Department</th>
                            <th className="py-3 px-6">Appointment time</th>
                            <th className="py-3 px-6">Appointment Date</th>
                            <th className="py-3 px-6"></th>
                            
                        </tr>
                    </thead>
                    <tbody className="dark:text-white divide-y">
                        {
                           tableData.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
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

