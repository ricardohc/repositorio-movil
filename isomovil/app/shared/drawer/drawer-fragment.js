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
    console.log(componentTitle);
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
function onSalir(args) {
    var component = args.object;
    var componentRoute = component.get("route");
    frame_1.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });
}
exports.onSalir = onSalir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLWZyYWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJhd2VyLWZyYWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0NBQW1DO0FBR25DLHlEQUFzRDtBQUV0RDs7OERBRThEO0FBQzlELGtCQUF5QixJQUFlO0lBQ3BDLElBQU0sU0FBUyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFMRCw0QkFLQztBQUVEOzs7OzhEQUk4RDtBQUM5RCw2QkFBb0MsSUFBZTtJQUMvQyxJQUFNLFNBQVMsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFDLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2YsVUFBVSxFQUFFLGNBQWM7UUFDMUIsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07U0FDZjtLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCxrREFVQztBQUdELGlCQUF3QixJQUFlO0lBQ25DLElBQU0sU0FBUyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU5QyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDZixVQUFVLEVBQUUsY0FBYztRQUMxQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNmO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELDBCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgRHJhd2VyVmlld01vZGVsIH0gZnJvbSBcIi4vZHJhd2VyLXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogVXNlIHRoZSBcImxvYWRlZFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIHdyYXBwaW5nIGxheW91dCBlbGVtZW50IHRvIGJpbmQgdGhlIHZpZXcgbW9kZWwgdG8geW91ciB2aWV3LlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGNvbXBvbmVudFRpdGxlID0gY29tcG9uZW50LmdldChcInNlbGVjdGVkUGFnZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudFRpdGxlKTtcclxuICAgIGNvbXBvbmVudC5iaW5kaW5nQ29udGV4dCA9IG5ldyBEcmF3ZXJWaWV3TW9kZWwoY29tcG9uZW50VGl0bGUpO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFVzZSB0aGUgXCJ0YXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8R3JpZExheW91dD4gY29tcG9uZW50IGZvciBoYW5kbGluZyBuYXZpZ2F0aW9uIGl0ZW0gdGFwcy5cclxuKiBUaGUgXCJ0YXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSBhcHAgZHJhd2VyIDxHcmlkTGF5b3V0PiBpdGVtIGlzIHVzZWQgdG8gbmF2aWdhdGUgdGhlIGFwcFxyXG4qIGJhc2VkIG9uIHRoZSB0YXBwZWQgbmF2aWdhdGlvbkl0ZW0ncyByb3V0ZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlID0gY29tcG9uZW50LmdldChcInJvdXRlXCIpO1xyXG5cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogY29tcG9uZW50Um91dGUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2FsaXIoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlID0gY29tcG9uZW50LmdldChcInJvdXRlXCIpO1xyXG5cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogY29tcG9uZW50Um91dGUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuIl19