import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export const CreateTranslateLoader = (http: HttpClient) => {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

