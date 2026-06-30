import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import '../../images-and-icons/OakAspectRatio/OakAspectRatio.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import '../../images-and-icons/OakImage/OakImage.js';
import '../../images-and-icons/OakSvg/OakSvg.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import '../../../styles/theme/color.js';
import '../../../styles/theme/typography.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseFontSize } from '../../../styles/helpers/parseTypography.js';
import '../../../styles/utils/responsiveStyle.js';
import '../../layout-and-structure/OakFlex/OakFlex.js';
import '../../layout-and-structure/OakGrid/OakGrid.js';
import '../../layout-and-structure/OakGridArea/OakGridArea.js';
import '../../layout-and-structure/OakMaxWidth/OakMaxWidth.js';
import '../../layout-and-structure/OakAccordion/OakAccordion.js';
import '../../internal-components/InternalChevronAccordion/InternalChevronAccordion.js';
import '../../layout-and-structure/OakCollapsibleContent/OakCollapsibleContent.js';
import { OakLink } from '../OakLink/OakLink.js';

var BreadcrumbsUl = styled("ul")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n  padding: ", ";\n  list-style: none;\n  display: flex;\n  gap: ", ";\n  align-items: center;\n  font-size: ", ";\n  font-weight: ", ";\n  flex-wrap: wrap;\n"], ["\n  margin: ", ";\n  padding: ", ";\n  list-style: none;\n  display: flex;\n  gap: ", ";\n  align-items: center;\n  font-size: ", ";\n  font-weight: ", ";\n  flex-wrap: wrap;\n"])), parseSpacing("spacing-0"), parseSpacing("spacing-0"), parseSpacing("spacing-8"), parseFontSize("body-2"), parseFontSize("body-2"));
var BreadcrumbsLi = styled("li")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  gap: ", ";\n  align-items: center;\n  flex: 0;\n  max-width: 100%;\n"], ["\n  display: flex;\n  gap: ", ";\n  align-items: center;\n  flex: 0;\n  max-width: 100%;\n"])), parseSpacing("spacing-8"));
function OakBreadcrumbText(props) {
    return (React__default.createElement(OakBox, __assign({ "$whiteSpace": "nowrap", "$textOverflow": "ellipsis", "$minWidth": "spacing-0", "$overflow": "hidden" }, props), props.children));
}
/**
 * The breadcrumb component helps users to understand where they are within a website’s structure and move between levels.
 */
var OakBreadcrumbs = function (_a) {
    var breadcrumbs = _a.breadcrumbs;
    return (React__default.createElement(OakBox, { as: "nav", "aria-label": "Breadcrumb", "$color": "text-primary" },
        React__default.createElement(BreadcrumbsUl, null, breadcrumbs.map(function (breadcrumb, breadcrumbIndex) {
            // Last element doesn't have a "href" because it's the current page (typesafe)
            var isLast = !("href" in breadcrumb);
            return (React__default.createElement(BreadcrumbsLi, { key: "".concat(breadcrumb.text) },
                breadcrumbIndex > 0 && (React__default.createElement(OakIcon, { "$height": "spacing-20", "$width": "spacing-20", iconName: "chevron-right" })),
                isLast && (React__default.createElement(OakBreadcrumbText, { "aria-current": "page" }, breadcrumb.text)),
                !isLast && (React__default.createElement(OakLink, { variant: "secondary", href: breadcrumb.href, style: { overflow: "hidden" } },
                    React__default.createElement(OakBreadcrumbText, null, breadcrumb.text)))));
        }))));
};
var templateObject_1, templateObject_2;

export { OakBreadcrumbs };
