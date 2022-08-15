import {
    Box,
    Flex,
    Button,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
} from '@chakra-ui/react';
import { useState } from 'react';
import Fields from '../../../components/layouts/fields';

const PickUser = ({ cat, setUser, setManager, setForum, dec, inc }) => {
    const [usr, setUsr] = useState({}); // {name: string, profile: string, reason: string}
    const [mngr, setMngr] = useState({}); // {name: string, profile: string, reason: string}
    const [frm, setFrm] = useState({}); // {name: string, link: string, reason: string}

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
        setFrm((prevValue) => ({ ...prevValue, link: link }));
    const setFrmReason = (reason) =>
        setFrm((prevValue) => ({ ...prevValue, reason: reason }));

    function nextStep() {
        if (Object.entries(usr).length) setUser(usr);
        if (Object.entries(frm).length) setForum(frm);
        if (Object.entries(mngr).length) setManager(mngr);
        inc();
    }

    return (
        <Box mt={10}>
            <Tabs variant='soft-rounded' isFitted colorScheme='messenger'>
                <TabList>
                    <Tab>מנהל השבוע</Tab>
                    <Tab>משתמש השבוע</Tab>
                    <Tab>פורום השבוע</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Fields
                            title={'בחירת משתמש'}
                            nameSetter={setUsrName}
                            linkSetter={setUsrLink}
                            reasonSetter={setUsrReason}
                        />
                    </TabPanel>

                    <TabPanel>
                        <Fields
                            title={'בחירת מנהל'}
                            nameSetter={setMngrName}
                            linkSetter={setMngrLink}
                            reasonSetter={setMngrReason}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Fields
                            title={'בחירת פורום'}
                            nameSetter={setFrmName}
                            linkSetter={setFrmLink}
                            reasonSetter={setFrmReason}
                            isForum={true}
                        />
                    </TabPanel>
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
