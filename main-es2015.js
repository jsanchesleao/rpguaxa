(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _game_control_game_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-control/game-control.component */ "./src/app/game-control/game-control.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
/* harmony import */ var _game_events_game_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-events/game-events.component */ "./src/app/game-events/game-events.component.ts");
/* harmony import */ var _dice_roll_dice_roll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dice-roll/dice-roll.component */ "./src/app/dice-roll/dice-roll.component.ts");








class AppComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.gameState = this.gameService.getGameState();
        this.gameService.gameStateChanged.subscribe((gameState) => this.gameState = gameState);
        this.gameService.addPlayer(new _shared_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]('Guaxa', 3, 'um guaxinim'));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [[1, "app"], [1, "app-header"], [1, "app-title"], [1, "app-gameControl"], [3, "gameState"], [1, "app-gameContent"], [1, "app-playerList"], [1, "app-gameEvents"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Guaxinins e Gambiarras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-game-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-player-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-game-events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-dice-roll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameState", ctx.gameState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameState", ctx.gameState);
    } }, directives: [_game_control_game_control_component__WEBPACK_IMPORTED_MODULE_3__["GameControlComponent"], _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__["PlayerListComponent"], _game_events_game_events_component__WEBPACK_IMPORTED_MODULE_5__["GameEventsComponent"], _dice_roll_dice_roll_component__WEBPACK_IMPORTED_MODULE_6__["DiceRollComponent"]], styles: [".app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  background-color: #eaa82c;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 26px;\n  color: #222;\n}\n\n.app-gameControl[_ngcontent-%COMP%] {\n  min-height: 60px;\n  position: relative;\n}\n\n.app-gameContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n@media (min-width: 480px) {\n  .app-gameContent[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n.app-playerList[_ngcontent-%COMP%] {\n  min-height: 300px;\n  position: relative;\n}\n\n@media (min-width: 480px) {\n  .app-playerList[_ngcontent-%COMP%] {\n    min-width: 450px;\n  }\n}\n\n.app-gameEvents[_ngcontent-%COMP%] {\n  min-height: 300px;\n  flex: 3;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREFFO0VBSkY7SUFLSSxtQkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FERkU7RUFIRjtJQUlJLGdCQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTgyYztcbn1cblxuLmFwcC10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5hcHAtZ2FtZUNvbnRyb2wge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtZ2FtZUNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5cbi5hcHAtcGxheWVyTGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gIH1cbn1cblxuLmFwcC1nYW1lRXZlbnRzIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGZsZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iLCIuYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTgyYztcbn1cblxuLmFwcC10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5hcHAtZ2FtZUNvbnRyb2wge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtZ2FtZUNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5hcHAtZ2FtZUNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cblxuLmFwcC1wbGF5ZXJMaXN0IHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuYXBwLXBsYXllckxpc3Qge1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gIH1cbn1cblxuLmFwcC1nYW1lRXZlbnRzIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGZsZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_control_game_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-control/game-control.component */ "./src/app/game-control/game-control.component.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
/* harmony import */ var _player_list_player_item_player_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-list/player-item/player-item.component */ "./src/app/player-list/player-item/player-item.component.ts");
/* harmony import */ var _player_list_player_edit_player_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-list/player-edit/player-edit.component */ "./src/app/player-list/player-edit/player-edit.component.ts");
/* harmony import */ var _game_events_game_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-events/game-events.component */ "./src/app/game-events/game-events.component.ts");
/* harmony import */ var _dice_roll_dice_roll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dice-roll/dice-roll.component */ "./src/app/dice-roll/dice-roll.component.ts");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _game_control_game_control_component__WEBPACK_IMPORTED_MODULE_3__["GameControlComponent"],
        _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_5__["PlayerListComponent"],
        _player_list_player_item_player_item_component__WEBPACK_IMPORTED_MODULE_6__["PlayerItemComponent"],
        _player_list_player_edit_player_edit_component__WEBPACK_IMPORTED_MODULE_7__["PlayerEditComponent"],
        _game_events_game_events_component__WEBPACK_IMPORTED_MODULE_8__["GameEventsComponent"],
        _dice_roll_dice_roll_component__WEBPACK_IMPORTED_MODULE_9__["DiceRollComponent"],
        _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioGroupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _game_control_game_control_component__WEBPACK_IMPORTED_MODULE_3__["GameControlComponent"],
                    _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                    _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_5__["PlayerListComponent"],
                    _player_list_player_item_player_item_component__WEBPACK_IMPORTED_MODULE_6__["PlayerItemComponent"],
                    _player_list_player_edit_player_edit_component__WEBPACK_IMPORTED_MODULE_7__["PlayerEditComponent"],
                    _game_events_game_events_component__WEBPACK_IMPORTED_MODULE_8__["GameEventsComponent"],
                    _dice_roll_dice_roll_component__WEBPACK_IMPORTED_MODULE_9__["DiceRollComponent"],
                    _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioGroupComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dice-roll/dice-check-result.model.ts":
/*!******************************************************!*\
  !*** ./src/app/dice-roll/dice-check-result.model.ts ***!
  \******************************************************/
/*! exports provided: DiceCheckResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceCheckResult", function() { return DiceCheckResult; });
class DiceCheckResult {
    constructor() {
        this.rolls = [];
    }
    countSuccesses() {
        if (this.actionType === 'physical') {
            return this.rolls.filter(roll => roll < this.attribute).length;
        }
        else {
            return this.rolls.filter(roll => roll > this.attribute).length;
        }
    }
    countCritical() {
        return this.rolls.filter(roll => roll === this.attribute).length;
    }
}


/***/ }),

/***/ "./src/app/dice-roll/dice-check.model.ts":
/*!***********************************************!*\
  !*** ./src/app/dice-roll/dice-check.model.ts ***!
  \***********************************************/
