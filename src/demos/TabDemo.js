import '@fremtind/jkl-tabs/tabs.min.css'
import {Tabs, TabList, TabPanel, Tab} from '@fremtind/jkl-tabs-react'

export const TabDemo = () => (
    <Tabs>
        <TabList aria-label="tabs">
            <Tab>Bedrifter</Tab>
            <Tab>Bedriftansvarlige</Tab>
            <Tab>Rådgivere</Tab>
        </TabList>

        <TabPanel>Innhold for Bedrifter</TabPanel>

        <TabPanel>Innhold for Bedriftansvarlige</TabPanel>

        <TabPanel>
            Innhold for Rådgivere

            <Tabs>
                <TabList aria-label="subtabs">
                    <Tab>Bedrift AS</Tab>
                    <Tab>Alternativ AS</Tab>
                </TabList>
                <TabPanel>Innhold for Bedrift AS</TabPanel>
                <TabPanel>Innhold for Alternativ AS</TabPanel>
            </Tabs>
        </TabPanel>
    </Tabs>
);