import * as codegen from '@dcl/rpc/dist/codegen'
import { RpcClientPort } from '@dcl/rpc/dist/types'
import type { Scene } from '@dcl/schemas/dist/platform/scene/index'
import type { ContentMapping } from '@dcl/schemas/dist/misc/content-mapping'
import { EnvironmentApiServiceDefinition } from '@dcl/protocol/out-ts/decentraland/kernel/apis/environment_api.gen'

export type Realm = {
  domain: string
  /** @deprecated use room instead */
  layer: string
  room: string
  serverName: string
  displayName: string
}

export type ExplorerConfiguration = {
  clientUri: string
  configurations: Record<string, string | number | boolean>
}

export const enum Platform {
  DESKTOP = 'desktop',
  BROWSER = 'browser'
}

export type BootstrapData = {
  sceneId: string
  name: string
  main: string
  baseUrl: string
  mappings: ContentMapping[]
  useFPSThrottling: boolean
  data: Scene
}

export namespace EnvironmentApiServiceClient {
  export function create<Context extends {}>(clientPort: RpcClientPort) {
    return codegen.loadService<Context, EnvironmentApiServiceDefinition>(clientPort, EnvironmentApiServiceDefinition)
  }

  export function createLegacy<Context extends {}>(clientPort: RpcClientPort) {
    const originalService = codegen.loadService<Context, EnvironmentApiServiceDefinition>(
      clientPort,
      EnvironmentApiServiceDefinition
    )
    return {
      ...originalService,

      async getBootstrapData(): Promise<BootstrapData> {
        const res = await originalService.getBootstrapData({})
        const sceneMetadata: Scene = JSON.parse(res.entity?.metadataJson || '{}')
        return {
          sceneId: res.id,
          name: sceneMetadata.display?.title || 'Unnamed',
          main: sceneMetadata.main,
          baseUrl: res.baseUrl,
          mappings: res.entity?.content || [],
          useFPSThrottling: res.useFPSThrottling,
          data: sceneMetadata
        }
      },

      /**
       * Returns if the feature flag unsafe-request is on
       */
      async areUnsafeRequestAllowed(): Promise<boolean> {
        return (await originalService.areUnsafeRequestAllowed({})).status
      },

      /**
       * Returns the current connected realm
       */
      async getCurrentRealm(): Promise<Realm | undefined> {
        const res = await originalService.getCurrentRealm({})
        return res.currentRealm
      },

      /**
       * Returns whether the scene is running in preview mode or not
       */
      async isPreviewMode(): Promise<boolean> {
        const res = await originalService.isPreviewMode({})
        return res.isPreview
      },

      /**
       * Returns explorer configuration and environment information
       */
      async getExplorerConfiguration(): Promise<ExplorerConfiguration> {
        return await originalService.getExplorerConfiguration({})
      },

      /**
       * Returns what platform is running the scene
       */
      async getPlatform(): Promise<Platform> {
        return (await originalService.getPlatform({})).platform as Platform
      },

      /**
       * Returns Decentraland's time
       */
      async getDecentralandTime(): Promise<{ seconds: number }> {
        return await originalService.getDecentralandTime({})
      }
    }
  }
}
