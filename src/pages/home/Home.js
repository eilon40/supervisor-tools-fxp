import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
    Button,
    Heading,
    Link,
} from '@chakra-ui/react';
import c from '../../data/categories';
import PageLayout from '../../components/layouts/page';
import { useState } from 'react';

const Home = () => {
    const [hasFavCat, setHasFavCat] = useState(null);
    const relativeFavCatURL = (type, catId) =>
        `/tasks?action=${type}&cat=${catId}`;
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
                    {hasFavCat && (
                        <Flex
                            justify={'center'}
                            align={'center'}
                            flexDirection={'column'}
                            mb={10}
                        >
                            <Heading variant={'normal-h'}>גישה מהירה</Heading>
                            <Heading variant={'sub-h'} mt={3}>
                                קטגורייה מועדפת: <b>{hasFavCat.name}</b>
                            </Heading>
                            <Flex gap={14} mt={4}>
                                <Box>
                                    <Link
                                        href={relativeFavCatURL(
                                            'mmop',
                                            hasFavCat.id,
                                        )}
                                    >
                                        <Button
                                            variant={'menu-btn'}
                                            size={'md'}
                                        >
                                            מחולל ממו"פ מהיר
                                        </Button>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link
                                        href={relativeFavCatURL(
                                            'mmoh',
                                            hasFavCat.id,
                                        )}
                                    >
                                        <Button
                                            variant={'menu-btn'}
                                            size={'md'}
                                        >
                                            מחולל ממו"ח מהיר
                                        </Button>
                                    </Link>
                                </Box>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </PageLayout>
        </Box>
    );
};

export default Home;
