import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
} from '@chakra-ui/react';
import c from '../../data/categories';
import PageLayout from '../../components/layouts/page';
import { useState } from 'react';
import { FastAccess } from '../../components/home/fastAccess';

const Home = () => {
    const [hasFavCat, setHasFavCat] = useState(null);
    const hasNoNosah = c.filter((cat) => !cat.generate);

    useEffect(() => {
        const favoriteCat = window.localStorage.getItem('fav');
        if (favoriteCat) {
            const { id } = JSON.parse(favoriteCat);

            if (id) {
                const favoriteCategory = c.filter((cat) => cat.id === id)[0];

                if (favoriteCategory) {
                    setHasFavCat(favoriteCategory);
                }
            }
        }
    }, []);

    return (
        <Box>
            <PageLayout
                title={'ברוכים הבאים לPikuahToolV1!'}
                subtitle={'כאן ירוכזו כלים שימושיים עבורכם בתפקיד.'}
            >
                <Flex flexDirection={'column'} gap={6}>
                    {hasNoNosah.map((cat, index) => {
                        if (!cat.generate) {
                            return (
                                <Alert
                                    status='error'
                                    key={index}
                                    borderRadius={'md'}
                                >
                                    <AlertIcon />
                                    <AlertTitle>קטגוריית {cat.name}</AlertTitle>
                                    <AlertDescription>
                                        לא ניתן להשתמש במחולל עבור קטגורייה זו,
                                        עדיין לא הוזן עבורה נוסח.
                                    </AlertDescription>
                                </Alert>
                            );
                        }
                        return null;
                    })}
                    <FastAccess favCat={hasFavCat} />
                </Flex>
            </PageLayout>
        </Box>
    );
};

export default Home;
