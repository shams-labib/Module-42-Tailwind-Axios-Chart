import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const result = [
  {
    "id": 1,
    "name": "Arafat",
    "chemistry": 78,
    "physics": 82,
    "math": 90
  },
  {
    "id": 2,
    "name": "Mitu",
    "chemistry": 85,
    "physics": 74,
    "math": 88
  },
  {
    "id": 3,
    "name": "Labib",
    "chemistry": 92,
    "physics": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Sadia",
    "chemistry": 70,
    "physics": 65,
    "math": 72
  },
  {
    "id": 5,
    "name": "Rafi",
    "chemistry": 88,
    "physics": 91,
    "math": 85
  },
  {
    "id": 6,
    "name": "Tania",
    "chemistry": 76,
    "physics": 80,
    "math": 68
  },
  {
    "id": 7,
    "name": "Hasib",
    "chemistry": 95,
    "physics": 90,
    "math": 98
  },
  {
    "id": 8,
    "name": "Nishat",
    "chemistry": 60,
    "physics": 72,
    "math": 65
  },
  {
    "id": 9,
    "name": "Rakib",
    "chemistry": 82,
    "physics": 78,
    "math": 80
  },
  {
    "id": 10,
    "name": "Samira",
    "chemistry": 89,
    "physics": 84,
    "math": 92
  }
]


const ResultChart = () => {
    return (
        <div className='flex justify-center mt-[60px]'>
            <LineChart width={800} height={400} data={result}>
                <Line dataKey='math'></Line>
                
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                
                {/* ekhane stroke dara color ke bujano hoyese */}

                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;