import {
    Box,
    Flex,
    Button,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
    Heading,
} from '@chakra-ui/react';
import InlineError from '../../../components/general/InlineError';
import { useState } from 'react';
import Fields from '../../../components/layouts/fields';

const PickUser = ({ type, setUser, setManager, setForum, dec, inc, cat }) => {
    const [err, setErr] = useState([false, '']);
    const [usr, setUsr] = useState({
        name: '',
        profile: '',
        reason: '',
    });
    const [mngr, setMngr] = useState({
        name: '',
        profile: '',
        reason: '',
    });
    const [frm, setFrm] = useState({
        name: '',
        href: '',
        reason: '',
    });

    // usr setters:
    const setUsrName = (name) =>
        setUsr((prevValue) => ({ ...prevValue, name: name }));
    const setUsrLink = (link) =>
        setUsr((prevValue) => ({ ...prevValue, profile: link }));
    const setUsrReason = (reason) =>
        setUsr((prevValue) => ({ ...prevValue, reason: reason }));

    // mngr setters:
    const setMngrName = (name) =>
        setMngr((prevValue) => ({ ...prevValue, name: name }));
    const setMngrLink = (link) =>
        setMngr((prevValue) => ({ ...prevValue, profile: link }));
    const setMngrReason = (reason) =>
        setMngr((prevValue) => ({ ...prevValue, reason: reason }));

    // frm setters
    const setFrmName = (name) =>
        setFrm((prevValue) => ({ ...prevValue, name: name }));
    const setFrmLink = (link) =>
        setFrm((prevValue) => ({ ...prevValue, href: link }));
    const setFrmReason = (reason) =>
        setFrm((prevValue) => ({ ...prevValue, reason: reason }));

    function nextStep() {
        const usrVals = Object.values(usr);
        const frmVals = Object.values(frm);
        const mngrVals = Object.values(mngr);

        let isOk = false;

        const values =
            type === 'mmop'
                ? usrVals.concat(frmVals).concat(mngrVals)
                : usrVals.concat(mngrVals);

        for (let i = 0; i < values.length; i++) {
            if (values[i] === '') {
                setErr([
                    true,
                    'אחד מהשדות אינו מלא. במידה ואין זוכה באחד השדות יש לסמן בסימון המתאים לכך.',
                ]);
                console.log('yey err');
                break;
            }
            if (i === values.length - 1) {
                isOk = true;
            }
        }

        if (isOk) {
            setErr([false, '']);
            setForum(frm);
            setUser(usr);
            setManager(mngr);
            inc();
        }
    }

    return (
        <Box mt={10}>
            <Heading variant={'normal-h'} mb={10} textAlign='center'>
                {!cat.isForum && 'קטגוריית'} {cat.name}
            </Heading>
            <Tabs variant='soft-rounded' isFitted colorScheme='messenger'>
                <TabList>
                    <Tab color='fxpDark'>
                        משתמש {type === 'mmop' ? 'השבוע' : 'החודש'}
                    </Tab>
                    <Tab color='fxpRed'>
                        מנהל {type === 'mmop' ? 'השבוע' : 'החודש'}
                    </Tab>
                    {type === 'mmop' && !cat.isForum && (
                        <Tab color='fxpGold'>פורום השבוע</Tab>
                    )}
                </TabList>
                {err[0] && (
                    <InlineError mb={-6} mt={6}>
                        {err[1]}
                    </InlineError>
                )}
                <TabPanels>
                    <TabPanel>
                        <Fields
                            nameSetter={setMngrName}
                            linkSetter={setMngrLink}
                            reasonSetter={setMngrReason}
                            name={'manager'}
                            type={type}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Fields
                            nameSetter={setUsrName}
                            linkSetter={setUsrLink}
                            reasonSetter={setUsrReason}
                            name={'user'}
                            type={type}
                        />
                    </TabPanel>
                    {type === 'mmop' && !cat.isForum && (
                        <TabPanel>
                            <Fields
                                nameSetter={setFrmName}
                                linkSetter={setFrmLink}
                                reasonSetter={setFrmReason}
                                name={'forum'}
                                type={type}
                            />
                        </TabPanel>
                    )}
                </TabPanels>
            </Tabs>
            <Flex gap={4} justify='center'>
                <Button variant='prev-btn' onClick={dec}>
                    שלב קודם
                </Button>
                <Button variant='next-btn' onClick={nextStep}>
                    צור BBCode
                </Button>
            </Flex>
        </Box>
    );
};

export default PickUser;
