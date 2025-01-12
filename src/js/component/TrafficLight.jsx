import React, { useState } from 'react';

const TrafficLight =() => {


    const [ color, setColor ] = useState("red");
    const lights = ["red", "yellow", "green"];
    

    return (
        <div className="d-flex flex-colum align-items-center">
          <div className = "traffic-Light bg-dark p-3 rounded">
           {lights.map((lightcolor)=>(
            <div
              key={lightcolor}
                onClick={() => setColor(lightcolor)}
                className={`ligth ${lightcolor} ${color === lightcolor ? 'glow' : ''}`}
                    
            />
          ))}
          </div>
		    </div>

    );
};

export default TrafficLight;