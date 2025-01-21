import React from 'react'

function Card(props: any) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 p-6 rounded-xl w-96 gap-2 flex flex-col justify-center items-center">
                <h1 id='mainText' className='text-3xl font-bold text-blue-700 flex justify-center items-center'>{props.text}</h1>
                <input
                    className="w-10 h-10 mt-4"
                    type="checkbox" name="t1"
                    id="t1"
                    onChange={props.handleCheckboxChange}
                />
                {/* <label className="text-emerald-600 ml-5 " htmlFor="checkbox1">{props.checkboxName}</label> */}
            </div>
        </div>
    )
}

export default Card
