import './polyfills.server.mjs';
import{A as Et,B as ln,C as mn,D as T,E as Bt,F as J,G as y,H as _t,I as N,J as V,K as tt,L as B,M as a,N as c,O as h,P as hn,Q as W,R as l,S as q,Z as Ke,_ as Ht,a as Xi,aa as pe,b as Ki,ba as un,c as Ji,ca as fn,d as tn,da as pn,e as Vt,ea as gn,f as en,fa as bn,g as nn,ga as _n,h as on,i as rn,j as an,ja as vn,k as dn,l as cn,m as sn,n as le,na as xn,o as me,p as S,q as _,qa as yn,r as K,ra as wn,s as F,sa as Je,t as he,u as C,v,w as M,x as ct,y as ue,z as fe}from"./chunk-SL7P4472.mjs";import{a as z,b as X}from"./chunk-KRLCULJA.mjs";var On=(()=>{let t=class t{constructor(i,o){this._renderer=i,this._elementRef=o,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,o){this._renderer.setProperty(this._elementRef.nativeElement,i,o)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};t.\u0275fac=function(o){return new(o||t)(y(Bt),y(T))},t.\u0275dir=M({type:t});let e=t;return e})(),Yr=(()=>{let t=class t extends On{};t.\u0275fac=(()=>{let i;return function(r){return(i||(i=Et(t)))(r||t)}})(),t.\u0275dir=M({type:t,features:[V]});let e=t;return e})(),Tn=new K("NgValueAccessor");var qr={provide:Tn,useExisting:le(()=>St),multi:!0};function Zr(){let e=Ke()?Ke().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Qr=new K("CompositionEventMode"),St=(()=>{let t=class t extends On{constructor(i,o,r){super(i,o),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Zr())}writeValue(i){let o=i??"";this.setProperty("value",o)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};t.\u0275fac=function(o){return new(o||t)(y(Bt),y(T),y(Qr,8))},t.\u0275dir=M({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,r){o&1&&W("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[q([qr]),V]});let e=t;return e})();function st(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}function Rn(e){return e!=null&&typeof e.length=="number"}var Pn=new K("NgValidators"),Ln=new K("NgAsyncValidators"),Xr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,H=class{static min(t){return Kr(t)}static max(t){return Jr(t)}static required(t){return ta(t)}static requiredTrue(t){return ea(t)}static email(t){return ia(t)}static minLength(t){return na(t)}static maxLength(t){return oa(t)}static pattern(t){return ra(t)}static nullValidator(t){return zn(t)}static compose(t){return Un(t)}static composeAsync(t){return Gn(t)}};function Kr(e){return t=>{if(st(t.value)||st(e))return null;let n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}function Jr(e){return t=>{if(st(t.value)||st(e))return null;let n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}function ta(e){return st(e.value)?{required:!0}:null}function ea(e){return e.value===!0?null:{required:!0}}function ia(e){return st(e.value)||Xr.test(e.value)?null:{email:!0}}function na(e){return t=>st(t.value)||!Rn(t.value)?null:t.value.length<e?{minlength:{requiredLength:e,actualLength:t.value.length}}:null}function oa(e){return t=>Rn(t.value)&&t.value.length>e?{maxlength:{requiredLength:e,actualLength:t.value.length}}:null}function ra(e){if(!e)return zn;let t,n;return typeof e=="string"?(n="",e.charAt(0)!=="^"&&(n+="^"),n+=e,e.charAt(e.length-1)!=="$"&&(n+="$"),t=new RegExp(n)):(n=e.toString(),t=e),i=>{if(st(i.value))return null;let o=i.value;return t.test(o)?null:{pattern:{requiredPattern:n,actualValue:o}}}}function zn(e){return null}function jn(e){return e!=null}function Nn(e){return hn(e)?tn(e):e}function Vn(e){let t={};return e.forEach(n=>{t=n!=null?z(z({},t),n):t}),Object.keys(t).length===0?null:t}function Bn(e,t){return t.map(n=>n(e))}function aa(e){return!e.validate}function Hn(e){return e.map(t=>aa(t)?t:n=>t.validate(n))}function Un(e){if(!e)return null;let t=e.filter(jn);return t.length==0?null:function(n){return Vn(Bn(n,t))}}function Wn(e){return e!=null?Un(Hn(e)):null}function Gn(e){if(!e)return null;let t=e.filter(jn);return t.length==0?null:function(n){let i=Bn(n,t).map(Nn);return on(i).pipe(Vt(Vn))}}function $n(e){return e!=null?Gn(Hn(e)):null}function kn(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Yn(e){return e._rawValidators}function qn(e){return e._rawAsyncValidators}function ti(e){return e?Array.isArray(e)?e:[e]:[]}function _e(e,t){return Array.isArray(e)?e.includes(t):e===t}function Cn(e,t){let n=ti(t);return ti(e).forEach(o=>{_e(n,o)||n.push(o)}),n}function En(e,t){return ti(t).filter(n=>!_e(e,n))}var ve=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Wn(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=$n(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},It=class extends ve{get formDirective(){return null}get path(){return null}},Gt=class extends ve{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},xe=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},da={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Bc=X(z({},da),{"[class.ng-submitted]":"isSubmitted"}),Ce=(()=>{let t=class t extends xe{constructor(i){super(i)}};t.\u0275fac=function(o){return new(o||t)(y(Gt,2))},t.\u0275dir=M({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,r){o&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]});let e=t;return e})(),Ee=(()=>{let t=class t extends xe{constructor(i){super(i)}};t.\u0275fac=function(o){return new(o||t)(y(It,10))},t.\u0275dir=M({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,r){o&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[V]});let e=t;return e})();var Ut="VALID",ge="INVALID",Dt="PENDING",Wt="DISABLED";function ni(e){return(De(e)?e.validators:e)||null}function ca(e){return Array.isArray(e)?Wn(e):e||null}function oi(e,t){return(De(t)?t.asyncValidators:e)||null}function sa(e){return Array.isArray(e)?$n(e):e||null}function De(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Zn(e,t,n){let i=e.controls;if(!(t?Object.keys(i):i).length)throw new me(1e3,"");if(!i[n])throw new me(1001,"")}function Qn(e,t,n){e._forEachChild((i,o)=>{if(n[o]===void 0)throw new me(1002,"")})}var Mt=class{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Ut}get invalid(){return this.status===ge}get pending(){return this.status==Dt}get disabled(){return this.status===Wt}get enabled(){return this.status!==Wt}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Cn(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Cn(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(En(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(En(t,this._rawAsyncValidators))}hasValidator(t){return _e(this._rawValidators,t)}hasAsyncValidator(t){return _e(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Dt,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Wt,this.errors=null,this._forEachChild(i=>{i.disable(X(z({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(X(z({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Ut,this._forEachChild(i=>{i.enable(X(z({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(X(z({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ut||this.status===Dt)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Wt:Ut}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Dt,this._hasOwnPendingAsyncValidator=!0;let n=Nn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,o)=>i&&i._find(o),this)}getError(t,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new _t,this.statusChanges=new _t}_calculateStatus(){return this._allControlsDisabled()?Wt:this.errors?ge:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Dt)?Dt:this._anyControlsHaveStatus(ge)?ge:Ut}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){De(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ca(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=sa(this._rawAsyncValidators)}},ye=class extends Mt{constructor(t,n,i){super(ni(n),oi(i,n)),this.controls=t,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,n){return this.controls[t]?this.controls[t]:(this.controls[t]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(t,n,i={}){this.registerControl(t,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(t,n,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],n&&this.registerControl(t,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,n={}){Qn(this,!0,t),Object.keys(t).forEach(i=>{Zn(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(t,n={}){t!=null&&(Object.keys(t).forEach(i=>{let o=this.controls[i];o&&o.patchValue(t[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(t={},n={}){this._forEachChild((i,o)=>{i.reset(t?t[o]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(t,n,i)=>(t[i]=n.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&t(i,n)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(n,i,o)=>((i.enabled||this.disabled)&&(n[o]=i.value),n))}_reduceChildren(t,n){let i=t;return this._forEachChild((o,r)=>{i=n(i,o,r)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ei=class extends ye{};var ri=new K("CallSetDisabledState",{providedIn:"root",factory:()=>Ie}),Ie="always";function la(e,t){return[...t.path,e]}function Dn(e,t,n=Ie){ai(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),ha(e,t),fa(e,t),ua(e,t),ma(e,t)}function In(e,t,n=!0){let i=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(i),t.valueAccessor.registerOnTouched(i)),ke(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function we(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function ma(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function ai(e,t){let n=Yn(e);t.validator!==null?e.setValidators(kn(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let i=qn(e);t.asyncValidator!==null?e.setAsyncValidators(kn(i,t.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();we(t._rawValidators,o),we(t._rawAsyncValidators,o)}function ke(e,t){let n=!1;if(e!==null){if(t.validator!==null){let o=Yn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(d=>d!==t.validator);r.length!==o.length&&(n=!0,e.setValidators(r))}}if(t.asyncValidator!==null){let o=qn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(d=>d!==t.asyncValidator);r.length!==o.length&&(n=!0,e.setAsyncValidators(r))}}}let i=()=>{};return we(t._rawValidators,i),we(t._rawAsyncValidators,i),n}function ha(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Xn(e,t)})}function ua(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Xn(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function Xn(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function fa(e,t){let n=(i,o)=>{t.valueAccessor.writeValue(i),o&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function pa(e,t){e==null,ai(e,t)}function ga(e,t){return ke(e,t)}function ba(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function _a(e){return Object.getPrototypeOf(e.constructor)===Yr}function va(e,t){e._syncPendingControls(),t.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function xa(e,t){if(!t)return null;Array.isArray(t);let n,i,o;return t.forEach(r=>{r.constructor===St?n=r:_a(r)?i=r:o=r}),o||i||n||null}function ya(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Mn(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function An(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var be=class extends Mt{constructor(t=null,n,i){super(ni(n),oi(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),De(n)&&(n.nonNullable||n.initialValueIsDefault)&&(An(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Mn(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Mn(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){An(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var wa=e=>e instanceof be;var Me=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=M({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let e=t;return e})();var ka=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})();var Kn=new K("NgModelWithFormControlWarning");var Ca={provide:It,useExisting:le(()=>$t)},$t=(()=>{let t=class t extends It{constructor(i,o,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _t,this._setValidators(i),this._setAsyncValidators(o)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ke(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let o=this.form.get(i.path);return Dn(o,i,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),o}getControl(i){return this.form.get(i.path)}removeControl(i){In(i.control||null,i,!1),ya(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,o){this.form.get(i.path).setValue(o)}onSubmit(i){return this.submitted=!0,va(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let o=i.control,r=this.form.get(i.path);o!==r&&(In(o||null,i),wa(r)&&(Dn(r,i,this.callSetDisabledState),i.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let o=this.form.get(i.path);pa(o,i),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let o=this.form.get(i.path);o&&ga(o,i)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ai(this.form,this),this._oldForm&&ke(this._oldForm,this)}_checkFormPresent(){this.form}};t.\u0275fac=function(o){return new(o||t)(y(Pn,10),y(Ln,10),y(ri,8))},t.\u0275dir=M({type:t,selectors:[["","formGroup",""]],hostBindings:function(o,r){o&1&&W("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[q([Ca]),V,ct]});let e=t;return e})();var Ea={provide:Gt,useExisting:le(()=>Yt)},Yt=(()=>{let t=class t extends Gt{set isDisabled(i){}constructor(i,o,r,d,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.name=null,this.update=new _t,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(o),this._setAsyncValidators(r),this.valueAccessor=xa(this,d)}ngOnChanges(i){this._added||this._setUpControl(),ba(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return la(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};t._ngModelWarningSentOnce=!1,t.\u0275fac=function(o){return new(o||t)(y(It,13),y(Pn,10),y(Ln,10),y(Tn,10),y(Kn,8))},t.\u0275dir=M({type:t,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[q([Ea]),V,ct]});let e=t;return e})();var Jn=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[ka]});let e=t;return e})(),ii=class extends Mt{constructor(t,n,i){super(ni(n),oi(i,n)),this.controls=t,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,n={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(t,n,i={}){this.controls.splice(t,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,n={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(t,n,i={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),n&&(this.controls.splice(o,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,n={}){Qn(this,!1,t),t.forEach((i,o)=>{Zn(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(t,n={}){t!=null&&(t.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(t=[],n={}){this._forEachChild((i,o)=>{i.reset(t[o],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((n,i)=>{t(n,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(n=>n.enabled&&t(n))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};function Sn(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var Ae=(()=>{let t=class t{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new t;return i.useNonNullable=!0,i}group(i,o=null){let r=this._reduceControls(i),d={};return Sn(o)?d=o:o!==null&&(d.validators=o.validator,d.asyncValidators=o.asyncValidator),new ye(r,d)}record(i,o=null){let r=this._reduceControls(i);return new ei(r,o)}control(i,o,r){let d={};return this.useNonNullable?(Sn(o)?d=o:(d.validators=o,d.asyncValidators=r),new be(i,X(z({},d),{nonNullable:!0}))):new be(i,o,r)}array(i,o,r){let d=i.map(s=>this._createControl(s));return new ii(d,o,r)}_reduceControls(i){let o={};return Object.keys(i).forEach(r=>{o[r]=this._createControl(i[r])}),o}_createControl(i){if(i instanceof be)return i;if(i instanceof Mt)return i;if(Array.isArray(i)){let o=i[0],r=i.length>1?i[1]:null,d=i.length>2?i[2]:null;return this.control(o,r,d)}else return this.control(i)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var to=(()=>{let t=class t{static withConfig(i){return{ngModule:t,providers:[{provide:ri,useValue:i.callSetDisabledState??Ie}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Jn]});let e=t;return e})(),eo=(()=>{let t=class t{static withConfig(i){return{ngModule:t,providers:[{provide:Kn,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ri,useValue:i.callSetDisabledState??Ie}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Jn]});let e=t;return e})();var Se=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-sidebar"]],decls:0,vars:0,template:function(o,r){}});let e=t;return e})();var oo=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-events"]],decls:37,vars:0,consts:[[1,"container"],["id","slide1",1,"slide"],[1,"title"],["id","slide2",1,"slide"],["src","/assets/seedproject/2.jpg"],["src","/assets/seedproject/3.jpg"],["id","slide3",1,"slide"],["id","credits",1,"slide"],[1,"content"],[1,"connections"]],template:function(o,r){o&1&&(a(0,"div",0)(1,"div"),h(2,"app-sidebar"),c(),h(3,"br")(4,"br"),c(),a(5,"div",1)(6,"div",2)(7,"h1"),l(8,"SEEDIT"),c(),a(9,"p"),l(10," Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim "),c()()(),a(11,"div",3)(12,"div",2)(13,"h1"),l(14,"Slide 2"),c(),a(15,"p"),l(16,"Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim."),c()(),h(17,"img",4)(18,"img",5),c(),a(19,"div",6)(20,"div",2)(21,"h1"),l(22,"Slide 3"),c(),a(23,"p"),l(24,"Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim."),c()()(),a(25,"footer")(26,"div",7)(27,"div",8)(28,"h2"),l(29,"CREDITS"),c(),h(30,"br")(31,"br")(32,"br"),a(33,"p"),l(34," https://fonts.googleapis.com/css?family=Nunito "),c()(),a(35,"div",9),l(36," icon - github join icon - Community . . . "),c()()())},dependencies:[Se],styles:["html[_ngcontent-%COMP%]{height:100%;overflow:hidden}body[_ngcontent-%COMP%]{margin:0;padding:0;perspective:1px;transform-style:preserve-3d;height:100%;overflow-y:scroll;overflow-x:hidden;font-family:Nunito}.slide[_ngcontent-%COMP%]{position:relative;padding:25vh 10%;min-height:100vh;width:100vw;box-sizing:border-box;box-shadow:0 -1px 10px #000000b3;transform-style:inherit}img[_ngcontent-%COMP%]{position:absolute;top:50%;left:35%;width:320px;height:240px;transform:translateZ(.25px) scale(.75) translate(-94%) translateY(-100%) rotate(2deg);padding:10px;border-radius:5px;background:rgba(240,230,220,.7);box-shadow:0 0 8px #000000b3}h1[_ngcontent-%COMP%]{font-size:250%}p[_ngcontent-%COMP%]{font-size:140%;line-height:150%;color:#333}.title[_ngcontent-%COMP%]{width:50%;padding:5%;border-radius:5px;background:rgba(240,230,220,.7);box-shadow:0 0 8px #000000b3}#credits[_ngcontent-%COMP%]{background:#222}"]});let e=t;return e})();var ro=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-cart"]],decls:2,vars:0,consts:[[1,"cart_icon","d-flex"],[1,"fa-solid","fa-cart-plus"]],template:function(o,r){o&1&&(a(0,"div",0),h(1,"i",1),c())},styles:[".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border:1px solid #ddd;padding:10px;margin-bottom:10px}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;flex-grow:1}.item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;border:none;padding:5px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:2px;cursor:pointer;border-radius:3px}#cart[_ngcontent-%COMP%]{border:1px solid #ddd;padding:10px;margin-top:20px}#total[_ngcontent-%COMP%]{font-weight:700}"]}),t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ao=(()=>{let t=class t{constructor(){this.cartItemsSubject=new Ji([]),this.cartItems$=this.cartItemsSubject.asObservable()}addToCart(i){let o=this.cartItemsSubject.getValue(),r=o.find(d=>d.id===i.id);r?r.quantity++:o.push(X(z({},i),{quantity:1})),this.cartItemsSubject.next([...o])}removeFromCart(i){let r=this.cartItemsSubject.getValue().filter(d=>d.id!==i);this.cartItemsSubject.next([...r])}getCartItems(){return this.cartItemsSubject.getValue()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var co=(()=>{let t=class t{constructor(i){this.cart=i}ngOnInit(){}};t.\u0275fac=function(o){return new(o||t)(y(ao))},t.\u0275cmp=C({type:t,selectors:[["app-special-events"]],decls:114,vars:0,consts:[[1,"product"],[1,"container","text-center","mt-5"],[1,"row"],[1,"col-md-3"],[1,"box"],[1,"product-image"],["src","/assets/seeds/grape-seeds.jpeg","alt","none"],[1,"content"],["type","button","id","buttonminus",1,"btn"],["src","/assets/seeds/apricot.jpg","alt","none"],["src","/assets/seeds/caraway-seed.jpg","alt","none"],["src","/assets/seeds/flax.jpg","alt","none"],[1,"plus-minus-buttons"],["src","/assets/seeds/pumpkin.jpg","alt","none"],["src","/assets/seeds/seasame.jpg","alt","none"],["src","/assets/seeds/sabja.jpg","alt","none"],["src","/assets/seeds/rajgira.jpeg","alt","none"],["src","/assets/seeds/blackpepper.jpeg","alt","none"],["src","/assets/seeds/sunflower.jpeg","alt","none"],["src","/assets/seeds/fig.jpeg","alt","none"]],template:function(o,r){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),h(6,"img",6),a(7,"div",7)(8,"p"),l(9,"GRAPE SEEDS"),c(),a(10,"button",8),l(11,"ADD TO CART "),c()()()()(),a(12,"div",3)(13,"div",4)(14,"div",5),h(15,"img",9),a(16,"div",7)(17,"p"),l(18,"APRICOT SEEDS"),c(),a(19,"button",8),l(20,"ADD TO CART "),c()()()()(),a(21,"div",3)(22,"div",4)(23,"div",5),h(24,"img",10),c(),a(25,"div",7)(26,"p"),l(27,"CARAWAY SEEDS"),c(),a(28,"button",8),l(29,"ADD TO CART "),c()()()(),a(30,"div",3)(31,"div",4)(32,"div",5),h(33,"img",11),c(),a(34,"div",7),h(35,"div",12),a(36,"p"),l(37,"FLAX SEEDS"),c(),a(38,"button",8),l(39,"ADD TO CART "),c()()()(),a(40,"div",3)(41,"div",4)(42,"div",5),h(43,"img",13),c(),a(44,"div",7),h(45,"div",12),a(46,"p"),l(47,"PUMPKIN SEEDS"),c(),a(48,"button",8),l(49,"ADD TO CART "),c()()()(),a(50,"div",3)(51,"div",4)(52,"div",5),h(53,"img",14),c(),a(54,"div",7),h(55,"div",12),a(56,"p"),l(57,"SEASAME SEEDS"),c(),a(58,"button",8),l(59,"ADD TO CART "),c()()()(),a(60,"div",3)(61,"div",4)(62,"div",5),h(63,"img",6),c(),a(64,"div",7)(65,"p"),l(66,"FIG SEEDS"),c(),a(67,"button",8),l(68,"ADD TO CART "),c()()()(),a(69,"div",3)(70,"div",4)(71,"div",5),h(72,"img",15),c(),a(73,"div",7)(74,"p"),l(75,"BASIL SEEDS"),c(),a(76,"button",8),l(77,"ADD TO CART "),c()()()(),a(78,"div",3)(79,"div",4)(80,"div",5),h(81,"img",16),c(),a(82,"div",7)(83,"p"),l(84,"RAJGIRA SEEDS"),c(),a(85,"button",8),l(86,"ADD TO CART "),c()()()(),a(87,"div",3)(88,"div",4)(89,"div",5),h(90,"img",17),c(),a(91,"div",7)(92,"p"),l(93,"BLACKPEPPER SEEDS"),c(),a(94,"button",8),l(95,"ADD TO CART "),c()()()(),a(96,"div",3)(97,"div",4)(98,"div",5),h(99,"img",18),c(),a(100,"div",7)(101,"p"),l(102,"SUNFLOWER SEEDS"),c(),a(103,"button",8),l(104,"ADD TO CART "),c()()()(),a(105,"div",3)(106,"div",4)(107,"div",5),h(108,"img",19),c(),a(109,"div",7)(110,"p"),l(111,"FIG SEEDS"),c(),a(112,"button",8),l(113,"ADD TO CART "),c()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto}.col-md-3[_ngcontent-%COMP%]{width:25%;box-sizing:border-box}@media (max-width: 768px){.col-md-3[_ngcontent-%COMP%]{width:50%}}@media (max-width: 480px){.col-md-3[_ngcontent-%COMP%]{width:100%}}.image-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:200px;border:1px solid #ddd;border-radius:5px}.box[_ngcontent-%COMP%]{background-color:#e2e2e2;margin-bottom:20px;padding:14px}#buttonplus[_ngcontent-%COMP%], #buttonminus[_ngcontent-%COMP%]{background-color:#181818;color:#fff;border:none;padding:5px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:2px;cursor:pointer;border-radius:3px}p[_ngcontent-%COMP%]{padding:3px -5px}"]});let e=t;return e})();var so=(()=>{let t=class t{constructor(i){this.fb=i,this.loginForm=this.fb.group({email:["",[H.required,H.email]],password:["",[H.required,H.minLength(6)]]})}ngOnInit(){}onSubmit(){console.log("Form submitted:",this.loginForm.value)}};t.\u0275fac=function(o){return new(o||t)(y(Ae))},t.\u0275cmp=C({type:t,selectors:[["app-login"]],decls:9,vars:2,consts:[[3,"formGroup","ngSubmit"],["for","email"],["type","email","id","email","formControlName","email"],["for","password"],["type","password","id","password","formControlName","password"],["type","submit",3,"disabled"]],template:function(o,r){o&1&&(a(0,"form",0),W("ngSubmit",function(){return r.onSubmit()}),a(1,"label",1),l(2,"Email:"),c(),h(3,"input",2),a(4,"label",3),l(5,"Password:"),c(),h(6,"input",4),a(7,"button",5),l(8,"Login"),c()()),o&2&&(tt("formGroup",r.loginForm),J(7),tt("disabled",r.loginForm.invalid))},dependencies:[Me,St,Ce,Ee,$t,Yt]});let e=t;return e})();var lo=(()=>{let t=class t{constructor(i){this.fb=i,this.registerForm=this.fb.group({username:["",[H.required,H.minLength(3)]],email:["",[H.required,H.email]],password:["",[H.required,H.minLength(6)]],confirmPassword:["",H.required]})}ngOnInit(){}onSubmit(){console.log("Form submitted:",this.registerForm.value)}};t.\u0275fac=function(o){return new(o||t)(y(Ae))},t.\u0275cmp=C({type:t,selectors:[["app-register"]],decls:15,vars:2,consts:[[3,"formGroup","ngSubmit"],["for","username"],["type","text","id","username","formControlName","username"],["for","email"],["type","email","id","email","formControlName","email"],["for","password"],["type","password","id","password","formControlName","password"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword"],["type","submit",3,"disabled"]],template:function(o,r){o&1&&(a(0,"form",0),W("ngSubmit",function(){return r.onSubmit()}),a(1,"label",1),l(2,"Username:"),c(),h(3,"input",2),a(4,"label",3),l(5,"Email:"),c(),h(6,"input",4),a(7,"label",5),l(8,"Password:"),c(),h(9,"input",6),a(10,"label",7),l(11,"Confirm Password:"),c(),h(12,"input",8),a(13,"button",9),l(14,"Register"),c()()),o&2&&(tt("formGroup",r.registerForm),J(13),tt("disabled",r.registerForm.invalid))},dependencies:[Me,St,Ce,Ee,$t,Yt],styles:["button[_ngcontent-%COMP%]{background-color:#8a2be2}"]});let e=t;return e})();var mo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-vegies"]],decls:92,vars:0,consts:[[1,"product"],[1,"container","text-center","mt-5"],[1,"row"],[1,"col-md-3","d-flex"],[1,"box"],[1,"product-image"],["src","/assets/vegies/salsify.jpg","alt","none"],[1,"content"],["type","button","id","buttonminus",1,"btn"],[1,"col-md-3"],["src","/assets/vegies/Romanesco.jpg","alt","none"],[1,"plus-minus-buttons"],["src","/assets/vegies/palmfruit.jpeg","alt","none"],["src","/assets/vegies/kohlrabi.jpg","alt","none"],["src","/assets/vegies/gabbage.jpeg","alt","none"],["src","/assets/vegies/chilli.jpeg","alt","none"],["src","/assets/vegies/celeric.jpeg","alt","none"],["src","/assets/vegies/capsic.jpeg","alt","none"],["src","/assets/vegies/cassava.jpg","alt","none"],["src","/assets/vegies/broadbean.jpg","alt","none"]],template:function(o,r){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),h(6,"img",6)(7,"div",7),a(8,"p"),l(9,"SALSIFY"),c(),a(10,"button",8),l(11,"ADD TO CART "),c()()()(),a(12,"div",9)(13,"div",4)(14,"div",5),h(15,"img",10),a(16,"div",7),h(17,"div",11),a(18,"p"),l(19,"RAMESCO FRUIT"),c(),a(20,"button",8),l(21,"ADD TO CART "),c()()()()(),a(22,"div",9)(23,"div",4)(24,"div",5),h(25,"img",12),c(),a(26,"div",7)(27,"p"),l(28,"PALMFRUIT"),c(),a(29,"button",8),l(30,"ADD TO CART "),c()()()(),a(31,"div",9)(32,"div",4)(33,"div",5),h(34,"img",13),c(),a(35,"div",7)(36,"button",8),l(37,"ADD TO CART "),c()()()(),a(38,"div",9)(39,"div",4)(40,"div",5),h(41,"img",14),c(),a(42,"div",7)(43,"p"),l(44,"GABBAGE"),c(),a(45,"button",8),l(46,"ADD TO CART "),c()()()(),a(47,"div",9)(48,"div",4)(49,"div",5),h(50,"img",15),c(),a(51,"div",7)(52,"p"),l(53,"CHILLI"),c(),a(54,"button",8),l(55,"ADD TO CART "),c()()()(),a(56,"div",9)(57,"div",4)(58,"div",5),h(59,"img",16),c(),a(60,"div",7)(61,"p"),l(62,"CELERIC"),c(),a(63,"button",8),l(64,"ADD TO CART "),c()()()(),a(65,"div",9)(66,"div",4)(67,"div",5),h(68,"img",17),c(),a(69,"div",7)(70,"p"),l(71,"CAPSICON"),c(),a(72,"button",8),l(73,"ADD TO CART "),c()()()(),a(74,"div",9)(75,"div",4)(76,"div",5),h(77,"img",18),c(),a(78,"div",7)(79,"p"),l(80,"CASSAVA"),c(),a(81,"button",8),l(82,"ADD TO CART "),c()()()(),a(83,"div",9)(84,"div",4)(85,"div",5),h(86,"img",19),c(),a(87,"div",7)(88,"p"),l(89,"DRAGON FRUIT"),c(),a(90,"button",8),l(91,"ADD TO CART "),c()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto}.col-md-3[_ngcontent-%COMP%]{width:25%;box-sizing:border-box}@media (max-width: 768px){.col-md-3[_ngcontent-%COMP%]{width:50%}}@media (max-width: 480px){.col-md-3[_ngcontent-%COMP%]{width:100%}}.image-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:200px;border:1px solid #ddd;border-radius:5px}.box[_ngcontent-%COMP%]{background-color:#e2e2e2;margin-bottom:20px;padding:14px}#buttonplus[_ngcontent-%COMP%], #buttonminus[_ngcontent-%COMP%]{background-color:#181818;color:#fff;border:none;padding:5px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:2px;cursor:pointer;border-radius:3px}p[_ngcontent-%COMP%]{padding:3px -5px}"]});let e=t;return e})();var ho=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-fruits"]],decls:115,vars:0,consts:[[1,"product"],[1,"container","text-center","mt-5"],[1,"row"],[1,"col-md-3","d-flex"],[1,"box"],[1,"product-image"],["src","/assets/fruits/star.jpg","alt","none"],["type","button","id","buttonminus",1,"btn"],[1,"col-md-3"],["src","/assets/fruits/rambut.jpg","alt","none"],[1,"content"],[1,"plus-minus-buttons"],["src","/assets/fruits/pomelo.jpg","alt","none"],["src","/assets/fruits/passion.jpg","alt","none"],["src","/assets/fruits/mangosteen.jpg","alt","none"],["src","/assets/fruits/lychee.webp","alt","none"],["src","/assets/fruits/kumquat.jpeg","alt","none"],["src","/assets/fruits/kiwano.jpg","alt","none"],["src","/assets/fruits/durian.jpg","alt","none"],["src","/assets/fruits/dragon.jpeg","alt","none"],["src","/assets/fruits/cherimoya.jpeg","alt","none"],["src","/assets/fruits/buddhas-hand.jpg","alt","none"]],template:function(o,r){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),h(6,"img",6),a(7,"p"),l(8,"STAR FRUITS"),c(),a(9,"button",7),l(10,"ADD TO CART "),c()()()(),a(11,"div",8)(12,"div",4)(13,"div",5),h(14,"img",9),a(15,"div",10),h(16,"div",11),a(17,"p"),l(18,"RAMBUTAN FRUIT"),c(),a(19,"button",7),l(20,"ADD TO CART "),c()()()()(),a(21,"div",8)(22,"div",4)(23,"div",5),h(24,"img",12),c(),a(25,"div",10),h(26,"div",11),a(27,"p"),l(28,"POMELO FRUIT"),c(),a(29,"button",7),l(30,"ADD TO CART "),c()()()(),a(31,"div",8)(32,"div",4)(33,"div",5),h(34,"img",13),c(),a(35,"div",10),h(36,"div",11),a(37,"p"),l(38,"PASSION FRUIT"),c(),a(39,"button",7),l(40,"ADD TO CART "),c()()()(),a(41,"div",8)(42,"div",4)(43,"div",5),h(44,"img",14),c(),a(45,"div",10),h(46,"div",11),a(47,"p"),l(48,"MANGOSTEEN FRUIT"),c(),a(49,"button",7),l(50,"ADD TO CART "),c()()()(),a(51,"div",8)(52,"div",4)(53,"div",5),h(54,"img",15),c(),a(55,"div",10),h(56,"div",11),a(57,"p"),l(58,"LICHEE FRUIT"),c(),a(59,"button",7),l(60,"ADD TO CART "),c()()()(),a(61,"div",8)(62,"div",4)(63,"div",5),h(64,"img",16),c(),a(65,"div",10)(66,"p"),l(67,"KUMQUAT"),c(),a(68,"button",7),l(69,"ADD TO CART "),c()()()(),a(70,"div",8)(71,"div",4)(72,"div",5),h(73,"img",17),c(),a(74,"div",10)(75,"p"),l(76,"KIWANO FRUIT"),c(),a(77,"button",7),l(78,"ADD TO CART "),c()()()(),a(79,"div",8)(80,"div",4)(81,"div",5),h(82,"img",18),c(),a(83,"div",10)(84,"p"),l(85,"DRUIAN FRUIT"),c(),a(86,"button",7),l(87,"ADD TO CART "),c()()()(),a(88,"div",8)(89,"div",4)(90,"div",5),h(91,"img",19),c(),a(92,"div",10)(93,"p"),l(94,"DRAGON FRUIT"),c(),a(95,"button",7),l(96,"ADD TO CART "),c()()()(),a(97,"div",8)(98,"div",4)(99,"div",5),h(100,"img",20),c(),a(101,"div",10)(102,"p"),l(103,"CGERIMOYA FRUIT"),c(),a(104,"button",7),l(105,"ADD TO CART "),c()()()(),a(106,"div",8)(107,"div",4)(108,"div",5),h(109,"img",21),c(),a(110,"div",10)(111,"p"),l(112,"BUDDHAHAND FRUIT"),c(),a(113,"button",7),l(114,"ADD TO CART "),c()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto}.col-md-3[_ngcontent-%COMP%]{width:25%;box-sizing:border-box}@media (max-width: 768px){.col-md-3[_ngcontent-%COMP%]{width:50%}}@media (max-width: 480px){.col-md-3[_ngcontent-%COMP%]{width:100%}}.image-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:200px;border:1px solid #ddd;border-radius:5px}.box[_ngcontent-%COMP%]{background-color:#e2e2e2;margin-bottom:20px;padding:14px}#buttonplus[_ngcontent-%COMP%], #buttonminus[_ngcontent-%COMP%]{background-color:#181818;color:#fff;border:none;padding:5px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:2px;cursor:pointer;border-radius:3px}p[_ngcontent-%COMP%]{padding:3px -5px}"]});let e=t;return e})();var uo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-home"]],decls:34,vars:0,consts:[[1,"container"],["id","slide1",1,"slide"],[1,"title"],["id","slide2",1,"slide"],["id","slide3",1,"slide"],["id","credits"],[1,"content"],[2,"color","aliceblue"],[1,"connections"],["href","https://github.com/your-github-username","target","_blank"],[1,"fa","fa-github"]],template:function(o,r){o&1&&(a(0,"div",0)(1,"div"),h(2,"app-sidebar"),c(),h(3,"br")(4,"br"),c(),a(5,"div",1)(6,"div",2)(7,"h1"),l(8,"SEEDS"),c(),a(9,"p"),l(10,"Explore our extensive catalog, featuring heirloom varieties, rare species, and time-tested favorites. With the convenience of online shopping, you can bring the magic of cultivation right to your doorstep. Join us in sowing the seeds of a sustainable and green future. Let your gardening aspirations take root and flourish! "),c()()(),a(11,"div",3)(12,"div",2)(13,"h1"),l(14,"EDIBLES"),c(),a(15,"p"),l(16,"Welcome to our online fruit shopping platform, where the vibrant colors and fresh aromas of nature come together to offer you a delightful shopping experience. Navigating through our virtual aisles, you'll find a cornucopia of choices, from succulent berries to exotic tropical fruits, all sourced from the finest orchards around the world."),c()()(),a(17,"div",4)(18,"div",2)(19,"h1"),l(20,"PRODUCE AND STAPLES"),c(),a(21,"p"),l(22,"Delight your taste buds and elevate your culinary experiences with our premium selection of fresh, vibrant vegetables. At our online vegetable market, we bring the farm to your table, ensuring that every vegetable is a testament to quality and flavor. From crisp greens to robust root vegetables, our collection is a cornucopia of nature's bounty, ready to inspire your next gastronomic masterpiece."),c()()(),a(23,"footer")(24,"div",5)(25,"div",6)(26,"h2",7),l(27,"CREDITS"),c()(),a(28,"div",8)(29,"p"),l(30,"\xA9.........."),c(),a(31,"a",9),h(32,"i",10),l(33," View on Github "),c()()()())},dependencies:[Se],styles:['@import"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik+Bubbles&family=Rubik+Doodle+Shadow&family=Rubik+Doodle+Triangles&display=swap";@import"https://fonts.googleapis.com/css2?family=Rubik+Bubbles&family=Rubik+Doodle+Shadow&family=Rubik+Doodle+Triangles&display=swap";*[_ngcontent-%COMP%]{font-family:Bebas Neue}.slide[_ngcontent-%COMP%]{position:relative;padding:25vh 10%;min-height:100vh;width:100vw;box-sizing:border-box;box-shadow:0 -1px 10px #000000b3;transform-style:inherit}img[_ngcontent-%COMP%]{position:absolute;top:50%;left:35%;width:320px;height:240px;transform:translateZ(.25px) scale(.75) translate(-94%) translateY(-100%) rotate(2deg);padding:10px;border-radius:5px;background:rgba(240,230,220,.7);box-shadow:0 0 8px #000000b3}h1[_ngcontent-%COMP%]{font-family:Rubik Doodle Shadow;letter-spacing:.5rem;font-size:250%}p[_ngcontent-%COMP%]{letter-spacing:.2rem;font-size:140%;line-height:150%;color:#333}.title[_ngcontent-%COMP%]{width:70%;padding:5%;border-radius:5px;background:#f6c99db3;box-shadow:0 0 8px #000000b3}#credits[_ngcontent-%COMP%]{background:#222}#slide1[_ngcontent-%COMP%]{background-image:url(/assets/seeds/homepageBG.jpg);width:100%;height:400px;background-size:cover;background-position:center}#slide2[_ngcontent-%COMP%]{background-image:url(/assets/fruits/bg.jpg);width:100%;height:400px;background-size:cover;background-position:center}#slide3[_ngcontent-%COMP%]{background-image:url(/assets/vegies/bg.jpg);width:100%;height:400px;background-size:cover;background-position:center}footer[_ngcontent-%COMP%]{overflow:hidden;color:#f2f2f2;background-color:#eee;padding:10px;text-align:center;font-size:14px}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f2f2f2;margin:0}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f2f2f2;text-decoration:none;margin-left:10px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f2f2f2;font-size:16px;vertical-align:middle}']});let e=t;return e})();var fo=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-dairy-products"]],decls:83,vars:0,consts:[[1,"product"],[1,"container","text-center","mt-5"],[1,"row"],[1,"col-md-3","d-flex"],[1,"box"],[1,"product-image"],["src","/assets/dairy-prod/milk.jpeg","alt","none"],["type","button","id","buttonminus",1,"btn"],["src","/assets/dairy-prod/cheese.jpg","alt","none"],["src","/assets/dairy-prod/clotted-cream.jpeg ","alt","none"],["src","/assets/dairy-prod/casien.jpeg","alt","none"],["src","/assets/dairy-prod/cottage-cream.jpeg","alt","none"],["src","/assets/dairy-prod/ghee.jpeg","alt","none"],["src","/assets/dairy-prod/cream-cheese.jpeg","alt","none"],["src","/assets/dairy-prod/butter.jpeg","alt","none"],["src","/assets/dairy-prod/whey-protien.jpeg","alt","none"],["src","/assets/dairy-prod/yogurt.jpeg","alt","none"]],template:function(o,r){o&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),h(6,"img",6),a(7,"p"),l(8,"BUTTER"),c(),a(9,"button",7),l(10,"ADD TO CART"),c()()()(),a(11,"div",3)(12,"div",4)(13,"div",5),h(14,"img",8),a(15,"p"),l(16,"Cheese"),c(),a(17,"button",7),l(18,"ADD TO CART"),c()()()(),a(19,"div",3)(20,"div",4)(21,"div",5),h(22,"img",9),a(23,"p"),l(24,"CLOTTED CREAM"),c(),a(25,"button",7),l(26,"ADD TO CART"),c()()()(),a(27,"div",3)(28,"div",4)(29,"div",5),h(30,"img",10),a(31,"p"),l(32,"Casien"),c(),a(33,"button",7),l(34,"ADD TO CART"),c()()()(),a(35,"div",3)(36,"div",4)(37,"div",5),h(38,"img",11),a(39,"p"),l(40,"COTTAGE CREAM"),c(),a(41,"button",7),l(42,"ADD TO CART"),c()()()(),a(43,"div",3)(44,"div",4)(45,"div",5),h(46,"img",12),a(47,"p"),l(48,"GHEE"),c(),a(49,"button",7),l(50,"ADD TO CART"),c()()()(),a(51,"div",3)(52,"div",4)(53,"div",5),h(54,"img",13),a(55,"p"),l(56,"CREAM CHEESE"),c(),a(57,"button",7),l(58,"ADD TO CART"),c()()()(),a(59,"div",3)(60,"div",4)(61,"div",5),h(62,"img",14),a(63,"p"),l(64,"BUTTER"),c(),a(65,"button",7),l(66,"ADD TO CART"),c()()()(),a(67,"div",3)(68,"div",4)(69,"div",5),h(70,"img",15),a(71,"p"),l(72,"WHEY PROTIEN"),c(),a(73,"button",7),l(74,"ADD TO CART"),c()()()(),a(75,"div",3)(76,"div",4)(77,"div",5),h(78,"img",16),a(79,"p"),l(80,"YOGURT"),c(),a(81,"button",7),l(82,"ADD TO CART"),c()()()()()()())},styles:[".container[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto}.col-md-3[_ngcontent-%COMP%]{width:25%;box-sizing:border-box}@media (max-width: 768px){.col-md-3[_ngcontent-%COMP%]{width:50%}}@media (max-width: 480px){.col-md-3[_ngcontent-%COMP%]{width:100%}}.image-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:200px;border:1px solid #ddd;border-radius:5px}.box[_ngcontent-%COMP%]{background-color:#e2e2e2;margin-bottom:20px;padding:14px}#buttonplus[_ngcontent-%COMP%], #buttonminus[_ngcontent-%COMP%]{background-color:#181818;color:#fff;border:none;padding:5px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;margin:2px;cursor:pointer;border-radius:3px}p[_ngcontent-%COMP%]{padding:3px -5px}"]});let e=t;return e})();var Ia=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"events",component:oo},{path:"special",component:co},{path:"login",component:so},{path:"register",component:lo},{path:"cart",component:ro},{path:"fruits",component:ho},{path:"vegies",component:mo},{path:"home",component:uo},{path:"dairy",component:fo}],po=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Je.forRoot(Ia),Je]});let e=t;return e})();var Fe=(()=>{let t=class t{constructor(){this.title="notes-portal"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=C({type:t,selectors:[["app-root"]],decls:81,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container"],["version","1.1","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 90 90",0,"xml","space","preserve","width","60","height","60",2,"enable-background","new 0 0 371 371"],["id","XMLID_1271_"],["id","XMLID_1272_"],["id","XMLID_1273_"],["id","XMLID_1274_"],["id","XMLID_1275_","cx","120.642","cy","267.495","r","53.258","d","M46.873 72.101A14.355 14.355 0 0 1 32.518 86.456A14.355 14.355 0 0 1 18.163 72.101A14.355 14.355 0 0 1 46.873 72.101z",2,"fill","0,0,0"],["id","XMLID_1276_","d","M32.518 89.152c-9.402 0 -17.051 -7.649 -17.051 -17.051s7.649 -17.051 17.051 -17.051 17.051 7.649 17.051 17.051 -7.649 17.051 -17.051 17.051zm0 -28.711c-6.429 0 -11.66 5.23 -11.66 11.66s5.23 11.66 11.66 11.66 11.66 -5.23 11.66 -11.66 -5.231 -11.66 -11.66 -11.66z",2,"fill","#FFF"],["id","XMLID_1279_"],["id","XMLID_1280_","d","M28.498 72.101h-5.391c0 -5.189 4.222 -9.411 9.411 -9.411v5.391c-2.217 0 -4.02 1.804 -4.02 4.02z",2,"fill","#FFF"],["id","XMLID_1281_"],["id","XMLID_1282_","cx","250.358","cy","267.495","r","53.258","d","M81.837 72.101A14.355 14.355 0 0 1 67.482 86.456A14.355 14.355 0 0 1 53.127 72.101A14.355 14.355 0 0 1 81.837 72.101z",2,"fill","0,0,0"],["id","XMLID_1283_","d","M67.482 89.152c-9.402 0 -17.051 -7.649 -17.051 -17.051s7.649 -17.051 17.051 -17.051 17.051 7.649 17.051 17.051 -7.649 17.051 -17.051 17.051zm0 -28.711c-6.429 0 -11.66 5.23 -11.66 11.66s5.23 11.66 11.66 11.66 11.66 -5.23 11.66 -11.66 -5.23 -11.66 -11.66 -11.66z",2,"fill","#FFF"],["id","XMLID_1286_"],["id","XMLID_1287_","d","M63.462 72.101h-5.391c0 -5.189 4.222 -9.411 9.411 -9.411v5.391c-2.217 0 -4.02 1.804 -4.02 4.02z",2,"fill","#FFF"],["id","XMLID_1288_"],["id","XMLID_1289_","x","171.014","y","257.495","width","28.972","height","20","d","M46.095 69.406H53.905V74.796H46.095V69.406z",2,"fill","#FFF"],["id","XMLID_1290_"],["id","XMLID_1291_","d","M85.604 53.975h-5.25l-0.806 -0.932c-3.386 -3.915 -8.29 -6.161 -13.453 -6.161s-10.067 2.246 -13.453 6.161l-0.806 0.932h-3.669l-0.806 -0.932c-3.386 -3.915 -8.29 -6.161 -13.453 -6.161 -2.92 0 -5.701 0.685 -8.265 2.036l-2.513 -4.769c3.3 -1.739 7.027 -2.658 10.778 -2.658a23.157 23.157 0 0 1 16.094 6.508 23.157 23.157 0 0 1 16.094 -6.508 23.148 23.148 0 0 1 14.119 4.803V25.932H19.787v25.347h-5.391V20.542h71.207v33.433z",2,"fill","#FFF"],["id","XMLID_1292_"],["id","XMLID_37_","d","M95.041 23.237H4.959A2.263 2.263 0 0 1 2.695 20.974V15.807a2.263 2.263 0 0 1 2.263 -2.263h90.082a2.263 2.263 0 0 1 2.263 2.263v5.166a2.263 2.263 0 0 1 -2.263 2.263z",2,"fill","0,0,0"],["id","XMLID_1293_","d","M95.041 25.932H4.959C2.225 25.932 0 23.708 0 20.974V15.807C0 13.073 2.225 10.848 4.959 10.848h90.082C97.775 10.848 100 13.073 100 15.807v5.166c0 2.734 -2.225 4.959 -4.959 4.959zM5.391 20.542h89.218V16.239H5.391v4.302z",2,"fill","#FFF"],["id","XMLID_1296_"],["id","XMLID_1297_","x","335.5","y","90.247","width","20","height","164.791","d","M90.431 24.325H95.822V68.743H90.431V24.325z",2,"fill","#FFF"],["href","#",1,"navbar-brand","mx-auto"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent ","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation","fdprocessedid","h70bjb",1,"navbar-toggler","collapsed"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-center"],["id","navbarnav",1,"navbar-nav","mr-auto"],[1,"nav-item"],["routerLink","/home","routerLinkActive","active",1,"nav-link"],["routerLink","/special","routerLinkActive","active",1,"nav-link"],["routerLink","/fruits","routerLinkActive","active",1,"nav-link"],["routerLink","/vegies","routerLinkActive","active",1,"nav-link"],[1,"navbar-nav","d-flex","justify-content-end"],["routerLink","/login","routerLinkActive","active",1,"nav-link"],["routerLink","/register","routerLinkActive","active",1,"nav-link"],[1,"col-md-12","text-right"],[1,"cart_icon","d-flex"],["routerLink","/cart",1,"fa-solid","fa-cart-shopping"],[1,"toggle-icon"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasExample","aria-controls","offcanvasExample",1,"btn"],["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasExampleLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close"],[1,"offcanvas-body"],["routerLink","/event","routerLinkActive","active",1,"nav-link"],["routerLink","/dairy","routerLinkActive","active",1,"nav-link"]],template:function(o,r){o&1&&(a(0,"nav",0)(1,"div",1),ue(),a(2,"svg",2)(3,"g",3)(4,"g",4)(5,"g",5)(6,"g",6),h(7,"path",7)(8,"path",8),c(),a(9,"g",9),h(10,"path",10),c(),a(11,"g",11),h(12,"path",12)(13,"path",13),c(),a(14,"g",14),h(15,"path",15),c()(),a(16,"g",16),h(17,"path",17),c()(),a(18,"g",18),h(19,"path",19),c(),a(20,"g",20),h(21,"path",21)(22,"path",22),c(),a(23,"g",23),h(24,"path",24),c()()(),fe(),a(25,"a",25),l(26,"SEWID"),c(),a(27,"button",26),h(28,"span",27),c(),a(29,"div",28)(30,"ul",29)(31,"li",30)(32,"a",31),l(33,"Home"),c()(),a(34,"li",30)(35,"a",32),l(36,"Seeds"),c()(),a(37,"li",30)(38,"a",33),l(39,"Fruit"),c()(),a(40,"li",30)(41,"a",34),l(42,"Vegies"),c()()(),a(43,"ul",35)(44,"a",36),l(45,"Login"),c(),a(46,"a",37),l(47,"Register"),c()()(),a(48,"header")(49,"div",1)(50,"div",38)(51,"div",39)(52,"i",40),h(53,"p"),c()()()()()()(),a(54,"div",1)(55,"div",41)(56,"button",42),l(57," see services "),c()(),a(58,"div",43)(59,"div",44),h(60,"h5",45)(61,"button",46),c(),a(62,"div",47)(63,"div")(64,"ul")(65,"li")(66,"a",48),l(67,"SEEDS"),c()(),a(68,"li")(69,"a",32),l(70,"PLANTS SAPLETS"),c()(),a(71,"li")(72,"a",33),l(73,"FRUITS"),c()(),a(74,"li")(75,"a",34),l(76,"VEGETABLES"),c()(),a(77,"li")(78,"a",49),l(79,"DAIRY PRODS"),c()()()()()()(),h(80,"router-outlet"))},dependencies:[xn,yn,wn],styles:['@import"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";@import"https://fonts.googleapis.com/css?family=Titillium+Web:300";.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa[_ngcontent-%COMP%]{position:relative;display:table-cell;width:60px;height:36px;text-align:center;vertical-align:middle;font-size:20px}.main-menu[_ngcontent-%COMP%]:hover, nav.main-menu.expanded[_ngcontent-%COMP%]{width:250px;overflow:visible}.main-menu[_ngcontent-%COMP%]{background:#212121;border-right:1px solid #e5e5e5;display:flex;position:fixed;top:0;bottom:0;height:100%;left:0;width:60px;overflow:hidden;-webkit-transition:width .05s linear;transition:width .05s linear;--webkit-transform:translateZ(0) scale(1,1);z-index:1000}.main-menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{margin:7px 0}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:block;width:250px}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{position:relative;display:table;border-collapse:collapse;border-spacing:0;color:#999;font-family:arial;font-size:14px;text-decoration:none;--webkit-transform:translateZ(0) scale(1,1);--webkit-transition:all .1s linear;transition:all .1s linear}.main-menu[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{position:relative;display:table-cell;width:60px;height:36px;text-align:center;vertical-align:middle;font-size:18px}.main-menu[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]{position:relative;display:table-cell;vertical-align:middle;width:190px;font-family:Titillium Web,sans-serif}.main-menu[_ngcontent-%COMP%] > ul.logout[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0}.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%]{overflow-y:hidden}.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%]:hover{overflow-y:auto;overflow:visible}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{text-decoration:none}nav[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{outline:0;margin:0;padding:0}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], nav.main-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .no-touch[_ngcontent-%COMP%]   .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;background-color:#000}.area[_ngcontent-%COMP%]{float:left;background:#e2e2e2;width:100%;height:100%}@font-face{font-family:Titillium Web;font-style:normal;font-weight:300;src:local("Titillium WebLight"),local("TitilliumWeb-Light"),url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format("woff")}header[_ngcontent-%COMP%]{background-color:#292626;padding:0;right:0}.cart_icon[_ngcontent-%COMP%]{position:static}.cart_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{size:15px;font-size:20px;fill:#fff;cursor:pointer}.cart_icon[_ngcontent-%COMP%]:focus{outline:none;border:none}.cart_value[_ngcontent-%COMP%]{position:absolute;top:-16px;right:-35px;background-color:#f0f8ff;color:#000;border:1px solid #cac;border-radius:50%;padding:4px 10px;font-weight:800;font-size:16px}.toggler-icon[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#8a2be2;background-color:#302e2e;display:flex;justify-content:center;align-items:center;position:absolute;top:15%;left:50%;transform:translate(-50%,-50%)}.offcanvas-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.offcanvas-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 10px;padding:15px 20px;border:1px solid #ddd;border-radius:5px;cursor:pointer;background-color:#fff;font-weight:700}.offcanvas-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#eee}']});let e=t;return e})();var go=(()=>{let t=class t{constructor(i){this.http=i,this._registerUrl="http://localhost:4200/api/register"}registerUser(i){return this.http.post(this._registerUrl,i)}};t.\u0275fac=function(o){return new(o||t)(F(fn))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var di;try{di=typeof Intl<"u"&&Intl.v8BreakIterator}catch{di=!1}var Zt=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?un(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||di)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(o){return new(o||t)(F(ln))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var qt;function Ma(){if(qt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>qt=!0}))}finally{qt=qt||!1}return qt}function ci(e){return Ma()?e:!!e.capture}function bo(e){return e.composedPath?e.composedPath()[0]:e.target}function _o(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function si(e){return Array.isArray(e)?e:[e]}function li(e){return e instanceof T?e.nativeElement:e}var Aa=(()=>{let t=class t{create(i){return typeof MutationObserver>"u"?null:new MutationObserver(i)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ft=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({providers:[Aa]});let e=t;return e})();var xo=new Set,xt,Sa=(()=>{let t=class t{constructor(i,o){this._platform=i,this._nonce=o,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oa}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&Fa(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(o){return new(o||t)(F(Zt),F(mn,8))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Fa(e,t){if(!xo.has(e))try{xt||(xt=document.createElement("style"),t&&(xt.nonce=t),xt.setAttribute("type","text/css"),document.head.appendChild(xt)),xt.sheet&&(xt.sheet.insertRule(`@media ${e} {body{ }}`,0),xo.add(e))}catch(n){console.error(n)}}function Oa(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var wo=(()=>{let t=class t{constructor(i,o){this._mediaMatcher=i,this._zone=o,this._queries=new Map,this._destroySubject=new Ki}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return yo(si(i)).some(r=>this._registerQuery(r).mql.matches)}observe(i){let r=yo(si(i)).map(s=>this._registerQuery(s).observable),d=en(r);return d=nn(d.pipe(an(1)),d.pipe(dn(1),rn(0))),d.pipe(Vt(s=>{let m={matches:!1,breakpoints:{}};return s.forEach(({matches:f,query:u})=>{m.matches=m.matches||f,m.breakpoints[u]=f}),m}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let o=this._mediaMatcher.matchMedia(i),d={observable:new Xi(s=>{let m=f=>this._zone.run(()=>s.next(f));return o.addListener(m),()=>{o.removeListener(m)}}).pipe(cn(o),Vt(({matches:s})=>({query:i,matches:s})),sn(this._destroySubject)),mql:o};return this._queries.set(i,d),d}};t.\u0275fac=function(o){return new(o||t)(F(Sa),F(N))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function yo(e){return e.map(t=>t.split(",")).reduce((t,n)=>t.concat(n)).map(t=>t.trim())}function Eo(e){return e.buttons===0||e.detail===0}function Do(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var ko="cdk-high-contrast-black-on-white",Co="cdk-high-contrast-white-on-black",mi="cdk-high-contrast-active",hi=(()=>{let t=class t{constructor(i,o){this._platform=i,this._document=o,this._breakpointSubscription=he(wo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let o=this._document.defaultView||window,r=o&&o.getComputedStyle?o.getComputedStyle(i):null,d=(r&&r.backgroundColor||"").replace(/ /g,"");switch(i.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(mi,ko,Co),this._hasCheckedHighContrastMode=!0;let o=this.getHighContrastMode();o===1?i.add(mi,ko):o===2&&i.add(mi,Co)}}};t.\u0275fac=function(o){return new(o||t)(F(Zt),F(Ht))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Io=(()=>{let t=class t{constructor(i){i._applyBodyHighContrastModeCssClasses()}};t.\u0275fac=function(o){return new(o||t)(F(hi))},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Ft]});let e=t;return e})();var ui=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})();function Ra(){return!0}var Pa=new K("mat-sanity-checks",{providedIn:"root",factory:Ra}),E=(()=>{let t=class t{constructor(i,o,r){this._sanityChecks=o,this._document=r,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return _o()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};t.\u0275fac=function(o){return new(o||t)(F(hi),F(Pa,8),F(Ht))},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[ui,ui]});let e=t;return e})();var fi=class{constructor(t,n,i,o=!1){this._renderer=t,this.element=n,this.config=i,this._animationForciblyDisabledThroughCss=o,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}},Mo=ci({passive:!0,capture:!0}),pi=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let n=bo(t);n&&this._events.get(t.type)?.forEach((i,o)=>{(o===n||o.contains(n))&&i.forEach(r=>r.handleEvent(t))})}}addHandler(t,n,i,o){let r=this._events.get(n);if(r){let d=r.get(i);d?d.add(o):r.set(i,new Set([o]))}else this._events.set(n,new Map([[i,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(n,this._delegateEventHandler,Mo)})}removeHandler(t,n,i){let o=this._events.get(t);if(!o)return;let r=o.get(n);r&&(r.delete(i),r.size===0&&o.delete(n),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Mo)))}},Ao={enterDuration:225,exitDuration:150},La=800,So=ci({passive:!0,capture:!0}),Fo=["mousedown","touchstart"],Oo=["mouseup","mouseleave","touchend","touchcancel"],Qt=class Qt{constructor(t,n,i,o){this._target=t,this._ngZone=n,this._platform=o,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=li(i))}fadeInRipple(t,n,i={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=z(z({},Ao),i.animation);i.centered&&(t=o.left+o.width/2,n=o.top+o.height/2);let d=i.radius||za(t,n,o),s=t-o.left,m=n-o.top,f=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-d}px`,u.style.top=`${m-d}px`,u.style.height=`${d*2}px`,u.style.width=`${d*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),x=g.transitionProperty,k=g.transitionDuration,R=x==="none"||k==="0s"||k==="0s, 0s"||o.width===0&&o.height===0,O=new fi(this,u,i,R);u.style.transform="scale3d(1, 1, 1)",O.state=0,i.persistent||(this._mostRecentTransientRipple=O);let U=null;return!R&&(f||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let G=()=>this._finishRippleTransition(O),P=()=>this._destroyRipple(O);u.addEventListener("transitionend",G),u.addEventListener("transitioncancel",P),U={onTransitionEnd:G,onTransitionCancel:P}}),this._activeRipples.set(O,U),(R||!f)&&this._finishRippleTransition(O),O}fadeOutRipple(t){if(t.state===2||t.state===3)return;let n=t.element,i=z(z({},Ao),t.config.animation);n.style.transitionDuration=`${i.exitDuration}ms`,n.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let n=li(t);!this._platform.isBrowser||!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,Fo.forEach(i=>{Qt._eventManager.addHandler(this._ngZone,i,n,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Oo.forEach(n=>{this._triggerElement.addEventListener(n,this,So)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===0?this._startFadeOutTransition(t):t.state===2&&this._destroyRipple(t)}_startFadeOutTransition(t){let n=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=1,!i&&(!n||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let n=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,n!==null&&(t.element.removeEventListener("transitionend",n.onTransitionEnd),t.element.removeEventListener("transitioncancel",n.onTransitionCancel)),t.element.remove()}_onMousedown(t){let n=Eo(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+La;!this._target.rippleDisabled&&!n&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Do(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let n=t.changedTouches;if(n)for(let i=0;i<n.length;i++)this.fadeInRipple(n[i].clientX,n[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let n=t.state===1||t.config.terminateOnPointerUp&&t.state===0;!t.config.persistent&&n&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Fo.forEach(n=>Qt._eventManager.removeHandler(n,t,this)),this._pointerUpEventsRegistered&&Oo.forEach(n=>t.removeEventListener(n,this,So)))}};Qt._eventManager=new pi;var gi=Qt;function za(e,t,n){let i=Math.max(Math.abs(e-n.left),Math.abs(e-n.right)),o=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(i*i+o*o)}var Rt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,E]});let e=t;return e})();var To=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E]});let e=t;return e})();var Ro=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,E]});let e=t;return e})();var yi=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Io,E,E]});let e=t;return e})();var wi=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})();var Po=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,wi,wi,E]});let e=t;return e})();var Lo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,E]});let e=t;return e})();var jo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[Ft,pe,E,Rt,To,Lo]});let e=t;return e})();var No=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})();var Kt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,pe,Ft,E]});let e=t;return e})();var Vo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,Kt,Kt,No,E]});let e=t;return e})();var Bo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,Rt,E]});let e=t;return e})();var Ho=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})(),Uo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({imports:[E,Rt,Ho,E,Ho]});let e=t;return e})();function Wo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wo(Object(n),!0).forEach(function(i){L(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wo(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function We(e){"@babel/helpers - typeof";return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},We(e)}function Ua(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Go(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Wa(e,t,n){return t&&Go(e.prototype,t),n&&Go(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e,t){return $a(e)||qa(e,t)||gr(e,t)||Qa()}function de(e){return Ga(e)||Ya(e)||gr(e)||Za()}function Ga(e){if(Array.isArray(e))return Ii(e)}function $a(e){if(Array.isArray(e))return e}function Ya(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qa(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],o=!0,r=!1,d,s;try{for(n=n.call(e);!(o=(d=n.next()).done)&&(i.push(d.value),!(t&&i.length===t));o=!0);}catch(m){r=!0,s=m}finally{try{!o&&n.return!=null&&n.return()}finally{if(r)throw s}}return i}}function gr(e,t){if(e){if(typeof e=="string")return Ii(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ii(e,t)}}function Ii(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Za(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $o=function(){},Ni={},br={},_r=null,vr={mark:$o,measure:$o};try{typeof window<"u"&&(Ni=window),typeof document<"u"&&(br=document),typeof MutationObserver<"u"&&(_r=MutationObserver),typeof performance<"u"&&(vr=performance)}catch{}var Xa=Ni.navigator||{},Yo=Xa.userAgent,qo=Yo===void 0?"":Yo,ut=Ni,I=br,Zo=_r,Te=vr,um=!!ut.document,at=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",xr=~qo.indexOf("MSIE")||~qo.indexOf("Trident/"),Re,Pe,Le,ze,je,nt="___FONT_AWESOME___",Mi=16,yr="fa",wr="svg-inline--fa",kt="data-fa-i2svg",Ai="data-fa-pseudo-element",Ka="data-fa-pseudo-element-pending",Vi="data-prefix",Bi="data-icon",Qo="fontawesome-i2svg",Ja="async",td=["HTML","HEAD","STYLE","SCRIPT"],kr=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),D="classic",A="sharp",Hi=[D,A];function ce(e){return new Proxy(e,{get:function(n,i){return i in n?n[i]:n[D]}})}var ie=ce((Re={},L(Re,D,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),L(Re,A,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Re)),ne=ce((Pe={},L(Pe,D,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(Pe,A,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Pe)),oe=ce((Le={},L(Le,D,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(Le,A,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Le)),ed=ce((ze={},L(ze,D,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(ze,A,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ze)),id=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cr="fa-layers-text",nd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,od=ce((je={},L(je,D,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(je,A,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),je)),Er=[1,2,3,4,5,6,7,8,9,10],rd=Er.concat([11,12,13,14,15,16,17,18,19,20]),ad=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},re=new Set;Object.keys(ne[D]).map(re.add.bind(re));Object.keys(ne[A]).map(re.add.bind(re));var dd=[].concat(Hi,de(re),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(Er.map(function(e){return"".concat(e,"x")})).concat(rd.map(function(e){return"w-".concat(e)})),te=ut.FontAwesomeConfig||{};function cd(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function sd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}I&&typeof I.querySelector=="function"&&(Xo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Xo.forEach(function(e){var t=ji(e,2),n=t[0],i=t[1],o=sd(cd(n));o!=null&&(te[i]=o)}));var Xo,Dr={styleDefault:"solid",familyDefault:"classic",cssPrefix:yr,replacementClass:wr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var jt=p(p({},Dr),te);jt.autoReplaceSvg||(jt.observeMutations=!1);var b={};Object.keys(Dr).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){jt[e]=n,ee.forEach(function(i){return i(b)})},get:function(){return jt[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){jt.cssPrefix=t,ee.forEach(function(n){return n(b)})},get:function(){return jt.cssPrefix}});ut.FontAwesomeConfig=b;var ee=[];function ld(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var ht=Mi,it={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function md(e){if(!(!e||!at)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=I.head.childNodes,i=null,o=n.length-1;o>-1;o--){var r=n[o],d=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(d)>-1&&(i=r)}return I.head.insertBefore(t,i),e}}var hd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ae(){for(var e=12,t="";e-- >0;)t+=hd[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ui(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ir(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ud(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ir(e[n]),'" ')},"").trim()}function Ye(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Wi(e){return e.size!==it.size||e.x!==it.x||e.y!==it.y||e.rotate!==it.rotate||e.flipX||e.flipY}function fd(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),d="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),m={transform:"".concat(r," ").concat(d," ").concat(s)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:m,path:f}}function pd(e){var t=e.transform,n=e.width,i=n===void 0?Mi:n,o=e.height,r=o===void 0?Mi:o,d=e.startCentered,s=d===void 0?!1:d,m="";return s&&xr?m+="translate(".concat(t.x/ht-i/2,"em, ").concat(t.y/ht-r/2,"em) "):s?m+="translate(calc(-50% + ".concat(t.x/ht,"em), calc(-50% + ").concat(t.y/ht,"em)) "):m+="translate(".concat(t.x/ht,"em, ").concat(t.y/ht,"em) "),m+="scale(".concat(t.size/ht*(t.flipX?-1:1),", ").concat(t.size/ht*(t.flipY?-1:1),") "),m+="rotate(".concat(t.rotate,"deg) "),m}var gd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mr(){var e=yr,t=wr,n=b.cssPrefix,i=b.replacementClass,o=gd;if(n!==e||i!==t){var r=new RegExp("\\.".concat(e,"\\-"),"g"),d=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(r,".".concat(n,"-")).replace(d,"--".concat(n,"-")).replace(s,".".concat(i))}return o}var Ko=!1;function ki(){b.autoAddCss&&!Ko&&(md(Mr()),Ko=!0)}var bd={mixout:function(){return{dom:{css:Mr,insertCss:ki}}},hooks:function(){return{beforeDOMElementCreation:function(){ki()},beforeI2svg:function(){ki()}}}},ot=ut||{};ot[nt]||(ot[nt]={});ot[nt].styles||(ot[nt].styles={});ot[nt].hooks||(ot[nt].hooks={});ot[nt].shims||(ot[nt].shims=[]);var Z=ot[nt],Ar=[],_d=function e(){I.removeEventListener("DOMContentLoaded",e),Ge=1,Ar.map(function(t){return t()})},Ge=!1;at&&(Ge=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),Ge||I.addEventListener("DOMContentLoaded",_d));function vd(e){at&&(Ge?setTimeout(e,0):Ar.push(e))}function se(e){var t=e.tag,n=e.attributes,i=n===void 0?{}:n,o=e.children,r=o===void 0?[]:o;return typeof e=="string"?Ir(e):"<".concat(t," ").concat(ud(i),">").concat(r.map(se).join(""),"</").concat(t,">")}function Jo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xd=function(t,n){return function(i,o,r,d){return t.call(n,i,o,r,d)}},Ci=function(t,n,i,o){var r=Object.keys(t),d=r.length,s=o!==void 0?xd(n,o):n,m,f,u;for(i===void 0?(m=1,u=t[r[0]]):(m=0,u=i);m<d;m++)f=r[m],u=s(u,t[f],f,t);return u};function yd(e){for(var t=[],n=0,i=e.length;n<i;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<i){var r=e.charCodeAt(n++);(r&64512)==56320?t.push(((o&1023)<<10)+(r&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Si(e){var t=yd(e);return t.length===1?t[0].toString(16):null}function wd(e,t){var n=e.length,i=e.charCodeAt(t),o;return i>=55296&&i<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function tr(e){return Object.keys(e).reduce(function(t,n){var i=e[n],o=!!i.icon;return o?t[i.iconName]=i.icon:t[n]=i,t},{})}function Fi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,o=i===void 0?!1:i,r=tr(t);typeof Z.hooks.addPack=="function"&&!o?Z.hooks.addPack(e,tr(t)):Z.styles[e]=p(p({},Z.styles[e]||{}),r),e==="fas"&&Fi("fa",t)}var Ne,Ve,Be,Pt=Z.styles,kd=Z.shims,Cd=(Ne={},L(Ne,D,Object.values(oe[D])),L(Ne,A,Object.values(oe[A])),Ne),Gi=null,Sr={},Fr={},Or={},Tr={},Rr={},Ed=(Ve={},L(Ve,D,Object.keys(ie[D])),L(Ve,A,Object.keys(ie[A])),Ve);function Dd(e){return~dd.indexOf(e)}function Id(e,t){var n=t.split("-"),i=n[0],o=n.slice(1).join("-");return i===e&&o!==""&&!Dd(o)?o:null}var Pr=function(){var t=function(r){return Ci(Pt,function(d,s,m){return d[m]=Ci(s,r,{}),d},{})};Sr=t(function(o,r,d){if(r[3]&&(o[r[3]]=d),r[2]){var s=r[2].filter(function(m){return typeof m=="number"});s.forEach(function(m){o[m.toString(16)]=d})}return o}),Fr=t(function(o,r,d){if(o[d]=d,r[2]){var s=r[2].filter(function(m){return typeof m=="string"});s.forEach(function(m){o[m]=d})}return o}),Rr=t(function(o,r,d){var s=r[2];return o[d]=d,s.forEach(function(m){o[m]=d}),o});var n="far"in Pt||b.autoFetchSvg,i=Ci(kd,function(o,r){var d=r[0],s=r[1],m=r[2];return s==="far"&&!n&&(s="fas"),typeof d=="string"&&(o.names[d]={prefix:s,iconName:m}),typeof d=="number"&&(o.unicodes[d.toString(16)]={prefix:s,iconName:m}),o},{names:{},unicodes:{}});Or=i.names,Tr=i.unicodes,Gi=qe(b.styleDefault,{family:b.familyDefault})};ld(function(e){Gi=qe(e.styleDefault,{family:b.familyDefault})});Pr();function $i(e,t){return(Sr[e]||{})[t]}function Md(e,t){return(Fr[e]||{})[t]}function wt(e,t){return(Rr[e]||{})[t]}function Lr(e){return Or[e]||{prefix:null,iconName:null}}function Ad(e){var t=Tr[e],n=$i("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Gi}var Yi=function(){return{prefix:null,iconName:null,rest:[]}};function qe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,i=n===void 0?D:n,o=ie[i][e],r=ne[i][e]||ne[i][o],d=e in Z.styles?e:null;return r||d||null}var er=(Be={},L(Be,D,Object.keys(oe[D])),L(Be,A,Object.keys(oe[A])),Be);function Ze(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,o=i===void 0?!1:i,r=(t={},L(t,D,"".concat(b.cssPrefix,"-").concat(D)),L(t,A,"".concat(b.cssPrefix,"-").concat(A)),t),d=null,s=D;(e.includes(r[D])||e.some(function(f){return er[D].includes(f)}))&&(s=D),(e.includes(r[A])||e.some(function(f){return er[A].includes(f)}))&&(s=A);var m=e.reduce(function(f,u){var g=Id(b.cssPrefix,u);if(Pt[u]?(u=Cd[s].includes(u)?ed[s][u]:u,d=u,f.prefix=u):Ed[s].indexOf(u)>-1?(d=u,f.prefix=qe(u,{family:s})):g?f.iconName=g:u!==b.replacementClass&&u!==r[D]&&u!==r[A]&&f.rest.push(u),!o&&f.prefix&&f.iconName){var x=d==="fa"?Lr(f.iconName):{},k=wt(f.prefix,f.iconName);x.prefix&&(d=null),f.iconName=x.iconName||k||f.iconName,f.prefix=x.prefix||f.prefix,f.prefix==="far"&&!Pt.far&&Pt.fas&&!b.autoFetchSvg&&(f.prefix="fas")}return f},Yi());return(e.includes("fa-brands")||e.includes("fab"))&&(m.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(m.prefix="fad"),!m.prefix&&s===A&&(Pt.fass||b.autoFetchSvg)&&(m.prefix="fass",m.iconName=wt(m.prefix,m.iconName)||m.iconName),(m.prefix==="fa"||d==="fa")&&(m.prefix=ft()||"fas"),m}var Sd=function(){function e(){Ua(this,e),this.definitions={}}return Wa(e,[{key:"add",value:function(){for(var n=this,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];var d=o.reduce(this._pullDefinitions,{});Object.keys(d).forEach(function(s){n.definitions[s]=p(p({},n.definitions[s]||{}),d[s]),Fi(s,d[s]);var m=oe[D][s];m&&Fi(m,d[s]),Pr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var o=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(o).map(function(r){var d=o[r],s=d.prefix,m=d.iconName,f=d.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(g){typeof g=="string"&&(n[s][g]=f)}),n[s][m]=f}),n}}]),e}(),ir=[],Lt={},zt={},Fd=Object.keys(zt);function Od(e,t){var n=t.mixoutsTo;return ir=e,Lt={},Object.keys(zt).forEach(function(i){Fd.indexOf(i)===-1&&delete zt[i]}),ir.forEach(function(i){var o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(function(d){typeof o[d]=="function"&&(n[d]=o[d]),We(o[d])==="object"&&Object.keys(o[d]).forEach(function(s){n[d]||(n[d]={}),n[d][s]=o[d][s]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(d){Lt[d]||(Lt[d]=[]),Lt[d].push(r[d])})}i.provides&&i.provides(zt)}),n}function Oi(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var r=Lt[e]||[];return r.forEach(function(d){t=d.apply(null,[t].concat(i))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=Lt[e]||[];o.forEach(function(r){r.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zt[e]?zt[e].apply(null,t):void 0}function Ti(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(t)return t=wt(n,t)||t,Jo(zr.definitions,n,t)||Jo(Z.styles,n,t)}var zr=new Sd,Td=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,Ct("noAuto")},Rd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(Ct("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,vd(function(){Ld({autoReplaceSvgRoot:n}),Ct("watch",t)})}},Pd={icon:function(t){if(t===null)return null;if(We(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=qe(t[0]);return{prefix:i,iconName:wt(i,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(id))){var o=Ze(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||ft(),iconName:wt(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var r=ft();return{prefix:r,iconName:wt(r,t)||t}}}},Y={noAuto:Td,config:b,dom:Rd,parse:Pd,library:zr,findIconDefinition:Ti,toHtml:se},Ld=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,i=n===void 0?I:n;(Object.keys(Z.styles).length>0||b.autoFetchSvg)&&at&&b.autoReplaceSvg&&Y.dom.i2svg({node:i})};function Qe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return se(i)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var i=I.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function zd(e){var t=e.children,n=e.main,i=e.mask,o=e.attributes,r=e.styles,d=e.transform;if(Wi(d)&&n.found&&!i.found){var s=n.width,m=n.height,f={x:s/m/2,y:.5};o.style=Ye(p(p({},r),{},{"transform-origin":"".concat(f.x+d.x/16,"em ").concat(f.y+d.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function jd(e){var t=e.prefix,n=e.iconName,i=e.children,o=e.attributes,r=e.symbol,d=r===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},o),{},{id:d}),children:i}]}]}function qi(e){var t=e.icons,n=t.main,i=t.mask,o=e.prefix,r=e.iconName,d=e.transform,s=e.symbol,m=e.title,f=e.maskId,u=e.titleId,g=e.extra,x=e.watchable,k=x===void 0?!1:x,R=i.found?i:n,O=R.width,U=R.height,G=o==="fak",P=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(function(dt){return g.classes.indexOf(dt)===-1}).filter(function(dt){return dt!==""||!!dt}).concat(g.classes).join(" "),j={children:[],attributes:p(p({},g.attributes),{},{"data-prefix":o,"data-icon":r,class:P,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(U)})},Q=G&&!~g.classes.indexOf("fa-fw")?{width:"".concat(O/U*16*.0625,"em")}:{};k&&(j.attributes[kt]=""),m&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(u||ae())},children:[m]}),delete j.attributes.title);var $=p(p({},j),{},{prefix:o,iconName:r,main:n,mask:i,maskId:f,transform:d,symbol:s,styles:p(p({},Q),g.styles)}),gt=i.found&&n.found?rt("generateAbstractMask",$)||{children:[],attributes:{}}:rt("generateAbstractIcon",$)||{children:[],attributes:{}},bt=gt.children,Xe=gt.attributes;return $.children=bt,$.attributes=Xe,s?jd($):zd($)}function nr(e){var t=e.content,n=e.width,i=e.height,o=e.transform,r=e.title,d=e.extra,s=e.watchable,m=s===void 0?!1:s,f=p(p(p({},d.attributes),r?{title:r}:{}),{},{class:d.classes.join(" ")});m&&(f[kt]="");var u=p({},d.styles);Wi(o)&&(u.transform=pd({transform:o,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var g=Ye(u);g.length>0&&(f.style=g);var x=[];return x.push({tag:"span",attributes:f,children:[t]}),r&&x.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),x}function Nd(e){var t=e.content,n=e.title,i=e.extra,o=p(p(p({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Ye(i.styles);r.length>0&&(o.style=r);var d=[];return d.push({tag:"span",attributes:o,children:[t]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}var Ei=Z.styles;function Ri(e){var t=e[0],n=e[1],i=e.slice(4),o=ji(i,1),r=o[0],d=null;return Array.isArray(r)?d={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:r[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:d}}var Vd={found:!1,width:512,height:512};function Bd(e,t){!kr&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pi(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=ft()),new Promise(function(i,o){var r={found:!1,width:512,height:512,icon:rt("missingIconAbstract")||{}};if(n==="fa"){var d=Lr(e)||{};e=d.iconName||e,t=d.prefix||t}if(e&&t&&Ei[t]&&Ei[t][e]){var s=Ei[t][e];return i(Ri(s))}Bd(e,t),i(p(p({},Vd),{},{icon:b.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var or=function(){},Li=b.measurePerformance&&Te&&Te.mark&&Te.measure?Te:{mark:or,measure:or},Jt='FA "6.5.1"',Hd=function(t){return Li.mark("".concat(Jt," ").concat(t," begins")),function(){return jr(t)}},jr=function(t){Li.mark("".concat(Jt," ").concat(t," ends")),Li.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Zi={begin:Hd,end:jr},He=function(){};function rr(e){var t=e.getAttribute?e.getAttribute(kt):null;return typeof t=="string"}function Ud(e){var t=e.getAttribute?e.getAttribute(Vi):null,n=e.getAttribute?e.getAttribute(Bi):null;return t&&n}function Wd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Gd(){if(b.autoReplaceSvg===!0)return Ue.replace;var e=Ue[b.autoReplaceSvg];return e||Ue.replace}function $d(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function Yd(e){return I.createElement(e)}function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,i=n===void 0?e.tag==="svg"?$d:Yd:n;if(typeof e=="string")return I.createTextNode(e);var o=i(e.tag);Object.keys(e.attributes||[]).forEach(function(d){o.setAttribute(d,e.attributes[d])});var r=e.children||[];return r.forEach(function(d){o.appendChild(Nr(d,{ceFn:i}))}),o}function qd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ue={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(o){n.parentNode.insertBefore(Nr(o),n)}),n.getAttribute(kt)===null&&b.keepOriginalSource){var i=I.createComment(qd(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(t){var n=t[0],i=t[1];if(~Ui(n).indexOf(b.replacementClass))return Ue.replace(t);var o=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(s,m){return m===b.replacementClass||m.match(o)?s.toSvg.push(m):s.toNode.push(m),s},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var d=i.map(function(s){return se(s)}).join(`
`);n.setAttribute(kt,""),n.innerHTML=d}};function ar(e){e()}function Vr(e,t){var n=typeof t=="function"?t:He;if(e.length===0)n();else{var i=ar;b.mutateApproach===Ja&&(i=ut.requestAnimationFrame||ar),i(function(){var o=Gd(),r=Zi.begin("mutate");e.map(o),r(),n()})}}var Qi=!1;function Br(){Qi=!0}function zi(){Qi=!1}var $e=null;function dr(e){if(Zo&&b.observeMutations){var t=e.treeCallback,n=t===void 0?He:t,i=e.nodeCallback,o=i===void 0?He:i,r=e.pseudoElementsCallback,d=r===void 0?He:r,s=e.observeMutationsRoot,m=s===void 0?I:s;$e=new Zo(function(f){if(!Qi){var u=ft();Nt(f).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!rr(g.addedNodes[0])&&(b.searchPseudoElements&&d(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&b.searchPseudoElements&&d(g.target.parentNode),g.type==="attributes"&&rr(g.target)&&~ad.indexOf(g.attributeName))if(g.attributeName==="class"&&Ud(g.target)){var x=Ze(Ui(g.target)),k=x.prefix,R=x.iconName;g.target.setAttribute(Vi,k||u),R&&g.target.setAttribute(Bi,R)}else Wd(g.target)&&o(g.target)})}}),at&&$e.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zd(){$e&&$e.disconnect()}function Qd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(i,o){var r=o.split(":"),d=r[0],s=r.slice(1);return d&&s.length>0&&(i[d]=s.join(":").trim()),i},{})),n}function Xd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",o=Ze(Ui(e));return o.prefix||(o.prefix=ft()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=Md(o.prefix,e.innerText)||$i(o.prefix,Si(e.innerText))),!o.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function Kd(e){var t=Nt(e.attributes).reduce(function(o,r){return o.name!=="class"&&o.name!=="style"&&(o[r.name]=r.value),o},{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(i||ae()):(t["aria-hidden"]="true",t.focusable="false")),t}function Jd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:it,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xd(e),i=n.iconName,o=n.prefix,r=n.rest,d=Kd(e),s=Oi("parseNodeAttributes",{},e),m=t.styleParser?Qd(e):[];return p({iconName:i,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:it,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:m,attributes:d}},s)}var tc=Z.styles;function Hr(e){var t=b.autoReplaceSvg==="nest"?cr(e,{styleParser:!1}):cr(e);return~t.extra.classes.indexOf(Cr)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var pt=new Set;Hi.map(function(e){pt.add("fa-".concat(e))});Object.keys(ie[D]).map(pt.add.bind(pt));Object.keys(ie[A]).map(pt.add.bind(pt));pt=de(pt);function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=I.documentElement.classList,i=function(g){return n.add("".concat(Qo,"-").concat(g))},o=function(g){return n.remove("".concat(Qo,"-").concat(g))},r=b.autoFetchSvg?pt:Hi.map(function(u){return"fa-".concat(u)}).concat(Object.keys(tc));r.includes("fa")||r.push("fa");var d=[".".concat(Cr,":not([").concat(kt,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(kt,"])")})).join(", ");if(d.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(d))}catch{}if(s.length>0)i("pending"),o("complete");else return Promise.resolve();var m=Zi.begin("onTree"),f=s.reduce(function(u,g){try{var x=Hr(g);x&&u.push(x)}catch(k){kr||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,g){Promise.all(f).then(function(x){Vr(x,function(){i("active"),i("complete"),o("pending"),typeof t=="function"&&t(),m(),u()})}).catch(function(x){m(),g(x)})})}function ec(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hr(e).then(function(n){n&&Vr([n],t)})}function ic(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:Ti(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Ti(o||{})),e(i,p(p({},n),{},{mask:o}))}}var nc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,o=i===void 0?it:i,r=n.symbol,d=r===void 0?!1:r,s=n.mask,m=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,g=n.title,x=g===void 0?null:g,k=n.titleId,R=k===void 0?null:k,O=n.classes,U=O===void 0?[]:O,G=n.attributes,P=G===void 0?{}:G,j=n.styles,Q=j===void 0?{}:j;if(t){var $=t.prefix,gt=t.iconName,bt=t.icon;return Qe(p({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(x?P["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(R||ae()):(P["aria-hidden"]="true",P.focusable="false")),qi({icons:{main:Ri(bt),mask:m?Ri(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:gt,transform:p(p({},it),o),symbol:d,title:x,maskId:u,titleId:R,extra:{attributes:P,styles:Q,classes:U}})})}},oc={mixout:function(){return{icon:ic(nc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=sr,n.nodeCallback=ec,n}}},provides:function(t){t.i2svg=function(n){var i=n.node,o=i===void 0?I:i,r=n.callback,d=r===void 0?function(){}:r;return sr(o,d)},t.generateSvgReplacementMutation=function(n,i){var o=i.iconName,r=i.title,d=i.titleId,s=i.prefix,m=i.transform,f=i.symbol,u=i.mask,g=i.maskId,x=i.extra;return new Promise(function(k,R){Promise.all([Pi(o,s),u.iconName?Pi(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var U=ji(O,2),G=U[0],P=U[1];k([n,qi({icons:{main:G,mask:P},prefix:s,iconName:o,transform:m,symbol:f,maskId:g,title:r,titleId:d,extra:x,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var i=n.children,o=n.attributes,r=n.main,d=n.transform,s=n.styles,m=Ye(s);m.length>0&&(o.style=m);var f;return Wi(d)&&(f=rt("generateAbstractTransformGrouping",{main:r,transform:d,containerWidth:r.width,iconWidth:r.width})),i.push(f||r.icon),{children:i,attributes:o}}}},rc={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.classes,r=o===void 0?[]:o;return Qe({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:i});var d=[];return n(function(s){Array.isArray(s)?s.map(function(m){d=d.concat(m.abstract)}):d=d.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(de(r)).join(" ")},children:d}]})}}}},ac={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.title,r=o===void 0?null:o,d=i.classes,s=d===void 0?[]:d,m=i.attributes,f=m===void 0?{}:m,u=i.styles,g=u===void 0?{}:u;return Qe({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:i}),Nd({content:n.toString(),title:r,extra:{attributes:f,styles:g,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(de(s))}})})}}}},dc={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.transform,r=o===void 0?it:o,d=i.title,s=d===void 0?null:d,m=i.classes,f=m===void 0?[]:m,u=i.attributes,g=u===void 0?{}:u,x=i.styles,k=x===void 0?{}:x;return Qe({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:i}),nr({content:n,transform:p(p({},it),r),title:s,extra:{attributes:g,styles:k,classes:["".concat(b.cssPrefix,"-layers-text")].concat(de(f))}})})}}},provides:function(t){t.generateLayersText=function(n,i){var o=i.title,r=i.transform,d=i.extra,s=null,m=null;if(xr){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,m=u.height/f}return b.autoA11y&&!o&&(d.attributes["aria-hidden"]="true"),Promise.resolve([n,nr({content:n.innerHTML,width:s,height:m,transform:r,title:o,extra:d,watchable:!0})])}}},cc=new RegExp('"',"ug"),lr=[1105920,1112319];function sc(e){var t=e.replace(cc,""),n=wd(t,0),i=n>=lr[0]&&n<=lr[1],o=t.length===2?t[0]===t[1]:!1;return{value:Si(o?t[0]:t),isSecondary:i||o}}function mr(e,t){var n="".concat(Ka).concat(t.replace(":","-"));return new Promise(function(i,o){if(e.getAttribute(n)!==null)return i();var r=Nt(e.children),d=r.filter(function(bt){return bt.getAttribute(Ai)===t})[0],s=ut.getComputedStyle(e,t),m=s.getPropertyValue("font-family").match(nd),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(d&&!m)return e.removeChild(d),i();if(m&&u!=="none"&&u!==""){var g=s.getPropertyValue("content"),x=~["Sharp"].indexOf(m[2])?A:D,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(m[2])?ne[x][m[2].toLowerCase()]:od[x][f],R=sc(g),O=R.value,U=R.isSecondary,G=m[0].startsWith("FontAwesome"),P=$i(k,O),j=P;if(G){var Q=Ad(O);Q.iconName&&Q.prefix&&(P=Q.iconName,k=Q.prefix)}if(P&&!U&&(!d||d.getAttribute(Vi)!==k||d.getAttribute(Bi)!==j)){e.setAttribute(n,j),d&&e.removeChild(d);var $=Jd(),gt=$.extra;gt.attributes[Ai]=t,Pi(P,k).then(function(bt){var Xe=qi(p(p({},$),{},{icons:{main:bt,mask:Yi()},prefix:k,iconName:j,extra:gt,watchable:!0})),dt=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(dt,e.firstChild):e.appendChild(dt),dt.outerHTML=Xe.map(function(Gr){return se(Gr)}).join(`
`),e.removeAttribute(n),i()}).catch(o)}else i()}else i()})}function lc(e){return Promise.all([mr(e,"::before"),mr(e,"::after")])}function mc(e){return e.parentNode!==document.head&&!~td.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ai)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hr(e){if(at)return new Promise(function(t,n){var i=Nt(e.querySelectorAll("*")).filter(mc).map(lc),o=Zi.begin("searchPseudoElements");Br(),Promise.all(i).then(function(){o(),zi(),t()}).catch(function(){o(),zi(),n()})})}var hc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var i=n.node,o=i===void 0?I:i;b.searchPseudoElements&&hr(o)}}},ur=!1,uc={mixout:function(){return{dom:{unwatch:function(){Br(),ur=!0}}}},hooks:function(){return{bootstrap:function(){dr(Oi("mutationObserverCallbacks",{}))},noAuto:function(){Zd()},watch:function(n){var i=n.observeMutationsRoot;ur?zi():dr(Oi("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},fr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,o){var r=o.toLowerCase().split("-"),d=r[0],s=r.slice(1).join("-");if(d&&s==="h")return i.flipX=!0,i;if(d&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(d){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},fc={mixout:function(){return{parse:{transform:function(n){return fr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-transform");return o&&(n.transform=fr(o)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var i=n.main,o=n.transform,r=n.containerWidth,d=n.iconWidth,s={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),f="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),u="rotate(".concat(o.rotate," 0 0)"),g={transform:"".concat(m," ").concat(f," ").concat(u)},x={transform:"translate(".concat(d/2*-1," -256)")},k={outer:s,inner:g,path:x};return{tag:"g",attributes:p({},k.outer),children:[{tag:"g",attributes:p({},k.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:p(p({},i.icon.attributes),k.path)}]}]}}}},Di={x:0,y:0,width:"100%",height:"100%"};function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function pc(e){return e.tag==="g"?e.children:[e]}var gc={hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-mask"),r=o?Ze(o.split(" ").map(function(d){return d.trim()})):Yi();return r.prefix||(r.prefix=ft()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var i=n.children,o=n.attributes,r=n.main,d=n.mask,s=n.maskId,m=n.transform,f=r.width,u=r.icon,g=d.width,x=d.icon,k=fd({transform:m,containerWidth:g,iconWidth:f}),R={tag:"rect",attributes:p(p({},Di),{},{fill:"white"})},O=u.children?{children:u.children.map(pr)}:{},U={tag:"g",attributes:p({},k.inner),children:[pr(p({tag:u.tag,attributes:p(p({},u.attributes),k.path)},O))]},G={tag:"g",attributes:p({},k.outer),children:[U]},P="mask-".concat(s||ae()),j="clip-".concat(s||ae()),Q={tag:"mask",attributes:p(p({},Di),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,G]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:pc(x)},Q]};return i.push($,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(P,")")},Di)}),{children:i,attributes:o}}}},bc={provides:function(t){var n=!1;ut.matchMedia&&(n=ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:p(p({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var d=p(p({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:p(p({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:p(p({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},d),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:p(p({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},d),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:p(p({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},d),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},_c={hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-symbol"),r=o===null?!1:o===""?!0:o;return n.symbol=r,n}}}},vc=[bd,oc,rc,ac,dc,hc,uc,fc,gc,bc,_c];Od(vc,{mixoutsTo:Y});var fm=Y.noAuto,pm=Y.config,gm=Y.library,bm=Y.dom,xc=Y.parse,_m=Y.findIconDefinition,vm=Y.toHtml,yc=Y.icon,xm=Y.layer,wc=Y.text,kc=Y.counter;var Ur=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t}),t.\u0275inj=_({});let e=t;return e})();var Wr=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t,bootstrap:[Fe]}),t.\u0275inj=_({providers:[bn(),go],imports:[gn,to,pn,po,eo,Ro,yi,Po,Uo,Kt,Vo,Bo,yi,jo,_n,Ur]});let e=t;return e})();var Cc=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=v({type:t,bootstrap:[Fe]}),t.\u0275inj=_({imports:[Wr,vn]});let e=t;return e})();export{Cc as a};
