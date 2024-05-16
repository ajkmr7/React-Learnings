import { CoreConcept } from "../core_concept/CoreConcept";
import { Section } from "../reusable/buttons/Section";

import { CORE_CONCEPTS } from "../../data";

export const CoreConcepts = () => {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConcept key={data.title} {...data} />
        ))}
      </ul>
    </Section>
  );
};
