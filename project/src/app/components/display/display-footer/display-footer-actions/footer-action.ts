export class FooterAction {
    actionName = '';
    actionType = FooterActionType.execute;
    action?: Function;

    get isForDisplaying() {
        return this.actionType === FooterActionType.display;
    }
}

export enum FooterActionType {
    execute,
    display
}