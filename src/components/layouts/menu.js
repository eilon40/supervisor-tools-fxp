import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import links from '../../data/routes';

const Menu = () => {
    const menuSpacer = '|';
    return (
        <Flex
            style={{
                border: '1px #ccc solid',
                padding: '.5em',
                width: '100%',
            }}
            gap={4}
            my={5}
        >
            <Text fontWeight={'bold'}>תפריט:</Text>
            {links.map((item, index) => (
                <Flex gap={4} key={index}>
                    {index !== 0 && menuSpacer}
                    <Link
                        style={{ marginInlineStart: 0 }}
                        key={index}
                        href={item.href}
                        target={item.target}
                    >
                        {item.name}
                    </Link>
                </Flex>
            ))}
        </Flex>
    );
};

export default Menu;