/*! exports provided: DiceCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceCheck", function() { return DiceCheck; });
/* harmony import */ var _dice_check_result_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice-check-result.model */ "./src/app/dice-roll/dice-check-result.model.ts");

class DiceCheck {
    constructor() {
        this.checkType = "physical";
        this.rolls = 2;
    }
    run() {
        return new _dice_check_result_model__WEBPACK_IMPORTED_MODULE_0__["DiceCheckResult"]();
    }
}


/***/ }),

/***/ "./src/app/dice-roll/dice-roll.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dice-roll/dice-roll.component.ts ***!
  \**************************************************/
/*! exports provided: DiceRollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRollComponent", function() { return DiceRollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dice_roll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice-roll.service */ "./src/app/dice-roll/dice-roll.service.ts");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/radio-group/radio-group.component */ "./src/app/shared/radio-group/radio-group.component.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/button/button.component */ "./src/app/shared/button/button.component.ts");







const _c0 = ["playerSelect"];
function DiceRollComponent_div_0_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r73 = ctx.$implicit;
    const id_r74 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", id_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r73.name, " ");
} }
function DiceRollComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiceRollComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Rolagem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DiceRollComponent_div_0_Template_select_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.onSelectPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " --- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiceRollComponent_div_0_option_9_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-radio-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueSelected", function DiceRollComponent_div_0_Template_app_radio_group_valueSelected_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.onSelectDifficulty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueSelected", function DiceRollComponent_div_0_Template_app_radio_group_valueSelected_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onSelectCheckType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiceRollComponent_div_0_Template_app_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.onRoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Rolar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiceRollComponent_div_0_Template_app_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r70.difficultyLevels)("selectedItem", ctx_r70.getSelectedDifficulty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r70.actionTypes)("selectedItem", ctx_r70.getSelectedActionType());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r70.isRollEnabled());
} }
class DiceRollComponent {
    constructor(diceRollService, gameService) {
        this.diceRollService = diceRollService;
        this.gameService = gameService;
        this.difficultyLevels = [
            { value: 3, text: 'Fácil' },
            { value: 2, text: 'Normal' },
            { value: 1, text: 'Difícil' }
        ];
        this.actionTypes = [
            { value: "physical", text: "Física" },
            { value: "not-physical", text: "Não Física" }
        ];
    }
    ngOnInit() {
        this.diceRollService.rollRequested.subscribe((diceCheck) => this.diceCheck = diceCheck);
        this.players = this.gameService.getPlayers();
        this.gameService.playersChanged.subscribe((players) => this.players = players);
    }
    getSelectedPlayer() {
        const playerId = this.playerSelectInput.nativeElement.value;
        return this.players[playerId];
    }
    onSelectPlayer() {
        const player = this.getSelectedPlayer();
        if (player) {
            this.diceCheck.attribute = player.attribute;
        }
        else {
            this.diceCheck.attribute = null;
        }
    }
    getSelectedDifficulty() {
        return this.difficultyLevels.find(level => level.value === this.diceCheck.rolls);
    }
    getSelectedActionType() {
        return this.actionTypes.find(actionType => actionType.value === this.diceCheck.checkType);
    }
    onSelectDifficulty(difficulty) {
        this.diceCheck.rolls = Number.parseInt(difficulty);
    }
    onSelectCheckType(checkType) {
        this.diceCheck.checkType = checkType;
    }
    isRollEnabled() {
        return this.diceCheck.attribute && this.diceCheck.checkType && this.diceCheck.rolls;
    }
    onRoll() {
        this.diceRollService.roll(this.diceCheck, this.getSelectedPlayer().name);
        this.diceCheck = null;
    }
    onCancel() {
        this.diceCheck = null;
    }
}
DiceRollComponent.ɵfac = function DiceRollComponent_Factory(t) { return new (t || DiceRollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dice_roll_service__WEBPACK_IMPORTED_MODULE_1__["DiceRollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
DiceRollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiceRollComponent, selectors: [["app-dice-roll"]], viewQuery: function DiceRollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerSelectInput = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "diceRollOverlay", 3, "click"], [1, "diceRollContainer"], [1, "playersSelect", 3, "input"], ["playerSelect", ""], ["value", "-1"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "difficulty", "title", "difficulty", 1, "difficultySelect", 3, "items", "selectedItem", "valueSelected"], ["name", "actionType", "title", "action type", 1, "actionTypeSelect", 3, "items", "selectedItem", "valueSelected"], [1, "actionsGroup"], ["category", "primary", 1, "actionButton", 3, "disabled", "click"], ["category", "default", 1, "actionButton", 3, "click"], [3, "value"]], template: function DiceRollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DiceRollComponent_div_0_Template, 17, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.diceCheck);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroupComponent"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], styles: [".diceRollOverlay[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.diceRollContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 15px;\n  z-index: 1;\n  background-color: white;\n  box-shadow: 0 0 5px black;\n  width: 400px;\n  min-height: 300px;\n}\n\n.playersSelect[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 18px;\n}\n\n.difficultySelect[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actionTypeSelect[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actionsGroup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvZGljZS1yb2xsL2RpY2Utcm9sbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGljZS1yb2xsL2RpY2Utcm9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2RpY2Utcm9sbC9kaWNlLXJvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGljZVJvbGxPdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcbn1cblxuLmRpY2VSb2xsQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMTVweDtcblxuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcbiAgd2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuLnBsYXllcnNTZWxlY3Qge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGlmZmljdWx0eVNlbGVjdCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWN0aW9uVHlwZVNlbGVjdCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWN0aW9uc0dyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHg7XG59IiwiLmRpY2VSb2xsT3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZGljZVJvbGxDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcbiAgd2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuLnBsYXllcnNTZWxlY3Qge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGlmZmljdWx0eVNlbGVjdCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWN0aW9uVHlwZVNlbGVjdCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWN0aW9uc0dyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiceRollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dice-roll',
                templateUrl: './dice-roll.component.html',
                styleUrls: ['./dice-roll.component.scss']
            }]
    }], function () { return [{ type: _dice_roll_service__WEBPACK_IMPORTED_MODULE_1__["DiceRollService"] }, { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { playerSelectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerSelect']
        }] }); })();


