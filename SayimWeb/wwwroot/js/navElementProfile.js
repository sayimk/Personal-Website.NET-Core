export class navElementProfile {
    //constructor
    constructor(startX, startY, endX, endY) {
        //getters
        this.getStartX = () => {
            return this.startX;
        };
        this.getStartY = () => {
            return this.startY;
        };
        this.getEndX = () => {
            return this.endX;
        };
        this.getEndY = () => {
            return this.endY;
        };
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }
    ;
}
//box highlight size and start position endX = startX+84
navElementProfile.home_nav_item_profile = new navElementProfile(160, 14, 244, 49);
navElementProfile.pastProject_nav_item_profile = new navElementProfile(244, 14, 372, 49);
navElementProfile.currentProject_nav_item_profile = new navElementProfile(372, 14, 525, 49);
navElementProfile.cvInfo_nav_item_profile = new navElementProfile(525, 14, 620, 49);
//# sourceMappingURL=navElementProfile.js.map