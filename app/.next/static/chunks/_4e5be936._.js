(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/components/ui/button.tsx [app-client] (ecmascript)': (
      __turbopack_context__,
    ) => {
      'use strict';

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          Button: () => Button,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$center$2f$absolute$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/center/absolute-center.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/button/button.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$span$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/box/span.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/spinner/spinner.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        const Button = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'forwardRef'
        ])(
          (_c = function Button(props, ref) {
            const { loading, disabled, loadingText, children, ...rest } = props;
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'Button'
              ],
              {
                disabled: loading || disabled,
                ref: ref,
                ...rest,
                children:
                  loading && !loadingText
                    ? /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'Fragment'
                        ],
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$center$2f$absolute$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'AbsoluteCenter'
                              ],
                              {
                                display: 'inline-flex',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'Spinner'
                                  ],
                                  {
                                    size: 'inherit',
                                    color: 'inherit',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/components/ui/button.tsx',
                                    lineNumber: 25,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/ui/button.tsx',
                                lineNumber: 24,
                                columnNumber: 13,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$box$2f$span$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'Span'
                              ],
                              {
                                opacity: 0,
                                children: children,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/ui/button.tsx',
                                lineNumber: 27,
                                columnNumber: 13,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                      )
                    : loading && loadingText
                      ? /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'Fragment'
                          ],
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$spinner$2f$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'Spinner'
                                ],
                                {
                                  size: 'inherit',
                                  color: 'inherit',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/components/ui/button.tsx',
                                  lineNumber: 31,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              loadingText,
                            ],
                          },
                          void 0,
                          true,
                        )
                      : children,
              },
              void 0,
              false,
              {
                fileName: '[project]/src/components/ui/button.tsx',
                lineNumber: 21,
                columnNumber: 7,
              },
              this,
            );
          }),
        );
        _c1 = Button;
        var _c, _c1;
        __turbopack_context__.k.register(_c, 'Button$React.forwardRef');
        __turbopack_context__.k.register(_c1, 'Button');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[project]/src/app/page.tsx [app-client] (ecmascript)': (
      __turbopack_context__,
    ) => {
      'use strict';

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => Home,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ui/button.tsx [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <export * as Field>',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/input/input.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$typography$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@chakra-ui/react/dist/esm/components/typography/text.js [app-client] (ecmascript)',
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        function Home() {
          _s();
          const [searchTerm, setSearchTerm] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])('');
          async function fetchAuthors(searchTerm) {
            console.log('submitted');
            const res = await fetch(
              `https://37ey6hgnp4.execute-api.eu-west-2.amazonaws.com/?author=${encodeURIComponent(searchTerm)}`,
            );
            const data = await res.json();
            console.log(data);
            // Optionally, setAuthors(data.docs || []);
            return data;
          }
          const handleSubmit = async (e) => {
            e.preventDefault();
            await fetchAuthors(searchTerm);
          };
          const [authors, setAuthors] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const [books, setBooks] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'main',
            {
              className: 'flex justify-center items-center min-h-screen',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    'text-center grid grid-cols-2 gap-8 w-full max-w-4xl p-3',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'form',
                      {
                        onSubmit: handleSubmit,
                        className: 'content-center flex flex-col gap-4',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__[
                              'Field'
                            ].Root,
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__[
                                    'Field'
                                  ].Label,
                                  {
                                    className: 'text-cyan-300 text-center',
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$typography$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'Text'
                                      ],
                                      {
                                        fontWeight: 'normal',
                                        textStyle: 'md',
                                        children: 'Search for a Book',
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: '[project]/src/app/page.tsx',
                                        lineNumber: 32,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/src/app/page.tsx',
                                    lineNumber: 31,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$input$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'Input'
                                  ],
                                  {
                                    name: 'name',
                                    value: searchTerm,
                                    onChange: (e) =>
                                      setSearchTerm(e.target.value),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: '[project]/src/app/page.tsx',
                                    lineNumber: 36,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: '[project]/src/app/page.tsx',
                              lineNumber: 30,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'Button'
                            ],
                            {
                              size: 'xs',
                              children: 'Search',
                            },
                            void 0,
                            false,
                            {
                              fileName: '[project]/src/app/page.tsx',
                              lineNumber: 42,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/src/app/page.tsx',
                        lineNumber: 29,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'border-l-2 border-cyan-500 pl-8',
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'h2',
                          {
                            className: 'font-bold text-cyan-500',
                            children: 'Authors',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/app/page.tsx',
                            lineNumber: 45,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/app/page.tsx',
                        lineNumber: 44,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/src/app/page.tsx',
                  lineNumber: 28,
                  columnNumber: 7,
                },
                this,
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/src/app/page.tsx',
              lineNumber: 27,
              columnNumber: 5,
            },
            this,
          );
        }
        _s(Home, 'KPT+YRvGwo3wyU+KccI+x966xtI=');
        _c = Home;
        var _c;
        __turbopack_context__.k.register(_c, 'Home');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <locals>':
      (__turbopack_context__) => {
        'use strict';

        var { g: global, __dirname } = __turbopack_context__;
        {
          __turbopack_context__.s({});
          ('use strict');
        }
      },
    '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <module evaluation>':
      (__turbopack_context__) => {
        'use strict';

        var { g: global, __dirname } = __turbopack_context__;
        {
          __turbopack_context__.s({});
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <locals>',
            );
        }
      },
    '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <exports>':
      (__turbopack_context__) => {
        'use strict';

        var { g: global, __dirname } = __turbopack_context__;
        {
          __turbopack_context__.s({
            ErrorIcon: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldErrorIcon'
              ],
            ErrorText: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldErrorText'
              ],
            HelperText: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldHelperText'
              ],
            Label: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldLabel'
              ],
            PropsProvider: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldPropsProvider'
              ],
            RequiredIndicator: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldRequiredIndicator'
              ],
            Root: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'FieldRoot'
              ],
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/field.js [app-client] (ecmascript)',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <locals>',
            );
        }
      },
    '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { g: global, __dirname } = __turbopack_context__;
        {
          __turbopack_context__.s({
            ErrorIcon: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'ErrorIcon'
              ],
            ErrorText: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'ErrorText'
              ],
            HelperText: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'HelperText'
              ],
            Label: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'Label'
              ],
            PropsProvider: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'PropsProvider'
              ],
            RequiredIndicator: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'RequiredIndicator'
              ],
            Root: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__[
                'Root'
              ],
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <module evaluation>',
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <exports>',
            );
        }
      },
    '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript) <export * as Field>':
      (__turbopack_context__) => {
        'use strict';

        var { g: global, __dirname } = __turbopack_context__;
        {
          __turbopack_context__.s({
            Field: () =>
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$components$2f$field$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js [app-client] (ecmascript)',
            );
        }
      },
  },
]);

//# sourceMappingURL=_4e5be936._.js.map
