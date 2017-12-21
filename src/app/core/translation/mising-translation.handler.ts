import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export const MISSING_TRANSLATE = 'MT';

export class IndeMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams) {
		console.error('Missing translation key:', params.key);
		return `${MISSING_TRANSLATE} ${params.key}`;
	}
}
