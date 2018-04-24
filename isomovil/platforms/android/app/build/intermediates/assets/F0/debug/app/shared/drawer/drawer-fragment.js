"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var drawer_view_model_1 = require("./drawer-view-model");
/* ***********************************************************
* Use the "loaded" event handler of the wrapping layout element to bind the view model to your view.
*************************************************************/
function onLoaded(args) {
    var component = args.object;
    var componentTitle = component.get("selectedPage");
    component.bindingContext = new drawer_view_model_1.DrawerViewModel(componentTitle);
}
exports.onLoaded = onLoaded;
/* ***********************************************************
* Use the "tap" event handler of the <GridLayout> component for handling navigation item taps.
* The "tap" event handler of the app drawer <GridLayout> item is used to navigate the app
* based on the tapped navigationItem's route.
*************************************************************/
function onNavigationItemTap(args) {
    var component = args.object;
    var componentRoute = component.get("route");
    frame_1.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });
}
exports.onNavigationItemTap = onNavigationItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLWZyYWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJhd2VyLWZyYWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0NBQW1DO0FBR25DLHlEQUFzRDtBQUV0RDs7OERBRThEO0FBQzlELGtCQUF5QixJQUFlO0lBQ3BDLElBQU0sU0FBUyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVyRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksbUNBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBTEQsNEJBS0M7QUFFRDs7Ozs4REFJOEQ7QUFDOUQsNkJBQW9DLElBQWU7SUFDL0MsSUFBTSxTQUFTLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlDLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxjQUFjO1FBQzFCLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1NBQ2Y7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsa0RBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBEcmF3ZXJWaWV3TW9kZWwgfSBmcm9tIFwiLi9kcmF3ZXItdmlldy1tb2RlbFwiO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBVc2UgdGhlIFwibG9hZGVkXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgd3JhcHBpbmcgbGF5b3V0IGVsZW1lbnQgdG8gYmluZCB0aGUgdmlldyBtb2RlbCB0byB5b3VyIHZpZXcuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3QgY29tcG9uZW50VGl0bGUgPSBjb21wb25lbnQuZ2V0KFwic2VsZWN0ZWRQYWdlXCIpO1xyXG5cclxuICAgIGNvbXBvbmVudC5iaW5kaW5nQ29udGV4dCA9IG5ldyBEcmF3ZXJWaWV3TW9kZWwoY29tcG9uZW50VGl0bGUpO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFVzZSB0aGUgXCJ0YXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8R3JpZExheW91dD4gY29tcG9uZW50IGZvciBoYW5kbGluZyBuYXZpZ2F0aW9uIGl0ZW0gdGFwcy5cclxuKiBUaGUgXCJ0YXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSBhcHAgZHJhd2VyIDxHcmlkTGF5b3V0PiBpdGVtIGlzIHVzZWQgdG8gbmF2aWdhdGUgdGhlIGFwcFxyXG4qIGJhc2VkIG9uIHRoZSB0YXBwZWQgbmF2aWdhdGlvbkl0ZW0ncyByb3V0ZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlID0gY29tcG9uZW50LmdldChcInJvdXRlXCIpO1xyXG5cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogY29tcG9uZW50Um91dGUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==