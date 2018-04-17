"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame_1 = require("tns-core-modules/ui/frame");
var LoginViewModel = /** @class */ (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel(page) {
        var _this = _super.call(this) || this;
        _this._texttitulo = "INGRESA TU CUENTA";
        page.actionBarHidden = true;
        _this.textbtnlogin = "INGRESAR";
        return _this;
    }
    Object.defineProperty(LoginViewModel.prototype, "texttitulo", {
        get: function () {
            return this._texttitulo;
        },
        set: function (value) {
            this._texttitulo = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginViewModel.prototype.btnenviar = function (args) {
        console.log("antes de enviar a la siguiente pantalla");
        frame_1.topmost().navigate("./1_home/home-page");
        /*http.request({ url: "190.232.7.26:8080/WebServiceRESTFull/rest/service/json", method: "GET" }).then(function (response) {
            //// Argument (response) is HttpResponse!
            //// Content property of the response is HttpContent!
            var str = response.content.toString();
            var obj = response.content.toJSON();
            var img = response.content.toImage();
            console.log(str);
        }, function (e) {
            //// Argument (e) is Error!
            console.log(e);
        });*/
    };
    return LoginViewModel;
}(observable_1.Observable));
exports.LoginViewModel = LoginViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFFeEQsbURBQW9EO0FBS3BEO0lBQW9DLGtDQUFVO0lBSzFDLHdCQUFZLElBQVM7UUFBckIsWUFDSSxpQkFBTyxTQUlWO1FBSEcsS0FBSSxDQUFDLFdBQVcsR0FBQyxtQkFBbUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixLQUFJLENBQUMsWUFBWSxHQUFDLFVBQVUsQ0FBQzs7SUFDakMsQ0FBQztJQUVELHNCQUFXLHNDQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSEE7SUFLRCxrQ0FBUyxHQUFULFVBQVUsSUFBZTtRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDdkQsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekM7Ozs7Ozs7Ozs7YUFVSztJQUVULENBQUM7SUFNTCxxQkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBb0MsdUJBQVUsR0F5QzdDO0FBekNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IGh0dHAgfSBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHJcbiAgICBwcml2YXRlIF90ZXh0dGl0dWxvOlN0cmluZztcclxuICAgIHRleHRidG5sb2dpbjpTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZTpQYWdlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl90ZXh0dGl0dWxvPVwiSU5HUkVTQSBUVSBDVUVOVEFcIjtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZXh0YnRubG9naW49XCJJTkdSRVNBUlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGV4dHRpdHVsbygpOlN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHRpdHVsbztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2V0IHRleHR0aXR1bG8odmFsdWU6IFN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fdGV4dHRpdHVsbz12YWx1ZTtcclxuICAgIH0gXHJcblxyXG4gICAgYnRuZW52aWFyKGFyZ3M6IEV2ZW50RGF0YSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbnRlcyBkZSBlbnZpYXIgYSBsYSBzaWd1aWVudGUgcGFudGFsbGFcIik7XHJcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKFwiLi8xX2hvbWUvaG9tZS1wYWdlXCIpO1xyXG4gICAgICAgIC8qaHR0cC5yZXF1ZXN0KHsgdXJsOiBcIjE5MC4yMzIuNy4yNjo4MDgwL1dlYlNlcnZpY2VSRVNURnVsbC9yZXN0L3NlcnZpY2UvanNvblwiLCBtZXRob2Q6IFwiR0VUXCIgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy8vLyBBcmd1bWVudCAocmVzcG9uc2UpIGlzIEh0dHBSZXNwb25zZSFcclxuICAgICAgICAgICAgLy8vLyBDb250ZW50IHByb3BlcnR5IG9mIHRoZSByZXNwb25zZSBpcyBIdHRwQ29udGVudCFcclxuICAgICAgICAgICAgdmFyIHN0ciA9IHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSByZXNwb25zZS5jb250ZW50LnRvSW1hZ2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvLy8vIEFyZ3VtZW50IChlKSBpcyBFcnJvciFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgIFxyXG4gICAgfVxyXG4vKlxyXG4gICAgYnRuZW52aWFyKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYUFBXCIpO1xyXG4gICAgfVxyXG4gICovICBcclxufSJdfQ==