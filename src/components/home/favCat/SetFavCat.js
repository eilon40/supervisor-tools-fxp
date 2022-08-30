import { Select, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import c from '../../../data/categories';
import { setFavCat } from '../../../data/favcat';

const SetFavCat = () => {
    const [currentCat, setCurrentCat] = useState(-1);

    function updateFavCat() {
        setFavCat(currentCat);
        window.location.reload();
    }

    return (
        <Flex
            align='center'
            gap={5}
            mt={5}
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Select
                bg='fxpWhite'
                onChange={(e) => setCurrentCat(parseInt(e.target.value))}
            >
                <option value={-1}>בחר קטגורייה מועדפת מהרשימה</option>
                {c.map((cat, index) => (
                    <option key={index} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </Select>
            <Button
                px={5}
                variant={'menu-noshadow-btn'}
                isDisabled={currentCat === -1}
                onClick={updateFavCat}
            >
                הגדר קטגוריה
            </Button>
        </Flex>
    );
};

export default SetFavCat;
