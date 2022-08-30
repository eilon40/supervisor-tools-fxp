import { Select, Box, Button, Checkbox, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InlineError from '../../../components/general/InlineError';
import c from '../../../data/categories';
import { setFavCat } from '../../../data/favcat';

const PickCat = ({ setCat, stage, inc, type }) => {
    const [currentCat, setCurrentCat] = useState({});
    const [catId, setCatId] = useState(-1);
    const [userFavCat, setUserFavCat] = useState(null);
    const [err, setErr] = useState({ error: false, messeage: '' });
    const [saveCat, setSaveCat] = useState(false);
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

        const favCatID = window.localStorage.getItem('fav');

        if (favCatID) {
            const { id } = JSON.parse(favCatID);
            if (id) {
                const favCat = c.filter((cat) => cat.id === id)[0];
                if (favCat) {
                    setUserFavCat(favCat);
                }
            }
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
        if (saveCat) setFavCat(catId);
    }

    return (
        <Box>
            {err.error && <InlineError mb={5}>{err.messeage}</InlineError>}

            <Select
                disabled={stage !== 0}
                onChange={(e) => setCatId(parseInt(e.target.value))}
                bg={'fxpWhite'}
            >
                <option value={-1}>--- בחר קטגוריה מהרשימה ---</option>
                {c.map((cat, index) => (
                    <option key={index} value={cat.id} defaultChecked>
                        {!cat.isForum && 'קטגוריית'} {cat.name} ({cat.id})
                    </option>
                ))}
            </Select>

            {stage === 0 && (
                <>
                    <Flex mt={4} justify={'center'} flexDirection={'column'}>
                        <Checkbox
                            onChange={(e) => setSaveCat(e.target.checked)}
                        >
                            שמור את הקטגוריה והגדר כמועדפת.
                        </Checkbox>
                        {userFavCat && (
                            <Box mt={-2} ml={6}>
                                <sub style={{ color: 'red' }}>
                                    סימון זה ולחיצה על כפתור הבא, ימחקו את
                                    הקטגוריה המועדפת הנוכחית ויעדכנו את זו
                                    שנבחרה כעת.
                                </sub>
                            </Box>
                        )}
                    </Flex>
                    <Flex justify='center' align='center' gap={3}>
                        <Button
                            variant='next-btn'
                            disabled={stage !== 0 || catId === -1}
                            onClick={nextStep}
                        >
                            שלב הבא
                        </Button>
                    </Flex>
                </>
            )}
        </Box>
    );
};

export default PickCat;
