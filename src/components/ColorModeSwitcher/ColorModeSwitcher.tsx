import * as React from "react";
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
    Center,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");

    const MoonIcon = (
        <Center h="100%" w="100%">
            <FaMoon />
        </Center>
    );

    const SunIcon = (
        <Center h="100%" w="100%">
            <FaSun />
        </Center>
    );
    const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

    return (
        <IconButton
            w={4}
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            margin="2"
            icon={SwitchIcon}
            onClick={toggleColorMode}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    );
};

export default ColorModeSwitcher;
