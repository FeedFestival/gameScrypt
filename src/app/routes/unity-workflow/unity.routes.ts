import { Routes } from '@angular/router';
import { UnityWorkflowComponent } from 'src/app/features/unity-workflow/unity-workflow.component';
import { UNITY_ROUTE } from './unity.seo';

export const unityRoutes: Routes = [
    { path: UNITY_ROUTE.base, component: UnityWorkflowComponent },
];
