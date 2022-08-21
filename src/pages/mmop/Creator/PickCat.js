import { Select, Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import c from '../../../data/categories';

const PickCat = ({ setCat, stage, inc }) => {
    const [catId, setCatId] = useState(-1);
    const catLink = 'https://www.fxp.co.il/forumdisplay.php?f=';

    useEffect(() => {
        if (catId !== -1) {
            const pickedCat = c.filter((item) => item.id === catId)[0];
            const cat = {
                ...pickedCat,
                href: `${catLink}${pickedCat.id}`,
            };
            setCat(cat);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catId]);

    return (
        <Box>
            <Select
                disabled={stage !== 0}
                onChange={(e) => setCatId(parseInt(e.target.value))}
            >
                <option value={-1}>--- בחר קטגוריה מהרשימה ---</option>
                {c.map((cat, index) => (
                    <option key={index} value={cat.id}>
                        {!cat.isForum && 'קטגוריית'} {cat.name} ({cat.id})
                    </option>
                ))}
            </Select>
            {stage === 0 && (
                <Box align='center'>
                    <Button
                        variant='next-btn'
                        disabled={stage !== 0 || catId === -1}
                        onClick={inc}
                    >
                        הבא
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default PickCat;
