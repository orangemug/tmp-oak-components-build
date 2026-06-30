import { useContext } from 'react';
import { accordionContext } from './InternalAccordionProvider.js';

var useAccordionContext = function () {
    var accordionValue = useContext(accordionContext);
    if (!accordionValue) {
        throw new Error("useAccordionContext() called outside of menu provider");
    }
    return accordionValue;
};

export { useAccordionContext as default };
