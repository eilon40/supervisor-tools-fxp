import {
    Select,
    Box,
    Button,
    Checkbox,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import InlineError from '../../../components/general/InlineError';
import c from '../../../data/categories';

const PickCat = ({ setCat, stage, inc, type }) => {
    const [currentCat, setCurrentCat] = useState({});
    const [catId, setCatId] = useState(-1);
    const [userFavCat, setUserFavCat] = useState({});
    const [err, setErr] = useState({ error: false, messeage: '' });
    const [saveCat, setSaveCat] = useState(false);
    const catLink = 'https://www.fxp.co.il/forumdisplay.php?f=';

    const selectRef = useRef(null);

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
            const favCat = c.filter((cat) => cat.id === id)[0];
            setUserFavCat(favCat);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catId]);

    function nextStep() {
        console.log(currentCat);
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
        if (saveCat)
            window.localStorage.setItem('fav', JSON.stringify({ id: catId }));
    }

    function nextStepFav() {
        if (type === 'mmop') {
            if (userFavCat.generate) {
                setCat(userFavCat);
                setErr({ error: false, message: '' });
                inc();
            } else {
                setErr({
                    error: true,
                    messeage: `לקטגוריית ${userFavCat.name} לא ניתן להפיק ממו"פ כעת.`,
                });
            }
        } else if (type === 'mmoh') {
            if (userFavCat.generateMmoh) {
                setCat(userFavCat);
                setErr({ error: false, message: '' });
                inc();
            } else {
                setErr({
                    error: true,
                    messeage: `לקטגוריית ${userFavCat.name} לא ניתן להפיק ממו"ח כעת.`,
                });
            }
        }
    }

    function removeFav() {
        window.localStorage.removeItem('fav');
        window.location.reload();
    }

    return (
        <Box>
            {err.error && <InlineError mb={5}>{err.messeage}</InlineError>}

            {userFavCat.name && stage === 0 && (
                <Box mb={7}>
                    קטגוריה מועדפת: {userFavCat.name} (
                    <Text
                        display={'inline'}
                        textDecoration={'underline'}
                        cursor={'pointer'}
                        _hover={{ color: 'fxpBlue' }}
                        onClick={nextStepFav}
                    >
                        בחירה מהירה
                    </Text>
                    ,{' '}
                    <Text
                        textDecoration={'underline'}
                        cursor={'pointer'}
                        _hover={{ color: 'red' }}
                        display={'inline'}
                        onClick={removeFav}
                    >
                        הסר
                    </Text>
                    )
                </Box>
            )}
            <Select
                disabled={stage !== 0}
                onChange={(e) => setCatId(parseInt(e.target.value))}
                ref={selectRef}
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
