import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import WcDemoClassTemplate from "./generated/templates/WcDemoClassTemplate.lit.js";

// Styles
import WcDemoClassCss from "./generated/themes/WcDemoClass.css.js";

import { PLEASE_WAIT } from "./generated/i18n/i18n-defaults.js";

/**
 * @public
 */
const metadata = {
	tag: "wc-demo-class",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>wc-demo-class</code> component is a demo component that displays some text.
 *
 * @constructor
 * @alias demo.components.WcDemoClass
 * @extends sap.ui.webc.base.UI5Element
 * @tagname wc-demo-class
 * @public
 */
class WcDemoClass extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return WcDemoClassTemplate;
	}

	static get styles() {
		return WcDemoClassCss;
	}

	static async onDefine() {
		WcDemoClass.i18nBundle = await getI18nBundle("teschtwebcomphenrik12may1338");
	}

	get pleaseWaitText() {
		return WcDemoClass.i18nBundle.getText(PLEASE_WAIT);
	}
}

WcDemoClass.define();

export default WcDemoClass;
