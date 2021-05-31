import { Routes } from '@angular/router';
import { ColorThiefComponent } from 'src/app/features/toolbox/components/color-thief/color-thief.component';
import { ToolboxComponent } from 'src/app/features/toolbox/toolbox.component';
import { COLOR_THIEF_ROUTE, TOOLBOX_ROUTE } from './toolbox.seo';

export const toolboxRoutes: Routes = [
    { path: TOOLBOX_ROUTE.base, component: ToolboxComponent, },
    { path: TOOLBOX_ROUTE.base + '/' + COLOR_THIEF_ROUTE.base, component: ColorThiefComponent },
];
