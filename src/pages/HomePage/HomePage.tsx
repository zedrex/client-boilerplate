import { Image } from "@chakra-ui/image";
import { Center, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import Navbar from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";

const HomePage = () => {
    return (
        <>
            <Navbar />

            <PageContainer>
                <Center>
                    <PageHeader>Hello World</PageHeader>
                </Center>
                <Center>
                    <Grid
                        mx={{ base: 8, md: 16, lg: 36 }}
                        w="1000px"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={{ base: 8, md: 16 }}
                    >
                        <GridItem rowSpan={1} colSpan={1}>
                            <Center>
                                <Image
                                    p={{ base: 4, md: 8, lg: 16 }}
                                    objectFit="cover"
                                    src={"images/react-logo.png"}
                                ></Image>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Image
                                    p={{ base: 4, md: 8, lg: 16 }}
                                    objectFit="cover"
                                    src={"images/redux-logo.png"}
                                ></Image>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Image
                                    p={{ base: 4, md: 8, lg: 16 }}
                                    objectFit="cover"
                                    src={"images/react-router-logo.png"}
                                ></Image>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Center>
                                <Image
                                    px={{ base: 4, md: 8, lg: 16 }}
                                    objectFit="cover"
                                    src={"images/chakra-ui-logo.png"}
                                ></Image>
                            </Center>
                        </GridItem>
                    </Grid>
                </Center>
            </PageContainer>
        </>
    );
};

export default HomePage;