/***/ }),

/***/ "./src/app/dice-roll/dice-roll.service.ts":
/*!************************************************!*\
  !*** ./src/app/dice-roll/dice-roll.service.ts ***!
  \************************************************/
/*! exports provided: DiceRollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRollService", function() { return DiceRollService; });
/* harmony import */ var _dice_check_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice-check.model */ "./src/app/dice-roll/dice-check.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dice_check_result_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dice-check-result.model */ "./src/app/dice-roll/dice-check-result.model.ts");
/* harmony import */ var _shared_game_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/game-event.service */ "./src/app/shared/game-event.service.ts");





class DiceRollService {
    constructor(gameEventService) {
        this.gameEventService = gameEventService;
        this.rollRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    requestDiceRoll() {
        this.rollRequested.emit(new _dice_check_model__WEBPACK_IMPORTED_MODULE_0__["DiceCheck"]());
    }
    roll(diceCheck, playerName) {
        const result = new _dice_check_result_model__WEBPACK_IMPORTED_MODULE_2__["DiceCheckResult"]();
        result.playerName = playerName;
        result.attribute = diceCheck.attribute;
        result.actionType = diceCheck.checkType;
        for (let i = 0; i < diceCheck.rolls; i++) {
            result.rolls.push(this.rollDie());
        }
        this.gameEventService.recordDiceRollEvent(result);
    }
    rollDie() {
        return Math.ceil(Math.random() * 6);
    }
}
DiceRollService.ɵfac = function DiceRollService_Factory(t) { return new (t || DiceRollService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_game_event_service__WEBPACK_IMPORTED_MODULE_3__["GameEventService"])); };
DiceRollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DiceRollService, factory: DiceRollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DiceRollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _shared_game_event_service__WEBPACK_IMPORTED_MODULE_3__["GameEventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game-control/game-control.component.ts":
/*!********************************************************!*\
  !*** ./src/app/game-control/game-control.component.ts ***!
  \********************************************************/
/*! exports provided: GameControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameControlComponent", function() { return GameControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dice-roll/dice-roll.service */ "./src/app/dice-roll/dice-roll.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/button/button.component */ "./src/app/shared/button/button.component.ts");






function GameControlComponent_app_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_1_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onStartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Come\u00E7ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameControlComponent_app_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_2_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onResumeGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Retomar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameControlComponent_app_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_3_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRequestRoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rolar Dados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameControlComponent_app_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_4_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onEditGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Alterar Jogadores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameControlComponent_app_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_5_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onFinishGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Finalizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameControlComponent_app_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function GameControlComponent_app_button_6_Template_app_button_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onRestartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reiniciar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameControlComponent {
    constructor(gameService, diceRollService) {
        this.gameService = gameService;
        this.diceRollService = diceRollService;
    }
    ngOnInit() {
    }
    onStartGame() {
        this.gameService.changeGameState("started");
    }
    onEditGame() {
        this.gameService.changeGameState("editing");
    }
    onResumeGame() {
        this.gameService.changeGameState("started");
    }
    onFinishGame() {
        if (window.confirm('Realmente deseja finalizar a partida?')) {
            this.gameService.changeGameState("finished");
        }
    }
    onRequestRoll() {
        this.diceRollService.requestDiceRoll();
    }
    onRestartGame() {
        this.gameService.resetGame();
    }
}
GameControlComponent.ɵfac = function GameControlComponent_Factory(t) { return new (t || GameControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_2__["DiceRollService"])); };
GameControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameControlComponent, selectors: [["app-game-control"]], inputs: { gameState: "gameState" }, decls: 7, vars: 6, consts: [[1, "actions"], ["category", "primary", 3, "onClick", 4, "ngIf"], ["category", "default", 3, "onClick", 4, "ngIf"], ["category", "danger", 3, "onClick", 4, "ngIf"], ["category", "primary", 3, "onClick"], ["category", "default", 3, "onClick"], ["category", "danger", 3, "onClick"]], template: function GameControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameControlComponent_app_button_1_Template, 2, 0, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameControlComponent_app_button_2_Template, 2, 0, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameControlComponent_app_button_3_Template, 2, 0, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameControlComponent_app_button_4_Template, 2, 0, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameControlComponent_app_button_5_Template, 2, 0, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameControlComponent_app_button_6_Template, 2, 0, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "not-started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameState === "finished");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 5px lightgray;\n  margin-bottom: 2px;\n}\n@media (min-width: 480px) {\n  [_nghost-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvZ2FtZS1jb250cm9sL2dhbWUtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS1jb250cm9sL2dhbWUtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsK0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFkRjtJQWVJLDJCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY29udHJvbC9nYW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICA6aG9zdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-control',
                templateUrl: './game-control.component.html',
                styleUrls: ['./game-control.component.scss']
            }]
    }], function () { return [{ type: _shared_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _dice_roll_dice_roll_service__WEBPACK_IMPORTED_MODULE_2__["DiceRollService"] }]; }, { gameState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-events/game-events.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-events/game-events.component.ts ***!
  \******************************************************/
/*! exports provided: GameEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEventsComponent", function() { return GameEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_game_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/game-event.service */ "./src/app/shared/game-event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GameEventsComponent_ul_0_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jogador(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " criado(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gameEvent_r46.eventType.playerName, "");
} }
function GameEventsComponent_ul_0_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jogador(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " removido(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gameEvent_r46.eventType.playerName, "");
} }
function GameEventsComponent_ul_0_li_1_span_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nome para ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.nameChanged);
} }
function GameEventsComponent_ul_0_li_1_span_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " atributo de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " para ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.attributeChanged[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.attributeChanged[1]);
} }
function GameEventsComponent_ul_0_li_1_span_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " descri\u00E7\u00E3o para ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.descriptionChanged);
} }
function GameEventsComponent_ul_0_li_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jogador(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " alterou: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameEventsComponent_ul_0_li_1_span_6_span_5_Template, 5, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameEventsComponent_ul_0_li_1_span_6_span_6_Template, 8, 2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameEventsComponent_ul_0_li_1_span_6_span_7_Template, 4, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gameEvent_r46.eventType.playerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.nameChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.attributeChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.descriptionChanged);
} }
function GameEventsComponent_ul_0_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gameEvent_r46.eventType.text, " ");
} }
function GameEventsComponent_ul_0_li_1_span_8_strong_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "f\u00EDsica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameEventsComponent_ul_0_li_1_span_8_strong_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "n\u00E3o f\u00EDsica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameEventsComponent_ul_0_li_1_span_8_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acerto cr\u00EDtico! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameEventsComponent_ul_0_li_1_span_8_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sucesso. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameEventsComponent_ul_0_li_1_span_8_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Falhou. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameEventsComponent_ul_0_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameEventsComponent_ul_0_li_1_span_8_strong_4_Template, 2, 0, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameEventsComponent_ul_0_li_1_span_8_strong_5_Template, 2, 0, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " e rolou (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameEventsComponent_ul_0_li_1_span_8_span_10_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameEventsComponent_ul_0_li_1_span_8_span_11_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameEventsComponent_ul_0_li_1_span_8_span_12_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.playerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", gameEvent_r46.eventType.attribute, ") tentou uma a\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.actionType === "physical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.actionType === "not-physical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.eventType.rolls.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.critical > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.successes > 0 && gameEvent_r46.eventType.critical === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gameEvent_r46.eventType.successes === 0 && gameEvent_r46.eventType.critical === 0);
} }
function GameEventsComponent_ul_0_li_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gameEvent_r46.eventType.constructor.name, " ");
} }
function GameEventsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameEventsComponent_ul_0_li_1_span_4_Template, 5, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameEventsComponent_ul_0_li_1_span_5_Template, 5, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameEventsComponent_ul_0_li_1_span_6_Template, 8, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameEventsComponent_ul_0_li_1_span_7_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GameEventsComponent_ul_0_li_1_span_8_Template, 13, 8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameEventsComponent_ul_0_li_1_span_9_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameEvent_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameEvent_r46.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", gameEvent_r46.eventType.constructor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "PlayerCreatedEvent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "PlayerRemovedEvent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "PlayerChangedEvent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "SimpleMessageEvent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "DiceCheckEvent");
} }
function GameEventsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameEventsComponent_ul_0_li_1_Template, 10, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.events);
} }
class GameEventsComponent {
    constructor(gameEventService) {
        this.gameEventService = gameEventService;
    }
    ngOnInit() {
        this.events = this.gameEventService.getEvents();
        this.gameEventService.eventsChanged.subscribe((events) => this.events = events);
    }
}
GameEventsComponent.ɵfac = function GameEventsComponent_Factory(t) { return new (t || GameEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_event_service__WEBPACK_IMPORTED_MODULE_1__["GameEventService"])); };
GameEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameEventsComponent, selectors: [["app-game-events"]], decls: 1, vars: 1, consts: [["class", "gameEvents", 4, "ngIf"], [1, "gameEvents"], ["class", "gameEvent", 4, "ngFor", "ngForOf"], [1, "gameEvent"], [1, "time"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "player"], [4, "ngIf"], [1, "attribute"], [1, "description"], [1, "number"], ["class", "player", 4, "ngIf"], ["class", "success", 4, "ngIf"], ["class", "failure", 4, "ngIf"], [1, "success"], [1, "failure"]], template: function GameEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameEventsComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.events && ctx.events.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], styles: ["[_nghost-%COMP%] {\n  padding: 10px;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.gameEvents[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  right: 10px;\n  list-style: none;\n  box-shadow: 0 0 5px gray;\n  border-radius: 10px;\n  overflow-y: auto;\n}\n\n.gameEvent[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0.5em 1em;\n  border-bottom: 1px solid lightgray;\n  color: #444;\n}\n\n@media (min-width: 480px) {\n  .gameEvent[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n.time[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 1em;\n  color: black;\n}\n\n.player[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: goldenrod;\n}\n\n.attribute[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: darkorchid;\n}\n\n.number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: darkslateblue;\n}\n\n.failure[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #bf0000;\n}\n\n.success[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: darkgreen;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #555;\n}\n\n.description[_ngcontent-%COMP%]::before {\n  content: '\"';\n}\n\n.description[_ngcontent-%COMP%]::after {\n  content: '\"';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvZ2FtZS1ldmVudHMvZ2FtZS1ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtZXZlbnRzL2dhbWUtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNBRjs7QURFRTtFQU5GO0lBT0ksZUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1ldmVudHMvZ2FtZS1ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmdhbWVFdmVudHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBib3gtc2hhZG93OiAwIDAgNXB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5nYW1lRXZlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBjb2xvcjogIzQ0NDtcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4udGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wbGF5ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLmF0dHJpYnV0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya29yY2hpZDtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cblxuLmZhaWx1cmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNiZjAwMDA7XG59XG5cbi5zdWNjZXNzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM1NTU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXCInO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcIic7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmdhbWVFdmVudHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZ2FtZUV2ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGNvbG9yOiAjNDQ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5nYW1lRXZlbnQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4udGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wbGF5ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLmF0dHJpYnV0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya29yY2hpZDtcbn1cblxuLm51bWJlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcbn1cblxuLmZhaWx1cmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNiZjAwMDA7XG59XG5cbi5zdWNjZXNzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM1NTU7XG59XG4uZGVzY3JpcHRpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcIic7XG59XG4uZGVzY3JpcHRpb246OmFmdGVyIHtcbiAgY29udGVudDogJ1wiJztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-events',
                templateUrl: './game-events.component.html',
                styleUrls: ['./game-events.component.scss']
            }]
    }], function () { return [{ type: _shared_game_event_service__WEBPACK_IMPORTED_MODULE_1__["GameEventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/player-list/player-edit/player-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/player-list/player-edit/player-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PlayerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEditComponent", function() { return PlayerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["playerName"];
const _c1 = ["playerAttribute"];
const _c2 = ["playerDescription"];
function PlayerEditComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r43 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r43)("selected", ctx_r41.player.attribute === value_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r43, " ");
} }
const _c3 = function () { return [2, 3, 4, 5]; };
class PlayerEditComponent {
    constructor() {
        this.playerEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getFormData() {
        return {
            name: this.playerNameInput.nativeElement.value,
            attribute: Number(this.playerAttributeInput.nativeElement.value),
            description: this.playerDescriptionInput.nativeElement.value
        };
    }
    onConfirm() {
        let formData = this.getFormData();
        this.playerEdited.emit(new src_app_shared_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](formData.name, formData.attribute, formData.description));
    }
}
PlayerEditComponent.ɵfac = function PlayerEditComponent_Factory(t) { return new (t || PlayerEditComponent)(); };
PlayerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerEditComponent, selectors: [["app-player-edit"]], viewQuery: function PlayerEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerNameInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerAttributeInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerDescriptionInput = _t.first);
    } }, inputs: { player: "player" }, outputs: { playerEdited: "playerEdited" }, decls: 10, vars: 4, consts: [[1, "playerName", 3, "value"], ["playerName", ""], ["category", "primary", 3, "click"], [1, "playerAttribute"], ["playerAttribute", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "playerDescription", 3, "value"], ["playerDescription", ""], [3, "value", "selected"]], template: function PlayerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerEditComponent_Template_app_button_click_2_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerEditComponent_option_6_Template, 2, 3, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "  \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.player.description);
    } }, directives: [_shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".playerAttribute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 20px;\n  width: 2.3em;\n  height: 1.5em;\n  font-weight: bold;\n  line-height: 1.5em;\n  text-align: center;\n}\n\n.playerName[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px;\n  display: inline-block;\n  border: none;\n  border-bottom: 1px solid black;\n  margin: 0 5px;\n}\n\n.playerName[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.playerDescription[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  width: 90%;\n  margin: 5px;\n  font-size: 14px;\n  font-style: italic;\n  color: #444;\n  resize: none;\n  border: 1px dashed #444;\n}\n\n.playerDescription[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvcGxheWVyLWxpc3QvcGxheWVyLWVkaXQvcGxheWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1lZGl0L3BsYXllci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7QUNDSjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FERUU7RUFDRSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXItbGlzdC9wbGF5ZXItZWRpdC9wbGF5ZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXJBdHRyaWJ1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIuM2VtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJOYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMCA1cHg7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4ucGxheWVyRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzQ0NDtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzQ0NDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gfSIsIi5wbGF5ZXJBdHRyaWJ1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIuM2VtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJOYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4ucGxheWVyTmFtZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wbGF5ZXJEZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNDQ0O1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNDQ0O1xufVxuLnBsYXllckRlc2NyaXB0aW9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-edit',
                templateUrl: './player-edit.component.html',
                styleUrls: ['./player-edit.component.scss']
            }]
    }], function () { return []; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], playerNameInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerName']
        }], playerAttributeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerAttribute']
        }], playerDescriptionInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['playerDescription']
        }] }); })();


