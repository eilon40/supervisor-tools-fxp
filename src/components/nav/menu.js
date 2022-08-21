import React from 'react';
import {
    Flex,
    Link,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import links from '../../data/routes';

const MenuComponent = () => {
    const menuSpacer = '|';

    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    display={{ base: 'block', md: 'none' }}
                />
                <MenuList>
                    {links.map((item, index) => (
                        <Link href={item.href} target={item.target} key={index}>
                            <MenuItem>{item.name}</MenuItem>
                        </Link>
                    ))}
                </MenuList>
            </Menu>
            <Flex
                style={{
                    border: '1px #ccc solid',
                    padding: '.5em',
                    width: '100%',
                }}
                gap={4}
                my={5}
                display={{ base: 'none', md: 'flex' }}
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
        </>
    );
};

export default MenuComponent;
