export class navElementProfile {

    private startX:number;
    private startY:number;
    private endX:number;
    private endY:number;

    //box highlight size and start position endX = startX+84
    static home_nav_item_profile:navElementProfile = new navElementProfile(160, 14, 244, 49);
    static pastProject_nav_item_profile:navElementProfile = new navElementProfile(244, 14, 372, 49);
    static currentProject_nav_item_profile:navElementProfile = new navElementProfile(372, 14, 525, 49);
    static cvInfo_nav_item_profile:navElementProfile = new navElementProfile(525, 14, 620, 49);;

    //constructor
    constructor(startX:number, startY:number, endX:number, endY:number) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    //getters
    public getStartX = () => {
        return this.startX;
    }

    public getStartY = () => {
        return this.startY;
    }

    public getEndX = () => {
        return this.endX;
    }

    public getEndY = () => {
        return this.endY;
    }
}