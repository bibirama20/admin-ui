import React, {useState} from 'react'

function UserCard(props) {
   const{id, userId,title,body, ...rest} = props;
   const [clicked, setClicked] = useState(false);

   console.log(Object.entries(rest));

    return (
    <div className="bg-white p-6 rounded-lg shadow hover:bg-Special-Red2 border shadow-md transition-shadow ">

      <p className="text-gray-600">
        <span className="font-medium "></span> {id}
      </p>
      <p className="text-gray-600">
        <span className="font-medium"></span> {title}
      </p>
      <p className="text-gray-600">
        <span className="font-medium"></span> {body}
      </p>
        {}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}
      <button className={`${clicked ? "bg-Special-Red2" : "bg-red-800"} text-white p-2 rounded-md`}
      onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
</button>
    </div>
  );
}

export default UserCard