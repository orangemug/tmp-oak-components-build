import React__default from 'react';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';

var OakPupilJourneyListCounter = function (props) {
    var count = props.count, countHeader = props.countHeader, tag = props.tag;
    return (React__default.createElement(OakHeading, { tag: tag, "$font": ["heading-6", "heading-6"] },
        countHeader,
        React__default.createElement(OakSpan, { "$font": "heading-light-6" }, " (".concat(count, ")"))));
};

export { OakPupilJourneyListCounter };
