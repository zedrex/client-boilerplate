import React from "react";
import { Box, Center, Flex, HStack, Stack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaBars, FaTimes } from "react-icons/fa";
import ColorModeSwitcher from "../ColorModeSwitcher";
import LogoContainer from "../LogoContainer";
import NavLink from "../NavLink";

interface LinkObject {
    name: string;
    href: string;
}

const Links: ReadonlyArray<LinkObject> = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Settings", href: "/settings" },
];

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const CrossIcon = (
        <Center h="100%" w="100%">
            <FaTimes />
        </Center>
    );

    const BarIcon = (
        <Center h="100%" w="100%">
            <FaBars />
        </Center>
    );

    return (
        <Box bg={useColorModeValue("white", "gray.900")} px={4} shadow={"md"}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <ColorModeSwitcher display={{ base: "flex", lg: "none" }} />
                <LogoContainer />
                <HStack
                    as={"nav"}
                    spacing={4}
                    display={{ base: "none", lg: "flex" }}
                >
                    {Links.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            hoverTextColor={"primary.800"}
                            hoverBgColor={"primary.100"}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <IconButton
                        w={4}
                        size="md"
                        fontSize="lg"
                        variant="ghost"
                        color="current"
                        icon={isOpen ? CrossIcon : BarIcon}
                        aria-label={"Open Navigation Menu"}
                        display={{ lg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <ColorModeSwitcher />
                </HStack>{" "}
                <IconButton
                    w={4}
                    size="md"
                    fontSize="lg"
                    variant="ghost"
                    color="current"
                    icon={isOpen ? CrossIcon : BarIcon}
                    aria-label={"Open Navigation Menu"}
                    display={{ lg: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ lg: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                hoverTextColor={"primary.800"}
                                hoverBgColor={"primary.100"}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
