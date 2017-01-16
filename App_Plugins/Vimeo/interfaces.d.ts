declare namespace Vimeo {
    export interface IVimeoScope extends ng.IScope {

        control: IVimeoControlModel;


        change: () => void;
        setImageUrl: () => void;
        openOverlay: () => void;
        overlay: IVimeoOverlayModel;
        
    }

    export interface IVimeoOverlayModel {
        view: string;
        title: string;
        show: boolean;
        submit: (model:any) => void;
        close: (oldModel: any) => void;

        openMediaPicker: () => void;
        control: IVimeoControlModel;

    }

    // "Control" interfaces - data to be saved
    export interface IVimeoControlModel {
        value: IVimeoControlValue;
        ImageUrl: string
    }

    export interface IVimeoControlValue {
        Image: string;
        EmbeddedCode: string;
    }

}