"use strict";
(self["webpackChunktyping_trainer"] = self["webpackChunktyping_trainer"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ticker/ticker.component */ 2706);
/* harmony import */ var _components_keyboard_monitor_keyboard_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/keyboard-monitor/keyboard-monitor.component */ 6986);
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/results/results.component */ 3753);




class AppComponent {
  constructor() {
    this.title = 'typing-trainer';
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-ticker")(1, "app-keyboard-monitor")(2, "app-results");
    }
  },
  dependencies: [_components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_0__.TickerComponent, _components_keyboard_monitor_keyboard_monitor_component__WEBPACK_IMPORTED_MODULE_1__.KeyboardMonitorComponent, _components_results_results_component__WEBPACK_IMPORTED_MODULE_2__.ResultsComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _store_keyboard_keyboard_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/keyboard/keyboard.effects */ 8837);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ticker/ticker.component */ 2706);
/* harmony import */ var _pipes_highlighter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/highlighter.pipe */ 716);
/* harmony import */ var _components_keyboard_monitor_keyboard_monitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/keyboard-monitor/keyboard-monitor.component */ 6986);
/* harmony import */ var _components_keyboard_monitor_key_key_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/keyboard-monitor/key/key.component */ 1879);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ 1697);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _store_statistics_statistics_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/statistics/statistics.effects */ 9161);
/* harmony import */ var _components_typing_progress_bar_typing_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/typing-progress-bar/typing-progress-bar.component */ 8856);
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/results/results.component */ 3753);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
























class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__.reducers, {
    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__.metaReducers
  }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forRoot([_store_statistics_statistics_effects__WEBPACK_IMPORTED_MODULE_9__.StatisticsEffects, _store_keyboard_keyboard_effects__WEBPACK_IMPORTED_MODULE_0__.KeyboardEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_3__.TickerComponent, _pipes_highlighter_pipe__WEBPACK_IMPORTED_MODULE_4__.HighlighterPipe, _components_keyboard_monitor_keyboard_monitor_component__WEBPACK_IMPORTED_MODULE_5__.KeyboardMonitorComponent, _components_keyboard_monitor_key_key_component__WEBPACK_IMPORTED_MODULE_6__.KeyComponent, _components_typing_progress_bar_typing_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__.TypingProgressBarComponent, _components_results_results_component__WEBPACK_IMPORTED_MODULE_11__.ResultsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule]
  });
})();

_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_components_keyboard_monitor_keyboard_monitor_component__WEBPACK_IMPORTED_MODULE_5__.KeyboardMonitorComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _components_keyboard_monitor_key_key_component__WEBPACK_IMPORTED_MODULE_6__.KeyComponent];
}, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe];
});

/***/ }),

/***/ 1697:
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _store_statistics_statistics_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/statistics/statistics.reducer */ 5048);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _store_keyboard_keyboard_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/keyboard/keyboard.reducer */ 7728);



const reducers = {
  keyboard: _store_keyboard_keyboard_reducer__WEBPACK_IMPORTED_MODULE_2__.keyboardReducer,
  statistics: _store_statistics_statistics_reducer__WEBPACK_IMPORTED_MODULE_0__.statisticsReducer
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production ? [] : [];

/***/ }),

/***/ 6246:
/*!****************************************************!*\
  !*** ./src/app/store/keyboard/keyboard.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setKeyState": () => (/* binding */ setKeyState),
/* harmony export */   "setTypedKeyState": () => (/* binding */ setTypedKeyState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setKeyState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[KEYBOARD] set key state', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setTypedKeyState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[KEYBOARD] set typed key state', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 8837:
/*!****************************************************!*\
  !*** ./src/app/store/keyboard/keyboard.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardEffects": () => (/* binding */ KeyboardEffects)
