(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-images/list-images.component */ "./src/app/list-images/list-images.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/upload-image/upload-image.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _tag_images_list_tag_images_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-images-list/tag-images-list.component */ "./src/app/tag-images-list/tag-images-list.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: ':UserName/edit', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"], pathMatch: 'full' },
    { path: '', component: _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_2__["ListImagesComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'upload', component: _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_5__["UploadImageComponent"] },
    { path: ':UserName', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'tag/:id', component: _tag_images_list_tag_images_list_component__WEBPACK_IMPORTED_MODULE_7__["TagImagesListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: black;\r\n}\r\n\r\n.navigation li {\r\n  float: left;\r\n}\r\n\r\n.title {\r\n  font-family: 'Montserrat', sans-serif;\r\n  margin: 0;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\n.navigation li a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\n.navigation li a:hover {\r\n    background-color: #111;\r\n  }\r\n\r\n.btn {\r\n  text-align: center;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  background: white;\r\n  font-size: 15px;\r\n  border: 0;\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n  <ul>\r\n    <li>\r\n      <a class=\"title\" href=\"\">photoX</a>\r\n    </li>\r\n\r\n    <li *ngIf=\"islogin == true;then logout else login\" style=\"float: right;margin: 15px 15px;\">\r\n    </li>\r\n    <ng-template #logout>\r\n      <span style=\"float: right;margin: 15px 15px;\">\r\n        <li>\r\n          <button class=\"btn\" [routerLink]=\"profilePage\">My Profile</button>\r\n        </li>\r\n        <li>\r\n          <button class=\"btn\" routerLink=\"/logout\">Logout</button>\r\n        </li>\r\n      </span>\r\n    </ng-template>\r\n    <ng-template #login>\r\n      <li style=\"float: right;margin: 15px 15px;\">\r\n        <button class=\"btn\" routerLink=\"/login\">Login</button>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</div>\r\n<div class=\"app-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    Object.defineProperty(AppComponent.prototype, "islogin", {
        get: function () {
            if (localStorage.getItem('userToken') != null) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "profilePage", {
        get: function () {
            if (this.islogin) {
                return localStorage.getItem('profileUrl');
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-images/list-images.component */ "./src/app/list-images/list-images.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-search/tag-search.component */ "./src/app/tag-search/tag-search.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/upload-image/upload-image.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _tag_images_list_tag_images_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tag-images-list/tag-images-list.component */ "./src/app/tag-images-list/tag-images-list.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_3__["ListImagesComponent"],
                _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_6__["TagSearchComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__["UploadImageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"],
                _tag_images_list_tag_images_list_component__WEBPACK_IMPORTED_MODULE_13__["TagImagesListComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: black;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.registrationContainer {\r\n    margin: 0 auto;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 30px;\r\n    vertical-align: middle;\r\n    margin-bottom: 30px;}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 16px;\r\n    background-color: white;\r\n}\r\n\r\n.register {\r\n\r\n    background-color: rgb(25, 115, 204);\r\n    color: #f1f1f1;\r\n    font-size: 20px;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: 1px rgb(25, 115, 204) solid;\r\n    font-size: 100%;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.registerbtn {\r\n    background-color: rgb(25, 115, 204);\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n    font-size: 20px;\r\n}\r\n\r\n.registerbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n    color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n}\r\n\r\n.user_profile{\r\n    display: inline-block;\r\n    text-align: center;\r\n    /* align-items: center; */\r\n    width: 100%;\r\n  }\r\n\r\n.user_profile-info{\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n  }\r\n\r\n.user_profile-avatar {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    width: 120px;\r\n    height: 120px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    margin: 10px 10px ;\r\n    background: #eee;\r\n  }\r\n\r\n.btn{\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    background: white;\r\n    font-size: 15px;\r\n    border: 0;\r\n    color: black;\r\n\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registrationContainer\">\n  <div class=\"container register\">\n    <div class=\"user_profile\">\n      <img class=\"user_profile-avatar\" alt=\"ELEVATE\" width=\"120\" height=\"120\" src=\"https://cdn.onlinewebfonts.com/svg/img_191958.png\">\n    </div>\n    <div style=\"text-align: center\">\n      <input type=\"file\" class=\"btn\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n    <button type=\"submit\" (click)=\"SaveAvatar()\" class=\"registerbtn\">Save Aatar</button>\n  </div>\n  <div class=\"container\">\n    <!-- <input type=\"hidden\" placeholder=\"Enter User Name\" [(ngModel)]=\"user.Id\"> -->\n    <label for=\"User Name\">\n      <b>User Name</b>\n    </label>\n    <input type=\"text\" [(ngModel)]=\"user.Username\" placeholder=\"Enter User Name\" #searchBox (keyup)=\"search(searchBox.value)\"\n      name=\"username\" required>\n    <span *ngIf=\"user$ | async\">\n      <p style=\"color: red\">User with such name is already exists</p>\n    </span>\n    <label for=\"email\">\n      <b>Firstname</b>\n    </label>\n    <input type=\"text\" placeholder=\"Enter firstname\" [(ngModel)]=\"user.Firstname\" name=\"firstname\" required>\n    <label for=\"email\">\n      <b>Surname</b>\n    </label>\n    <input type=\"text\" placeholder=\"Enter surname\" [(ngModel)]=\"user.Surname\" name=\"surname\" required>\n    <label for=\"email\">\n      <b>Description</b>\n    </label>\n    <input type=\"text\" placeholder=\"Enter firstname\" [(ngModel)]=\"user.Description\" name=\"firstname\">\n    <button [disabled]=\"user$ | async\" type=\"submit\" (click)=\"Save()\" class=\"registerbtn\">Save</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fileToUpload = null;
        this.searchTerms = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EditProfileComponent.prototype.GetProfileData = function () {
        var _this = this;
        this.username = this.route.snapshot.paramMap.get('UserName');
        this.userService.GetUserProfileInfoToUpdate(this.username).subscribe(function (data) {
            _this.user = data;
        }, function (err) {
        });
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetProfileData();
        this.user$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.userService.checkUserExists(term); }));
    };
    EditProfileComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EditProfileComponent.prototype.Save = function () {
        var _this = this;
        this.userService.UpdateUserProfile(this.user).subscribe(function (data) {
            alert(JSON.stringify(data));
            var username = _this.user.Username;
            localStorage.setItem('profileUrl', _this.user.Username);
            _this.router.navigate(["../" + username]);
        }, function (err) {
            alert(JSON.stringify(err.error));
        });
    };
    EditProfileComponent.prototype.SaveAvatar = function () {
        var formData = new FormData();
        formData.append('avatar', this.fileToUpload, this.fileToUpload.name);
        this.userService.UpdateAvatar(this.user.Id, formData).subscribe(function (data) {
            alert(JSON.stringify(data));
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    EditProfileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/list-images/list-images.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-images/list-images.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 100px;\r\n  justify-content: center;\r\n  max-width: 1500px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.load-btn{\r\n\r\n  text-align: center;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    background: white;\r\n    border: 0;\r\n\r\n}\r\n\r\n.user_profile-avatar {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  width: 60px;\r\n  height: 60px;\r\n  vertical-align: middle;\r\n  border-radius: 50%;\r\n  margin: 10px 10px ;\r\n  background: #eee;\r\n}\r\n\r\n.card {\r\n  flex: 0 0 450px;\r\n  margin: 10px;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.card img {\r\n  max-width: 100%;\r\n}\r\n\r\n.card .text {\r\n  padding: 0 20px 20px;\r\n}\r\n\r\n.card .text>button {\r\n  background: gray;\r\n  border: 0;\r\n  color: white;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/* display information basic info of user above the image */\r\n\r\n.userinfo {\r\n  text-align: right;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n}\r\n\r\n№div_top_hypers {\r\n  display: flex;\r\n  align-content: center;\r\n  padding: 0;\r\n}\r\n\r\n#ul_image_tags {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#ul_image_tags li {\r\n  display: inline-flex;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#ul_image_tags li a {\r\n  margin-left: 10px;\r\n}\r\n\r\n.imageInfo {\r\n  display: block;\r\n  padding: 10px 20px 10px 20px;\r\n}\r\n\r\n.likesCount {\r\n  float: left;\r\n}\r\n\r\n/*.toLikebtn {\r\n  float: right;\r\n  background-image: url(../icons/notliked.png);\r\n  font-size:24px;\r\n}*/\r\n\r\n/* Pagination */\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.pagination {\r\n  display: inline-block;\r\n}\r\n\r\n.far, .fas {\r\n  font-size: 30px;\r\n}\r\n\r\n.pagination a {\r\n  color: black;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color .3s;\r\n  border: 1px solid #ddd;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  border: 1px solid #4CAF50;\r\n}\r\n\r\n.fa-heart {\r\n  float: right;\r\n  color: black;\r\n}\r\n\r\n.thumbnail {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  overflow: hidden;\r\n}\r\n\r\n.thumbnail img {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    height: 100%;\r\n    width: auto;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n  }\r\n\r\n.userAvatar {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n width: 60px;\r\n    height: 60px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    margin: 10px 10px;\r\n    background: #eee;\r\n    border: solid 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/list-images/list-images.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-images/list-images.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tag-search></app-tag-search>\r\n<div class=\"cards\" style=\"text-align: center;\">\r\n  <div *ngFor=\"let image of images\" class=\"card\">\r\n\r\n    <div class=\"userinfo\" (click)=\"userSearch()\">\r\n      <img class=\"userAvatar\" [src]=\"image.Image.UserAvalarUrl\" alt=\"ELEVATE\" width=\"120\" height=\"120\" src=\"https://cdn.onlinewebfonts.com/svg/img_191958.png\">\r\n      <p (click)=\"onUserClick(image.Image.UserId, image.Image.UserName)\"><strong>{{image.Image.UserName}}</strong></p>\r\n    </div>\r\n    <hr>\r\n    <div style=\"width: 100%;height: 300px;overflow: hidden;\">\r\n      <img [src]=\"image.Image.LocalPath\" alt=\"Sample photo\"style=\"object-fit: cover;width: 100%;height: 100%;\">\r\n    </div>\r\n    <div class=\"imageInfo\">\r\n      <span class=\"likesCount\">\r\n        <strong>  {{image.Image.NumberOfLikes}} Likes</strong>\r\n      </span>\r\n      <div *ngIf=\"image.Image.IsLiked == true;then like else nonlike\">here is ignored</div>\r\n      <ng-template #like>\r\n        <i class=\"fas fa-heart\" style=\"color: red;  \" (click)=\"onLikeClick(image.Image, image.Image.Id)\"></i>\r\n      </ng-template>\r\n      <ng-template #nonlike>\r\n        <i class=\"far fa-heart\" (click)=\"onLikeClick(image.Image,image.Image.Id)\"></i>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"text\">\r\n      <p>{{image.Image.Description}}</p>\r\n      <div>\r\n        <ul id=\"ul_image_tags\">\r\n          <li *ngFor=\"let tag of image.Tags\" routerLink=\"tag/{{tag.Id}}\">\r\n            <a class=\"a_top_hypers\">{{tag.Description}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"text-align: center\">\r\n  <button type=\"button\" class=\"load-btn\" (click)=\"onLoadClick()\">Load More</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/list-images/list-images.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-images/list-images.component.ts ***!
  \******************************************************/
/*! exports provided: ListImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListImagesComponent", function() { return ListImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListImagesComponent = /** @class */ (function () {
    function ListImagesComponent(service, router, tagService) {
        this.service = service;
        this.router = router;
        this.tagService = tagService;
        this.page = 1;
        this.images = [];
        this.isLoading = false;
        this.onLoadClick();
    }
    ListImagesComponent.prototype.onUserClick = function (userId, Username) {
        this.router.navigate(["/" + Username]);
    };
    ListImagesComponent.prototype.onLoadClick = function () {
        var _this = this;
        this.service.getImages(this.page).subscribe(function (data) {
            _this.page++;
            _this.Post = data;
            (_a = _this.images).push.apply(_a, data.Images);
            _this.page_parameters = data.PageParameters;
            var _a;
        });
    };
    ListImagesComponent.prototype.onLikeClick = function (el, imageId) {
        if (imageId == undefined) {
            console.log('undefined id');
        }
        else {
            this.service.LikeImage(imageId).subscribe(function (data) {
                if (el.IsLiked == true) {
                    el.IsLiked = false;
                    el.NumberOfLikes--;
                }
                else {
                    el.IsLiked = true;
                    el.NumberOfLikes++;
                }
            });
        }
    };
    ListImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-images',
            template: __webpack_require__(/*! ./list-images.component.html */ "./src/app/list-images/list-images.component.html"),
            styles: [__webpack_require__(/*! ./list-images.component.css */ "./src/app/list-images/list-images.component.css")],
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], ListImagesComponent);
    return ListImagesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.registrationContainer {\r\n    margin: 0 auto;\r\n    max-width: 500px;\r\nmin-width: 300px;\r\n\r\n    background-color: white;\r\n    margin-top: 150px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   vertical-align: middle;\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 16px;\r\n    background-color: white;\r\n}\r\n\r\n.register {\r\n\r\n    background-color: rgb(25, 115, 204);\r\n    color: #f1f1f1;\r\n    font-size: 20px;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: 1px rgb(25, 115, 204) solid;\r\n    font-size: 100%;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.registerbtn {\r\n    background-color: rgb(25, 115, 204);\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n    font-size: 20px;\r\n}\r\n\r\n.registerbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n    color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isFromLike\">\n  Please Authorize Or Register to like image\n</div>\n<form action=\"\">\n  <div class=\"registrationContainer\">\n    <div class=\"container register\">\n      <h1>Sign In</h1>\n    </div>\n    <div class=\"container\">\n      <label for=\"User Name\">\n        <b>User Name</b>\n      </label>\n      <input type=\"text\" [(ngModel)]=\"model.username\" placeholder=\"Enter User Name\" name=\"username\" required>\n      <label for=\"psw\">\n        <b>Password</b>\n      </label>\n      <input type=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n      <button type=\"submit\" (click)=\"login()\" class=\"registerbtn\">Sing In</button>\n    </div>\n\n    <div class=\"container signin\">\n      <p>Do not have an Account?\n        <a [routerLink]=\"['/register']\">Sign Up</a>.</p>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.model = {};
        this.isFromlike = false;
        router.events.forEach(function (event) {
            {
                _this.isFromlike = true;
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            localStorage.setItem('profileUrl', _this.model.username);
            _this.router.navigate(['']);
        }, function (err) {
            // this.isLoginError = true;
            alert("Invalid userid or password");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    background: white;\r\n    border: 0;\r\n\r\n}"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(location) {
        this.location = location;
        localStorage.removeItem('userToken');
        localStorage.removeItem('profileUrl');
        this.location.back();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: black;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.registrationContainer {\r\n    margin: 0 auto;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    margin-top: 30px;\r\n    vertical-align: middle;\r\n    margin-bottom: 30px;}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    padding: 16px;\r\n    background-color: white;\r\n}\r\n\r\n.register {\r\n\r\n    background-color: rgb(25, 115, 204);\r\n    color: #f1f1f1;\r\n    font-size: 20px;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text],\r\ninput[type=password] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: 1px rgb(25, 115, 204) solid;\r\n    font-size: 100%;\r\n}\r\n\r\ninput[type=text]:focus,\r\ninput[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.registerbtn {\r\n    background-color: rgb(25, 115, 204);\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n    font-size: 20px;\r\n}\r\n\r\n.registerbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n    color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registrationContainer\">\n    <div class=\"container register\">\n        <h1>Register</h1>\n    </div>\n    <div class=\"container\">\n        <p>Please fill in this form to create an account.</p>\n        <label for=\"User Name\">\n            <b>User Name</b>\n        </label>\n        <input type=\"text\" placeholder=\"Enter User Name\" #searchBox (keyup)=\"search(searchBox.value)\" [(ngModel)]=\"model.UserName\" name=\"username\" required>\n        <span  *ngIf=\"user$ | async\">\n            <p style=\"color: red\">name is already booked</p>\n        </span>\n        <label for=\"email\">\n            <b>Email</b>\n        </label>\n        <input type=\"text\" placeholder=\"Enter Email\" [(ngModel)]=\"model.Email\" name=\"email\" required>\n        <label for=\"email\">\n            <b>Firstname</b>\n        </label>\n        <input type=\"text\" placeholder=\"Enter firstname\" [(ngModel)]=\"model.FirstName\" name=\"firstname\" required>\n        <label for=\"email\">\n            <b>Surname</b>\n        </label>\n        <input type=\"text\" placeholder=\"Enter surname\" [(ngModel)]=\"model.Surname\" name=\"surname\" required>\n        <label for=\"email\">\n            <b>Phone number</b>\n        </label>\n        <input type=\"text\" placeholder=\"Enter phone number(optional)\" [(ngModel)]=\"model.PhoneNumber\" name=\"phonenumber\">\n        <label for=\"psw\">\n            <b>Password</b>\n        </label>\n        <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"model.Password\" name=\"psw\" required>\n\n        <label for=\"psw-repeat\">\n            <b>Confirm Password</b>\n        </label>\n            <input type=\"password\" placeholder=\"Repeat Password\" [(ngModel)]=\"model.ConfirmPassword\" name=\"psw-repeat\" required>\n        <hr>\n        <p>By creating an account you agree to our\n            <a href=\"#\">Terms & Privacy</a>.</p>\n\n        <button [disabled]=\"user$ | async\" type=\"submit\"  (click)=\"register()\" class=\"registerbtn\">Register</button>\n    </div>\n\n    <div class=\"container signin\">\n        <p>Already have an account?\n            <a [routerLink]=\"['/login']\">Sign in</a>.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService, userService, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.model = {};
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.formErrors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.userService.checkUserExists(term); }));
    };
    RegisterComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authenticationService.register(this.model)
            .subscribe(function (data) {
            alert('Registration is successful');
            _this.router.navigate(['/login']);
        }, function (err) {
            var modelstate = JSON.stringify(err.error.ModelState);
            alert(modelstate);
            for (var i = 0; i < err.error.length; i++) {
                _this.formErrors = err.error[i].Message;
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, psw) {
        var data = "username=" + username + "&password=" + psw + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post('http://localhost:56688/Token', data, { headers: reqHeader });
    };
    AuthenticationService.prototype.register = function (model) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/Account/Register', model);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService(http, router) {
        this.http = http;
        this.router = router;
    }
    ImageService.prototype.DeleteImage = function (imageId) {
        var token = localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        return this.http.delete("api/images/" + imageId, { headers: myHeaders });
    };
    /* GET heroes whose name contains search term */
    ImageService.prototype.getImages = function (PageIndex) {
        var token = localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        return this.http.get("/api/images/recent/?PageIndex=" + PageIndex, { headers: myHeaders });
    };
    //Post
    ImageService.prototype.LikeImage = function (imageId) {
        var token = localStorage.getItem('userToken');
        if (token == null || token == undefined) {
            this.router.navigate(['/login']);
        }
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        return this.http.post("api/images/" + imageId + "/likes", null, { headers: myHeaders });
    };
    ImageService.prototype.PostFile = function (file) {
        var token = localStorage.getItem('userToken');
        if (token == null || token == undefined) {
            this.router.navigate(['/login']);
        }
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer " + token);
        return this.http.post('api/images', file, { headers: myHeaders });
    };
    ImageService.prototype.PostImage = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        return this.http.post('api/images', data, { params: params, headers: headers });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TagService = /** @class */ (function () {
    function TagService(http, router) {
        this.http = http;
        this.router = router;
    }
    /* GET Tags name contains search term */
    TagService.prototype.GetTagsBySubstring = function (substring) {
        if (!substring.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get("/api/tags/" + substring + "/search");
    };
    TagService.prototype.GetRecentImagesByTagId = function (tagId, page) {
        var token = "Bearer " + localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', token);
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get("/api/tags/" + tagId + "/images/recent?PageIndex=" + page, { headers: myHeaders });
    };
    TagService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.UpdateUserProfile = function (user) {
        var token = "Bearer " + localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token);
        var id = user.Id;
        return this.http.patch("api/users/" + id + "/profile/info", user, { headers: myHeaders });
    };
    UserService.prototype.UpdateAvatar = function (userId, formdata) {
        var token = "Bearer " + localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token);
        return this.http.patch("api/users/" + userId + "/profile/avatar", formdata, { headers: myHeaders });
    };
    UserService.prototype.GetUserProfileInfoToUpdate = function (username) {
        return this.http.get("api/users/username/" + username + "/profile/info");
    };
    // GET Boolean if user with such Username exists
    UserService.prototype.checkUserExists = function (username) {
        return this.http.get("api/users/" + username + "/check");
    };
    UserService.prototype.getUserProfile = function (username, PageIndex) {
        var token = "Bearer " + localStorage.getItem('userToken');
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token);
        return this.http.get("/api/users/name/" + username + "/profile/?PageIndex=" + PageIndex, { headers: myHeaders });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/tag-images-list/tag-images-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tag-images-list/tag-images-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 100px;\r\n    justify-content: center;\r\n    max-width: 1500px;\r\n    margin: 0px auto;\r\n  }\r\n  \r\n  .load-btn{\r\n  \r\n    text-align: center;\r\n      padding: 10px;\r\n      border-radius: 4px;\r\n      background: white;\r\n  }\r\n  \r\n  .user_profile-avatar {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    width: 60px;\r\n    height: 60px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    margin: 10px 10px ;\r\n    background: #eee;\r\n  }\r\n  \r\n  .card {\r\n    flex: 0 0 450px;\r\n    margin: 10px;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  .card img {\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .card .text {\r\n    padding: 0 20px 20px;\r\n  }\r\n  \r\n  .card .text>button {\r\n    background: gray;\r\n    border: 0;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 100%;\r\n  }\r\n  \r\n  /* display information basic info of user above the image */\r\n  \r\n  .userinfo {\r\n    text-align: right;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n  }\r\n  \r\n  №div_top_hypers {\r\n    display: flex;\r\n    align-content: center;\r\n    padding: 0;\r\n  }\r\n  \r\n  #ul_image_tags {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  #ul_image_tags li {\r\n    display: inline-flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  #ul_image_tags li a {\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .imageInfo {\r\n    display: block;\r\n    padding: 10px 20px 10px 20px;\r\n  }\r\n  \r\n  .likesCount {\r\n    float: left;\r\n  }\r\n  \r\n  /*.toLikebtn {\r\n    float: right;\r\n    background-image: url(../icons/notliked.png)\r\n    style=\"font-size:24px;\"\r\n  }*/\r\n  \r\n  /* Pagination */\r\n  \r\n  .center {\r\n    text-align: center;\r\n  }\r\n  \r\n  .pagination {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .far, .fas {\r\n    font-size: 30px;\r\n  }\r\n  \r\n  .pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 8px 16px;\r\n    text-decoration: none;\r\n    transition: background-color .3s;\r\n    border: 1px solid #ddd;\r\n    margin: 0 4px;\r\n  }\r\n  \r\n  .pagination a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: 1px solid #4CAF50;\r\n  }\r\n  \r\n  .fa-heart {\r\n    float: right;\r\n    color: black;\r\n  }\r\n  \r\n  .userAvatar {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  width: 60px;\r\n  height: 60px;\r\n  vertical-align: middle;\r\n  border-radius: 50%;\r\n  margin: 10px 10px;\r\n  background: #eee;\r\n  border: solid 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tag-images-list/tag-images-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/tag-images-list/tag-images-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Found by: {{FoundTag.Description}}</h1>\r\n<div class=\"cards\" style=\"text-align: center;\">\r\n  <div *ngFor=\"let image of images\" class=\"card\">\r\n\r\n    <div class=\"userinfo\" (click)=\"userSearch()\">\r\n      <img class=\"userAvatar\" alt=\"ELEVATE\" width=\"120\" height=\"120\" [src]=\"image.Image.UserAvalarUrl\">\r\n      <p (click)=\"onUserClick(image.Image.UserName)\"><strong>{{image.Image.UserName}}</strong></p>\r\n    </div>\r\n    <hr>\r\n    <div style=\"width: 100%;height: 300px;overflow: hidden;\">\r\n\r\n      <img [src]=\"image.Image.LocalPath\" alt=\"Sample photo\" style=\"object-fit: cover;width: 100%;height: 100%;\">\r\n    </div>\r\n    <div class=\"imageInfo\">\r\n      <span class=\"likesCount\">\r\n        <strong>  {{image.Image.NumberOfLikes}} Likes</strong>\r\n      </span>\r\n      <div *ngIf=\"image.Image.IsLiked == true;then content else othercontent\">here is ignored</div>\r\n      <ng-template #content>\r\n        <i class=\"fas fa-heart\" style=\"color: red;  \" (click)=\"onLikeClick(image.Image, image.Image.Id)\"></i>\r\n      </ng-template>\r\n      <ng-template #othercontent>\r\n        <i class=\"far fa-heart\" (click)=\"onLikeClick(image.Image,image.Image.Id)\"></i>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"text\">\r\n      <p>{{image.Image.Description}}</p>\r\n      <div>\r\n        <ul id=\"ul_image_tags\">\r\n          <li *ngFor=\"let tag of image.Tags\">\r\n            <a class=\"a_top_hypers\">{{tag.Description}}</a>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"text-align: center\">\r\n  <button type=\"button\" class=\"load-btn\" (click)=\"onLoadClick()\">Load More</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tag-images-list/tag-images-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tag-images-list/tag-images-list.component.ts ***!
  \**************************************************************/
/*! exports provided: TagImagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagImagesListComponent", function() { return TagImagesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagImagesListComponent = /** @class */ (function () {
    function TagImagesListComponent(tagService, imageService, route, router) {
        this.tagService = tagService;
        this.imageService = imageService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.images = [];
        this.tagId = +this.route.snapshot.paramMap.get('id');
        // this.onImagesByTagClick(this.tagId);
    }
    TagImagesListComponent.prototype.onLoadClick = function () {
        var _this = this;
        this.tagService.GetRecentImagesByTagId(this.tagId, this.page).subscribe(function (data) {
            if (data != null || data != undefined) {
                _this.FoundTag = data.Tag;
                (_a = _this.images).push.apply(_a, data.Images);
                _this.page++;
            }
            var _a;
        }, function (err) {
            console.log(err.message);
        });
    };
    TagImagesListComponent.prototype.onLikeClick = function (el, imageId) {
        if (imageId == undefined) {
            console.log('undefined id');
        }
        else {
            this.imageService.LikeImage(imageId).subscribe(function (data) {
                if (el.IsLiked == true) {
                    el.IsLiked = false;
                    el.NumberOfLikes--;
                }
                else {
                    el.IsLiked = true;
                    el.NumberOfLikes++;
                }
            });
        }
    };
    TagImagesListComponent.prototype.onUserClick = function (Username) {
        this.router.navigate(["../" + Username]);
    };
    TagImagesListComponent.prototype.onTag = function (tagId) {
        this.images = [];
        this.page = 1;
        this.router.navigate(["../tag/" + tagId]);
    };
    TagImagesListComponent.prototype.onImagesByTagClick = function (tagId) {
        var _this = this;
        this.tagService.GetRecentImagesByTagId(tagId, this.page).subscribe(function (data) {
            if (data != null || data != undefined) {
                _this.FoundTag = data.Tag;
                (_a = _this.images).push.apply(_a, data.Images);
                _this.page++;
            }
            var _a;
        }, function (err) {
            console.log(err.message);
        });
    };
    TagImagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.onImagesByTagClick(id);
        });
    };
    TagImagesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-images-list',
            template: __webpack_require__(/*! ./tag-images-list.component.html */ "./src/app/tag-images-list/tag-images-list.component.html"),
            styles: [__webpack_require__(/*! ./tag-images-list.component.css */ "./src/app/tag-images-list/tag-images-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TagImagesListComponent);
    return TagImagesListComponent;
}());



/***/ }),

/***/ "./src/app/tag-search/tag-search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tag-search/tag-search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-component {\r\n    \r\n  margin: 0 auto;\r\n  height: 300px;\r\n  width: 100%;\r\n  background: url(https://www.hotelsanmarinoidesign.com/wp-content/uploads/2015/02/header_rocca_1_3-2000x400.jpg) no-repeat;\r\n  background-size: cover;\r\n  padding-top: 50px;\r\n  } \r\n \r\n  #search-input{\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    vertical-align: bottom;\r\n    border-radius: 4px;\r\n  } \r\n \r\n  #search-box {\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\r\n    background-position:  10px 12px;\r\n    background-repeat: no-repeat;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    font-size: 16px;\r\n    padding: 12px 20px 12px 40px;\r\n    border: 1px solid rgb(67, 67, 68);\r\n    margin-bottom: 0;\r\n    border-radius: 5px;\r\n  } \r\n \r\n  #search-results-ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n  } \r\n \r\n  #search-results-ul li a {\r\n    border: 1px solid #ddd;\r\n    margin-top: -1px;\r\n    /* Prevent double borders */\r\n    background-color: #f6f6f6;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    color: black;\r\n    display: block\r\n  } \r\n \r\n  #search-results-ul li a:hover:not(.header) {\r\n    background-color: #eee;\r\n  } \r\n \r\n  .postsnumber{\r\n      float:right\r\n  }"

/***/ }),

/***/ "./src/app/tag-search/tag-search.component.html":
/*!******************************************************!*\
  !*** ./src/app/tag-search/tag-search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <div id=\"search-input\">\n    <input #searchBox id=\"search-box\" placeholder=\"Search for tags..\" (keyup)=\"search(searchBox.value)\" />\n  </div>\n  <ul id=\"search-results-ul\">\n\n    <li *ngFor=\"let tag of tags$ | async\" routerLink=\"tag/{{tag.Id}}\">\n\n      <!-- (click)=\"onSelectTag(tag.Id)\" -->\n\n      <a> {{tag.Description}}\n        <span class=\"postsnumber\">{{tag.ImagesCount}} Posts</span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/tag-search/tag-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tag-search/tag-search.component.ts ***!
  \****************************************************/
/*! exports provided: TagSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagSearchComponent", function() { return TagSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-images/list-images.component */ "./src/app/list-images/list-images.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagSearchComponent = /** @class */ (function () {
    function TagSearchComponent(tagService, router, imageComponent) {
        this.tagService = tagService;
        this.router = router;
        this.imageComponent = imageComponent;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    TagSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    TagSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tags$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.tagService.GetTagsBySubstring(term); }));
    };
    TagSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-search',
            template: __webpack_require__(/*! ./tag-search.component.html */ "./src/app/tag-search/tag-search.component.html"),
            styles: [__webpack_require__(/*! ./tag-search.component.css */ "./src/app/tag-search/tag-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _list_images_list_images_component__WEBPACK_IMPORTED_MODULE_5__["ListImagesComponent"]])
    ], TagSearchComponent);
    return TagSearchComponent;
}());



/***/ }),

/***/ "./src/app/upload-image/upload-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-content\r\n{\r\n  margin: 0 auto;\r\n  width: 40%;\r\n  margin-top: 100px;\r\n\r\n}\r\n\r\n.description-box{\r\n  width: 100%;\r\n  height: 100px;\r\npadding: 0px;\r\nfont-size: 20px;\r\npadding: 10px;\r\n\r\n}\r\n\r\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n  }\r\n\r\n.btn {\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    background:  black;\r\n    font-size: 15px;\r\n    color: white;\r\n    border: 0;\r\n    margin: 0 auto;\r\n      margin-left: 1%;\r\n    height: 100%;\r\n  width : 17%;  }\r\n\r\n#search-component {\r\n    \r\n    margin: 0 auto;\r\n    height: 300px;\r\n    width: 100%;\r\n    background: url(https://www.hotelsanmarinoidesign.com/wp-content/uploads/2015/02/header_rocca_1_3-2000x400.jpg) no-repeat;\r\n    background-size: cover;\r\n    padding-top: 50px;\r\n    }\r\n\r\n#search-input{\r\n      width: 100%;\r\n      display: inline-block;\r\n      margin: 0 auto;\r\n      vertical-align: bottom;\r\n      border-radius: 4px;\r\n      \r\n    }\r\n\r\n#search-box {\r\n      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\r\n      background-position:  10px 12px;\r\n      background-repeat: no-repeat;\r\n      width: -webkit-fill-available;\r\n      width: -moz-available;\r\n      font-size: 16px;\r\n      width: 50%;\r\n      float: left;\r\n      padding: 12px 20px 12px 40px;\r\n      border: 1px solid rgb(67, 67, 68);\r\n      margin-bottom: 0;\r\n      border-radius: 5px;\r\n    }\r\n\r\n#search-results-ul {\r\n      list-style-type: none;\r\n      padding: 0;\r\n      margin: 0 auto;\r\n      width: 60%;\r\n      float: left;    }\r\n\r\n#search-results-ul li a {\r\n      border: 1px solid #ddd;\r\n      margin-top: -1px;\r\n      /* Prevent double borders */\r\n      background-color: #f6f6f6;\r\n      padding: 12px;\r\n      text-decoration: none;\r\n      font-size: 18px;\r\n      color: black;\r\n      display: block\r\n    }\r\n\r\n#search-results-ul li a:hover:not(.header) {\r\n      background-color: #eee;\r\n    }\r\n\r\n.postsnumber{\r\n        float:right\r\n    }"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-content\">\n  <div class=\"form-group\">\n    <label for=\"file\">Choose File</label>\n    <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" accept=\"image/*\">\n  </div>\n  <hr/>\n  <textarea class=\"description-box\" [(ngModel)]=\"desctription\" placeholder=\"Description\"> \n  </textarea>\n  <hr>\n\n  <div id=\"search-input\">\n    <input #searchBox id=\"search-box\" #searchInput placeholder=\"Search for tags..\" (keyup)=\"search(searchBox.value)\" />\n    <button type=\"submit\" class=\"btn\" (click)=\"onSelectTag(searchInput.value)\">Add New</button>\n    <button class=\"btn\"  (click)=\"upload()\">Upload</button>\n  </div>\n\n  <ul id=\"search-results-ul\">\n    <li *ngFor=\"let tag of tags$ | async\" name=\"searchInput\" (click)=\"onSelectTag(tag.Description)\">\n      <a> {{tag.Description}}\n        <span class=\"postsnumber\">{{tag.ImagesCount}} Posts</span>\n      </a>\n    </li>\n  </ul>\n  <ul style=\"float: right;width: 30%;  \">\n    <li *ngFor=\"let tag of ChosenTags\">\n      {{tag}} <button class=\"btn\" style=\"background: brown;width: 40%;\" (click)=\"deleteFromChosenArray(tag)\">delete</button>\n    </li>\n  </ul>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.ts ***!
  \********************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(imageService, tagService, router, location) {
        this.imageService = imageService;
        this.tagService = tagService;
        this.router = router;
        this.location = location;
        this.desctription = "";
        this.fileToUpload2 = null;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.ChosenTags = [];
        var token = localStorage.getItem('userToken');
        if (token == null || token == undefined) {
            this.router.navigate(['/login']);
        }
    }
    UploadImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tags$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.tagService.GetTagsBySubstring(term); }));
    };
    UploadImageComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    UploadImageComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('File', this.fileToUpload2, this.fileToUpload2.name);
        // formData.append('Tags', this.ChosenTags);
        formData.append('Description', this.desctription);
        this.ChosenTags.forEach(function (element) {
            formData.append('Tags', element);
        });
        this.imageService.PostFile(formData).subscribe(function (data) {
            alert(data);
            _this.location.back();
        }, function (err) {
            alert(err);
        });
    };
    UploadImageComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload2 = files.item(0);
    };
    UploadImageComponent.prototype.uploadFileToActivity = function () {
        var formData = new FormData();
        formData.append('fileKey', this.fileToUpload2, this.fileToUpload2.name);
        this.imageService.PostImage(formData).subscribe(function () {
        });
    };
    UploadImageComponent.prototype.onSelectTag = function (incometag) {
        if (incometag.trim()) {
            if (!(this.ChosenTags.indexOf(incometag) > -1))
                this.ChosenTags.push(incometag);
        }
        else {
            alert("Choose a tag");
        }
    };
    UploadImageComponent.prototype.onSelect = function (incomeTag) {
        this.ChosenTags.push(incomeTag);
    };
    UploadImageComponent.prototype.deleteFromChosenArray = function (tag) {
        var index = this.ChosenTags.indexOf(tag);
        this.ChosenTags.slice(index, 1);
    };
    UploadImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__(/*! ./upload-image.component.html */ "./src/app/upload-image/upload-image.component.html"),
            styles: [__webpack_require__(/*! ./upload-image.component.css */ "./src/app/upload-image/upload-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 100px;\r\n    justify-content: center;\r\n    max-width: 1500px;\r\n    margin: 0px auto;\r\n  }\r\n  .user_profile{\r\n    display: inline-block;\r\n    padding: 40px;\r\n    text-align: center;\r\n    /* align-items: center; */\r\n    width: 100%;\r\n  }\r\n  .user_profile-info{\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      text-align: left;\r\n\r\n  }\r\n  .user_profile-avatar {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    width: 120px;\r\n    height: 120px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    margin: 10px 10px ;\r\n    background: #eee;\r\n  }\r\n  .card {\r\n    flex: 0 0 450px;\r\n    margin: 10px;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  }\r\n  .card img {\r\n    max-width: 100%;\r\n  }\r\n  .card .text {\r\n    padding: 0 20px 20px;\r\n  }\r\n  .card .text>button {\r\n    background: gray;\r\n    border: 0;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 100%;\r\n  }\r\n  /* display information basic info of user above the image */\r\n  .userinfo {\r\n    text-align: right;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n  }\r\n  #div_top_hypers {\r\n    display: flex;\r\n    align-content: center;\r\n    padding: 0;\r\n  }\r\n  #ul_image_tags {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  #ul_image_tags li {\r\n    display: inline-flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  #ul_image_tags li a {\r\n    margin-left: 10px;\r\n  }\r\n  .imageInfo {\r\n    display: block;\r\n    padding: 10px 20px 10px 20px;\r\n  }\r\n  .likesCount {\r\n    float: left;\r\n  }\r\n  /*.toLikebtn {\r\n    float: right;\r\n    background-image: url(../icons/notliked.png)\r\n    style=\"font-size:24px;\"\r\n  }*/\r\n  /* Pagination */\r\n  .center {\r\n    text-align: center;\r\n  }\r\n  .pagination {\r\n    display: inline-block;\r\n  }\r\n  .far, .fas {\r\n    font-size: 30px;\r\n  }\r\n  .fa-heart {\r\n    float: right;\r\n    color: black;\r\n  }\r\n  .user_profile-info-desctription {\r\n    font-size: 14px;\r\n\r\n}\r\n  .user_profile-stats {\r\n    vertical-align: middle;\r\n    width: 400px;\r\n    font-size: 14px;\r\n    text-align: right;\r\n    display: inline-block;\r\ntext-align: center;\r\n}\r\n  .fact-box__fact {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n}\r\n  .fact-box__title {\r\n    display: block;\r\n    margin-top: -2px;\r\n    font-size: 20px;\r\n}\r\n  .btn {\r\n  text-align: center;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  background: black ;\r\n  color: white;\r\n  border: 0;\r\n  font-size: 15px;\r\n  margin: 10px;\r\n  display: block;\r\n  width: 120px;\r\n\r\n}\r\n  .delete-btn\r\n{\r\n  padding: 10px;\r\n  border: 0;\r\n  background: brown; \r\n  width: 40px;\r\n  text-align: center;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  font-size: 15px;\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user_profile\">\r\n  <img class=\"user_profile-avatar\" alt=\"ELEVATE\" width=\"120\" height=\"120\" [src]=\"user.AvatarUrl\">\r\n  <div class=\"user_profile-info\">\r\n    <h1 class=\"user_profile-info-title\">\r\n      {{user.Username}}\r\n    </h1>\r\n    <p style=\"margin-top: -20px;color: grey;\">{{user.Fullname}}</p>\r\n    <h2 class=\"user_profile-info-desctription\">\r\n      {{user.Description}}\r\n    </h2>\r\n  </div>\r\n  <div class=\"user_profile-stats\">\r\n    <div class=\"user_profile-stats-posts\">\r\n      <span class=\"fact-box__fact\">{{user.Publications}}</span>\r\n      <span class=\"fact-box__title\">Posts</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"IsOwnProfile\" style=\" vertical-align: middle; display:  inline-block;\">\r\n    <button class=\"btn\" routerLink='../{{user.Username}}/edit'> Edit Profile</button>\r\n    <button class=\"btn\" routerLink='../upload'> Upload Image</button>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"cards\" style=\"text-align: center;\">\r\n  <div *ngFor=\"let image of images\" class=\"card\">\r\n    <div *ngIf=\"IsOwnProfile\" style=\"text-align: right;\">\r\n      <button class=\"delete-btn\" (click)=\"deleteImage(image.Image.Id)\">X</button>\r\n    </div>\r\n    <div style=\"width: 100%;height: 300px;overflow: hidden;\">\r\n      <img [src]=\"image.Image.LocalPath\" alt=\"Sample photo\" style=\"object-fit: cover;width: 100%;height: 100%;\">\r\n    </div>\r\n    <div class=\"imageInfo\">\r\n      <span class=\"likesCount\">\r\n        <strong> {{image.Image.NumberOfLikes}} Likes</strong>\r\n      </span>\r\n      <div *ngIf=\"image.Image.IsLiked == true;then content else othercontent\">here is ignored</div>\r\n      <ng-template #content>\r\n        <i class=\"fas fa-heart\" style=\"color: red;  \" (click)=\"onLikeClick(image.Image, image.Image.Id)\"></i>\r\n      </ng-template>\r\n      <ng-template #othercontent>\r\n        <i class=\"far fa-heart\" (click)=\"onLikeClick(image.Image,image.Image.Id)\"></i>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"text\">\r\n      <p>{{image.Image.Description}}</p>\r\n      <div>\r\n        <ul id=\"ul_image_tags\">\r\n          <li *ngFor=\"let tag of image.Tags\">\r\n            <a routerLink=\"../tag/{{tag.Id}}\" class=\"a_top_hypers\">{{tag.Description}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"text-align: center;padding: 0% 50%;\">\r\n  <button type=\"button\" class=\" btn load-btn\" (click)=\"onLoadClick()\">Load More</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service, imageService, route) {
        this.service = service;
        this.imageService = imageService;
        this.route = route;
        this.page = 1;
        this.images = [];
        this.username = this.route.snapshot.paramMap.get('UserName');
        this.onLoadClick();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.onLoadClick = function () {
        var _this = this;
        this.service.getUserProfile(this.username, this.page).subscribe(function (data) {
            (_a = _this.images).push.apply(_a, data.Images);
            _this.IsOwnProfile = data.IsOwnProfile;
            _this.user = data.User;
            _this.page++;
            var _a;
        });
    };
    UserProfileComponent.prototype.onLikeClick = function (el, imageId) {
        if (imageId == undefined) {
            console.log('undefined id');
        }
        else {
            this.imageService.LikeImage(imageId).subscribe(function (data) {
                if (el.IsLiked == true) {
                    el.IsLiked = false;
                    el.NumberOfLikes--;
                }
                else {
                    el.IsLiked = true;
                    el.NumberOfLikes++;
                }
            });
        }
    };
    UserProfileComponent.prototype.deleteImage = function (imageId) {
        this.imageService.DeleteImage(imageId).subscribe(function (data) {
            alert(JSON.stringify(data));
        }, function (err) {
            alert(JSON.stringify(err.error));
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PhotoAlbum with angular\New\PhotoAlbum.Web\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map