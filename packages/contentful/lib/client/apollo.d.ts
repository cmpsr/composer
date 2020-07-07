/// <reference types="react" />
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerProps
 * @param {NextPageContext | NextAppContext} ctx
 */
export declare const initOnContext: (ctx: any, preview: any) => any;
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */
export declare const withApollo: ({ ssr, preview, }?: {
    ssr?: boolean;
    preview?: boolean;
}) => (PageComponent: any) => {
    ({ apolloClient, apolloState, ...pageProps }: {
        [x: string]: any;
        apolloClient: any;
        apolloState: any;
    }): JSX.Element;
    displayName: string;
    getInitialProps(ctx: any): Promise<{}>;
};
//# sourceMappingURL=apollo.d.ts.map