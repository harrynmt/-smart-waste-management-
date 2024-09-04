// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const WasteBin = () => {
//     const [wasteBins, setWasteBins] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:5000/api/wastebins')
//             .then(response => response.json())
//             .then(data => setWasteBins(data));
//     }, []);

//     return (
//         <div>
//             {wasteBins.map(bin => (
//                 <Card key={bin.id}>
//                     <CardContent>
//                         <Typography variant="h5">Waste Bin {bin.id}</Typography>
//                         <Typography>Fill Level: {bin.fill_level}%</Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default WasteBin;
// working fine the below code
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid2, CircularProgress, Alert } from '@mui/material';

// const WasteBin = () => {
//     const [wasteBins, setWasteBins] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('http://127.0.0.1:5000/api/wastebins')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setWasteBins(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (error) {
//         return <Alert severity="error">Error: {error}</Alert>;
//     }

//     return (
//         <Grid2 container spacing={2}>
//             {wasteBins.map(bin => (
//                 <Grid2 item xs={12} sm={6} md={4} key={bin.id}>
//                     <Card>
//                         <CardContent>
//                             <Typography variant="h5">Waste Bin {bin.id}</Typography>
//                             <Typography>Fill Level: {bin.fill_level}%</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid2>
//             ))}
//         </Grid2>
//     );
// };

// export default WasteBin;
// working fine the above code

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid2, CircularProgress, Alert } from '@mui/material';
import styled from '@mui/system/styled';

const WasteBinContainer = styled(Card)(({ fillLevel }) => ({
    position: 'relative',
    width: '150px',
    height: '250px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

const WasteBin = () => {
    const [wasteBins, setWasteBins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/wastebins')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWasteBins(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">Error: {error}</Alert>;
    }

    return (
        <Grid2 container spacing={2}>
            {wasteBins.map(bin => (
                <Grid2 item xs={12} sm={6} md={4} key={bin.id} display="flex" justifyContent="center">
                    <WasteBinContainer>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 120"
                            width="150"
                            height="250"
                        >
                            <g transform="translate(0, 20)">
                                <path
                                    d="M10,100 L90,100 L90,20 L10,20 Z"
                                    fill="#ccc"
                                    stroke="#999"
                                    strokeWidth="2"
                                />
                                <path
                                    id="fill"
                                    d={`M10,100 L90,100 L90,${100 - bin.fill_level} L10,${100 - bin.fill_level} Z`}
                                    fill={bin.fill_level > 75 ? '#f44336' : bin.fill_level > 50 ? '#ff9800' : bin.fill_level > 25 ? '#ffeb3b' : '#4caf50'}
                                    style={{ transition: 'height 0.5s ease' }}
                                />
                                <path
                                    d="M20,20 L80,20 L90,10 L10,10 Z"
                                    fill="#999"
                                />
                            </g>
                        </svg>
                        <CardContent style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                            <Typography variant="h6" style={{ color: '#fff' }}>
                                Waste Bin {bin.id}
                            </Typography>
                            <Typography variant="body2" style={{ color: '#fff' }}>
                                {bin.fill_level}%
                            </Typography>
                        </CardContent>
                    </WasteBinContainer>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default WasteBin;
