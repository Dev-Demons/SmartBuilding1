## API Report File for "@dcl/quests-designer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { Edge } from 'reactflow';
import { Node as Node_2 } from 'reactflow';
import { QuestDefinition } from '@dcl/quests-client/dist/protocol/decentraland/quests/definitions.gen';

// @public (undocumented)
export const QuestsDesigner: ({ maxConnnectionsPerStep, maxStartingSteps, maxEndSteps, saveDesignButton, closeDesigner, backButton, initialEdges, initialNodes, }: QuestsDesignerProps) => JSX.Element;

// @public (undocumented)
export type QuestsDesignerProps = {
    maxStartingSteps?: number;
    maxEndSteps?: number;
    maxConnnectionsPerStep?: number;
    saveDesignButton?: {
        content?: string;
        onClick: (nodes: Node_2<StepNode>[], edges: Edge[], questDefinition?: QuestDefinition) => void;
        validate?: boolean;
    };
    closeDesigner?: () => void;
    backButton?: () => void;
    initialNodes?: Node_2<StepNode>[];
    initialEdges?: Edge[];
};

// Warnings were encountered during analysis:
//
// dist/QuestsDesigner.d.ts:27:9 - (ae-forgotten-export) The symbol "StepNode" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```