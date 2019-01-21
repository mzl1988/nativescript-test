/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompilerConfig } from '../config';
import { ViewEncapsulation } from '../core';
import { DirectiveNormalizer } from '../directive_normalizer';
import { DirectiveResolver } from '../directive_resolver';
import { Lexer } from '../expression_parser/lexer';
import { Parser } from '../expression_parser/parser';
import { I18NHtmlParser } from '../i18n/i18n_html_parser';
import { InjectableCompiler } from '../injectable_compiler';
import { CompileMetadataResolver } from '../metadata_resolver';
import { HtmlParser } from '../ml_parser/html_parser';
import { NgModuleCompiler } from '../ng_module_compiler';
import { NgModuleResolver } from '../ng_module_resolver';
import { TypeScriptEmitter } from '../output/ts_emitter';
import { PipeResolver } from '../pipe_resolver';
import { DomElementSchemaRegistry } from '../schema/dom_element_schema_registry';
import { StyleCompiler } from '../style_compiler';
import { TemplateParser } from '../template_parser/template_parser';
import { syntaxError } from '../util';
import { TypeCheckCompiler } from '../view_compiler/type_check_compiler';
import { ViewCompiler } from '../view_compiler/view_compiler';
import { AotCompiler } from './compiler';
import { StaticReflector } from './static_reflector';
import { StaticSymbolCache } from './static_symbol';
import { StaticSymbolResolver } from './static_symbol_resolver';
import { AotSummaryResolver } from './summary_resolver';
export function createAotUrlResolver(host) {
    return {
        resolve: (basePath, url) => {
            const filePath = host.resourceNameToFileName(url, basePath);
            if (!filePath) {
                throw syntaxError(`Couldn't resolve resource ${url} from ${basePath}`);
            }
            return filePath;
        }
    };
}
/**
 * Creates a new AotCompiler based on options and a host.
 */
