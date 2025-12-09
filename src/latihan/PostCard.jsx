import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.05] hover:border-2 hover:border-gray-400 hover:bg-pink-50">
      <h2 className="text-xl font-bold text-defaultBlack mb-4 text-center">
        {title}
      </h2>
      
      <p className="text-gray-02 mb-4 text-center">
        {body}
      </p>

      <button
        className={`${clicked ? "bg-special-red2 hover:brightness-125" : "bg-gray-01 hover:brightness-125"} w-full py-3 rounded-lg text-white font-semibold transition-all duration-300`}
        onClick={handleClick}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
