import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { FavShortLinks, SetFavCat } from '../favCat';
import { removeFavCat } from '../../../data/favcat';

const FastAccess = ({ favCat }) => {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            flexDirection={'column'}
            mb={10}
        >
            <Heading variant={'normal-h'}>גישה מהירה</Heading>
            <Heading variant={'sub-h'} mt={3}>
                קטגורייה מועדפת: <b>{favCat ? favCat.name : 'ללא'}</b>
            </Heading>
            {favCat ? <FavShortLinks catId={favCat.id} /> : <SetFavCat />}
            {favCat && (
                <Text variant={'link-like-red'} onClick={removeFavCat}>
                    הסר את '{favCat.name}' מהמועדפים
                </Text>
            )}
        </Flex>
    );
};

export default FastAccess;
