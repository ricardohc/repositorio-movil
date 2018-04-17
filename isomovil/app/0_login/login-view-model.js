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
    LoginViewModel.prototype.btnenviar = function (args) {
        console.log("antes de enviar a la siguiente pantalla");
        console.log(this.usuario + " " + this._password);
        if (this._usuario == "admin" && this._password == "123") {
            frame_1.topmost().navigate("./1_home/home-page");
        }
        else {
            alert("Datos ingresados no es valido");
        }
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
    Object.defineProperty(LoginViewModel.prototype, "texttitulo", {
        /*
            btnenviar(args: GestureEventData){
                console.log("aAA");
            }
          */
        get: function () {
            return this._texttitulo;
        },
        set: function (value) {
            this._texttitulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginViewModel.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (value) {
            this._usuario = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginViewModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    return LoginViewModel;
}(observable_1.Observable));
exports.LoginViewModel = LoginViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFFeEQsbURBQW9EO0FBS3BEO0lBQW9DLGtDQUFVO0lBUTFDLHdCQUFZLElBQVM7UUFBckIsWUFDSSxpQkFBTyxTQUlWO1FBSEcsS0FBSSxDQUFDLFdBQVcsR0FBQyxtQkFBbUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixLQUFJLENBQUMsWUFBWSxHQUFDLFVBQVUsQ0FBQzs7SUFDakMsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFlO1FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDaEQsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVEOzs7Ozs7Ozs7O2FBVUs7SUFFVCxDQUFDO0lBT0Qsc0JBQVcsc0NBQVU7UUFOekI7Ozs7WUFJSTthQUVBO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxtQ0FBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsb0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQUlMLHFCQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUFvQyx1QkFBVSxHQWlFN0M7QUFqRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8vaW1wb3J0IHsgaHR0cCB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgX3RleHR0aXR1bG86U3RyaW5nO1xyXG4gICAgdGV4dGJ0bmxvZ2luOlN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF91c3VhcmlvOlN0cmluZztcclxuICAgIHByaXZhdGUgX3Bhc3N3b3JkOlN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOlBhZ2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3RleHR0aXR1bG89XCJJTkdSRVNBIFRVIENVRU5UQVwiO1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRleHRidG5sb2dpbj1cIklOR1JFU0FSXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuZW52aWFyKGFyZ3M6IEV2ZW50RGF0YSl7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW50ZXMgZGUgZW52aWFyIGEgbGEgc2lndWllbnRlIHBhbnRhbGxhXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzdWFyaW8rXCIgXCIrdGhpcy5fcGFzc3dvcmQpO1xyXG4gICAgICAgIGlmKHRoaXMuX3VzdWFyaW89PVwiYWRtaW5cIiAmJiB0aGlzLl9wYXNzd29yZD09XCIxMjNcIil7XHJcbiAgICAgICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZShcIi4vMV9ob21lL2hvbWUtcGFnZVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJEYXRvcyBpbmdyZXNhZG9zIG5vIGVzIHZhbGlkb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAvKmh0dHAucmVxdWVzdCh7IHVybDogXCIxOTAuMjMyLjcuMjY6ODA4MC9XZWJTZXJ2aWNlUkVTVEZ1bGwvcmVzdC9zZXJ2aWNlL2pzb25cIiwgbWV0aG9kOiBcIkdFVFwiIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vLy8gQXJndW1lbnQgKHJlc3BvbnNlKSBpcyBIdHRwUmVzcG9uc2UhXHJcbiAgICAgICAgICAgIC8vLy8gQ29udGVudCBwcm9wZXJ0eSBvZiB0aGUgcmVzcG9uc2UgaXMgSHR0cENvbnRlbnQhXHJcbiAgICAgICAgICAgIHZhciBzdHIgPSByZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gcmVzcG9uc2UuY29udGVudC50b0ltYWdlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICBcclxuICAgIH1cclxuLypcclxuICAgIGJ0bmVudmlhcihhcmdzOiBHZXN0dXJlRXZlbnREYXRhKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFBQVwiKTtcclxuICAgIH1cclxuICAqLyAgXHJcblxyXG4gICAgcHVibGljIGdldCB0ZXh0dGl0dWxvKCk6U3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dGl0dWxvO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzZXQgdGV4dHRpdHVsbyh2YWx1ZTogU3RyaW5nKXtcclxuICAgICAgICB0aGlzLl90ZXh0dGl0dWxvPXZhbHVlO1xyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzdWFyaW8oKTpTdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzdWFyaW87XHJcbiAgICB9IFxyXG4gICAgcHVibGljIHNldCB1c3VhcmlvKHZhbHVlOiBTdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX3VzdWFyaW89dmFsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgcGFzc3dvcmQoKTpTdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzZXQgcGFzc3dvcmQodmFsdWU6IFN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQ9dmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=