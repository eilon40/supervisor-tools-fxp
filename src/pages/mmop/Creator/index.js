import { Box } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { PickCategory, PickUser, CreateBBCode } from './stages';

const Creator = () => {
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

    // const resetAll = () => {
    //     setForum(defaultCat);
    //     setCat(defaultFrm);
    //     setUser(defaultUserManager);
    //     setManager(defaultUserManager);
    // };

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

    return (
        <Box>
            <PickCategory
                stage={stage}
                inc={inc}
                setCat={(cat) => setCat(cat)}
            />
            {stage === 1 && (
                <PickUser
                    setUser={(usr) => setUser(usr)}
                    setForum={(frm) => setForum(frm)}
                    setManager={(mngr) => setManager(mngr)}
                    inc={inc}
                    dec={dec}
                    cat={cat}
                />
            )}
            {stage === 2 && (
                <CreateBBCode cat={cat} data={{ forum, user, manager }} />
            )}
        </Box>
    );
};

export default Creator;
