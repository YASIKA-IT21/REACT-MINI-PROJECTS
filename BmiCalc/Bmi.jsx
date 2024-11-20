import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [value, setValue] = useState("");
  const[message,setmessage]=useState('');

  const calculate = (e) => {
    e.preventDefault();

    // Ensure valid numeric inputs
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }

    // Calculate BMI
    const bmi = (weightNum / (heightNum * heightNum)*703).toFixed(2);
    if(bmi<25)
    {
        setmessage('you are underweight')
    }
    else if(bmi>=25&&bmi<30)
    {
        setmessage('You are healthy')
    }
    else{
        setmessage('You are overweight')
    }
    setValue(bmi);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <input
            type="text"
            placeholder="Enter the weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the height in m"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        {message!==''?message:''}
        {value ? value : 0}
      </div>
    </div>
  );
};

export default Bmi;
