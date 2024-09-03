import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WasteBin = () => {
    const [wasteBins, setWasteBins] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/wastebins')
            .then(response => response.json())
            .then(data => setWasteBins(data));
    }, []);

    return (
        <div>
            {wasteBins.map(bin => (
                <Card key={bin.id}>
                    <CardContent>
                        <Typography variant="h5">Waste Bin {bin.id}</Typography>
                        <Typography>Fill Level: {bin.fill_level}%</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default WasteBin;
