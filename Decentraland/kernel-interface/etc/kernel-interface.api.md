## API Report File for "@dcl/kernel-interface"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export type AuthIdentity = {
    ephemeralIdentity: IdentityType;
    expiration: Date;
    authChain: AuthChain;
};

// @public (undocumented)
export type DecentralandIdentity = AuthIdentity & {
    address: string;
    rawAddress: string;
    provider?: any;
    hasConnectedWeb3: boolean;
};

// @public (undocumented)
export interface IDecentralandKernel {
    // (undocumented)
    initKernel(options: KernelOptions): Promise<KernelResult>;
}

// @public (undocumented)
export type IEthereumProvider = {
    sendAsync: any;
} | {
    request: any;
};

// @public (undocumented)
export interface KernelAccountState {
    // (undocumented)
    hasProvider: boolean;
    // (undocumented)
    identity?: DecentralandIdentity;
    // (undocumented)
    isGuest?: boolean;
    // (undocumented)
    loginStatus: LoginState;
    // (undocumented)
    network?: string;
}

// @public (undocumented)
export interface KernelError {
    // (undocumented)
    code?: string;
    // (undocumented)
    error: Error;
    // (undocumented)
    extra?: Record<string, any>;
    // (undocumented)
    level?: KernelSeverityLevel;
}

// @public (undocumented)
export interface KernelLoadingProgress {
    // (undocumented)
    progress: number;
    // (undocumented)
    status?: number;
}

// @public (undocumented)
export type KernelLogoutEvent = any;

// @public (undocumented)
export interface KernelOpenUrlEvent {
    // (undocumented)
    url: string;
}

// @public (undocumented)
export type KernelOptions = {
    kernelOptions: {
        baseUrl?: string;
        previewMode?: boolean;
        configurations?: Record<string, string>;
        persistentStorage?: PersistentAsyncStorage;
    };
    rendererOptions: {
        container: any;
        baseUrl?: string;
    };
};

// @public (undocumented)
export interface KernelRendererVisibleEvent {
    // (undocumented)
    visible: boolean;
}

// @public (undocumented)
export type KernelResult = {
    on<K extends keyof NamedEvents>(eventName: K, cb: (event: NamedEvents[K]) => void): void;
    on(eventName: string, cb: (event: Record<string, any>) => void): void;
    authenticate(provider: IEthereumProvider, isGuest: boolean): void;
    version: string;
    hasStoredSession(address: string, networkId: number): Promise<{
        result: boolean;
        profile?: any;
    }>;
};

// @public (undocumented)
export type KernelSeverityLevel = 'critical' | 'fatal' | 'serious' | 'warning';

// @public
export type KernelShutdownEvent = any;

// @public (undocumented)
export interface KernelSignUpEvent {
    // (undocumented)
    email: string;
}

// @public (undocumented)
export interface KernelTrackingEvent {
    // (undocumented)
    eventData: Record<string, any>;
    // (undocumented)
    eventName: string;
}

// @public (undocumented)
export enum LoginState {
    AUTHENTICATING = "AUTHENTICATING",
    // (undocumented)
    COMPLETED = "COMPLETED",
    LOADING = "LOADING",
    SIGN_UP = "SIGN_UP",
    // (undocumented)
    SIGNATURE_FAILED = "SIGNATURE_FAILED",
    // (undocumented)
    SIGNATURE_PENDING = "SIGNATURE_PENDING",
    // (undocumented)
    WAITING_PROFILE = "WAITING_PROFILE",
    WAITING_PROVIDER = "WAITING_PROVIDER",
    // (undocumented)
    WAITING_RENDERER = "WAITING_RENDERER"
}

// @public (undocumented)
export type NamedEvents = {
    signUp: KernelSignUpEvent;
    accountState: KernelAccountState;
    loadingProgress: KernelLoadingProgress;
    error: KernelError;
    trackingEvent: KernelTrackingEvent;
    rendererVisible: KernelRendererVisibleEvent;
    openUrl: KernelOpenUrlEvent;
    logout: KernelLogoutEvent;
    shutdown: KernelShutdownEvent;
};

// @public (undocumented)
export interface PersistentAsyncStorage {
    clear(): Promise<void>;
    getItem(key: string): Promise<string | null>;
    keys(): Promise<string[]>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
}

// Warnings were encountered during analysis:
//
// src/dcl-crypto.ts:49:3 - (ae-forgotten-export) The symbol "IdentityType" needs to be exported by the entry point index.d.ts
// src/dcl-crypto.ts:51:3 - (ae-forgotten-export) The symbol "AuthChain" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```