/***/ }),

/***/ "./src/app/player-list/player-item/player-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/player-list/player-item/player-item.component.ts ***!
  \******************************************************************/
/*! exports provided: PlayerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerItemComponent", function() { return PlayerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/button/button.component */ "./src/app/shared/button/button.component.ts");





function PlayerItemComponent_app_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerItemComponent_app_button_2_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerItemComponent_app_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerItemComponent_app_button_3_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onRemove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " remover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlayerItemComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onEdit() {
        this.gameService.changeGameState('editing-player');
        this.editClicked.emit(this.id);
    }
    onRemove() {
        this.removeClicked.emit(this.id);
    }
    isEditable() {
        return this.gameService.isGameStateEditable(this.gameState);
    }
}
PlayerItemComponent.ɵfac = function PlayerItemComponent_Factory(t) { return new (t || PlayerItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
PlayerItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerItemComponent, selectors: [["app-player-item"]], inputs: { player: "player", id: "id", gameState: "gameState" }, outputs: { editClicked: "editClicked", removeClicked: "removeClicked" }, decls: 8, vars: 5, consts: [[1, "playerName"], ["size", "small", 3, "click", 4, "ngIf"], ["size", "small", "category", "danger", 3, "click", 4, "ngIf"], [1, "playerAttribute"], [1, "playerDescription"], ["size", "small", 3, "click"], ["size", "small", "category", "danger", 3, "click"]], template: function PlayerItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerItemComponent_app_button_2_Template, 2, 0, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerItemComponent_app_button_3_Template, 2, 0, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player.attribute, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player.description, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".playerAttribute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 24px;\n  width: 1.5em;\n  height: 1.5em;\n  font-weight: bold;\n  line-height: 1.5em;\n  text-align: center;\n}\n\n.playerName[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.playerDescription[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 14px;\n  font-style: italic;\n  color: #444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvcGxheWVyLWxpc3QvcGxheWVyLWl0ZW0vcGxheWVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1pdGVtL3BsYXllci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyLWxpc3QvcGxheWVyLWl0ZW0vcGxheWVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyQXR0cmlidXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxheWVyTmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucGxheWVyRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNDQ0O1xufSIsIi5wbGF5ZXJBdHRyaWJ1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJOYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wbGF5ZXJEZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0NDQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-item',
                templateUrl: './player-item.component.html',
                styleUrls: ['./player-item.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gameState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/player-list/player-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/player-list/player-list.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _player_item_player_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-item/player-item.component */ "./src/app/player-list/player-item/player-item.component.ts");
/* harmony import */ var _player_edit_player_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-edit/player-edit.component */ "./src/app/player-list/player-edit/player-edit.component.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/button/button.component */ "./src/app/shared/button/button.component.ts");








function PlayerListComponent_li_1_app_player_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-player-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editClicked", function PlayerListComponent_li_1_app_player_item_1_Template_app_player_item_editClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onEditClicked($event); })("removeClicked", function PlayerListComponent_li_1_app_player_item_1_Template_app_player_item_removeClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onRemoveClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const player_r20 = ctx_r27.$implicit;
    const id_r21 = ctx_r27.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r20)("id", id_r21)("gameState", ctx_r22.gameState);
} }
function PlayerListComponent_li_1_app_player_edit_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-player-edit", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerEdited", function PlayerListComponent_li_1_app_player_edit_2_Template_app_player_edit_playerEdited_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.onEditFinished($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r20);
} }
function PlayerListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerListComponent_li_1_app_player_item_1_Template, 1, 3, "app-player-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerListComponent_li_1_app_player_edit_2_Template, 1, 1, "app-player-edit", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r21 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.editing !== id_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.editing === id_r21);
} }
function PlayerListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function PlayerListComponent_div_2_Template_app_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onAddNewPlayer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Adicionar Jogador(a) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlayerListComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.players = this.gameService.getPlayers();
        this.gameService.playersChanged.subscribe((players) => this.players = players);
    }
    onAddNewPlayer() {
        this.editing = this.gameService.addPlayer(new _shared_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]('Name', 2, ''));
    }
    onEditClicked(id) {
        this.editing = id;
    }
    onRemoveClicked(id) {
        if (window.confirm(`Realmente deseja remover [${this.players[id].name}]?`)) {
            this.gameService.removePlayer(id);
        }
    }
    onEditFinished(player) {
        this.gameService.changePlayer(this.editing, player);
        this.editing = null;
        this.gameService.changeGameState('editing');
    }
    canAddPlayer() {
        return this.gameService.isGameStateEditable(this.gameState);
    }
}
PlayerListComponent.ɵfac = function PlayerListComponent_Factory(t) { return new (t || PlayerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
PlayerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerListComponent, selectors: [["app-player-list"]], inputs: { gameState: "gameState" }, decls: 3, vars: 2, consts: [[1, "playersList"], ["class", "playerContainer", 4, "ngFor", "ngForOf"], ["class", "addPlayer", 4, "ngIf"], [1, "playerContainer"], [3, "player", "id", "gameState", "editClicked", "removeClicked", 4, "ngIf"], [3, "player", "playerEdited", 4, "ngIf"], [3, "player", "id", "gameState", "editClicked", "removeClicked"], [3, "player", "playerEdited"], [1, "addPlayer"], [3, "onClick"]], template: function PlayerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerListComponent_li_1_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerListComponent_div_2_Template, 3, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canAddPlayer());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _player_item_player_item_component__WEBPACK_IMPORTED_MODULE_4__["PlayerItemComponent"], _player_edit_player_edit_component__WEBPACK_IMPORTED_MODULE_5__["PlayerEditComponent"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding-top: 10px;\n}\n\n.playersList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n}\n\n.playerContainer[_ngcontent-%COMP%] {\n  min-height: 100px;\n  box-shadow: 0 0 5px lightgray;\n  margin: 5px 0;\n  position: relative;\n}\n\n.addPlayer[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBsYXllcnNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucGxheWVyQ29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggbGlnaHRncmF5O1xuICBtYXJnaW46IDVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGRQbGF5ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBsYXllcnNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucGxheWVyQ29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggbGlnaHRncmF5O1xuICBtYXJnaW46IDVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGRQbGF5ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-list',
                templateUrl: './player-list.component.html',
                styleUrls: ['./player-list.component.scss']
            }]
    }], function () { return [{ type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { gameState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.category = "default";
        this.size = "default";
        this.disabled = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { category: "category", size: "size", disabled: "disabled" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 2, vars: 5, consts: [[3, "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("size-", ctx.size, " ", ctx.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 3px;\n  font-size: 16px;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: default;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 3px grey;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 3px black;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background-color: #6aa9fc;\n  color: white;\n}\nbutton.default[_ngcontent-%COMP%] {\n  background-color: white;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background-color: #e2285a;\n  color: white;\n}\nbutton.size-default[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nbutton.size-small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 0.4em;\n}\nbutton.size-large[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUU7RUFDRSx3QkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNESjtBRElFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRko7QURLRTtFQUNFLHVCQUFBO0FDSEo7QURNRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTko7QURTRTtFQUNFLGVBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IGdyZXk7O1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IGJsYWNrOztcbiAgfVxuXG4gICYucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTlmYztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJi5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjI4NWE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJi5zaXplLWRlZmF1bHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICYuc2l6ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IC40ZW07XG4gIH1cblxuICAmLnNpemUtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG59IiwiYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggZ3JleTtcbn1cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG59XG5idXR0b24ucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWE5ZmM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbi5kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5idXR0b24uZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMjg1YTtcbiAgY29sb3I6IHdoaXRlO1xufVxuYnV0dG9uLnNpemUtZGVmYXVsdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmJ1dHRvbi5zaXplLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwLjRlbTtcbn1cbmJ1dHRvbi5zaXplLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/game-event.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/game-event.model.ts ***!
  \********************************************/
/*! exports provided: GameEvent, PlayerCreatedEvent, PlayerRemovedEvent, PlayerChangedEvent, DiceCheckEvent, SimpleMessageEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEvent", function() { return GameEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCreatedEvent", function() { return PlayerCreatedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRemovedEvent", function() { return PlayerRemovedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerChangedEvent", function() { return PlayerChangedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceCheckEvent", function() { return DiceCheckEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMessageEvent", function() { return SimpleMessageEvent; });
class GameEvent {
    constructor(eventType) {
        this.eventType = eventType;
        this.timestamp = this.getFormattedTimestamp();
    }
    getFormattedTimestamp() {
        const t = new Date();
        const hours = `${t.getHours()}`;
        const minutes = `${t.getMinutes() < 10 ? '0' : ''}${t.getMinutes()}`;
        const seconds = `${t.getSeconds() < 10 ? '0' : ''}${t.getSeconds()}`;
        return `${hours}:${minutes}:${seconds}`;
    }
}
class PlayerCreatedEvent {
    constructor(playerName) {
        this.playerName = playerName;
    }
}
class PlayerRemovedEvent {
    constructor(playerName) {
        this.playerName = playerName;
    }
}
class PlayerChangedEvent {
    constructor(playerName, nameChanged, attributeChanged, descriptionChanged) {
        this.playerName = null;
        this.nameChanged = null;
        this.attributeChanged = null;
        this.descriptionChanged = null;
        this.playerName = playerName;
        this.nameChanged = nameChanged;
        this.attributeChanged = attributeChanged;
        this.descriptionChanged = descriptionChanged;
    }
}
class DiceCheckEvent {
    constructor(diceCheckResult) {
        this.successes = diceCheckResult.countSuccesses();
        this.critical = diceCheckResult.countCritical();
        this.playerName = diceCheckResult.playerName;
        this.attribute = diceCheckResult.attribute;
        this.actionType = diceCheckResult.actionType;
        this.rolls = diceCheckResult.rolls;
    }
}
class SimpleMessageEvent {
    constructor(text) {
        this.text = text;
    }
}


/***/ }),

/***/ "./src/app/shared/game-event.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/game-event.service.ts ***!
  \**********************************************/
/*! exports provided: GameEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEventService", function() { return GameEventService; });
/* harmony import */ var _game_event_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-event.model */ "./src/app/shared/game-event.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class GameEventService {
    constructor() {
        this.events = [];
        this.eventsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    recordEvent(event) {
        this.events.unshift(event);
        this.eventsChanged.emit(this.events.slice());
    }
    getEvents() {
        return this.events.slice();
    }
    recordAddPlayerEvent(playerName) {
        this.recordEvent(new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["GameEvent"](new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["PlayerCreatedEvent"](playerName)));
    }
    recordPlayerChangeEvent(oldPlayer, newPlayer) {
        let nameChanged = null;
        let attributeChanged = null;
        let descriptionChanged = null;
        if (oldPlayer.name !== newPlayer.name) {
            nameChanged = newPlayer.name;
        }
        if (oldPlayer.attribute !== newPlayer.attribute) {
            attributeChanged = [oldPlayer.attribute, newPlayer.attribute];
        }
        if (oldPlayer.description !== newPlayer.description) {
            descriptionChanged = newPlayer.description;
        }
        if (nameChanged !== null || attributeChanged !== null || descriptionChanged !== null) {
            this.recordEvent(new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["GameEvent"](new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["PlayerChangedEvent"](oldPlayer.name, nameChanged, attributeChanged, descriptionChanged)));
        }
    }
    recordRemovePlayerEvent(playerName) {
        this.recordEvent(new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["GameEvent"](new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["PlayerRemovedEvent"](playerName)));
    }
    recordSimpleMessageEvent(text) {
        this.recordEvent(new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["GameEvent"](new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["SimpleMessageEvent"](text)));
    }
    recordDiceRollEvent(diceCheckResult) {
        this.recordEvent(new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["GameEvent"](new _game_event_model__WEBPACK_IMPORTED_MODULE_0__["DiceCheckEvent"](diceCheckResult)));
    }
    clear() {
        this.events = [];
        this.eventsChanged.emit([]);
    }
}
GameEventService.ɵfac = function GameEventService_Factory(t) { return new (t || GameEventService)(); };
GameEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameEventService, factory: GameEventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/game.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/game.model.ts ***!
  \**************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor() {
        this.gameState = "not-started";
        this.players = [];
    }
}


/***/ }),

/***/ "./src/app/shared/game.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/game.service.ts ***!
  \****************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.model */ "./src/app/shared/game.model.ts");
/* harmony import */ var _game_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-event.service */ "./src/app/shared/game-event.service.ts");




