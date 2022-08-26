import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { PickCategory, PickUser, CreateBBCode } from './stages';
import c from '../../../data/categories';
// import InlineError from '../../../components/general/InlineError';
import { MdCheckCircle } from 'react-icons/md';

const Creator = ({ current }) => {
    const defaultCat = { name: '-', link: 'https://www.fxp.co.il/' };
    const defaultFrm = {
        name: '-',
        link: 'https://www.fxp.co.il/',
        reason: '-',
        disabled: false,
    };
    const defaultUserManager = {
        name: '-',
        profile: 'https://www.fxp.co.il/',
        reason: '-',
        disabled: false,
    };

    const [forum, setForum] = useState(defaultFrm);
    const [cat, setCat] = useState(defaultCat);

    const [user, setUser] = useState(defaultUserManager);
    const [manager, setManager] = useState(defaultUserManager);

    const resetAll = () => {
        setForum(defaultCat);
        setCat(defaultFrm);
        setUser(defaultUserManager);
        setManager(defaultUserManager);
    };

    const [stage, setStage] = useState(0);
    const maxStages = 2; // starting from 0

    const inc = useCallback(() => {
        if (stage < maxStages) {
            setStage((n) => n + 1);
        }
    }, [stage]);

    const dec = useCallback(() => {
        if (stage > 0) setStage((n) => n - 1);
    }, [stage]);

    const hasGenFunction =
        current === 'mmop'
            ? c.filter((cat) => cat.generate)
            : c.filter((cat) => cat.generateMmoh);

    return (
        <Box>
            {hasGenFunction.length !== c.length && (
                <List spacing={3} mb={14}>
                    <Text fontWeight={'bold'}>
                        ניתן להפיק {current === 'mmop' ? 'ממו"פ' : 'ממו"ח'} רק
                        עבור הקטגוריות הבאות:
                    </Text>
                    {hasGenFunction.map((cat, index) => {
                        return (
                            <ListItem key={index}>
                                <ListIcon
                                    key={index}
                                    as={MdCheckCircle}
                                    color='green.500'
                                />
                                קטגוריית {cat.name}
                            </ListItem>
                        );
                    })}
                </List>
            )}
            <PickCategory
                stage={stage}
                inc={inc}
                setCat={(cat) => setCat(cat)}
                type={current}
            />
            {stage === 1 && (
                <PickUser
                    setUser={(usr) => setUser(usr)}
                    setForum={(frm) => setForum(frm)}
                    setManager={(mngr) => setManager(mngr)}
                    inc={inc}
                    dec={dec}
                    cat={cat}
                    type={current}
                />
            )}
            {stage === 2 && (
                <CreateBBCode
                    cat={cat}
                    type={current}
                    data={{ forum, user, manager }}
                />
            )}
        </Box>
    );
};

export default Creator;
