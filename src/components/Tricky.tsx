import React, { useState } from 'react';
import Card from './Card';

function Tricky() {
    const [text, setText] = useState('Do you hear me')
    const handleCheckboxChange = (event: any) => {

        const ele = document.createElement('h1');
        ele.id = 'mainText';
        ele.textContent = 'Do you hear me';
        const checkbox = event.target;
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'pink';
            setText('I love you too');

        } else {
            console.log('Checkbox is unchecked!');
            document.body.style.backgroundColor = 'black';
            setText('Are you sure?');
        }
    };

    return (
        <div >
            {/* <h1 className='text-3xl font-bold text-blue-700 flex justify-center items-center'>Do you hear me</h1> */}
            <Card handleCheckboxChange={handleCheckboxChange} text={text} checkboxName={"YES"}> </Card>
        </div>
    );
}

export default Tricky;