/* harmony export */ });
/* harmony import */ var src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/keyboard/keyboard.actions */ 6246);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class KeyboardEffects {
  constructor(actions$) {
    this.actions$ = actions$;
    this.pushHighlightKeyButtonOn$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__.setTypedKeyState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(setTypedKeyAction => (0,src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__.setKeyState)({
      pressedKey: { ...setTypedKeyAction.pressedKey,
        isTyped: true
      }
    }))));
    this.pushHighlightKeyButtonOff$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__.setTypedKeyState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(setTypedKeyAction => (0,src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__.setKeyState)({
      pressedKey: { ...setTypedKeyAction.pressedKey,
        isTyped: false
      }
    }))));
  }

}

KeyboardEffects.ɵfac = function KeyboardEffects_Factory(t) {
  return new (t || KeyboardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
};

KeyboardEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: KeyboardEffects,
  factory: KeyboardEffects.ɵfac
});

/***/ }),

/***/ 7728:
/*!****************************************************!*\
  !*** ./src/app/store/keyboard/keyboard.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboardReducer": () => (/* binding */ keyboardReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _keyboard_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.actions */ 6246);
/* harmony import */ var _keyboard_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.state */ 2698);



const keyboardReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_keyboard_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_keyboard_actions__WEBPACK_IMPORTED_MODULE_0__.setKeyState, (state, {
  pressedKey
}) => {
  const keyToSet = pressedKey.key === ' ' ? { ...pressedKey,
    key: 'Space'
  } : pressedKey;
  let changedRow;
  const keyRowToChangeIndex = state.keyRows.findIndex(row => {
    const nextKeyIndex = row.findIndex(key => key.key === keyToSet.key);
    const nextKeyOnKeyboard = row[nextKeyIndex];

    if (nextKeyOnKeyboard) {
      changedRow = [...row];
      changedRow[nextKeyIndex] = keyToSet;
      return true;
    }

    return false;
  });
  const newState = { ...state
  };

  if (keyRowToChangeIndex > -1 && changedRow) {
    const keyRows = [...state.keyRows];
    keyRows[keyRowToChangeIndex] = changedRow;
    newState.keyRows = keyRows;
  }

  return newState;
}));

/***/ }),

/***/ 2698:
/*!**************************************************!*\
  !*** ./src/app/store/keyboard/keyboard.state.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureSelector": () => (/* binding */ featureSelector),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "keyRowsSelector": () => (/* binding */ keyRowsSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const initialState = {
  nextKeyToType: undefined,
  keyRows: [[{
    key: 'q',
    isHighlighted: false
  }, {
    key: 'w',
    isHighlighted: false
  }, {
    key: 'e',
    isHighlighted: false
  }, {
    key: 'r',
    isHighlighted: false
  }, {
    key: 't',
    isHighlighted: false
  }, {
    key: 'y',
    isHighlighted: false
  }, {
    key: 'u',
    isHighlighted: false
  }, {
    key: 'i',
    isHighlighted: false
  }, {
    key: 'o',
    isHighlighted: false
  }, {
    key: 'p',
    isHighlighted: false
  }], [{
    key: 'a',
    isHighlighted: false
  }, {
    key: 's',
    isHighlighted: false
  }, {
    key: 'd',
    isHighlighted: false
  }, {
    key: 'f',
    isHighlighted: false
  }, {
    key: 'g',
    isHighlighted: false
  }, {
    key: 'h',
    isHighlighted: false
  }, {
    key: 'j',
    isHighlighted: false
  }, {
    key: 'k',
    isHighlighted: false
  }, {
    key: 'l',
    isHighlighted: false
  }], [{
    key: 'z',
    isHighlighted: false
  }, {
    key: 'x',
    isHighlighted: false
  }, {
    key: 'c',
    isHighlighted: false
  }, {
    key: 'v',
    isHighlighted: false
  }, {
    key: 'b',
    isHighlighted: false
  }, {
    key: 'n',
    isHighlighted: false
  }, {
    key: 'm',
    isHighlighted: false
  }], [{
    key: 'Space',
    isHighlighted: false
  }]],
  stringToType: ''
};
const featureSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('keyboard');
const keyRowsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureSelector, state => state.keyRows);

/***/ }),

/***/ 8576:
/*!********************************************************!*\
  !*** ./src/app/store/statistics/statistics.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addResult": () => (/* binding */ addResult),
