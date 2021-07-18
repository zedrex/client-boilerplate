import React from "react";
import {
    Box,
    Drawer,
    useBreakpointValue,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import { Center, Flex, HStack, Stack, Divider } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { FaBars, FaTimes } from "react-icons/fa";

import ColorModeSwitcher from "../ColorModeSwitcher";
import LogoContainer from "../LogoContainer";
import SidebarContent from "./SidebarContent";

interface Props {
    children: any;
}

const Sidebar: React.FC<Props> = (props: Props) => {
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

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    const DrawerMode = (
        <Box>
            <Box w="100%" h="100%">
                {props.children}
            </Box>
            <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent
                        bgBlendMode={useColorModeValue("white", "gray.900")}
                    >
                        <IconButton
                            m={2}
                            w={4}
                            size="md"
                            fontSize="lg"
                            variant="ghost"
                            color="current"
                            icon={CrossIcon}
                            aria-label={"Open Navigation Menu"}
                            display={{ base: "flex", lg: "none" }}
                            alignSelf="flex-end"
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <DrawerBody>
                            <SidebarContent />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
    const SidebarMode = (
        <HStack spacing={2} align="stretch">
            <Box shadow="sm" w={{ base: "25%", xl: "300px" }}>
                <SidebarContent />
            </Box>
            <Center w={2}>
                <Divider orientation="vertical" />
            </Center>
            <Box w="100%" h="100%">
                {props.children}
            </Box>
        </HStack>
    );

    return (
        <Stack>
            <Box
                bg={useColorModeValue("white", "gray.900")}
                px={4}
                shadow={"md"}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <ColorModeSwitcher display={{ base: "flex", lg: "none" }} />
                    <LogoContainer />
                    <ColorModeSwitcher display={{ base: "none", lg: "flex" }} />
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
            </Box>
            <Box>{isDrawerSidebar ? DrawerMode : SidebarMode}</Box>
        </Stack>
    );
};

export default Sidebar;
