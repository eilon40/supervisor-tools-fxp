import { Select, Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InlineError from '../../../components/general/InlineError';
import c from '../../../data/categories';

const PickCat = ({ setCat, stage, inc, type }) => {
    const [currentCat, setCurrentCat] = useState({});
    const [catId, setCatId] = useState(-1);
    const [err, setErr] = useState({ error: false, messeage: '' });
    const catLink = 'https://www.fxp.co.il/forumdisplay.php?f=';

    useEffect(() => {
        if (catId !== -1) {
            const pickedCat = c.filter((item) => item.id === catId)[0];
            const cat = {
                ...pickedCat,
                href: `${catLink}${pickedCat.id}`,
            };
            setCurrentCat(cat);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catId]);

    function nextStep() {
        if (type === 'mmop') {
            if (currentCat.generate) {
                setCat(currentCat);
                setErr({ error: false, message: '' });
                inc();
            } else {
                setErr({
                    error: true,
                    messeage: `לקטגוריית ${currentCat.name} לא ניתן להפיק ממו"פ כעת.`,
                });
            }
        } else if (type === 'mmoh') {
            if (currentCat.generateMmoh) {
                setCat(currentCat);
                setErr({ error: false, message: '' });
                inc();
            } else {
                setErr({
                    error: true,
                    messeage: `לקטגוריית ${currentCat.name} לא ניתן להפיק ממו"ח כעת.`,
                });
            }
        }
    }

    return (
        <Box>
            {err.error && <InlineError mb={5}>{err.messeage}</InlineError>}
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
                        onClick={nextStep}
                    >
                        הבא
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default PickCat;