/* harmony export */   "incrementCurrentSymbolsCount": () => (/* binding */ incrementCurrentSymbolsCount),
/* harmony export */   "resetCurrentSymbolsCount": () => (/* binding */ resetCurrentSymbolsCount),
/* harmony export */   "setStringLength": () => (/* binding */ setStringLength),
/* harmony export */   "setTime": () => (/* binding */ setTime),
/* harmony export */   "startTimer": () => (/* binding */ startTimer),
/* harmony export */   "stopTimer": () => (/* binding */ stopTimer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const startTimer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[STATISTICS] start timer');
const stopTimer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[STATISTICS] stop timer');
const setTime = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[STATISTICS] set timer's time`);
const setStringLength = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`STATISTICS set string to type length`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetCurrentSymbolsCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`STATISTICS reset typed symbols count`);
const incrementCurrentSymbolsCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`STATISTICS increment typed symbols count`);
const addResult = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`STATISTICS add result to results array`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 9161:
/*!********************************************************!*\
  !*** ./src/app/store/statistics/statistics.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsEffects": () => (/* binding */ StatisticsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _statistics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.actions */ 8576);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 648);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _statistics_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.state */ 7226);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);








class StatisticsEffects {
  constructor(actions$, store) {
    this.actions$ = actions$;
    this.store = store;
    this.updateTime$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.startTimer, _statistics_actions__WEBPACK_IMPORTED_MODULE_0__.stopTimer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeInterval)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(x => x.value.type !== _statistics_actions__WEBPACK_IMPORTED_MODULE_0__.startTimer.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(interval => interval.interval / 60000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_statistics_state__WEBPACK_IMPORTED_MODULE_1__.wordsLengthSelector))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(([time, length]) => {
      const speed = length / time;
      this.store.dispatch((0,_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.addResult)({
        result: {
          speed: speed,
          text: `Speed is ${speed.toFixed(2)} symbols/min`
        }
      }));
    })), {
      dispatch: false
    });
  }

}

StatisticsEffects.ɵfac = function StatisticsEffects_Factory(t) {
  return new (t || StatisticsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
};

StatisticsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: StatisticsEffects,
  factory: StatisticsEffects.ɵfac
});

/***/ }),

/***/ 5048:
/*!********************************************************!*\
  !*** ./src/app/store/statistics/statistics.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statisticsReducer": () => (/* binding */ statisticsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _statistics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.actions */ 8576);
/* harmony import */ var _statistics_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.state */ 7226);



const statisticsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_statistics_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.setStringLength, (state, {
  length
}) => ({ ...state,
  wordsLength: length
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.resetCurrentSymbolsCount, state => ({ ...state,
  currentSymbolsCount: 0
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.incrementCurrentSymbolsCount, state => ({ ...state,
  currentSymbolsCount: state.currentSymbolsCount + 1
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.addResult, (state, {
  result
}) => ({ ...state,
  results: [...state.results, result]
})));

/***/ }),

/***/ 7226:
/*!******************************************************!*\
  !*** ./src/app/store/statistics/statistics.state.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alreadyTypedSymbolsCountSelector": () => (/* binding */ alreadyTypedSymbolsCountSelector),
/* harmony export */   "featureSelector": () => (/* binding */ featureSelector),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "resultsSelector": () => (/* binding */ resultsSelector),
/* harmony export */   "wordsLengthSelector": () => (/* binding */ wordsLengthSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const initialState = {
  time: 0,
  wordsLength: 0,
  currentSymbolsCount: 0,
  results: []
};
const featureSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('statistics');
const wordsLengthSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureSelector, state => state.wordsLength);
const alreadyTypedSymbolsCountSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureSelector, state => state.currentSymbolsCount);
const resultsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureSelector, state => state.results);

/***/ }),

/***/ 1879:
/*!**************************************************************!*\
  !*** ./src/components/keyboard-monitor/key/key.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyComponent": () => (/* binding */ KeyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class KeyComponent {}

KeyComponent.ɵfac = function KeyComponent_Factory(t) {
  return new (t || KeyComponent)();
};

KeyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: KeyComponent,
  selectors: [["app-key"]],
  inputs: {
    key: "key"
  },
  decls: 2,
  vars: 5,
  consts: [[1, "key"]],
  template: function KeyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlighted-key", ctx.key == null ? null : ctx.key.isHighlighted)("typed-key", ctx.key == null ? null : ctx.key.isTyped);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.key == null ? null : ctx.key.key);
    }
  },
  styles: [".key[_ngcontent-%COMP%] {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", \"Calibri\", \"Trebuchet MS\", sans-serif;\n  min-height: 20px;\n  min-width: 20px;\n  background-color: aliceblue;\n  text-align: center;\n  margin: 2px;\n  border: 2px solid black;\n  border-radius: 3px;\n  box-shadow: black 1px 1px 5px 0px;\n  padding: 5px;\n}\n.key.highlighted-key[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 124, 0.726);\n}\n.key.typed-key[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLW1vbml0b3Iva2V5L2tleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBRkY7QUFJRTtFQUNFLDRDQUFBO0FBRko7QUFLSTtFQUNFLGdCQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyIua2V5IHtcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgJ0NhbGlicmknLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIG1hcmdpbjogMnB4O1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IGJsYWNrIDFweCAxcHggNXB4IDBweDtcbiAgcGFkZGluZzogNXB4O1xuXG4gICYuaGlnaGxpZ2h0ZWQta2V5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAxMjQsIDAuNzI2KTtcbiAgfVxuXG4gICAgJi50eXBlZC1rZXkge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 6986:
/*!***********************************************************************!*\
  !*** ./src/components/keyboard-monitor/keyboard-monitor.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardMonitorComponent": () => (/* binding */ KeyboardMonitorComponent)
/* harmony export */ });
/* harmony import */ var src_app_store_keyboard_keyboard_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/keyboard/keyboard.state */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);




function KeyboardMonitorComponent_div_0_app_key_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-key", 3);
  }

  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("key", key_r3);
  }
}

function KeyboardMonitorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KeyboardMonitorComponent_div_0_app_key_1_Template, 1, 1, "app-key", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const keyRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", keyRow_r1);
  }
}

class KeyboardMonitorComponent {
  constructor(store) {
    this.store = store;
    this.keyRows$ = this.store.select(src_app_store_keyboard_keyboard_state__WEBPACK_IMPORTED_MODULE_0__.keyRowsSelector);
  }

}

KeyboardMonitorComponent.ɵfac = function KeyboardMonitorComponent_Factory(t) {
  return new (t || KeyboardMonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};

KeyboardMonitorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: KeyboardMonitorComponent,
  selectors: [["app-keyboard-monitor"]],
  decls: 2,
  vars: 3,
  consts: [["class", "key-row", 4, "ngFor", "ngForOf"], [1, "key-row"], [3, "key", 4, "ngFor", "ngForOf"], [3, "key"]],
  template: function KeyboardMonitorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, KeyboardMonitorComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.keyRows$));
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  font-size: large;\n  margin-bottom: 1em;\n}\n\n.key-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLW1vbml0b3Iva2V5Ym9hcmQtbW9uaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmtleS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 3753:
/*!*****************************************************!*\
  !*** ./src/components/results/results.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsComponent": () => (/* binding */ ResultsComponent)
/* harmony export */ });
/* harmony import */ var _app_store_statistics_statistics_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/store/statistics/statistics.state */ 7226);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);







function ResultsComponent_ng_container_0_mat_card_title_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nice job!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function ResultsComponent_ng_container_0_mat_card_title_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Not great, not terrible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function ResultsComponent_ng_container_0_mat_card_title_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Practice practice practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function ResultsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 3)(9, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResultsComponent_ng_container_0_mat_card_title_10_Template, 2, 0, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ResultsComponent_ng_container_0_mat_card_title_11_Template, 2, 0, "mat-card-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ResultsComponent_ng_container_0_mat_card_title_12_Template, 2, 0, "mat-card-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const result_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Result ", index_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", result_r1.speed >= 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", result_r1.speed > 80 && result_r1.speed < 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", result_r1.speed <= 80);
  }
}

class ResultsComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {
    this.results$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_app_store_statistics_statistics_state__WEBPACK_IMPORTED_MODULE_0__.resultsSelector));
  }

}

ResultsComponent.ɵfac = function ResultsComponent_Factory(t) {
  return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};

ResultsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ResultsComponent,
  selectors: [["app-results"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngFor", "ngForOf"], [1, "result"], [1, "result-card"], [1, "result-card-under"], ["class", "result-great", 4, "ngIf"], ["class", "result-avg", 4, "ngIf"], ["class", "result-low", 4, "ngIf"], [1, "result-great"], [1, "result-avg"], [1, "result-low"]],
  template: function ResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResultsComponent_ng_container_0_Template, 13, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.results$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.result[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.result-card[_ngcontent-%COMP%], .result-card-under[_ngcontent-%COMP%] {\n  margin: 1em;\n  width: 50%;\n  transition: all 0.5s;\n}\n\n.result-card[_ngcontent-%COMP%] {\n  z-index: 1;\n  transform: translateX(50%);\n}\n\n.result-card-under[_ngcontent-%COMP%] {\n  z-index: -1;\n  transform: translateX(-50%);\n}\n\n.result[_ngcontent-%COMP%]:hover   .result-card[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.result[_ngcontent-%COMP%]:hover   .result-card-under[_ngcontent-%COMP%] {\n  transform: translateX(-10%);\n}\n\n.result-card-under[_ngcontent-%COMP%]:has(.result-great) {\n  background-color: rgb(5, 245, 113);\n}\n\n.result-card-under[_ngcontent-%COMP%]:has(.result-avg) {\n  background-color: rgb(231, 255, 47);\n}\n\n.result-card-under[_ngcontent-%COMP%]:has(.result-low) {\n  background-color: rgb(255, 55, 55);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTs7RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlc3VsdC1jYXJkLFxuLnJlc3VsdC1jYXJkLXVuZGVyIHtcbiAgbWFyZ2luOiAxZW07XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ucmVzdWx0LWNhcmQge1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLnJlc3VsdC1jYXJkLXVuZGVyIHtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnJlc3VsdDpob3ZlciAucmVzdWx0LWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5yZXN1bHQ6aG92ZXIgLnJlc3VsdC1jYXJkLXVuZGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xufVxuXG4ucmVzdWx0LWNhcmQtdW5kZXI6aGFzKC5yZXN1bHQtZ3JlYXQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDI0NSwgMTEzKTtcbn1cblxuLnJlc3VsdC1jYXJkLXVuZGVyOmhhcygucmVzdWx0LWF2Zykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyNTUsIDQ3KTtcbn1cblxuLnJlc3VsdC1jYXJkLXVuZGVyOmhhcygucmVzdWx0LWxvdykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1NSwgNTUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 2706:
/*!***************************************************!*\
  !*** ./src/components/ticker/ticker.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TickerComponent": () => (/* binding */ TickerComponent)
/* harmony export */ });
/* harmony import */ var _app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/statistics/statistics.actions */ 8576);
/* harmony import */ var _app_store_statistics_statistics_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app/store/statistics/statistics.state */ 7226);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random-words */ 2174);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/keyboard/keyboard.actions */ 6246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _typing_progress_bar_typing_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typing-progress-bar/typing-progress-bar.component */ 8856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_highlighter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/highlighter.pipe */ 716);











class TickerComponent {
  constructor(store) {
    this.store = store;
    this.wordsCount = 5;
    this.stringToType = '';
    this.alreadyTypedString = '';
    this.errorCharPosition = -1;
    this.currentCursorPosition = 0;
    this.isTickerHighlighted = false;
  }

