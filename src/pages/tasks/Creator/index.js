import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import { PickCategory, PickUser, CreateBBCode } from './stages';
import c from '../../../data/categories';
import { Navigate } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';

const Creator = ({ current, favCat }) => {
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

    // const [redirect, setRedirect] = useState(false);

    const [forum, setForum] = useState(defaultFrm);
    const [cat, setCat] = useState(defaultCat);

    const [user, setUser] = useState(defaultUserManager);
    const [manager, setManager] = useState(defaultUserManager);

    const [stage, setStage] = useState(0);
    const maxStages = 2; // starting from 0

    useEffect(() => {
        if (favCat) {
            const favCatData = c.filter((cat) => cat.id === favCat)[0];

            if (favCatData) {
                setCat(favCatData);
                inc();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favCat]);

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

    // if (redirect && favCat) return <Navigate to={`/tasks?action=${current}`} />;
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
                cat={cat}
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
