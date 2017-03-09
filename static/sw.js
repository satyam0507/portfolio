//    Copyright 2017 Satyam Singh
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict';

 var ver ='0.0.0';
importScripts('compiled/js/notify-sw.js');

var config = {
    cache: {
        name: "notify-cache",
        maxAge: 604800,
        maxLimit: 10000
    },
    preCache: [
        '/',
        'compiled/css/main.css',
        'compiled/js/main.js',
        '/anything'
    ],
    defaultHandler: "fastest",
    navigationFallBack:'/anything'
}
// console.log('i am service worker');

notify.init(config);