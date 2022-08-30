import { List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { MdHighlightOff } from 'react-icons/md';

const BadFunction = ({ current, badCats }) => {
    return (
        <List spacing={3} mb={14}>
            <Text fontWeight={'bold'}>
                לא ניתן להפיק {current === 'mmop' ? 'ממו"פ' : 'ממו"ח'} עבור
                הקטגוריות הבאות:
            </Text>
            {badCats.map((cat, index) => {
                return (
                    <ListItem key={index} justifyContent='center'>
                        <ListIcon
                            key={index}
                            as={MdHighlightOff}
                            color='red.500'
                        />
                        קטגוריית {cat.name}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default BadFunction;
