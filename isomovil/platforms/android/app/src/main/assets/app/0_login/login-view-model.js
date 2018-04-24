"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame_1 = require("tns-core-modules/ui/frame");
var http = require("http");
var LoginViewModel = /** @class */ (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel(page) {
        var _this = _super.call(this) || this;
        _this._texttitulo = "INGRESA TU CUENTA";
        _this.textbtnlogin = "INGRESAR";
        //oculta el actionbar
        page.actionBarHidden = true;
        return _this;
    }
    LoginViewModel.prototype.btnenviar = function (args) {
        if (typeof this.usuario == 'undefined') {
            alert("Ingrese su usuario.");
            return;
        }
        if (typeof this.password == 'undefined') {
            alert("Ingrese su contraseña");
            return;
        }
        if (this.usuario.trim().length === 0 /*|| this.password.trim().length===0*/) {
            alert("Porfavor verifique su usuario y/o contraseña.");
            return;
        }
        http.getJSON("http://132.148.16.211:8080/isofacil-webservice/ws/adm/login/" + this.usuario.toUpperCase() + "/" + this.password).then(function (r) {
            //// Argument (r) is JSON!
            console.log(JSON.stringify(r));
            console.log();
            console.log("antes de enviar a la siguiente pantalla");
            var navegacion = {
                moduleName: "./1_home/home-page",
                context: {
                    param1: "parametro1",
                    param2: "parametro2",
                }
            };
            frame_1.topmost().navigate(navegacion);
        }, function (e) {
            //// Argument (e) is Error!
            console.log("ERROR EN EL SERVIDOR " + e);
            alert("Usuario no encontrado, porfavor verifique sus datos.33333333");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFFeEQsbURBQW9EO0FBS3BELDJCQUE2QjtBQUU3QjtJQUFvQyxrQ0FBVTtJQVExQyx3QkFBWSxJQUFTO1FBQXJCLFlBQ0ksaUJBQU8sU0FLVjtRQUpHLEtBQUksQ0FBQyxXQUFXLEdBQUMsbUJBQW1CLENBQUM7UUFDckMsS0FBSSxDQUFDLFlBQVksR0FBQyxVQUFVLENBQUM7UUFDN0IscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOztJQUNoQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQWU7UUFDckIsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFHLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDbEMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBRyxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQSxDQUFDO1lBQ3RFLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLDhEQUE4RCxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RJLDBCQUEwQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDdkQsSUFBSSxVQUFVLEdBQUU7Z0JBQ1osVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxZQUFZO29CQUNwQixNQUFNLEVBQUUsWUFBWTtpQkFDdkI7YUFDSixDQUFBO1lBQ0QsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5DLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDViwyQkFBMkI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN0QyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFPRCxzQkFBVyxzQ0FBVTtRQU56Qjs7OztZQUlJO2FBRUE7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBQ0QsVUFBc0IsS0FBYTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLG1DQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQW1CLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxvQ0FBUTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBSUwscUJBQUM7QUFBRCxDQUFDLEFBN0VELENBQW9DLHVCQUFVLEdBNkU3QztBQTdFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGV4dHRpdHVsbzpTdHJpbmc7XHJcbiAgICB0ZXh0YnRubG9naW46U3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgX3VzdWFyaW86U3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcGFzc3dvcmQ6U3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6UGFnZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dHRpdHVsbz1cIklOR1JFU0EgVFUgQ1VFTlRBXCI7XHJcbiAgICAgICAgdGhpcy50ZXh0YnRubG9naW49XCJJTkdSRVNBUlwiO1xyXG4gICAgICAgIC8vb2N1bHRhIGVsIGFjdGlvbmJhclxyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBidG5lbnZpYXIoYXJnczogRXZlbnREYXRhKXtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy51c3VhcmlvPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2Ugc3UgdXN1YXJpby5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMucGFzc3dvcmQgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYodGhpcy51c3VhcmlvLnRyaW0oKS5sZW5ndGg9PT0wIC8qfHwgdGhpcy5wYXNzd29yZC50cmltKCkubGVuZ3RoPT09MCovKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJQb3JmYXZvciB2ZXJpZmlxdWUgc3UgdXN1YXJpbyB5L28gY29udHJhc2XDsWEuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodHRwLmdldEpTT04oXCJodHRwOi8vMTMyLjE0OC4xNi4yMTE6ODA4MC9pc29mYWNpbC13ZWJzZXJ2aWNlL3dzL2FkbS9sb2dpbi9cIit0aGlzLnVzdWFyaW8udG9VcHBlckNhc2UoKStcIi9cIit0aGlzLnBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEpTT04hXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFudGVzIGRlIGVudmlhciBhIGxhIHNpZ3VpZW50ZSBwYW50YWxsYVwiKTtcclxuICAgICAgICAgICAgdmFyIG5hdmVnYWNpb249IHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwiLi8xX2hvbWUvaG9tZS1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0xOiBcInBhcmFtZXRybzFcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbTI6IFwicGFyYW1ldHJvMlwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZlZ2FjaW9uKTtcclxuXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8vLyBBcmd1bWVudCAoZSkgaXMgRXJyb3IhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgRU4gRUwgU0VSVklET1IgXCIrZSlcclxuICAgICAgICAgICAgYWxlcnQoXCJVc3VhcmlvIG5vIGVuY29udHJhZG8sIHBvcmZhdm9yIHZlcmlmaXF1ZSBzdXMgZGF0b3MuMzMzMzMzMzNcIik7XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9XHJcbi8qXHJcbiAgICBidG5lbnZpYXIoYXJnczogR2VzdHVyZUV2ZW50RGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhQUFcIik7XHJcbiAgICB9XHJcbiAgKi8gIFxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGV4dHRpdHVsbygpOlN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHRpdHVsbztcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2V0IHRleHR0aXR1bG8odmFsdWU6IFN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fdGV4dHRpdHVsbz12YWx1ZTtcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGdldCB1c3VhcmlvKCk6U3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c3VhcmlvO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBzZXQgdXN1YXJpbyh2YWx1ZTogU3RyaW5nKXtcclxuICAgICAgICB0aGlzLl91c3VhcmlvPXZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCk6U3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBTdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkPXZhbHVlO1xyXG4gICAgfVxyXG59Il19