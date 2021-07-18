import React from "react";
import { Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const SidebarNavLink = (props: any) => {
    return (
        <Link
            minW="230"
            px={3}
            py={2}
            rounded={"md"}
            fontWeight="bold"
            _hover={{
                textDecoration: "none",
                color: useColorModeValue("primary.800", "primary.100"),
                bg: useColorModeValue("primary.100", "primary.800"),
            }}
            href={props.href}
        >
            {props.children}
        </Link>
    );
};

export default SidebarNavLink;
