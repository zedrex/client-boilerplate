import { Text } from "@chakra-ui/layout";
import React from "react";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/Sidebar";

const AboutPage = () => {
    return (
        <>
            <Sidebar>
                <PageContainer>
                    <PageHeader>About This Bootstrap</PageHeader>
                    <Text>Find out in the repository.</Text>
                </PageContainer>
            </Sidebar>
        </>
    );
};

export default AboutPage;
