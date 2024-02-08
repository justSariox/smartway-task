import { makeAutoObservable } from 'mobx';

class AppStore {
    buttonLabel = 'Copy';
    isLoading = false;
    isDisabled = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading = (state: boolean) => {
        this.isLoading = state;
    };

    copyText = (text: string) => {
        navigator.clipboard.writeText(text);
        this.buttonLabel = 'Copied';
        this.isDisabled = true;
        setTimeout(() => {
            this.buttonLabel = 'Copy';
            this.isDisabled = false;
        }, 2000);
    };
}

export default new AppStore();
