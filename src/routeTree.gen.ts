/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as DashboardProjectsImport } from './routes/dashboard.projects'
import { Route as DashboardPostsImport } from './routes/dashboard.posts'
import { Route as DashboardBackupsImport } from './routes/dashboard.backups'
import { Route as DashboardAnalyticsImport } from './routes/dashboard.analytics'
import { Route as DashboardSettingsIndexImport } from './routes/dashboard.settings.index'
import { Route as DashboardSchedulingIndexImport } from './routes/dashboard.scheduling.index'
import { Route as DashboardProjectsIndexImport } from './routes/dashboard.projects.index'
import { Route as DashboardPostsIndexImport } from './routes/dashboard.posts.index'
import { Route as DashboardSettingsStorageImport } from './routes/dashboard.settings.storage'
import { Route as DashboardSettingsSecurityImport } from './routes/dashboard.settings.security'
import { Route as DashboardSchedulingRetentionImport } from './routes/dashboard.scheduling.retention'
import { Route as DashboardSchedulingNotificationsImport } from './routes/dashboard.scheduling.notifications'
import { Route as DashboardProjectsNewImport } from './routes/dashboard.projects.new'
import { Route as DashboardProjectsImportImport } from './routes/dashboard.projects.import'
import { Route as DashboardPostsPostIdImport } from './routes/dashboard.posts.$postId'
import { Route as DashboardBackupsScheduledImport } from './routes/dashboard.backups.scheduled'
import { Route as DashboardBackupsRestoreImport } from './routes/dashboard.backups.restore'
import { Route as DashboardBackupsManualImport } from './routes/dashboard.backups.manual'
import { Route as DashboardBackupsHistoryImport } from './routes/dashboard.backups.history'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardProjectsRoute = DashboardProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardPostsRoute = DashboardPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardBackupsRoute = DashboardBackupsImport.update({
  id: '/backups',
  path: '/backups',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardAnalyticsRoute = DashboardAnalyticsImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardSettingsIndexRoute = DashboardSettingsIndexImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardSchedulingIndexRoute = DashboardSchedulingIndexImport.update({
  id: '/scheduling/',
  path: '/scheduling/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardProjectsIndexRoute = DashboardProjectsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardProjectsRoute,
} as any)

const DashboardPostsIndexRoute = DashboardPostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardPostsRoute,
} as any)

