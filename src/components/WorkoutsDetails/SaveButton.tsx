import React from 'react';
import { FiBookmark } from 'react-icons/fi';

const SaveButton = () => {
    return (
        <button className="btn flex items-center gap-2 text-[#E5E7EB]  ">
              <FiBookmark />
              Save for later
            </button>
    );
};

export default SaveButton;