export function createAotCompiler(compilerHost, options, errorCollector) {
    let translations = options.translations || '';
    const urlResolver = createAotUrlResolver(compilerHost);
    const symbolCache = new StaticSymbolCache();
    const summaryResolver = new AotSummaryResolver(compilerHost, symbolCache);
    const symbolResolver = new StaticSymbolResolver(compilerHost, symbolCache, summaryResolver);
    const staticReflector = new StaticReflector(summaryResolver, symbolResolver, [], [], errorCollector);
    let htmlParser;
    if (!!options.enableIvy) {
        // Ivy handles i18n at the compiler level so we must use a regular parser
        htmlParser = new HtmlParser();
    }
    else {
        htmlParser = new I18NHtmlParser(new HtmlParser(), translations, options.i18nFormat, options.missingTranslation, console);
    }
    const config = new CompilerConfig({
        defaultEncapsulation: ViewEncapsulation.Emulated,
        useJit: false,
        missingTranslation: options.missingTranslation,
        preserveWhitespaces: options.preserveWhitespaces,
        strictInjectionParameters: options.strictInjectionParameters,
    });
    const normalizer = new DirectiveNormalizer({ get: (url) => compilerHost.loadResource(url) }, urlResolver, htmlParser, config);
    const expressionParser = new Parser(new Lexer());
    const elementSchemaRegistry = new DomElementSchemaRegistry();
    const tmplParser = new TemplateParser(config, staticReflector, expressionParser, elementSchemaRegistry, htmlParser, console, []);
    const resolver = new CompileMetadataResolver(config, htmlParser, new NgModuleResolver(staticReflector), new DirectiveResolver(staticReflector), new PipeResolver(staticReflector), summaryResolver, elementSchemaRegistry, normalizer, console, symbolCache, staticReflector, errorCollector);
    // TODO(vicb): do not pass options.i18nFormat here
    const viewCompiler = new ViewCompiler(staticReflector);
    const typeCheckCompiler = new TypeCheckCompiler(options, staticReflector);
    const compiler = new AotCompiler(config, options, compilerHost, staticReflector, resolver, tmplParser, new StyleCompiler(urlResolver), viewCompiler, typeCheckCompiler, new NgModuleCompiler(staticReflector), new InjectableCompiler(staticReflector, !!options.enableIvy), new TypeScriptEmitter(), summaryResolver, symbolResolver);
    return { compiler, reflector: staticReflector };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3QvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBNkIsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9DQUFv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IEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZXJDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZU5vcm1hbGl6ZXJ9IGZyb20gJy4uL2RpcmVjdGl2ZV9ub3JtYWxpemVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4uL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5pbXBvcnQge0xleGVyfSBmcm9tICcuLi9leHByZXNzaW9uX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnLi4vZXhwcmVzc2lvbl9wYXJzZXIvcGFyc2VyJztcbmltcG9ydCB7STE4Tkh0bWxQYXJzZXJ9IGZyb20gJy4uL2kxOG4vaTE4bl9odG1sX3BhcnNlcic7XG5pbXBvcnQge0luamVjdGFibGVDb21waWxlcn0gZnJvbSAnLi4vaW5qZWN0YWJsZV9jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuLi9tZXRhZGF0YV9yZXNvbHZlcic7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge05nTW9kdWxlQ29tcGlsZXJ9IGZyb20gJy4uL25nX21vZHVsZV9jb21waWxlcic7XG5pbXBvcnQge05nTW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4uL25nX21vZHVsZV9yZXNvbHZlcic7XG5pbXBvcnQge1R5cGVTY3JpcHRFbWl0dGVyfSBmcm9tICcuLi9vdXRwdXQvdHNfZW1pdHRlcic7XG5pbXBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi4vcGlwZV9yZXNvbHZlcic7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi4vc2NoZW1hL2RvbV9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge1N0eWxlQ29tcGlsZXJ9IGZyb20gJy4uL3N0eWxlX2NvbXBpbGVyJztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJy4uL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtVcmxSZXNvbHZlcn0gZnJvbSAnLi4vdXJsX3Jlc29sdmVyJztcbmltcG9ydCB7c3ludGF4RXJyb3J9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHtUeXBlQ2hlY2tDb21waWxlcn0gZnJvbSAnLi4vdmlld19jb21waWxlci90eXBlX2NoZWNrX2NvbXBpbGVyJztcbmltcG9ydCB7Vmlld0NvbXBpbGVyfSBmcm9tICcuLi92aWV3X2NvbXBpbGVyL3ZpZXdfY29tcGlsZXInO1xuXG5pbXBvcnQge0FvdENvbXBpbGVyfSBmcm9tICcuL2NvbXBpbGVyJztcbmltcG9ydCB7QW90Q29tcGlsZXJIb3N0fSBmcm9tICcuL2NvbXBpbGVyX2hvc3QnO1xuaW1wb3J0IHtBb3RDb21waWxlck9wdGlvbnN9IGZyb20gJy4vY29tcGlsZXJfb3B0aW9ucyc7XG5pbXBvcnQge1N0YXRpY1JlZmxlY3Rvcn0gZnJvbSAnLi9zdGF0aWNfcmVmbGVjdG9yJztcbmltcG9ydCB7U3RhdGljU3ltYm9sLCBTdGF0aWNTeW1ib2xDYWNoZX0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7U3RhdGljU3ltYm9sUmVzb2x2ZXJ9IGZyb20gJy4vc3RhdGljX3N5bWJvbF9yZXNvbHZlcic7XG5pbXBvcnQge0FvdFN1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi9zdW1tYXJ5X3Jlc29sdmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFvdFVybFJlc29sdmVyKGhvc3Q6IHtcbiAgcmVzb3VyY2VOYW1lVG9GaWxlTmFtZShyZXNvdXJjZU5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xufSk6IFVybFJlc29sdmVyIHtcbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiAoYmFzZVBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gaG9zdC5yZXNvdXJjZU5hbWVUb0ZpbGVOYW1lKHVybCwgYmFzZVBhdGgpO1xuICAgICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihgQ291bGRuJ3QgcmVzb2x2ZSByZXNvdXJjZSAke3VybH0gZnJvbSAke2Jhc2VQYXRofWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEFvdENvbXBpbGVyIGJhc2VkIG9uIG9wdGlvbnMgYW5kIGEgaG9zdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFvdENvbXBpbGVyKFxuICAgIGNvbXBpbGVySG9zdDogQW90Q29tcGlsZXJIb3N0LCBvcHRpb25zOiBBb3RDb21waWxlck9wdGlvbnMsXG4gICAgZXJyb3JDb2xsZWN0b3I/OiAoZXJyb3I6IGFueSwgdHlwZT86IGFueSkgPT5cbiAgICAgICAgdm9pZCk6IHtjb21waWxlcjogQW90Q29tcGlsZXIsIHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yfSB7XG4gIGxldCB0cmFuc2xhdGlvbnM6IHN0cmluZyA9IG9wdGlvbnMudHJhbnNsYXRpb25zIHx8ICcnO1xuXG4gIGNvbnN0IHVybFJlc29sdmVyID0gY3JlYXRlQW90VXJsUmVzb2x2ZXIoY29tcGlsZXJIb3N0KTtcbiAgY29uc3Qgc3ltYm9sQ2FjaGUgPSBuZXcgU3RhdGljU3ltYm9sQ2FjaGUoKTtcbiAgY29uc3Qgc3VtbWFyeVJlc29sdmVyID0gbmV3IEFvdFN1bW1hcnlSZXNvbHZlcihjb21waWxlckhvc3QsIHN5bWJvbENhY2hlKTtcbiAgY29uc3Qgc3ltYm9sUmVzb2x2ZXIgPSBuZXcgU3RhdGljU3ltYm9sUmVzb2x2ZXIoY29tcGlsZXJIb3N0LCBzeW1ib2xDYWNoZSwgc3VtbWFyeVJlc29sdmVyKTtcbiAgY29uc3Qgc3RhdGljUmVmbGVjdG9yID1cbiAgICAgIG5ldyBTdGF0aWNSZWZsZWN0b3Ioc3VtbWFyeVJlc29sdmVyLCBzeW1ib2xSZXNvbHZlciwgW10sIFtdLCBlcnJvckNvbGxlY3Rvcik7XG4gIGxldCBodG1sUGFyc2VyOiBJMThOSHRtbFBhcnNlcjtcbiAgaWYgKCEhb3B0aW9ucy5lbmFibGVJdnkpIHtcbiAgICAvLyBJdnkgaGFuZGxlcyBpMThuIGF0IHRoZSBjb21waWxlciBsZXZlbCBzbyB3ZSBtdXN0IHVzZSBhIHJlZ3VsYXIgcGFyc2VyXG4gICAgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCkgYXMgSTE4Tkh0bWxQYXJzZXI7XG4gIH0gZWxzZSB7XG4gICAgaHRtbFBhcnNlciA9IG5ldyBJMThOSHRtbFBhcnNlcihcbiAgICAgICAgbmV3IEh0bWxQYXJzZXIoKSwgdHJhbnNsYXRpb25zLCBvcHRpb25zLmkxOG5Gb3JtYXQsIG9wdGlvbnMubWlzc2luZ1RyYW5zbGF0aW9uLCBjb25zb2xlKTtcbiAgfVxuICBjb25zdCBjb25maWcgPSBuZXcgQ29tcGlsZXJDb25maWcoe1xuICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICB1c2VKaXQ6IGZhbHNlLFxuICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogb3B0aW9ucy5taXNzaW5nVHJhbnNsYXRpb24sXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlc3BhY2VzLFxuICAgIHN0cmljdEluamVjdGlvblBhcmFtZXRlcnM6IG9wdGlvbnMuc3RyaWN0SW5qZWN0aW9uUGFyYW1ldGVycyxcbiAgfSk7XG4gIGNvbnN0IG5vcm1hbGl6ZXIgPSBuZXcgRGlyZWN0aXZlTm9ybWFsaXplcihcbiAgICAgIHtnZXQ6ICh1cmw6IHN0cmluZykgPT4gY29tcGlsZXJIb3N0LmxvYWRSZXNvdXJjZSh1cmwpfSwgdXJsUmVzb2x2ZXIsIGh0bWxQYXJzZXIsIGNvbmZpZyk7XG4gIGNvbnN0IGV4cHJlc3Npb25QYXJzZXIgPSBuZXcgUGFyc2VyKG5ldyBMZXhlcigpKTtcbiAgY29uc3QgZWxlbWVudFNjaGVtYVJlZ2lzdHJ5ID0gbmV3IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSgpO1xuICBjb25zdCB0bXBsUGFyc2VyID0gbmV3IFRlbXBsYXRlUGFyc2VyKFxuICAgICAgY29uZmlnLCBzdGF0aWNSZWZsZWN0b3IsIGV4cHJlc3Npb25QYXJzZXIsIGVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgaHRtbFBhcnNlciwgY29uc29sZSwgW10pO1xuICBjb25zdCByZXNvbHZlciA9IG5ldyBDb21waWxlTWV0YWRhdGFSZXNvbHZlcihcbiAgICAgIGNvbmZpZywgaHRtbFBhcnNlciwgbmV3IE5nTW9kdWxlUmVzb2x2ZXIoc3RhdGljUmVmbGVjdG9yKSxcbiAgICAgIG5ldyBEaXJlY3RpdmVSZXNvbHZlcihzdGF0aWNSZWZsZWN0b3IpLCBuZXcgUGlwZVJlc29sdmVyKHN0YXRpY1JlZmxlY3RvciksIHN1bW1hcnlSZXNvbHZlcixcbiAgICAgIGVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgbm9ybWFsaXplciwgY29uc29sZSwgc3ltYm9sQ2FjaGUsIHN0YXRpY1JlZmxlY3RvciwgZXJyb3JDb2xsZWN0b3IpO1xuICAvLyBUT0RPKHZpY2IpOiBkbyBub3QgcGFzcyBvcHRpb25zLmkxOG5Gb3JtYXQgaGVyZVxuICBjb25zdCB2aWV3Q29tcGlsZXIgPSBuZXcgVmlld0NvbXBpbGVyKHN0YXRpY1JlZmxlY3Rvcik7XG4gIGNvbnN0IHR5cGVDaGVja0NvbXBpbGVyID0gbmV3IFR5cGVDaGVja0NvbXBpbGVyKG9wdGlvbnMsIHN0YXRpY1JlZmxlY3Rvcik7XG4gIGNvbnN0IGNvbXBpbGVyID0gbmV3IEFvdENvbXBpbGVyKFxuICAgICAgY29uZmlnLCBvcHRpb25zLCBjb21waWxlckhvc3QsIHN0YXRpY1JlZmxlY3RvciwgcmVzb2x2ZXIsIHRtcGxQYXJzZXIsXG4gICAgICBuZXcgU3R5bGVDb21waWxlcih1cmxSZXNvbHZlciksIHZpZXdDb21waWxlciwgdHlwZUNoZWNrQ29tcGlsZXIsXG4gICAgICBuZXcgTmdNb2R1bGVDb21waWxlcihzdGF0aWNSZWZsZWN0b3IpLFxuICAgICAgbmV3IEluamVjdGFibGVDb21waWxlcihzdGF0aWNSZWZsZWN0b3IsICEhb3B0aW9ucy5lbmFibGVJdnkpLCBuZXcgVHlwZVNjcmlwdEVtaXR0ZXIoKSxcbiAgICAgIHN1bW1hcnlSZXNvbHZlciwgc3ltYm9sUmVzb2x2ZXIpO1xuICByZXR1cm4ge2NvbXBpbGVyLCByZWZsZWN0b3I6IHN0YXRpY1JlZmxlY3Rvcn07XG59XG4iXX0=