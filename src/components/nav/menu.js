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
    Button,
    Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons';
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
                            <MenuItem>
                                {item.name}{' '}
                                {item.target === '_blank' && (
                                    <ExternalLinkIcon ml={1} />
                                )}
                            </MenuItem>
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
                align='center'
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
                            <Tooltip hasArrow label={item.label}>
                                <Button variant='menu-btn' alt={'asdasd'}>
                                    {item.name}{' '}
                                    {item.target === '_blank' && (
                                        <ExternalLinkIcon ml={1} mr={-1} />
                                    )}
                                </Button>
                            </Tooltip>
                        </Link>
                    </Flex>
                ))}
            </Flex>
        </>
    );
};

export default MenuComponent;
