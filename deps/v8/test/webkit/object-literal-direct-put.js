// Copyright 2013 the V8 project authors. All rights reserved.
// Copyright (C) 2005, 2006, 2007, 2008, 2009 Apple Inc. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1.  Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
// 2.  Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

description("This test ensures that properties on an object literal are put directly onto the created object, and don't call setters in the prototype chain.");

shouldBeTrue("({a:true}).a");
shouldBeTrue("({__proto__: {a:false}, a:true}).a");
shouldBeTrue("({__proto__: {set a(v) {throw new Error('Should not call setter'; }}, a:true}).a"));
shouldBeTrue("({__proto__: {get a() {throw new Error('Should not reach getter'; }}, a:true}).a"));
shouldBeTrue("({__proto__: {get a() {throw new Error('Should not reach getter'; }, b:true}, a:true}).b"));

shouldBeTrue("({__proto__: {__proto__: {a:false}}, a:true}).a");
shouldBeTrue("({__proto__: {__proto__: {set a(v) {throw new Error('Should not call setter'; }}}, a:true}).a"));
shouldBeTrue("({__proto__: {__proto__: {get a() {throw new Error('Should not reach getter'; }}}, a:true}).a"));
shouldBeTrue("({__proto__: {__proto__: {get a() {throw new Error('Should not reach getter'; }, b:true}}, a:true}).b"));
