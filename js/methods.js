define([
    'jquery'
], function($) {
    'use strict';
    var methods = {};
    methods.sayHello = function() {
        $('body').html('Hello World');
    }
    
    methods.sayBye = function(){
        $('body').html('Bye World!!!');
    }

    return methods
    
});

