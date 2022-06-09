import "@fremtind/jkl-field-group/field-group.min.css";
import {FieldGroup} from "@fremtind/jkl-field-group-react";

import "@fremtind/jkl-text-input/text-input.min.css";
import {TextInput} from "@fremtind/jkl-text-input-react";

export const FieldGroupDemo = () => <FieldGroup legend="Personlig informasjon">
    <TextInput variant="small" label="Fornavn" />
    <TextInput variant="small" label="Etternavn" />
    <TextInput type="number" variant="small" label="Fødselsnummer" />
</FieldGroup>