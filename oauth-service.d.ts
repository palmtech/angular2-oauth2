export declare class OAuthService {
    clientId: string;
    redirectUri: string;
    loginUrl: string;
    resource: string;
    scope: string;
    rngUrl: string;
    oidc: boolean;
    options: any;
    state: string;
    issuer: string;
    validationHandler: any;
    logoutUrl: string;
    setStorage(storage: Storage): void;
    private _storage;
    createLoginUrl(state: any): Promise<string>;
    initImplicitFlow(additionalState?: string): void;
    callEventIfExists(options: any): void;
    tryLogin(options: any): boolean;
    processIdToken(idToken: any, accessToken: any): boolean;
    getIdentityClaims(): any;
    getIdToken(): any;
    padBase64(base64data: any): any;
    tryLoginWithIFrame(): void;
    tryRefresh(timeoutInMsec: any): void;
    getAccessToken(): any;
    hasValidAccessToken(): boolean;
    hasValidIdToken(): boolean;
    authorizationHeader(): string;
    logOut(): void;
    createAndSaveNonce(): Promise<any>;
    createNonce(): Promise<{}>;
    getFragment(): {};
    parseQueryString(queryString: any): {};
    checkAtHash(accessToken: any, idClaims: any): boolean;
}