const DashboardSettingsStorageRoute = DashboardSettingsStorageImport.update({
  id: '/settings/storage',
  path: '/settings/storage',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardSettingsSecurityRoute = DashboardSettingsSecurityImport.update({
  id: '/settings/security',
  path: '/settings/security',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardSchedulingRetentionRoute =
  DashboardSchedulingRetentionImport.update({
    id: '/scheduling/retention',
    path: '/scheduling/retention',
    getParentRoute: () => DashboardRoute,
  } as any)

const DashboardSchedulingNotificationsRoute =
  DashboardSchedulingNotificationsImport.update({
    id: '/scheduling/notifications',
    path: '/scheduling/notifications',
    getParentRoute: () => DashboardRoute,
  } as any)

const DashboardProjectsNewRoute = DashboardProjectsNewImport.update({
  id: '/new',
  path: '/new',
  getParentRoute: () => DashboardProjectsRoute,
} as any)

const DashboardProjectsImportRoute = DashboardProjectsImportImport.update({
  id: '/import',
  path: '/import',
  getParentRoute: () => DashboardProjectsRoute,
} as any)

const DashboardPostsPostIdRoute = DashboardPostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => DashboardPostsRoute,
} as any)

const DashboardBackupsScheduledRoute = DashboardBackupsScheduledImport.update({
  id: '/scheduled',
  path: '/scheduled',
  getParentRoute: () => DashboardBackupsRoute,
} as any)

const DashboardBackupsRestoreRoute = DashboardBackupsRestoreImport.update({
  id: '/restore',
  path: '/restore',
  getParentRoute: () => DashboardBackupsRoute,
} as any)

const DashboardBackupsManualRoute = DashboardBackupsManualImport.update({
  id: '/manual',
  path: '/manual',
  getParentRoute: () => DashboardBackupsRoute,
} as any)

const DashboardBackupsHistoryRoute = DashboardBackupsHistoryImport.update({
  id: '/history',
  path: '/history',
  getParentRoute: () => DashboardBackupsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/analytics': {
      id: '/dashboard/analytics'
      path: '/analytics'
      fullPath: '/dashboard/analytics'
      preLoaderRoute: typeof DashboardAnalyticsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/backups': {
      id: '/dashboard/backups'
      path: '/backups'
      fullPath: '/dashboard/backups'
      preLoaderRoute: typeof DashboardBackupsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/posts': {
      id: '/dashboard/posts'
      path: '/posts'
      fullPath: '/dashboard/posts'
      preLoaderRoute: typeof DashboardPostsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/projects': {
      id: '/dashboard/projects'
      path: '/projects'
      fullPath: '/dashboard/projects'
      preLoaderRoute: typeof DashboardProjectsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/backups/history': {
      id: '/dashboard/backups/history'
      path: '/history'
      fullPath: '/dashboard/backups/history'
      preLoaderRoute: typeof DashboardBackupsHistoryImport
      parentRoute: typeof DashboardBackupsImport
    }
    '/dashboard/backups/manual': {
      id: '/dashboard/backups/manual'
      path: '/manual'
      fullPath: '/dashboard/backups/manual'
      preLoaderRoute: typeof DashboardBackupsManualImport
      parentRoute: typeof DashboardBackupsImport
    }
    '/dashboard/backups/restore': {
      id: '/dashboard/backups/restore'
      path: '/restore'
      fullPath: '/dashboard/backups/restore'
      preLoaderRoute: typeof DashboardBackupsRestoreImport
      parentRoute: typeof DashboardBackupsImport
    }
    '/dashboard/backups/scheduled': {
      id: '/dashboard/backups/scheduled'
      path: '/scheduled'
      fullPath: '/dashboard/backups/scheduled'
      preLoaderRoute: typeof DashboardBackupsScheduledImport
      parentRoute: typeof DashboardBackupsImport
    }
    '/dashboard/posts/$postId': {
      id: '/dashboard/posts/$postId'
      path: '/$postId'
      fullPath: '/dashboard/posts/$postId'
      preLoaderRoute: typeof DashboardPostsPostIdImport
      parentRoute: typeof DashboardPostsImport
    }
    '/dashboard/projects/import': {
      id: '/dashboard/projects/import'
      path: '/import'
      fullPath: '/dashboard/projects/import'
      preLoaderRoute: typeof DashboardProjectsImportImport
      parentRoute: typeof DashboardProjectsImport
    }
    '/dashboard/projects/new': {
      id: '/dashboard/projects/new'
      path: '/new'
      fullPath: '/dashboard/projects/new'
      preLoaderRoute: typeof DashboardProjectsNewImport
      parentRoute: typeof DashboardProjectsImport
    }
    '/dashboard/scheduling/notifications': {
      id: '/dashboard/scheduling/notifications'
      path: '/scheduling/notifications'
      fullPath: '/dashboard/scheduling/notifications'
      preLoaderRoute: typeof DashboardSchedulingNotificationsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/scheduling/retention': {
      id: '/dashboard/scheduling/retention'
      path: '/scheduling/retention'
      fullPath: '/dashboard/scheduling/retention'
      preLoaderRoute: typeof DashboardSchedulingRetentionImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/settings/security': {
      id: '/dashboard/settings/security'
      path: '/settings/security'
      fullPath: '/dashboard/settings/security'
      preLoaderRoute: typeof DashboardSettingsSecurityImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/settings/storage': {
      id: '/dashboard/settings/storage'
      path: '/settings/storage'
      fullPath: '/dashboard/settings/storage'
      preLoaderRoute: typeof DashboardSettingsStorageImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/posts/': {
      id: '/dashboard/posts/'
      path: '/'
      fullPath: '/dashboard/posts/'
      preLoaderRoute: typeof DashboardPostsIndexImport
      parentRoute: typeof DashboardPostsImport
    }
    '/dashboard/projects/': {
      id: '/dashboard/projects/'
      path: '/'
      fullPath: '/dashboard/projects/'
      preLoaderRoute: typeof DashboardProjectsIndexImport
      parentRoute: typeof DashboardProjectsImport
    }
    '/dashboard/scheduling/': {
      id: '/dashboard/scheduling/'
      path: '/scheduling'
      fullPath: '/dashboard/scheduling'
      preLoaderRoute: typeof DashboardSchedulingIndexImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/settings/': {
      id: '/dashboard/settings/'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsIndexImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

interface DashboardBackupsRouteChildren {
  DashboardBackupsHistoryRoute: typeof DashboardBackupsHistoryRoute
  DashboardBackupsManualRoute: typeof DashboardBackupsManualRoute
  DashboardBackupsRestoreRoute: typeof DashboardBackupsRestoreRoute
  DashboardBackupsScheduledRoute: typeof DashboardBackupsScheduledRoute
}

const DashboardBackupsRouteChildren: DashboardBackupsRouteChildren = {
  DashboardBackupsHistoryRoute: DashboardBackupsHistoryRoute,
  DashboardBackupsManualRoute: DashboardBackupsManualRoute,
  DashboardBackupsRestoreRoute: DashboardBackupsRestoreRoute,
  DashboardBackupsScheduledRoute: DashboardBackupsScheduledRoute,
}

const DashboardBackupsRouteWithChildren =
  DashboardBackupsRoute._addFileChildren(DashboardBackupsRouteChildren)

interface DashboardPostsRouteChildren {
  DashboardPostsPostIdRoute: typeof DashboardPostsPostIdRoute
  DashboardPostsIndexRoute: typeof DashboardPostsIndexRoute
}

const DashboardPostsRouteChildren: DashboardPostsRouteChildren = {
  DashboardPostsPostIdRoute: DashboardPostsPostIdRoute,
  DashboardPostsIndexRoute: DashboardPostsIndexRoute,
}

const DashboardPostsRouteWithChildren = DashboardPostsRoute._addFileChildren(
  DashboardPostsRouteChildren,
)

interface DashboardProjectsRouteChildren {
  DashboardProjectsImportRoute: typeof DashboardProjectsImportRoute
  DashboardProjectsNewRoute: typeof DashboardProjectsNewRoute
  DashboardProjectsIndexRoute: typeof DashboardProjectsIndexRoute
}

const DashboardProjectsRouteChildren: DashboardProjectsRouteChildren = {
  DashboardProjectsImportRoute: DashboardProjectsImportRoute,
  DashboardProjectsNewRoute: DashboardProjectsNewRoute,
  DashboardProjectsIndexRoute: DashboardProjectsIndexRoute,
}

const DashboardProjectsRouteWithChildren =
  DashboardProjectsRoute._addFileChildren(DashboardProjectsRouteChildren)

interface DashboardRouteChildren {
  DashboardAnalyticsRoute: typeof DashboardAnalyticsRoute
  DashboardBackupsRoute: typeof DashboardBackupsRouteWithChildren
  DashboardPostsRoute: typeof DashboardPostsRouteWithChildren
  DashboardProjectsRoute: typeof DashboardProjectsRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardSchedulingNotificationsRoute: typeof DashboardSchedulingNotificationsRoute
  DashboardSchedulingRetentionRoute: typeof DashboardSchedulingRetentionRoute
  DashboardSettingsSecurityRoute: typeof DashboardSettingsSecurityRoute
  DashboardSettingsStorageRoute: typeof DashboardSettingsStorageRoute
  DashboardSchedulingIndexRoute: typeof DashboardSchedulingIndexRoute
  DashboardSettingsIndexRoute: typeof DashboardSettingsIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardAnalyticsRoute: DashboardAnalyticsRoute,
  DashboardBackupsRoute: DashboardBackupsRouteWithChildren,
  DashboardPostsRoute: DashboardPostsRouteWithChildren,
  DashboardProjectsRoute: DashboardProjectsRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardSchedulingNotificationsRoute: DashboardSchedulingNotificationsRoute,
  DashboardSchedulingRetentionRoute: DashboardSchedulingRetentionRoute,
  DashboardSettingsSecurityRoute: DashboardSettingsSecurityRoute,
  DashboardSettingsStorageRoute: DashboardSettingsStorageRoute,
  DashboardSchedulingIndexRoute: DashboardSchedulingIndexRoute,
  DashboardSettingsIndexRoute: DashboardSettingsIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/backups': typeof DashboardBackupsRouteWithChildren
  '/dashboard/posts': typeof DashboardPostsRouteWithChildren
  '/dashboard/projects': typeof DashboardProjectsRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/backups/history': typeof DashboardBackupsHistoryRoute
  '/dashboard/backups/manual': typeof DashboardBackupsManualRoute
  '/dashboard/backups/restore': typeof DashboardBackupsRestoreRoute
  '/dashboard/backups/scheduled': typeof DashboardBackupsScheduledRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/projects/import': typeof DashboardProjectsImportRoute
  '/dashboard/projects/new': typeof DashboardProjectsNewRoute
  '/dashboard/scheduling/notifications': typeof DashboardSchedulingNotificationsRoute
  '/dashboard/scheduling/retention': typeof DashboardSchedulingRetentionRoute
  '/dashboard/settings/security': typeof DashboardSettingsSecurityRoute
  '/dashboard/settings/storage': typeof DashboardSettingsStorageRoute
  '/dashboard/posts/': typeof DashboardPostsIndexRoute
  '/dashboard/projects/': typeof DashboardProjectsIndexRoute
  '/dashboard/scheduling': typeof DashboardSchedulingIndexRoute
  '/dashboard/settings': typeof DashboardSettingsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/backups': typeof DashboardBackupsRouteWithChildren
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/backups/history': typeof DashboardBackupsHistoryRoute
  '/dashboard/backups/manual': typeof DashboardBackupsManualRoute
  '/dashboard/backups/restore': typeof DashboardBackupsRestoreRoute
  '/dashboard/backups/scheduled': typeof DashboardBackupsScheduledRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/projects/import': typeof DashboardProjectsImportRoute
  '/dashboard/projects/new': typeof DashboardProjectsNewRoute
  '/dashboard/scheduling/notifications': typeof DashboardSchedulingNotificationsRoute
  '/dashboard/scheduling/retention': typeof DashboardSchedulingRetentionRoute
  '/dashboard/settings/security': typeof DashboardSettingsSecurityRoute
  '/dashboard/settings/storage': typeof DashboardSettingsStorageRoute
  '/dashboard/posts': typeof DashboardPostsIndexRoute
  '/dashboard/projects': typeof DashboardProjectsIndexRoute
  '/dashboard/scheduling': typeof DashboardSchedulingIndexRoute
  '/dashboard/settings': typeof DashboardSettingsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/backups': typeof DashboardBackupsRouteWithChildren
  '/dashboard/posts': typeof DashboardPostsRouteWithChildren
  '/dashboard/projects': typeof DashboardProjectsRouteWithChildren
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/backups/history': typeof DashboardBackupsHistoryRoute
  '/dashboard/backups/manual': typeof DashboardBackupsManualRoute
  '/dashboard/backups/restore': typeof DashboardBackupsRestoreRoute
  '/dashboard/backups/scheduled': typeof DashboardBackupsScheduledRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/projects/import': typeof DashboardProjectsImportRoute
  '/dashboard/projects/new': typeof DashboardProjectsNewRoute
  '/dashboard/scheduling/notifications': typeof DashboardSchedulingNotificationsRoute
  '/dashboard/scheduling/retention': typeof DashboardSchedulingRetentionRoute
  '/dashboard/settings/security': typeof DashboardSettingsSecurityRoute
  '/dashboard/settings/storage': typeof DashboardSettingsStorageRoute
  '/dashboard/posts/': typeof DashboardPostsIndexRoute
  '/dashboard/projects/': typeof DashboardProjectsIndexRoute
  '/dashboard/scheduling/': typeof DashboardSchedulingIndexRoute
  '/dashboard/settings/': typeof DashboardSettingsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/dashboard/analytics'
    | '/dashboard/backups'
    | '/dashboard/posts'
    | '/dashboard/projects'
    | '/dashboard/'
    | '/dashboard/backups/history'
    | '/dashboard/backups/manual'
    | '/dashboard/backups/restore'
    | '/dashboard/backups/scheduled'
    | '/dashboard/posts/$postId'
    | '/dashboard/projects/import'
    | '/dashboard/projects/new'
    | '/dashboard/scheduling/notifications'
    | '/dashboard/scheduling/retention'
    | '/dashboard/settings/security'
    | '/dashboard/settings/storage'
    | '/dashboard/posts/'
    | '/dashboard/projects/'
    | '/dashboard/scheduling'
    | '/dashboard/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard/analytics'
    | '/dashboard/backups'
    | '/dashboard'
    | '/dashboard/backups/history'
    | '/dashboard/backups/manual'
    | '/dashboard/backups/restore'
    | '/dashboard/backups/scheduled'
    | '/dashboard/posts/$postId'
    | '/dashboard/projects/import'
    | '/dashboard/projects/new'
    | '/dashboard/scheduling/notifications'
    | '/dashboard/scheduling/retention'
    | '/dashboard/settings/security'
    | '/dashboard/settings/storage'
    | '/dashboard/posts'
    | '/dashboard/projects'
    | '/dashboard/scheduling'
    | '/dashboard/settings'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/dashboard/analytics'
    | '/dashboard/backups'
    | '/dashboard/posts'
    | '/dashboard/projects'
    | '/dashboard/'
    | '/dashboard/backups/history'
    | '/dashboard/backups/manual'
    | '/dashboard/backups/restore'
    | '/dashboard/backups/scheduled'
    | '/dashboard/posts/$postId'
    | '/dashboard/projects/import'
    | '/dashboard/projects/new'
    | '/dashboard/scheduling/notifications'
    | '/dashboard/scheduling/retention'
    | '/dashboard/settings/security'
    | '/dashboard/settings/storage'
    | '/dashboard/posts/'
    | '/dashboard/projects/'
    | '/dashboard/scheduling/'
    | '/dashboard/settings/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/analytics",
        "/dashboard/backups",
        "/dashboard/posts",
        "/dashboard/projects",
        "/dashboard/",
        "/dashboard/scheduling/notifications",
        "/dashboard/scheduling/retention",
        "/dashboard/settings/security",
        "/dashboard/settings/storage",
        "/dashboard/scheduling/",
        "/dashboard/settings/"
      ]
    },
    "/dashboard/analytics": {
      "filePath": "dashboard.analytics.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/backups": {
      "filePath": "dashboard.backups.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/backups/history",
        "/dashboard/backups/manual",
        "/dashboard/backups/restore",
        "/dashboard/backups/scheduled"
      ]
    },
    "/dashboard/posts": {
      "filePath": "dashboard.posts.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/posts/$postId",
        "/dashboard/posts/"
      ]
    },
    "/dashboard/projects": {
      "filePath": "dashboard.projects.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/projects/import",
        "/dashboard/projects/new",
        "/dashboard/projects/"
      ]
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/backups/history": {
      "filePath": "dashboard.backups.history.tsx",
      "parent": "/dashboard/backups"
    },
    "/dashboard/backups/manual": {
      "filePath": "dashboard.backups.manual.tsx",
      "parent": "/dashboard/backups"
    },
    "/dashboard/backups/restore": {
      "filePath": "dashboard.backups.restore.tsx",
      "parent": "/dashboard/backups"
    },
    "/dashboard/backups/scheduled": {
      "filePath": "dashboard.backups.scheduled.tsx",
      "parent": "/dashboard/backups"
    },
    "/dashboard/posts/$postId": {
      "filePath": "dashboard.posts.$postId.tsx",
      "parent": "/dashboard/posts"
    },
    "/dashboard/projects/import": {
      "filePath": "dashboard.projects.import.tsx",
      "parent": "/dashboard/projects"
    },
    "/dashboard/projects/new": {
      "filePath": "dashboard.projects.new.tsx",
      "parent": "/dashboard/projects"
    },
    "/dashboard/scheduling/notifications": {
      "filePath": "dashboard.scheduling.notifications.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/scheduling/retention": {
      "filePath": "dashboard.scheduling.retention.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/settings/security": {
      "filePath": "dashboard.settings.security.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/settings/storage": {
      "filePath": "dashboard.settings.storage.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/posts/": {
      "filePath": "dashboard.posts.index.tsx",
      "parent": "/dashboard/posts"
    },
    "/dashboard/projects/": {
      "filePath": "dashboard.projects.index.tsx",
      "parent": "/dashboard/projects"
    },
    "/dashboard/scheduling/": {
      "filePath": "dashboard.scheduling.index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/settings/": {
      "filePath": "dashboard.settings.index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
