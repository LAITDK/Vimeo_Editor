declare namespace Vimeo {
    class Player {
        constructor(elm: Element);

        on: (eventName: string, handler:() => void)=>void;
        pause: () => JQueryPromise<any>;
        play: () => JQueryPromise<any>;
    }
}