  onKeyDownHandler(event) {
    if (this.currentCursorPosition >= this.stringToType.length) {
      this.store.dispatch((0,_app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.stopTimer)());
      this.initValues();
      this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
    }

    if (this.stringToType[this.currentCursorPosition] === event.key) {
      this.unHighlightKey(this.stringToType.charAt(this.currentCursorPosition));
      this.currentCursorPosition++;
      this.alreadyTypedString = this.stringToType.slice(0, this.currentCursorPosition);
      this.errorCharPosition = -1;
      this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
      this.pushKeyButton(event.key);
      this.incrementAlreadyTypedSymbolsCount();
    } else {
      this.pushKeyButton(event.key);
      this.errorCharPosition = this.currentCursorPosition;
    }

    event.stopPropagation();
    event.preventDefault();
  }

  ngOnInit() {
    this.generateWords();
    this.resetStats();
    this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
    this.allSymbolsCount$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_app_store_statistics_statistics_state__WEBPACK_IMPORTED_MODULE_1__.wordsLengthSelector));
    this.alreadyTypedSymbolsCount$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_app_store_statistics_statistics_state__WEBPACK_IMPORTED_MODULE_1__.alreadyTypedSymbolsCountSelector));
  }

  generateWords() {
    this.stringToType = random_words__WEBPACK_IMPORTED_MODULE_2___default()(this.wordsCount).join(' ');
  }

  highlightKey(key) {
    this.store.dispatch((0,src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_3__.setKeyState)({
      pressedKey: {
        key,
        isHighlighted: true
      }
    }));
  }

  unHighlightKey(key) {
    this.store.dispatch((0,src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_3__.setKeyState)({
      pressedKey: {
        key,
        isHighlighted: false
      }
    }));
  }

  pushKeyButton(key) {
    this.store.dispatch((0,src_app_store_keyboard_keyboard_actions__WEBPACK_IMPORTED_MODULE_3__.setTypedKeyState)({
      pressedKey: {
        key: key
      }
    }));
  }

  incrementAlreadyTypedSymbolsCount() {
    this.store.dispatch((0,_app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.incrementCurrentSymbolsCount)());
  }

  removeHighlightedClass() {
    this.isTickerHighlighted = false;
  }

  resetStats() {
    this.store.dispatch((0,_app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.setStringLength)({
      length: this.stringToType.length
    }));
    this.store.dispatch((0,_app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.startTimer)());
    this.store.dispatch((0,_app_store_statistics_statistics_actions__WEBPACK_IMPORTED_MODULE_0__.resetCurrentSymbolsCount)());
  }

  initValues() {
    this.generateWords();
    this.resetStats();
    this.alreadyTypedString = '';
    this.errorCharPosition = -1;
    this.currentCursorPosition = 0;
    this.isTickerHighlighted = true;
  }

}

