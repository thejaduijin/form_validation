import React from 'react';

function Tricky() {
    const handleCheckboxChange = (event: any) => {
        const ele = document.createElement('div');
        ele.id = 'myDiv'; 
        const checkbox = event.target; // The checkbox that triggered the event
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'lightblue';
            document.getElementById('myDiv')?.remove();
            document.body.appendChild(ele).innerHTML = 'I love you too';
        } else {
            console.log('Checkbox is unchecked!');
            document.getElementById('myDiv')?.remove();
            document.body.appendChild(ele).innerHTML = 'Are you sure?';
        }
    };

    return (
        <div className='gap-5 bg-pink-500 m-4 p-4 w-96 flex justify-center items-center' >
            <h1 className='text-3xl font-bold text-blue-700 flex justify-center items-center'>Do you love me</h1>
            <input
                className="w-10 h-10"
                type="checkbox" name="t1"
                id="t1"
                onChange={handleCheckboxChange}
            />
            <label className="text-emerald-100" htmlFor="checkbox1">YES</label>

            <input
                onChange={handleCheckboxChange}
                className="w-10 h-10"
                type="checkbox"
                id="checkbox1"
                name="option1"
                value="value1"
            />
            <label className="text-emerald-100" htmlFor="checkbox1">NO</label>
        </div>
    );
}

export default Tricky;
