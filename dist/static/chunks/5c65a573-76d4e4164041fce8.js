"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{8050:function(e,t,r){r.d(t,{IO:function(){return si},PL:function(){return sv},ad:function(){return nX},ar:function(){return so},hJ:function(){return nW}});var n,s,i=r(5115),a=r(8341),o=r(4794),l=r(7365),u=r(4923);r(2040);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.19.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(v);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(v);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(v);f.warn(`Firestore (${d}): ${e}`,...r)}}function v(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new C(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class N{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class k{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.T;return this.T=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.T=e.token,new D(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function R(e,t){return e<t?-1:e>t?1:0}function x(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new V(0,0))}static max(){return new F(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r){void 0===t?t=0:t>e.length&&w(),void 0===r?r=e.length-t:r>e.length-t&&w(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),s=t.get(n);if(r<s)return -1;if(r>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends M{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends M{construct(e,t,r){return new U(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(i=!i,n++):"."!==t||i?(r+=t,n++):(s(),n++)}if(s(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(O.fromString(e))}static fromName(e){return new q(O.fromString(e).popFirst(5))}static empty(){return new q(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new O(e.slice()))}}class B{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new B(F.min(),q.empty(),-1)}static max(){return new B(F.max(),q.empty(),-1)}}class ${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof K?t:K.resolve(t)}catch(e){return K.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,r)=>{t(e)})}static reject(e){return new K((t,r)=>{r(e)})}static waitFor(e){return new K((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=K.resolve(!1);for(let r of e)t=t.next(e=>e?K.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new K((r,n)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&r(i)},e=>n(e))}})}static doWhile(e,t){return new K((r,n)=>{let s=()=>{!0===e()?t().next(()=>{s()},n):r()};s()})}}function G(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function j(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function H(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function Y(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Q.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new J(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new J(this.root,e,this.comparator,!1)}getReverseIterator(){return new J(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new J(this.root,e,this.comparator,!0)}}class J{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:Z.RED,this.left=null!=n?n:Z.EMPTY,this.right=null!=s?s:Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new Z(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Z.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1,Z.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,r,n,s){return this}insert(e,t,r){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new et(this.data.getIterator())}getIteratorFrom(e){return new et(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ee(this.comparator);return t.data=e,t}}class et{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(U.comparator)}static empty(){return new er([])}unionWith(e){let t=new ee(U.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new er(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return x(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new en("Invalid base64 string: "+e):e}}(e);return new es(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(e){if(e||w(),"string"==typeof e){let t=0,r=ei.exec(e);if(r||w(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:eo(e.seconds),nanos:eo(e.nanos)}}function eo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function el(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eh(e){let t=ea(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,n,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ed{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ed("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ed&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function em(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eu(e)?4:eN(e)?9007199254740991:10:w()}function eg(e,t){if(e===t)return!0;let r=em(e);if(r!==em(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eh(e).isEqual(eh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ea(e.timestampValue),n=ea(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return el(e.bytesValue).isEqual(el(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eo(e.geoPointValue.latitude)===eo(t.geoPointValue.latitude)&&eo(e.geoPointValue.longitude)===eo(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eo(e.integerValue)===eo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=eo(e.doubleValue),n=eo(t.doubleValue);return r===n?j(r)===j(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return x(e.arrayValue.values||[],t.arrayValue.values||[],eg);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(W(r)!==W(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eg(r[e],n[e])))return!1;return!0}(e,t);default:return w()}}function ep(e,t){return void 0!==(e.values||[]).find(e=>eg(e,t))}function ey(e,t){if(e===t)return 0;let r=em(e),n=em(t);if(r!==n)return R(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=eo(e.integerValue||e.doubleValue),n=eo(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return ev(e.timestampValue,t.timestampValue);case 4:return ev(eh(e),eh(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){let r=el(e),n=el(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=R(r[e],n[e]);if(0!==t)return t}return R(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=R(eo(e.latitude),eo(t.latitude));return 0!==r?r:R(eo(e.longitude),eo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=ey(r[e],n[e]);if(t)return t}return R(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ef.mapValue&&t===ef.mapValue)return 0;if(e===ef.mapValue)return 1;if(t===ef.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let e=0;e<n.length&&e<i.length;++e){let t=R(n[e],i[e]);if(0!==t)return t;let a=ey(r[n[e]],s[i[e]]);if(0!==a)return a}return R(n.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function ev(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);let r=ea(e),n=ea(t),s=R(r.seconds,n.seconds);return 0!==s?s:R(r.nanos,n.nanos)}function ew(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ea(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?el(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,q.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=ew(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${ew(e.fields[s])}`;return r+"}"}(e.mapValue):w()}function eE(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eT(e){return!!e&&"integerValue"in e}function eI(e){return!!e&&"arrayValue"in e}function eC(e){return!!e&&"nullValue"in e}function e_(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eS(e){return!!e&&"mapValue"in e}function eA(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return H(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eA(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eA(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eN(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.value=e}static empty(){return new ek({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eS(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eA(t)}setAll(e){let t=U.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=eA(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());eS(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eg(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eS(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(H(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new ek(eA(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eD(e,0,F.min(),F.min(),F.min(),ek.empty(),0)}static newFoundDocument(e,t,r,n){return new eD(e,1,t,F.min(),r,n,0)}static newNoDocument(e,t){return new eD(e,2,t,F.min(),F.min(),ek.empty(),0)}static newUnknownDocument(e,t){return new eD(e,3,t,F.min(),F.min(),ek.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(F.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ek.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ek.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eD&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eD(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.position=e,this.inclusive=t}}function eL(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),r.key):ey(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function eR(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eg(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{}class eF extends eV{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new eU(e,t,r):"array-contains"===t?new ez(e,r):"in"===t?new eK(e,r):"not-in"===t?new eG(e,r):"array-contains-any"===t?new eQ(e,r):new eF(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new eq(e,r):new eB(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ey(t,this.value)):null!==t&&em(this.value)===em(t)&&this.matchesComparison(ey(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eM extends eV{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new eM(e,t)}matches(e){return eO(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eO(e){return"and"===e.op}function eP(e){for(let t of e.filters)if(t instanceof eM)return!1;return!0}class eU extends eF{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eq extends eF{constructor(e,t){super(e,"in",t),this.keys=e$("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eB extends eF{constructor(e,t){super(e,"not-in",t),this.keys=e$("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e$(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>q.fromName(e.referenceValue))}class ez extends eF{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eI(t)&&ep(t.arrayValue,this.value)}}class eK extends eF{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ep(this.value.arrayValue,t)}}class eG extends eF{constructor(e,t){super(e,"not-in",t)}matches(e){if(ep(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ep(this.value.arrayValue,t)}}class eQ extends eF{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eI(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ep(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.ft=null}}function eW(e,t=null,r=[],n=[],s=null,i=null,a=null){return new ej(e,t,r,n,s,i,a)}function eH(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eF)return t.field.canonicalString()+t.op.toString()+ew(t.value);if(eP(t)&&eO(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ew(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ew(e)).join(",")),t.ft=e}return t.ft}function eY(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var r,n;if(r=e.orderBy[s],n=t.orderBy[s],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof eF?r instanceof eF&&t.op===r.op&&t.field.isEqual(r.field)&&eg(t.value,r.value):t instanceof eM?r instanceof eM&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,s)=>t&&e(n,r.filters[s]),!0):void w()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eR(e.startAt,t.startAt)&&eR(e.endAt,t.endAt)}function eX(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.dt=null,this.wt=null,this.startAt,this.endAt}}function eZ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function e1(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function e2(e){return null!==e.collectionGroup}function e4(e){let t=e;if(null===t.dt){t.dt=[];let e=e1(t),r=e0(t);if(null!==e&&null===r)e.isKeyField()||t.dt.push(new ex(e)),t.dt.push(new ex(U.keyField(),"asc"));else{let e=!1;for(let r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ex(U.keyField(),e))}}}return t.dt}function e3(e){let t=e;if(!t.wt){if("F"===t.limitType)t.wt=eW(t.path,t.collectionGroup,e4(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let r of e4(t)){let t="desc"===r.dir?"asc":"desc";e.push(new ex(r.field,t))}let r=t.endAt?new eb(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new eb(t.startAt.position,t.startAt.inclusive):null;t.wt=eW(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}return t.wt}function e9(e,t){t.getFirstInequalityField(),e1(e);let r=e.filters.concat([t]);return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function e5(e,t,r){return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e6(e,t){return eY(e3(e),e3(t))&&e.limitType===t.limitType}function e8(e){return`${eH(e3(e))}|lt:${e.limitType}`}function e7(e){var t;let r;return`Query(target=${r=(t=e3(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eF?`${t.field.canonicalString()} ${t.op} ${ew(t.value)}`:t instanceof eM?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ew(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ew(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function te(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):q.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e4(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eL(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e4(e),t))&&(!e.endAt||!!function(e,t,r){let n=eL(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e4(e),t))}function tt(e){return(t,r)=>{let n=!1;for(let s of e4(e)){let e=function(e,t,r){let n=e.field.isKeyField()?q.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?ey(n,s):w()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return w()}}(s,t,r);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){H(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return Y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=new X(q.comparator),ts=new X(q.comparator);function ti(...e){let t=ts;for(let r of e)t=t.insert(r.key,r);return t}function ta(){return new tr(e=>e.toString(),(e,t)=>e.isEqual(t))}new X(q.comparator);let to=new ee(q.comparator);function tl(...e){let t=to;for(let r of e)t=t.add(r);return t}let tu=new ee(R);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:j(t)?"-0":t}}function tc(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}class tf extends td{}class tm extends td{constructor(e){super(),this.elements=e}}function tg(e,t){let r=tE(t);for(let t of e.elements)r.some(e=>eg(e,t))||r.push(t);return{arrayValue:{values:r}}}class tp extends td{constructor(e){super(),this.elements=e}}function ty(e,t){let r=tE(t);for(let t of e.elements)r=r.filter(e=>!eg(e,t));return{arrayValue:{values:r}}}class tv extends td{constructor(e,t){super(),this.serializer=e,this._t=t}}function tw(e){return eo(e.integerValue||e.doubleValue)}function tE(e){return eI(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tT{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tT}static exists(e){return new tT(void 0,e)}static updateTime(e){return new tT(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tI(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tC{}function t_(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tR(e.key,tT.none()):new tN(e.key,e.data,tT.none());{let r=e.data,n=ek.empty(),s=new ee(U.comparator);for(let e of t.fields)if(!s.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),s=s.add(e)}return new tk(e.key,n,new er(s.toArray()),tT.none())}}function tS(e,t,r,n){return e instanceof tN?function(e,t,r,n){if(!tI(e.precondition,t))return r;let s=e.value.clone(),i=tL(e.fieldTransforms,n,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,r,n):e instanceof tk?function(e,t,r,n){if(!tI(e.precondition,t))return r;let s=tL(e.fieldTransforms,n,t),i=t.data;return(i.setAll(tD(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tI(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tA(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&x(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tm&&n instanceof tm||r instanceof tp&&n instanceof tp?x(r.elements,n.elements,eg):r instanceof tv&&n instanceof tv?eg(r._t,n._t):r instanceof tf&&n instanceof tf)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tN extends tC{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tk extends tC{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tD(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tb(e,t,r){var n;let s=new Map;e.length===r.length||w();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(n=r[i],o instanceof tm?tg(o,l):o instanceof tp?ty(o,l):n))}return s}function tL(e,t,r){let n=new Map;for(let s of e){let e=s.transform,i=r.data.field(s.field);n.set(s.field,e instanceof tf?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,i):e instanceof tm?tg(e,i):e instanceof tp?ty(e,i):function(e,t){var r,n;let s=(r=e,n=t,r instanceof tv?eT(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),i=tw(s)+tw(e._t);return eT(s)&&eT(e._t)?tc(i):th(e.serializer,i)}(e,i))}return n}class tR extends tC{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var n;n=r[t],s instanceof tN?function(e,t,r){let n=e.value.clone(),s=tb(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(s,e,n):s instanceof tk?function(e,t,r){if(!tI(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tb(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(tD(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tS(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tS(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=ta();return this.mutations.forEach(n=>{let s=e.get(n.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields);a=t.has(n.key)?null:a;let o=t_(i,a);null!==o&&r.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tl())}isEqual(e){return this.batchId===e.batchId&&x(this.mutations,e.mutations,(e,t)=>tA(e,t))&&x(this.baseMutations,e.baseMutations,(e,t)=>tA(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.count=e}}function tM(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case n.OK:return E.OK;case n.CANCELLED:return E.CANCELLED;case n.UNKNOWN:return E.UNKNOWN;case n.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case n.INTERNAL:return E.INTERNAL;case n.UNAVAILABLE:return E.UNAVAILABLE;case n.UNAUTHENTICATED:return E.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case n.NOT_FOUND:return E.NOT_FOUND;case n.ALREADY_EXISTS:return E.ALREADY_EXISTS;case n.PERMISSION_DENIED:return E.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case n.ABORTED:return E.ABORTED;case n.OUT_OF_RANGE:return E.OUT_OF_RANGE;case n.UNIMPLEMENTED:return E.UNIMPLEMENTED;case n.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return tP}static getOrCreateInstance(){return null===tP&&(tP=new tO),tP}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let tP=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tq.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tU(F.min(),n,tu,tn,tl())}}class tq{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tq(r,t,tl(),tl(),tl())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t,r,n){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=n}}class t${constructor(e,t){this.targetId=e,this.Et=t}}class tz{constructor(e,t,r=es.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tK{constructor(){this.At=0,this.Rt=tj(),this.vt=es.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=tl(),t=tl(),r=tl();return this.Rt.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:w()}}),new tq(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=tj()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class tG{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=tn,this.qt=tQ(),this.Ut=new ee(R)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{let r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,r)=>{this.Wt(r)&&t(r)})}Jt(e){var t;let r=e.targetId,n=e.Et.count,s=this.Yt(r);if(s){let i=s.target;if(eX(i)){if(0===n){let e=new q(i.path);this.Qt(r,e,eD.newNoDocument(e,F.min()))}else 1===n||w()}else{let s=this.Zt(r);s!==n&&(this.Ht(r),this.Ut=this.Ut.add(r),null===(t=tO.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:s,existenceFilterCount:e.Et.count}))}}}Xt(e){let t=new Map;this.Bt.forEach((r,n)=>{let s=this.Yt(n);if(s){if(r.current&&eX(s.target)){let t=new q(s.target.path);null!==this.Lt.get(t)||this.te(n,t)||this.Qt(n,t,eD.newNoDocument(t,e))}r.St&&(t.set(n,r.Ct()),r.xt())}});let r=tl();this.qt.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Yt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Lt.forEach((t,r)=>r.setReadTime(e));let n=new tU(e,t,this.Ut,this.Lt,r);return this.Lt=tn,this.qt=tQ(),this.Ut=new ee(R),n}Gt(e,t){if(!this.Wt(e))return;let r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;let n=this.jt(e);this.te(e,t)?n.Nt(t,1):n.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){let t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new tK,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ee(R),this.qt=this.qt.insert(e,t)),t}Wt(e){let t=null!==this.Yt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new tK),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function tQ(){return new X(q.comparator)}function tj(){return new X(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tW={asc:"ASCENDING",desc:"DESCENDING"},tH={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tY={and:"AND",or:"OR"};class tX{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tJ(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tZ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t0(e){return e||w(),F.fromTimestamp(function(e){let t=ea(e);return new V(t.seconds,t.nanos)}(e))}function t1(e,t){return new O(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t2(e){let t=O.fromString(e);return t7(t)||w(),t}function t4(e,t){let r=t2(t);if(r.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new q(t5(r))}function t3(e,t){return t1(e.databaseId,t)}function t9(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function t5(e){return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function t6(e){return{fieldPath:e.canonicalString()}}function t8(e){return U.fromServerFormat(e.fieldPath)}function t7(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n,s=F.min(),i=F.min(),a=es.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new re(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.se=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(eo(e.integerValue));else if("doubleValue"in e){let r=eo(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),j(r)?t.he(0):t.he(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ae(t,20),"string"==typeof r?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(el(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?eN(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):w()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){let r=e.fields||{};for(let e of(this.ae(t,55),Object.keys(r)))this.fe(e,t),this.ue(r[e],t)}ge(e,t){let r=e.values||[];for(let e of(this.ae(t,50),r))this.ue(e,t)}_e(e,t){this.ae(t,37),q.fromName(e).path.forEach(e=>{this.ae(t,60),this.ye(e,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}rr.pe=new rr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.He=new rs}addToCollectionParentIndex(e,t){return this.He.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(B.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(B.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class rs{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new ee(O.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new ee(O.comparator)).toArray()}}new Uint8Array(0);class ri{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ri(e,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ra(0)}static bn(){return new ra(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.changes=new tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eD.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tS(r.mutation,e,er.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tl()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tl()){let n=ta();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ti();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tl()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let s=tn,i=ta(),a=ta();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tk)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tS(a.mutation,t,a.mutation.getFieldMask(),V.now())):i.set(t.key,er.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rl(t,null!==(r=i.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=ta(),n=new X((e,t)=>e-t),s=tl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=r.get(e)||er.empty();a=s.applyToLocalView(i,a),r.set(e,a);let o=(n.get(s.batchId)||tl()).add(e);n=n.insert(s.batchId,o)})}).next(()=>{let i=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=ta();l.forEach(e=>{if(!s.has(e)){let n=t_(t.get(e),r.get(e));null!==n&&u.set(e,n),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return K.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{let i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):K.resolve(ta()),a=-1,o=s;return i.next(t=>K.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(t)?K.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tl())).next(e=>{let t;return{batchId:a,changes:(t=ts,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=ti();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let n=t.collectionGroup,s=ti();return this.indexManager.getCollectionParents(e,n).next(i=>K.forEach(i,i=>{var a;let o=(a=i.child(n),new eJ(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(n=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,n))).next(e=>{n.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eD.newInvalidDocument(n)))});let r=ti();return e.forEach((e,s)=>{let i=n.get(e);void 0!==i&&tS(i.mutation,s,er.empty(),V.now()),te(t,s)&&(r=r.insert(e,s))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return K.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:t0(t.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,s,i,a,o,l;let u,h=function(e){let t=t2(e);return 4===t.length?O.emptyPath():t5(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||w();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=t8(e.unaryFilter.field);return eF.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=t8(e.unaryFilter.field);return eF.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=t8(e.unaryFilter.field);return eF.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=t8(e.unaryFilter.field);return eF.create(s,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eF.create(t8(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eM.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return r instanceof eM&&eP(t=r)&&eO(t)?r.getFilters():[r]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new ex(t8(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new eb(r,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new eb(r,t)}(c.endAt)),r=h,n=f,s=g,i=m,a=p,o=y,l=v,new eJ(r,n,s,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e5(t,t.limit,"L"):t}(t.bundledQuery),readTime:t0(t.readTime)}),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.overlays=new X(q.comparator),this.ts=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){let r=ta();return K.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.re(e,t,n)}),K.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.ts.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.ts.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){let n=ta(),s=t.length+1,i=new q(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>r&&n.set(e.getKey(),e)}return K.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new X((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=s.get(e.largestBatchId);null===t&&(t=ta(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ta(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return K.resolve(a)}re(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.ts.get(n.largestBatchId).delete(r.key);this.ts.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tV(t,r));let s=this.ts.get(t);void 0===s&&(s=tl(),this.ts.set(t,s)),this.ts.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.es=new ee(rf.ns),this.ss=new ee(rf.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){let r=new rf(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.us(new rf(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}hs(e){let t=new q(new O([])),r=new rf(t,e),n=new rf(t,e+1),s=[];return this.ss.forEachInRange([r,n],e=>{this.us(e),s.push(e.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){let t=new q(new O([])),r=new rf(t,e),n=new rf(t,e+1),s=tl();return this.ss.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new rf(e,0),r=this.es.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rf{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return q.comparator(e.key,t.key)||R(e.ds,t.ds)}static rs(e,t){return R(e.ds,t.ds)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new ee(rf.ns)}checkEmpty(e){return K.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tx(s,t,r,n);for(let t of(this.mutationQueue.push(i),n))this._s=this._s.add(new rf(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return K.resolve(i)}lookupMutationBatch(e,t){return K.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ys(t+1),n=r<0?0:r;return K.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rf(t,0),n=new rf(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,n],e=>{let t=this.gs(e.ds);s.push(t)}),K.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ee(R);return t.forEach(e=>{let t=new rf(e,0),n=new rf(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,n],e=>{r=r.add(e.ds)})}),K.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;q.isDocumentKey(s)||(s=s.child(""));let i=new rf(new q(s),0),a=new ee(R);return this._s.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.ds)),!0)},i),K.resolve(this.ps(a))}ps(e){let t=[];return e.forEach(e=>{let r=this.gs(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Is(t.batchId,"removed")||w(),this.mutationQueue.shift();let r=this._s;return K.forEach(t.mutations,n=>{let s=new rf(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){let r=new rf(t,0),n=this._s.firstAfterOrEqual(r);return K.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){let t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.Ts=e,this.docs=new X(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():eD.newInvalidDocument(t))}getEntries(e,t){let r=tn;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eD.newInvalidDocument(e))}),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=tn,i=t.path,a=new q(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=q.comparator(e.documentKey,t.documentKey))?r:R(e.largestBatchId,t.largestBatchId)}(new B(a.readTime,a.key,-1),r)||(n.has(a.key)||te(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return K.resolve(s)}getAllFromCollectionGroup(e,t,r,n){w()}Es(e,t){return K.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rp(this)}getSize(e){return K.resolve(this.size)}}class rp extends ro{constructor(e){super(),this.Jn=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Jn.addEntry(e,n)):this.Jn.removeEntry(r)}),K.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.persistence=e,this.As=new tr(e=>eH(e),eY),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Rs=0,this.vs=new rd,this.targetCount=0,this.bs=ra.vn()}forEachTarget(e,t){return this.As.forEach((e,r)=>t(r)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),K.resolve()}Sn(e){this.As.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.bs=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Sn(t),K.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.As.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.As.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),K.waitFor(s).next(()=>n)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){let r=this.As.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),K.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),K.resolve()}getMatchingKeysForTargetId(e,t){let r=this.vs.fs(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t){var r;this.Ps={},this.overlays={},this.Vs=new Q(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ry(this),this.indexManager=new rn,this.remoteDocumentCache=(r=e=>this.referenceDelegate.Cs(e),new rg(r)),this.serializer=new rt(t),this.xs=new rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new rm(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rw(this.Vs.next());return this.referenceDelegate.Ns(),r(n).next(e=>this.referenceDelegate.ks(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Os(e,t){return K.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class rw extends ${constructor(e){super(),this.currentSequenceNumber=e}}class rE{constructor(e){this.persistence=e,this.$s=new rd,this.Ms=null}static Fs(e){return new rE(e)}get Bs(){if(this.Ms)return this.Ms;throw w()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),K.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(e=>this.Bs.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Bs.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Bs,r=>{let n=q.fromPath(r);return this.Ls(e,n).next(e=>{e||t.removeEntry(n,F.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return K.or([()=>K.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=n}static Di(e,t){let r=tl(),n=tl();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rT(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,n){return this.Ni(e,t).next(s=>s||this.ki(e,t,n,r)).next(r=>r||this.Oi(e,t))}Ni(e,t){if(eZ(t))return K.resolve(null);let r=e3(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e3(t=e5(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let s=tl(...n);return this.xi.getDocuments(e,s).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let i=this.$i(t,n);return this.Mi(t,i,s,r.readTime)?this.Ni(e,e5(t,null,"F")):this.Fi(e,i,t,r)}))})))}ki(e,t,r,n){return eZ(t)||n.isEqual(F.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(s=>{let i=this.$i(t,s);return this.Mi(t,i,r,n)?this.Oi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e7(t)),this.Fi(e,i,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,s=F.fromTimestamp(1e9===n?new V(r+1,0):new V(r,n));return new B(s,q.empty(),-1)}(n,0)))})}$i(e,t){let r=new ee(tt(e));return t.forEach((t,n)=>{te(e,n)&&(r=r.add(n))}),r}Mi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Oi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e7(t)),this.xi.getDocumentsMatchingQuery(e,t,B.min())}Fi(e,t,r,n){return this.xi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t,r,n){this.persistence=e,this.Bi=t,this.serializer=n,this.Li=new X(R),this.qi=new tr(e=>eH(e),eY),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ru(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}async function r_(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,e.Gi(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let s=[],i=[],a=tl();for(let e of n)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({Qi:e,removedBatchIds:s,addedBatchIds:i}))})})}function rS(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}async function rA(e,t,r){let n=e,s=n.Li.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!G(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.Li=n.Li.remove(t),n.qi.delete(s.target)}function rN(e,t,r){let n=F.min(),s=tl();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,r){let n=e.qi.get(r);return void 0!==n?K.resolve(e.Li.get(n)):e.Ds.getTargetData(t,r)})(e,i,e3(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Ds.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.Bi.getDocumentsMatchingQuery(i,t,r?n:F.min(),r?s:tl())).next(r=>{var n;let i;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.Ui.get(n)||F.min(),r.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Ui.set(n,i),{documents:r,Wi:s}}))}class rk{constructor(){this.activeTargetIds=tu}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rD{constructor(){this.Br=new rk,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new rk,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.zr))e(0)}Qr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.zr))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rR=null;function rx(){return null===rR?rR=268435456+Math.round(2147483648*Math.random()):rR++,"0x"+rR.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rM="WebChannelConnection";class rO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,n,s){let i=rx(),a=this.ao(e,t);g("RestConnection",`Sending RPC '${e}' ${i}:`,a,r);let o={};return this.ho(o,n,s),this.lo(e,a,o,r).then(t=>(g("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",r),t})}fo(e,t,r,n,s,i){return this.co(e,t,r,n,s)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}ao(e,t){let r=rV[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,n){let s=rx();return new Promise((i,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(rM,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:g(rM,`RPC '${e}' ${s} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=o.getStatus();if(g(rM,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g(rM,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);g(rM,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}wo(e,t,r){let s=rx(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this.ho(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=i.join("");g(rM,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,f=!1,m=new rF({Wr:t=>{f?g(rM,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(d||(g(rM,`Opening RPC '${e}' stream ${s} transport.`),c.open(),d=!0),g(rM,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},Hr:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,u.ii.EventType.OPEN,()=>{f||g(rM,`RPC '${e}' stream ${s} transport opened.`)}),p(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,g(rM,`RPC '${e}' stream ${s} transport closed`),m.so())}),p(c,u.ii.EventType.ERROR,t=>{f||(f=!0,y(rM,`RPC '${e}' stream ${s} transport errored:`,t),m.so(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,u.ii.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||w();let a=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(a){g(rM,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tM(t)}(t),i=a.message;void 0===r&&(r=E.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,m.so(new T(r,i)),c.close()}else g(rM,`RPC '${e}' stream ${s} received:`,i),m.io(i)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(rM,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(rM,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function rP(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(e){return new tX(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t,r=1e3,n=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=n,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,n,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,r,n,s,i,a,o){this.Ws=e,this.bo=r,this.Po=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new rq(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Vo===t&&this.Ko(e,r)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)})})}Ko(e,t){let r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(e=>{r(()=>this.Go(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r$ extends rB{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:w(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.useProto3Json?(void 0===s||"string"==typeof s||w(),es.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||w(),es.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tM(e.code);return new T(t,e.message||"")}(l);r=new tz(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let s=t4(e,n.document.name),i=t0(n.document.updateTime),a=n.document.createTime?t0(n.document.createTime):F.min(),o=new ek({mapValue:{fields:n.document.fields}}),l=eD.newFoundDocument(s,i,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];r=new tB(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let s=t4(e,n.document),i=n.readTime?t0(n.readTime):F.min(),a=eD.newNoDocument(s,i),o=n.removedTargetIds||[];r=new tB([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let s=t4(e,n.document),i=n.removedTargetIds||[];r=new tB([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;let e=t.filter;e.targetId;let n=e.count||0,s=new tF(n),i=e.targetId;r=new t$(i,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return F.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?t0(t.readTime):F.min()}(e);return this.listener.zo(t,r)}jo(e){let t={};t.database=t9(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;return(r=eX(n)?{documents:{documents:[t3(e,n.path)]}}:{query:function(e,t){var r,n,s;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i.parent=t3(e,a),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=t3(e,a.popLast()),i.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eF?function(e){if("=="===e.op){if(e_(e.value))return{unaryFilter:{field:t6(e.field),op:"IS_NAN"}};if(eC(e.value))return{unaryFilter:{field:t6(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(e_(e.value))return{unaryFilter:{field:t6(e.field),op:"IS_NOT_NAN"}};if(eC(e.value))return{unaryFilter:{field:t6(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:t6(e.field),op:tH[e.op],value:e.value}}}(t):t instanceof eM?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:tY[t.op],filters:r}}}(t):w()}(eM.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:t6(e.field),direction:tW[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=(n=t.limit,e.useProto3Json||null==n?n:{value:n});return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?r.resumeToken=tZ(e,t.resumeToken):t.snapshotVersion.compareTo(F.min())>0&&(r.readTime=tJ(e,t.snapshotVersion.toTimestamp())),r}(this.serializer,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){let t={};t.database=t9(this.serializer),t.removeTarget=e,this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.eu=!1}nu(){if(this.eu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,s])=>this.connection.co(e,t,r,n,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}fo(e,t,r,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,t,r,s,i,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.eu=!0}}class rK{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(p(t),this.ru=!1):g("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(e=>{r.enqueueAndForget(async()=>{r0(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.du.add(4),await rj(e),e.mu.set("Unknown"),e.du.delete(4),await rQ(e)}(this))})}),this.mu=new rK(r,n)}}async function rQ(e){if(r0(e))for(let t of e.wu)await t(!0)}async function rj(e){for(let t of e.wu)await t(!1)}function rW(e,t){e.fu.has(t.targetId)||(e.fu.set(t.targetId,t),rZ(e)?rJ(e):r6(e).No()&&rY(e,t))}function rH(e,t){let r=r6(e);e.fu.delete(t),r.No()&&rX(e,t),0===e.fu.size&&(r.No()?r.$o():r0(e)&&e.mu.set("Unknown"))}function rY(e,t){e.gu.Ot(t.targetId),r6(e).jo(t)}function rX(e,t){e.gu.Ot(t),r6(e).Wo(t)}function rJ(e){e.gu=new tG({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),r6(e).start(),e.mu.ou()}function rZ(e){return r0(e)&&!r6(e).xo()&&e.fu.size>0}function r0(e){return 0===e.du.size}async function r1(e){e.fu.forEach((t,r)=>{rY(e,t)})}async function r2(e,t){e.gu=void 0,rZ(e)?(e.mu.au(t),rJ(e)):e.mu.set("Unknown")}async function r4(e,t,r){if(e.mu.set("Online"),t instanceof tz&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.fu.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.fu.delete(n),e.gu.removeTarget(n))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await r3(e,r)}else if(t instanceof tB?e.gu.Kt(t):t instanceof t$?e.gu.Jt(t):e.gu.zt(t),!r.isEqual(F.min()))try{let t=await rS(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.gu.Xt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.fu.get(n);s&&e.fu.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.fu.get(t);if(!r)return;e.fu.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),rX(e,t);let n=new re(r.target,t,1,r.sequenceNumber);rY(e,n)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await r3(e,t)}}async function r3(e,t,r){if(!G(t))throw t;e.du.add(1),await rj(e),e.mu.set("Offline"),r||(r=()=>rS(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.du.delete(1),await rQ(e)})}async function r9(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=r0(e);e.du.add(3),await rj(e),r&&e.mu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.du.delete(3),await rQ(e)}async function r5(e,t){t?(e.du.delete(2),await rQ(e)):t||(e.du.add(2),await rj(e),e.mu.set("Unknown"))}function r6(e){var t,r,n;return e.yu||(e.yu=(t=e.datastore,r=e.asyncQueue,n={Jr:r1.bind(null,e),Zr:r2.bind(null,e),zo:r4.bind(null,e)},t.nu(),new r$(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.wu.push(async t=>{t?(e.yu.Oo(),rZ(e)?rJ(e):e.mu.set("Unknown")):(await e.yu.stop(),e.gu=void 0)})),e.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,s){let i=Date.now()+r,a=new r8(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r7(e,t){if(p("AsyncQueue",`${t}: ${e}`),G(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=ti(),this.sortedSet=new X(this.comparator)}static emptySet(e){return new ne(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new ne;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.Iu=new X(q.comparator)}track(e){let t=e.doc.key,r=this.Iu.get(t);r?0!==e.type&&3===r.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==r.type?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Iu=this.Iu.remove(t):1===e.type&&2===r.type?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):w():this.Iu=this.Iu.insert(t,e)}Tu(){let e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class nr{constructor(e,t,r,n,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new nr(e,t,ne.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e6(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.Eu=void 0,this.listeners=[]}}class ns{constructor(){this.queries=new tr(e=>e8(e),e6),this.onlineState="Unknown",this.Au=new Set}}async function ni(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s||(n=!0,s=new nn),n)try{s.Eu=await e.onListen(r)}catch(r){let e=r7(r,`Initialization of query '${e7(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,s),s.listeners.push(t),t.Ru(e.onlineState),s.Eu&&t.vu(s.Eu)&&nu(e)}async function na(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s){let e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),n=0===s.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function no(e,t){let r=!1;for(let n of t){let t=n.query,s=e.queries.get(t);if(s){for(let e of s.listeners)e.vu(n)&&(r=!0);s.Eu=n}}r&&nu(e)}function nl(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function nu(e){e.Au.forEach(e=>{e.next()})}class nh{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nr(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){return!e.fromCache||(!this.options.xu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;let t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.key=e}}class nd{constructor(e){this.key=e}}class nf{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=tl(),this.mutatedKeys=tl(),this.Ku=tt(e),this.Gu=new ne(this.Ku)}get Qu(){return this.Lu}zu(e,t){let r=t?t.ju:new nt,n=t?t.Gu:this.Gu,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=te(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Wu(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.Ku(h,o)>0||l&&0>this.Ku(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),r.track({type:1,doc:e})}return{Gu:i,ju:r,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let s=e.ju.Tu();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return r(e)-r(t)})(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(r);let i=t?this.Ju():[],a=0===this.Uu.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==s.length||o)?{snapshot:new nr(this.query,e.Gu,n,s,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:i}:{Yu:i}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new nt,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.Uu;this.Uu=tl(),this.Gu.forEach(e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))});let t=[];return e.forEach(e=>{this.Uu.has(e)||t.push(new nd(e))}),this.Uu.forEach(r=>{e.has(r)||t.push(new nc(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=tl();let t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return nr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class nm{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ng{constructor(e){this.key=e,this.ec=!1}}class np{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new tr(e=>e8(e),e6),this.ic=new Map,this.rc=new Set,this.oc=new X(q.comparator),this.uc=new Map,this.cc=new rd,this.ac={},this.hc=new Map,this.lc=ra.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function ny(e,t){let r,n;let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=nE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nI.bind(null,t),t.nc.zo=no.bind(null,t.eventManager),t.nc.wc=nl.bind(null,t.eventManager),t}(e),i=s.sc.get(t);if(i)r=i.targetId,s.sharedClientState.addLocalQueryTarget(r),n=i.view.tc();else{let e=await function(e,t){let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Ds.getTargetData(e,t).next(s=>s?(n=s,K.resolve(n)):r.Ds.allocateTargetId(e).next(s=>(n=new re(t,s,0,e.currentSequenceNumber),r.Ds.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Li.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Li=r.Li.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}(s.localStore,e3(t));s.isPrimaryClient&&rW(s.remoteStore,e);let i=s.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,n=await nv(s,t,r,"current"===i,e.resumeToken)}return n}async function nv(e,t,r,n,s){e.dc=(t,r,n)=>(async function(e,t,r,n){let s=t.view.zu(r);s.Mi&&(s=await rN(e.localStore,t.query,!1).then(({documents:e})=>t.view.zu(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return nS(e,t.targetId,a.Yu),a.snapshot})(e,t,r,n);let i=await rN(e.localStore,t,!0),a=new nf(t,i.Wi),o=a.zu(i.documents),l=tq.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);nS(e,r,u.Yu);let h=new nm(t,r,a);return e.sc.set(t,h),e.ic.has(r)?e.ic.get(r).push(t):e.ic.set(r,[t]),u.snapshot}async function nw(e,t){let r=e.sc.get(t),n=e.ic.get(r.targetId);if(n.length>1)return e.ic.set(r.targetId,n.filter(e=>!e6(e,t))),void e.sc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rA(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),rH(e.remoteStore,r.targetId),nC(e,r.targetId)}).catch(z)):(nC(e,r.targetId),await rA(e.localStore,r.targetId,!0))}async function nE(e,t){try{let r=await function(e,t){let r=e,n=t.snapshotVersion,s=r.Li;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i;let a,o;let l=r.Ki.newChangeBuffer({trackRemovals:!0});s=r.Li;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=s.get(a);if(!l)return;u.push(r.Ds.removeMatchingKeys(e,i.removedDocuments,a).next(()=>r.Ds.addMatchingKeys(e,i.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?h=h.withResumeToken(es.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,n)),s=s.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(r.Ds.updateTargetData(e,h))});let h=tn,c=tl();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((i=t.documentUpdates,a=tl(),o=tl(),i.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=tn;return i.forEach((r,n)=>{let s=e.get(r);n.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(F.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!s.isValidDocument()||n.version.compareTo(s.version)>0||0===n.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",n.version)}),{zi:t,ji:o}})).next(e=>{h=e.zi,c=e.ji})),!n.isEqual(F.min())){let t=r.Ds.getLastRemoteSnapshotVersion(e).next(t=>r.Ds.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(t)}return K.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(r.Li=s,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.uc.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?n.ec=!0:t.modifiedDocuments.size>0?n.ec||w():t.removedDocuments.size>0&&(n.ec||w(),n.ec=!1))}),await nN(e,r,t)}catch(e){await z(e)}}function nT(e,t,r){let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let e=[];n.sc.forEach((r,n)=>{let s=n.view.Ru(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){let r=e;r.onlineState=t;let n=!1;r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Ru(t)&&(n=!0)}),n&&nu(r)}(n.eventManager,t),e.length&&n.nc.zo(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function nI(e,t,r){let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let s=n.uc.get(t),i=s&&s.key;if(i){let e=new X(q.comparator);e=e.insert(i,eD.newNoDocument(i,F.min()));let r=tl().add(i),s=new tU(F.min(),new Map,new ee(R),e,r);await nE(n,s),n.oc=n.oc.remove(i),n.uc.delete(t),nA(n)}else await rA(n.localStore,t,!1).then(()=>nC(n,t,r)).catch(z)}function nC(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(n),r&&e.nc.wc(n,r);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(t=>{e.cc.containsKey(t)||n_(e,t)})}function n_(e,t){e.rc.delete(t.path.canonicalString());let r=e.oc.get(t);null!==r&&(rH(e.remoteStore,r),e.oc=e.oc.remove(t),e.uc.delete(r),nA(e))}function nS(e,t,r){for(let n of r)n instanceof nc?(e.cc.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.oc.get(r)||e.rc.has(n)||(g("SyncEngine","New document in limbo: "+r),e.rc.add(n),nA(e))}(e,n)):n instanceof nd?(g("SyncEngine","Document no longer in limbo: "+n.key),e.cc.removeReference(n.key,t),e.cc.containsKey(n.key)||n_(e,n.key)):w()}function nA(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){var t;let r=e.rc.values().next().value;e.rc.delete(r);let n=new q(O.fromString(r)),s=e.lc.next();e.uc.set(s,new ng(n)),e.oc=e.oc.insert(n,s),rW(e.remoteStore,new re(e3((t=n.path,new eJ(t))),s,2,Q.ct))}}async function nN(e,t,r){let n=[],s=[],i=[];e.sc.isEmpty()||(e.sc.forEach((a,o)=>{i.push(e.dc(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=rT.Di(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.nc.zo(n),await async function(e,t){let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>K.forEach(t,t=>K.forEach(t.Vi,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>K.forEach(t.Si,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(e){if(!G(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=r.Li.get(t),n=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(n);r.Li=r.Li.insert(t,s)}}}(e.localStore,s))}async function nk(e,t){let r=e;if(!r.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let e=await r_(r.localStore,t);r.currentUser=t,r.hc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.hc.clear(),r.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nN(r,e.Qi)}}function nD(e,t){let r=e.uc.get(t);if(r&&r.ec)return tl().add(r.key);{let r=tl(),n=e.ic.get(t);if(!n)return r;for(let t of n){let n=e.sc.get(t);r=r.unionWith(n.view.Qu)}return r}}class nb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rU(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,s;return t=this.persistence,r=new rI,n=e.initialUser,s=this.serializer,new rC(t,r,n,s)}createPersistence(e){return new rv(rE.Fs,this.serializer)}createSharedClientState(e){return new rD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nL{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nT(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nk.bind(null,this.syncEngine),await r5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ns}createDatastore(e){var t,r,n;let s=rU(e.databaseInfo.databaseId),i=(t=e.databaseInfo,new rO(t));return r=e.authCredentials,n=e.appCheckCredentials,new rz(r,n,i,s)}createRemoteStore(e){var t,r,n,s,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,s=e=>nT(this.syncEngine,e,0),i=rL.D()?new rL:new rb,new rG(t,r,n,s,i)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new np(e,t,r,n,s,i);return a&&(o.fc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.du.add(5),await rj(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=L.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=r7(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nV(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await r_(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nF(e,t){e.asyncQueue.verifyOperationInProgress();let r=await nM(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>r9(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>r9(t.remoteStore,r)),e._onlineComponents=t}async function nM(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await nV(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await nV(e,new nb)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await nV(e,new nb)}return e._offlineComponents}async function nO(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await nF(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await nF(e,new nL))),e._onlineComponents}async function nP(e){let t=await nO(e),r=t.eventManager;return r.onListen=ny.bind(null,t.syncEngine),r.onUnlisten=nw.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nU=new Map;function nq(e){if(q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nB(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":w()}function n$(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=nB(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new T(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nz({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nz(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nU.get(e);t&&(g("ComponentProvider","Removing Datastore"),nU.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nj(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nG(this.firestore,e,this._key)}}class nQ{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nQ(this.firestore,e,this._query)}}class nj extends nQ{constructor(e,t,r){super(e,t,new eJ(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nG(this.firestore,null,new q(e))}withConverter(e){return new nj(this.firestore,e,this._path)}}function nW(e,t,...r){if(e=(0,l.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){if(!r)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof nK){let n=O.fromString(t,...r);return nq(n),new nj(e,null,n)}{if(!(e instanceof nG||e instanceof nj))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(O.fromString(t,...r));return nq(n),new nj(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new rq(this,"async_queue_retry"),this.qc=()=>{let e=rP();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};let e=rP();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;let t=rP();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});let t=new I;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!G(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){let t=this.Nc.then(()=>(this.Fc=!0,e().catch(e=>{let t;this.Mc=e,this.Fc=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Fc=!1,e))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);let n=r8.createAndSchedule(this,e,t,r,e=>this.Qc(e));return this.$c.push(n),n}Uc(){this.Mc&&w()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(let t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{for(let t of(this.$c.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.$c))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){let t=this.$c.indexOf(e);this.$c.splice(t,1)}}class nY extends nK{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new nH,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nJ(this),this._firestoreClient.terminate()}}function nX(e,t){let r="object"==typeof e?e:(0,i.Mq)(),n=(0,i.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,r,n={}){var s;let i=(e=n$(e,nK))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${r}`,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=c.MOCK_USER;else{t=(0,l.Sg)(n.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new c(i)}e._authCredentials=new S(new C(t,r))}}(n,...e)}return n}function nJ(e){var t,r,n,s,i,a;let o=e._freezeSettings(),l=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ec(s,i,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new nx(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.cache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.cache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nZ(es.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new nZ(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n4=/^__.*__$/;function n3(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class n9{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new n9(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:r,ta:!1});return n.ea(e),n}na(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:r,ta:!1});return n.Jc(),n}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return n7(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(n3(this.Yc)&&n4.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class n5{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rU(e)}ua(e,t,r,n=!1){return new n9({Yc:e,methodName:t,oa:r,path:U.emptyPath(),ta:!1,ra:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function n6(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof n2||e instanceof nZ||e instanceof nG||e instanceof n1)}let n8=RegExp("[~\\*/\\[\\]]");function n7(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nG(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new st(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sr("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class st extends se{data(){return super.data()}}function sr(e,t){return"string"==typeof t?function(e,t,r){if(t.search(n8)>=0)throw n7(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new n0(...t.split("."))._internalPath}catch(n){throw n7(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof n0?t._internalPath:t._delegate._internalPath}class sn{}class ss extends sn{}function si(e,t,...r){let n=[];for(let s of(t instanceof sn&&n.push(t),function(e){let t=e.filter(e=>e instanceof sl).length,r=e.filter(e=>e instanceof sa).length;if(t>1||t>0&&r>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=s._apply(e);return e}class sa extends ss{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sa(e,t,r)}_apply(e){let t=this._parse(e);return sc(e._query,t),new nQ(e.firestore,e.converter,e9(e._query,t))}_parse(e){let t=function(e){let t=e._freezeSettings(),r=rU(e._databaseId);return new n5(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore),r=function(e,t,r,n,s,i,a){let o;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){sh(a,i);let t=[];for(let r of a)t.push(su(n,e,r));o={arrayValue:{values:t}}}else o=su(n,e,a)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||sh(a,i),o=function(e,t,r,n=!1){return function e(t,r){if(n6(t=(0,l.m9)(t)))return function(e,t,r){if(!n6(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=nB(r);throw"an object"===n?t.ia(e+" a custom object"):t.ia(e+" "+n)}}("Unsupported field value:",r,t),function(t,r){let n={};return Y(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):H(t,(t,s)=>{let i=e(s,r.Xc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}(t,r);if(t instanceof n1)return function(e,t){if(!n3(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(t,r),null;if(void 0===t&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),t instanceof Array){if(r.settings.ta&&4!==r.Yc)throw r.ia("Nested arrays are not supported");return function(t,r){let n=[],s=0;for(let i of t){let t=e(i,r.sa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,r)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,s;return r=t.serializer,"number"==typeof(s=n=e)&&Number.isInteger(s)&&!j(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?tc(n):th(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=V.fromDate(e);return{timestampValue:tJ(t.serializer,r)}}if(e instanceof V){let r=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tJ(t.serializer,r)}}if(e instanceof n2)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof nZ)return{bytesValue:tZ(t.serializer,e._byteString)};if(e instanceof nG){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.ia(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:t1(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${nB(e)}`)}(t,r)}(r,e.ua(n?4:3,t))}(r,t,a,"in"===i||"not-in"===i);return eF.create(s,i,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function so(e,t,r){let n=sr("where",e);return sa._create(n,t,r)}class sl extends sn{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sl(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eM.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)sc(r,e),r=e9(r,e)}(e._query,t),new nQ(e.firestore,e.converter,e9(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function su(e,t,r){if("string"==typeof(r=(0,l.m9)(r))){if(""===r)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e2(t)&&-1!==r.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(O.fromString(r));if(!q.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eE(e,new q(n))}if(r instanceof nG)return eE(e,r._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nB(r)}.`)}function sh(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sc(e,t){if(t.isInequality()){let r=e1(e),n=t.field;if(null!==r&&!r.isEqual(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${n.toString()}'`);let s=e0(e);null!==s&&function(e,t,r){if(!r.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(0,n,s)}let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class sd{convertValue(e,t="none"){switch(em(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let r={};return H(e.fields,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new n2(eo(e.latitude),eo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return eu(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eh(e));default:return null}}convertTimestamp(e){let t=ea(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=O.fromString(e);t7(r)||w();let n=new ed(r.get(1),r.get(3)),s=new q(r.popFirst(5));return n.isEqual(t)||p(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sm extends se{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sr("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class sg extends sm{data(e={}){return super.data(e)}}class sp{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new sf(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sg(this._firestore,this._userDataWriter,r.key,r,new sf(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new sg(e._firestore,e._userDataWriter,r.doc.key,r.doc,new sf(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new sg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(i=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class sy extends sd{constructor(e){super(),this.firestore=e}convertBytes(e){return new nZ(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new nG(this.firestore,null,t)}}function sv(e){e=n$(e,nQ);let t=n$(e.firestore,nY),r=(t._firestoreClient||nJ(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new sy(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,s){let i=new nR({next:r=>{t.enqueueAndForget(()=>na(e,a)),r.fromCache&&"server"===n.source?s.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:e=>s.reject(e)}),a=new nh(r,i,{includeMetadataChanges:!0,xu:!0});return ni(e,a)})(await nP(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new sp(t,n,e,r)))}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:r,options:n})=>{let s=e.getProvider("app").getImmediate(),i=new nY(new A(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ed(e.options.projectId,t)}(s,r),s);return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.10.0",void 0),(0,i.KN)(h,"3.10.0","esm2017")}()}}]);