TickerComponent.ɵfac = function TickerComponent_Factory(t) {
  return new (t || TickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

TickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TickerComponent,
  selectors: [["app-ticker"]],
  hostBindings: function TickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function TickerComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    }
  },
  decls: 6,
  vars: 13,
  consts: [[1, "words-ticker-wrapper"], [1, "words-ticker", 3, "innerHtml", "transitionend"], [1, "progress-bar", 3, "allSymbolsToTypeCount", "alreadyTypedSymbolsCount"]],
  template: function TickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "pre", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("transitionend", function TickerComponent_Template_pre_transitionend_1_listener() {
        return ctx.removeHighlightedClass();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "highlighter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-typing-progress-bar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("highlighted", ctx.isTickerHighlighted);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 5, ctx.stringToType, ctx.alreadyTypedString, ctx.errorCharPosition), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("allSymbolsToTypeCount", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 9, ctx.allSymbolsCount$))("alreadyTypedSymbolsCount", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 11, ctx.alreadyTypedSymbolsCount$));
    }
  },
  dependencies: [_typing_progress_bar_typing_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.TypingProgressBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _pipes_highlighter_pipe__WEBPACK_IMPORTED_MODULE_5__.HighlighterPipe],
  styles: ["[_nghost-%COMP%], .words-ticker[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1em;\n}\n\n.words-ticker[_ngcontent-%COMP%] {\n  padding: 0 10%;\n  background-color: #ababab;\n  border: 1px solid #3b9aff;\n  border-radius: 2px;\n  line-height: 2em;\n  font-size: large;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  transition: all 1s;\n}\n.words-ticker.highlighted[_ngcontent-%COMP%] {\n  background-color: #3ffe4b;\n}\n\n.words-ticker-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .highlighted-text {\n  color: greenyellow;\n}\n  .error-char {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RpY2tlci90aWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFFQSx5QkFmb0I7RUFnQnBCLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUdBQUE7RUFHQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSx5QkF6QnNCO0FBa0IxQjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0FBUkY7O0FBWUU7RUFDRSxrQkFBQTtBQVRKO0FBWUU7RUFDRSxVQUFBO0FBVkoiLCJzb3VyY2VzQ29udGVudCI6WyIkaW5pdGlhbC1pbnB1dC1jb2xvcjogI2FiYWJhYjtcbiRoaWdobGlnaHRlZC1pbnB1dC1jb2xvcjogIzNmZmU0YjtcbiRib3JkZXItaW5wdXQtY29sb3I6ICMzYjlhZmY7XG5cbjpob3N0LFxuLndvcmRzLXRpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLndvcmRzLXRpY2tlciB7XG4gIHBhZGRpbmc6IDAgMTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICRpbml0aWFsLWlucHV0LWNvbG9yO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWlucHV0LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG5cbiAgJi5oaWdobGlnaHRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodGVkLWlucHV0LWNvbG9yO1xuICB9XG59XG5cbi53b3Jkcy10aWNrZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLmhpZ2hsaWdodGVkLXRleHQge1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbiAgfVxuXG4gIC5lcnJvci1jaGFyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 8856:
/*!*****************************************************************************!*\
  !*** ./src/components/typing-progress-bar/typing-progress-bar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypingProgressBarComponent": () => (/* binding */ TypingProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);


class TypingProgressBarComponent {
  constructor() {
    this.allSymbolsToTypeCount = 0;
    this.alreadyTypedSymbolsCount = 0;
    this.progress = 0;
  }

  ngOnChanges() {
    if (this.alreadyTypedSymbolsCount !== null && this.allSymbolsToTypeCount) {
      console.log(`typed ${this.alreadyTypedSymbolsCount} all ${this.allSymbolsToTypeCount}`);
      this.progress = this.alreadyTypedSymbolsCount / this.allSymbolsToTypeCount * 100;
    }
  }

}

TypingProgressBarComponent.ɵfac = function TypingProgressBarComponent_Factory(t) {
  return new (t || TypingProgressBarComponent)();
};

TypingProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TypingProgressBarComponent,
  selectors: [["app-typing-progress-bar"]],
  inputs: {
    allSymbolsToTypeCount: "allSymbolsToTypeCount",
    alreadyTypedSymbolsCount: "alreadyTypedSymbolsCount"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["mode", "determinate", 3, "value"]],
  template: function TypingProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.progress);
    }
  },
  dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(module => (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.enableDebugTools)(module.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef).components[0])).catch(err => console.error(err));

/***/ }),

/***/ 716:
/*!***************************************!*\
  !*** ./src/pipes/highlighter.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlighterPipe": () => (/* binding */ HighlighterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HighlighterPipe {
  constructor() {
    this.replaceAt = function (value, index, replacement) {
      return value.substring(0, index) + replacement + value.substring(index + 1, value.length);
    };
  }

  transform(value, textToHighlight, errorTypedCharPosition) {
    if (!textToHighlight) return value;
    return errorTypedCharPosition < 0 ? value.replace(textToHighlight, '<span class="highlighted-text">$&</span>') : this.replaceAt(value, errorTypedCharPosition, `<span class="error-char">${value.charAt(errorTypedCharPosition)}</span>`).replace(textToHighlight, '<span class="highlighted-text">$&</span>');
  }

}

HighlighterPipe.ɵfac = function HighlighterPipe_Factory(t) {
  return new (t || HighlighterPipe)();
};

HighlighterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "highlighter",
  type: HighlighterPipe,
  pure: true
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map