import { ScrollCallback } from './scrollbar/SmoothScrollbar.d';
interface ScrollRigStore {
    debug: boolean;
    scaleMultiplier: number;
    globalRender: boolean;
    globalPriority: number;
    globalClearDepth: boolean;
    globalRenderQueue: false | any[];
    clearGlobalRenderQueue: () => void;
    isCanvasAvailable: boolean;
    hasSmoothScrollbar: boolean;
    canvasChildren: Record<string, any | undefined>;
    updateCanvas: (key: string, newProps: any) => void;
    renderToCanvas: (key: string, mesh: any, props: any) => void;
    removeFromCanvas: (key: string, dispose: boolean) => void;
    pageReflow: number;
    requestReflow: () => void;
    scroll: {
        y: number;
        x: number;
        limit: number;
        velocity: number;
        progress: number;
        direction: number;
        scrollDirection?: 'vertical' | 'horizontal';
    };
    scrollTo: (target: any) => void;
    onScroll: (cb: ScrollCallback) => () => void;
}
declare const useCanvasStore: import("zustand").UseBoundStore<ScrollRigStore, import("zustand").StoreApi<ScrollRigStore>>;
export { useCanvasStore };
