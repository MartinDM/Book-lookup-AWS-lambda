module.exports = {
  '[project]/.next-internal/server/app/api/author/route/actions.js [app-rsc] (server actions loader, ecmascript)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
      }
    },
  '[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-route-turbo.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-route-turbo.runtime.dev.js'),
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/@opentelemetry/api',
          () => require('next/dist/compiled/@opentelemetry/api'),
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js'),
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-unit-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-unit-async-storage.external.js'),
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-async-storage.external.js'),
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)':
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/after-task-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/after-task-async-storage.external.js'),
        );

        module.exports = mod;
      }
    },
  '[project]/src/app/api/author/route.ts [app-route] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        GET: () => GET,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/server.js [app-route] (ecmascript)',
        );
      async function GET(request) {
        // Call  deployed Lambda endpoint
        const { searchParams } = new URL(request.url);
        const author = searchParams.get('author') || '';
        const apiUrl = `https://37ey6hgnp4.execute-api.eu-west-2.amazonaws.com/?author=${encodeURIComponent(author)}`;
        try {
          const res = await fetch(apiUrl);
          if (!res.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
              'NextResponse'
            ].json(
              {
                error: 'Failed to fetch external API',
              },
              {
                status: res.status,
              },
            );
          }
          const data = await res.json();
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            'NextResponse'
          ].json(data);
        } catch (error) {
          return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[
            'NextResponse'
          ].json(
            {
              error: 'Error calling external API',
            },
            {
              status: 500,
            },
          );
        }
      }
    }
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__7b9a325b._.js.map
