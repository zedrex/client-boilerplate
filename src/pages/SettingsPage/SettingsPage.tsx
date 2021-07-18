import React from "react";
import Navbar from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import TabView, { TabObject } from "../../components/TabView/TabView";
import ContributionTab from "./ContributionTab";
import CustomizationTab from "./CustomizationTab";

const tabs: Array<TabObject> = [
    {
        tabName: "Customization",
        tabPanel: <CustomizationTab />,
    },
    {
        tabName: "Contribution",
        tabPanel: <ContributionTab />,
    },
];

const SettingsPage = () => {
    return (
        <>
            <Navbar />
            <PageContainer>
                <PageHeader>Settings</PageHeader>
                <TabView tabList={tabs} />
            </PageContainer>
        </>
    );
};

export default SettingsPage;