class GameService {
    constructor(gameEventService) {
        this.gameEventService = gameEventService;
        this.game = new _game_model__WEBPACK_IMPORTED_MODULE_1__["Game"]();
        this.gameStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playersChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    gameStarted() {
        return this.game.gameState !== 'not-started';
    }
    addPlayer(player) {
        if (this.gameStarted()) {
            this.gameEventService.recordAddPlayerEvent(player.name);
        }
        this.game.players.push(player);
        this.playersChanged.emit(this.getPlayers());
        return this.game.players.length - 1;
    }
    changeGameState(newState) {
        if (this.game.gameState === 'not-started' && newState === 'started') {
            this.gameEventService.recordSimpleMessageEvent('A partida foi iniciada');
        }
        if (newState === 'finished') {
            this.gameEventService.recordSimpleMessageEvent('A partida foi finalizada');
        }
        this.game.gameState = newState;
        this.gameStateChanged.emit(newState);
    }
    getGameState() {
        return this.game.gameState;
    }
    isGameStateEditable(gameState) {
        return gameState === 'editing' || gameState === 'not-started';
    }
    getPlayers() {
        return this.game.players.slice();
    }
    changePlayer(id, player) {
        if (this.gameStarted()) {
            this.gameEventService.recordPlayerChangeEvent(this.game.players[id], player);
        }
        this.game.players[id] = player;
        this.playersChanged.emit(this.getPlayers());
    }
    removePlayer(id) {
        if (this.gameStarted()) {
            this.gameEventService.recordRemovePlayerEvent(this.game.players[id].name);
        }
        this.game.players.splice(id, 1);
        this.playersChanged.emit(this.getPlayers());
    }
    resetGame() {
        this.game = new _game_model__WEBPACK_IMPORTED_MODULE_1__["Game"]();
        this.gameStateChanged.emit(this.game.gameState);
        this.playersChanged.emit(this.game.players.slice());
        this.gameEventService.clear();
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_event_service__WEBPACK_IMPORTED_MODULE_2__["GameEventService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _game_event_service__WEBPACK_IMPORTED_MODULE_2__["GameEventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/shared/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(name, attribute, description) {
        this.name = name;
        this.attribute = attribute;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/shared/radio-group/radio-group.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/radio-group/radio-group.component.ts ***!
  \*************************************************************/
/*! exports provided: RadioGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return RadioGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RadioGroupComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r82.title, ": ", ctx_r82.selectedItem.text, " ");
} }
function RadioGroupComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioGroupComponent_label_2_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const item_r84 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.onChangeSelected(item_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r83.name)("value", item_r84.value)("checked", item_r84.value === ctx_r83.selectedItem.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.text);
} }
class RadioGroupComponent {
    constructor() {
        this.valueSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onChangeSelected(item) {
        this.valueSelected.emit(item.value);
    }
}
RadioGroupComponent.ɵfac = function RadioGroupComponent_Factory(t) { return new (t || RadioGroupComponent)(); };
RadioGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioGroupComponent, selectors: [["app-radio-group"]], inputs: { items: "items", name: "name", title: "title", selectedItem: "selectedItem" }, outputs: { valueSelected: "valueSelected" }, decls: 3, vars: 2, consts: [["class", "radioGroup-title", 4, "ngIf"], [1, "radioGroup-container"], ["class", "radioGroup-label", 3, "click", 4, "ngFor", "ngForOf"], [1, "radioGroup-title"], [1, "radioGroup-label", 3, "click"], ["type", "radio", 3, "name", "value", "checked"], [1, "radioGroup-item"]], template: function RadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadioGroupComponent_p_0_Template, 2, 2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RadioGroupComponent_label_2_Template, 4, 4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  padding: 10px;\n  border: 1px solid #444;\n  border-radius: 5px;\n}\n\n.radioGroup-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.radioGroup-label[_ngcontent-%COMP%] {\n  margin: 3px;\n  color: #444;\n  font-size: 16px;\n  position: relative;\n  height: 2em;\n}\n\n.radioGroup-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0 0.5em;\n  margin-bottom: 3px;\n  text-transform: capitalize;\n}\n\n.radioGroup-item[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 5px;\n  line-height: 1.5em;\n  box-shadow: 0 0 3px grey;\n  border: 1px solid black;\n  padding: 0.3em 0.6em;\n  font-weight: normal;\n  text-align: center;\n  cursor: pointer;\n}\n\n.radioGroup-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 3px black;\n}\n\n[_ngcontent-%COMP%]:checked    + .radioGroup-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  box-shadow: 0 0 3px black;\n  background-color: #6aa9fc;\n  color: white;\n}\n\n[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZlcnNvbi5zaWx2YS9QZXJzb25hbC9ycGd1YXhhL3NyYy9hcHAvc2hhcmVkL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdFO0VBQ0UseUJBQUE7QUNESjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yYWRpby1ncm91cC9yYWRpby1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmFkaW9Hcm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmFkaW9Hcm91cC1sYWJlbCB7XG4gIG1hcmdpbjogM3B4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMmVtO1xufVxuXG4ucmFkaW9Hcm91cC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucmFkaW9Hcm91cC1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAuM2VtIC42ZW07XG5cbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCBibGFjaztcbiAgfVxufVxuXG46Y2hlY2tlZCArIC5yYWRpb0dyb3VwLWl0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYTlmYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5bdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lOyAgXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmFkaW9Hcm91cC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmFkaW9Hcm91cC1sYWJlbCB7XG4gIG1hcmdpbjogM3B4O1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMmVtO1xufVxuXG4ucmFkaW9Hcm91cC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnJhZGlvR3JvdXAtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgYm94LXNoYWRvdzogMCAwIDNweCBncmV5O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC4zZW0gMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhZGlvR3JvdXAtaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG59XG5cbjpjaGVja2VkICsgLnJhZGlvR3JvdXAtaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhOWZjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-radio-group',
                templateUrl: './radio-group.component.html',
                styleUrls: ['./radio-group.component.scss']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeferson.silva/Personal/rpguaxa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map