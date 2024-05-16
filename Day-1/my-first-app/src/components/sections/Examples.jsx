import { useState } from "react";
import { TabButton } from "../reusable/buttons/TabButton";
import { Section } from "../reusable/buttons/Section";
import { Tabs } from "../reusable/buttons/Tabs";

import { EXAMPLES } from "../../data";

export const Examples = () => {
  const [selectedTab, selectTab] = useState();

  const handleSelect = (tab) => selectTab(tab);

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};
