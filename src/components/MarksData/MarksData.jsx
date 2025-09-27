import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksData = ({ marksData}) => {
    const   MarksResultRes = use( marksData);
    // ekhane suhdu arekta Axios er kaj ache, seta holo .data use kora
    const marksResult = MarksResultRes.data;

    // Proccecing

    const MarksProccecing = marksResult.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            chemistry: studentData.subjects.chemistry,
            physics: studentData.subjects.physics,
            math: studentData.subjects.math
            
        }

        const avg = (student.chemistry + student.physics + student.math) /3;
        student.avg = avg;


        return student;
    })
    console.log(MarksProccecing)

    return (
        <div className='flex justify-center mt-[60px]'>
            <BarChart width={500} height={400} data={MarksProccecing}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='red'></Bar>
                <Bar dataKey={'chemistry'} fill='yellow'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksData;