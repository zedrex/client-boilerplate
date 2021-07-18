import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Badge, Box } from "@chakra-ui/layout";
import React from "react";

const PostCard = (props: any) => {
    const { post } = props;

    return (
        <Box
            m={4}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transitionDuration=".3s"
            _hover={{
                transform: "scale(1.05)",
                shadow: "lg",
            }}
        >
            <Image src="https://www.setaswall.com/wp-content/uploads/2017/12/Balloon-Wallpaper-28-1680x1050.jpg" />
            <Box p="6">
                <Box d="flex">
                    <Badge borderRadius="full" px="2" colorScheme="red">
                        Top
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {post.likeCount} likes
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {post.title}
                </Box>

                <Box
                    as="span"
                    color={useColorModeValue("gray.600", "gray.200")}
                    fontSize="sm"
                >
                    {post.message}
                </Box>
            </Box>
        </Box>
    );
};

export default PostCard;
