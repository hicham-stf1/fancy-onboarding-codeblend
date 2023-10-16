import React, { useState } from 'react'

export default function AddTag() {

    //Logic first => Styling later

    const [Tags, setTags] = useState([]);

    const addTag = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                setTags([...Tags, e.target.value]);
                e.target.value = "";
            }
        }
    };

    const removeTag = (removedTag) => {
        const newTags = Tags.filter(
            (Tag) => Tag !== removedTag
        );
        setTags(newTags);
    };

    return (
        <div className='m-auto my-5 bg-yellow-300 min-w-60 max-w-90 flex flex-wrap min-h-30 border border-gray-300 rounded-lg p-10'>

            <input
                className='w-full py-2.5 px-3 rounded-md mb-2 bg-white'
                placeholder="Enter text and click Enter to add"
                onKeyDown={addTag}
            />
            {Tags?.map((Tag, index) => {
                return (
                    <div key={index} className="flex bg-white   m-1 p-2 rounded-se-2xl rounded-es-2xl  ">
                        <span className='mt-1'>{Tag}</span>
                        <span
                            onClick={() => removeTag(Tag)}
                            className="ml-4 text-sm font-bold hover:text-white border-2 border-red-600 text-red-500 bg-white hover:bg-red-600 rounded-full px-2.5 py-1 cursor-pointer">
                            X
                        </span>
                    </div>
                );
            })}
        </div>

    )
}
