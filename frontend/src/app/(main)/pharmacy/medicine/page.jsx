import React from 'react'

const Medicine = () => {
    return (

        <div className="grid grid-cols-2">
            <div>
                <div className="flex flex-col max-w-md m-12 ">
                    <div className="flex flex-col sm:flex-row border border-gray-700 py-1 px-1 w-full text-center sm:text-left">
                        <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center" />
                        <div className="flex flex-col py-2 pr-2">
                            <h4 className="text-lg font-light">Hafsah</h4>

                        </div>
                    </div>
                    <br />

                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-[#07074D] m-3 sm:text-4xl text-center">Medicines</h1>
                </div>

                <table className="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
                    <thead>

                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 text-left">Medicine Name</th>
                            <th className="py-2 px-4 text-left">Manufacturer</th>
                            <th className="py-2 px-4 text-left">Quantity</th>
                            <th className="py-2 px-4 text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-blue-500">
                            <td className="py-2 px-4">John Doe</td>
                            <td className="py-2 px-4">25</td>
                            <td className="py-2 px-4">New York</td>
                        </tr>
                        <tr className="bg-white border-b border-blue-500">
                            <td className="py-2 px-4">Jane Smith</td>
                            <td className="py-2 px-4">30</td>
                            <td className="py-2 px-4">Los Angeles</td>
                        </tr>
                        <tr className="bg-white border-b border-blue-500">
                            <td className="py-2 px-4">Bob Johnson</td>
                            <td className="py-2 px-4">40</td>
                            <td className="py-2 px-4">Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Medicine