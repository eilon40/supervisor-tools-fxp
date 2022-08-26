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
    const isCurrentPage = (href) =>
        window.location.pathname + window.location.search === href;

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
                gap={4}
                mt={5}
                mb={5}
                display={{ base: 'none', md: 'flex' }}
                align='center'
                justify='center'
            >
                {links.map((item, index) => (
                    <Flex gap={4} key={index}>
                        <Link
                            style={{ marginInlineStart: 0 }}
                            key={index}
                            href={isCurrentPage(item.href) ? '#' : item.href}
                            target={item.target}
                        >
                            <Tooltip hasArrow mt={2} label={item.label}>
                                <Button
                                    isActive={isCurrentPage(item.href)}
                                    variant='menu-btn'
                                    alt={'asdasd'}
                                >
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
