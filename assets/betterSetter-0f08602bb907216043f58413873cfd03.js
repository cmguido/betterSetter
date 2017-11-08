"use strict"
define("betterSetter/adapters/application",["exports","betterSetter/config/environment","active-model-adapter","ember"],function(e,t,n,a){e.default=n.default.extend({host:t.default.apiHost,auth:a.default.inject.service(),headers:a.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token")
return t&&(e.Authorization="Token token="+t),e}})})}),define("betterSetter/app",["exports","ember","betterSetter/resolver","ember-load-initializers","betterSetter/config/environment"],function(e,t,n,a,s){var l=void 0
t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix,Resolver:n.default}),(0,a.default)(l,s.default.modulePrefix),e.default=l}),define("betterSetter/components/change-password-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],passwords:{},actions:{submit:function(){this.sendAction("submit",this.get("passwords"))},reset:function(){this.set("passwords",{})}}})}),define("betterSetter/components/edit-workout",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{editWorkout:function(e){this.sendAction("editWorkout",this.get("exercise")),this.set("exercise")}}})}),define("betterSetter/components/email-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("betterSetter/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("betterSetter/components/hamburger-menu",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"button",classNames:["navbar-toggle","collapsed"],attributeBindings:["toggle:data-toggle","target:data-target","expanded:aria-expanded"],toggle:"collapse",target:"#navigation",expanded:!1})}),define("betterSetter/components/my-application",["exports","ember"],function(e,t){e.default=t.default.Component.extend({auth:t.default.inject.service(),user:t.default.computed.alias("auth.credentials.email"),isAuthenticated:t.default.computed.alias("auth.isAuthenticated"),actions:{signOut:function(){this.sendAction("signOut")}}})}),define("betterSetter/components/navbar-header",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["navbar-header"]})}),define("betterSetter/components/password-confirmation-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("betterSetter/components/password-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("betterSetter/components/sign-in-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("betterSetter/components/sign-up-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],credentials:{},actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("betterSetter/components/workout-form",["exports","ember"],function(e,t){e.default=t.default.Component.extend({flashMessages:t.default.inject.service(),newWorkout:{date:null,workout:null,amount:null,reps:null,time:null,hidden:!1},actions:{createWorkout:function(){this.sendAction("createWorkout",this.get("newWorkout")),this.set("newWorkout.date",null),this.set("newWorkout.workout",null),this.set("newWorkout.amount",null),this.set("newWorkout.reps",null),this.set("newWorkout.time",null)}}})}),define("betterSetter/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("betterSetter/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("betterSetter/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("betterSetter/helpers/app-version",["exports","ember","betterSetter/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,a){function s(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
return t.hideSha?l.match(a.versionRegExp)[0]:t.hideVersion?l.match(a.shaRegExp)[0]:l}e.appVersion=s
var l=n.default.APP.version
e.default=t.default.Helper.helper(s)}),define("betterSetter/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("betterSetter/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("betterSetter/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,n){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",n.default)}}}),define("betterSetter/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","betterSetter/config/environment"],function(e,t,n){var a=n.default.APP,s=a.name,l=a.version
e.default={name:"App Version",initialize:(0,t.default)(s,l)}}),define("betterSetter/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("betterSetter/initializers/data-adapter",["exports"],function(e){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("betterSetter/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("betterSetter/initializers/export-application-global",["exports","ember","betterSetter/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var s,l=n.default.exportApplicationGlobal
s="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),a[s]||(a[s]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[s]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("betterSetter/initializers/flash-messages",["exports","ember","betterSetter/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0],t=n.default||{},a=t.flashMessageDefaults,i=a||[],u=i.injectionFactories,c=l(o,a),d=!(u&&u.length)
e.register("config:flash-messages",c,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),s(r,d,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),c.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=a
var s=t.default.deprecate,l=t.default.assign||t.default.merge,r="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",o={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1}
e.default={name:"flash-messages",initialize:a}}),define("betterSetter/initializers/injectStore",["exports"],function(e){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("betterSetter/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("betterSetter/initializers/store",["exports"],function(e){e.default={name:"store",after:"ember-data",initialize:function(){}}})
define("betterSetter/initializers/text-field",["exports","ember"],function(e,t){function n(){t.default.TextField.reopen({classNames:["form-control"]})}e.initialize=n,e.default={name:"text-field",initialize:n}}),define("betterSetter/initializers/transforms",["exports"],function(e){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("betterSetter/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("betterSetter/models/exercise",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({date:t.default.attr("string"),workout:t.default.attr("string"),amount:t.default.attr("string"),reps:t.default.attr("string"),time:t.default.attr("string"),user:t.default.belongsTo("user")})}),define("betterSetter/models/user",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({email:t.default.attr("string"),exercises:t.default.hasMany("exercise")})}),define("betterSetter/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("betterSetter/router",["exports","ember","betterSetter/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType})
a.map(function(){this.route("sign-up"),this.route("sign-in"),this.route("change-password"),this.route("exercises"),this.route("about"),this.route("exercise",{path:"exercises/:exercise_id"}),this.route("search")}),e.default=a}),define("betterSetter/routes/about",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("exercise")},actions:{createWorkout:function(e){this.get("store").createRecord("exercise",e).save()},deleteWorkout:function(e){e.destroyRecord()}}})}),define("betterSetter/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signOut:function(){var e=this
this.get("auth").signOut().then(function(){return e.get("store").unloadAll()}).then(function(){return e.transitionTo("sign-in")}).then(function(){e.get("flashMessages").warning("You have been signed out.")}).catch(function(){e.get("flashMessages").danger("There was a problem. Are you sure you're signed-in?")})},error:function(e){return e.errors&&e.errors.some(function(e){return"401"===e.status})?(this.get("flashMessages").danger("You must be authenticated to access this page."),this.transitionTo("/sign-in")):this.get("flashMessages").danger("There was a problem. Please try again."),!1}}})}),define("betterSetter/routes/change-password",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{changePassword:function(e){var t=this
this.get("auth").changePassword(e).then(function(){return t.get("auth").signOut()}).then(function(){return t.transitionTo("sign-in")}).then(function(){t.get("flashMessages").success("Successfully changed your password!")}).then(function(){t.get("flashMessages").warning("You have been signed out.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("betterSetter/routes/exercise",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(e){return this.get("store").findRecord("exercise",e.exercise_id)},actions:{deleteWorkout:function(){var e=this
this.currentModel.destroyRecord().then(function(){return e.transitionTo("exercises")}).then(function(){return e.get("flashMessages").success("Workout deleted")}).catch(function(){return e.get("flashMessages").danger("There was a problem. Please try again.")})},editWorkout:function(){var e=this
this.currentModel.save().then(function(){return e.get("flashMessages").success("Workout edited")}).catch(function(){return e.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("betterSetter/routes/exercises",["exports","ember"],function(e,t){e.default=t.default.Route.extend({flashMessages:t.default.inject.service(),model:function(){return this.get("store").findAll("exercise")},actions:{createWorkout:function(e){var t=this
this.get("store").createRecord("exercise",e).save().then(function(){return t.get("flashMessages").success("Workout created!")}).catch(function(){return t.get("flashMessages").danger("There was a problem. Please try again.")})},deleteWorkout:function(e){e.destroyRecord()}}})}),define("betterSetter/routes/search",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),user:t.default.computed.alias("auth.credentials.email"),isAuthenticated:t.default.computed.alias("auth.isAuthenticated"),activate:function(){this.get("isAuthenticated")?this.transitionTo("search"):this.transitionTo("sign-in")}})}),define("betterSetter/routes/sign-in",["exports","ember","rsvp"],function(e,t,n){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),model:function(){return n.default.Promise.resolve({})},actions:{signIn:function(e){var t=this
return this.get("auth").signIn(e).then(function(){return t.transitionTo("exercises")}).then(function(){return t.get("flashMessages").success("Thanks for signing in!")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("betterSetter/routes/sign-up",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signUp:function(e){var t=this
this.get("auth").signUp(e).then(function(){return t.get("auth").signIn(e)}).then(function(){return t.transitionTo("exercises")}).then(function(){t.get("flashMessages").success("Successfully signed-up! You have also been signed-in.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("betterSetter/routes/users",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("user")}})}),define("betterSetter/serializers/application",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})}),define("betterSetter/services/ajax",["exports","ember","ember-ajax/services/ajax","betterSetter/config/environment"],function(e,t,n,a){e.default=n.default.extend({host:a.default.apiHost,auth:t.default.inject.service(),headers:t.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token")
return t&&(e.Authorization="Token token="+t),e}})})}),define("betterSetter/services/auth",["exports","ember","ember-local-storage"],function(e,t,n){e.default=t.default.Service.extend({ajax:t.default.inject.service(),credentials:(0,n.storageFor)("auth"),isAuthenticated:t.default.computed.bool("credentials.token"),signUp:function(e){return this.get("ajax").post("/sign-up",{data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})},signIn:function(e){var t=this
return this.get("ajax").post("/sign-in",{data:{credentials:{email:e.email,password:e.password}}}).then(function(e){t.get("credentials").set("id",e.user.id),t.get("credentials").set("email",e.user.email),t.get("credentials").set("token",e.user.token)})},changePassword:function(e){return this.get("ajax").patch("/change-password/"+this.get("credentials.id"),{data:{passwords:{old:e.previous,new:e.next}}})},signOut:function(){var e=this
return this.get("ajax").del("/sign-out/"+this.get("credentials.id")).finally(function(){return e.get("credentials").reset()})}})}),define("betterSetter/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("betterSetter/storages/auth",["exports","ember-local-storage/local/object"],function(e,t){e.default=t.default.extend({})}),define("betterSetter/templates/about",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"7U+JjbEd",block:'{"statements":[["open-element","h1",[]],["flush-element"],["text","About"],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","betterSetter is an app built to track progress during different work-out phases. Mark down when and what you did so you can easily call up your last workout to get a better set every week."],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/about.hbs"}})}),define("betterSetter/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"QctxAv6Z",block:'{"statements":[["append",["helper",["my-application"],null,[["signOut"],["signOut"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/application.hbs"}})}),define("betterSetter/templates/change-password",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"uBx1fhCW",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Change Password"],["close-element"],["text","\\n\\n"],["append",["helper",["change-password-form"],null,[["submit"],["changePassword"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/change-password.hbs"}})}),define("betterSetter/templates/components/change-password-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"tyE5xfwD",block:'{"statements":[["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","previous"],["flush-element"],["text","Old Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","previous","Old password",["get",["passwords","previous"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","next"],["flush-element"],["text","New Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","next","New password",["get",["passwords","next"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Change Password\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/change-password-form.hbs"}})}),define("betterSetter/templates/components/edit-workout",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"9w0W49Nz",block:'{"statements":[],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/edit-workout.hbs"}})}),define("betterSetter/templates/components/email-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"O+ZVg3Xe",block:'{"statements":[["open-element","label",[]],["static-attr","for","email"],["flush-element"],["text","Email"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["email","email","Email",["get",["email"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/email-input.hbs"}})}),define("betterSetter/templates/components/hamburger-menu",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vGmzWYGY",block:'{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","sr-only"],["flush-element"],["text","Toggle navigation"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/hamburger-menu.hbs"}})}),define("betterSetter/templates/components/my-application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"C7BwfzJh",block:'{"statements":[["open-element","nav",[]],["static-attr","class","navbar navbar-expand-lg navbar-dark indigo"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["append",["unknown",["navbar-header"]],false],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","collapse navbar-collapse"],["static-attr","id","navigation"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,9],["text","      "],["close-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav navbar-right"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,5,3],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","h1",[]],["flush-element"],["text","betterSetter"],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["flashMessages","queue"]]],null,0],["text","\\n"],["open-element","div",[]],["static-attr","class","col-md-8 col-md-offset-2"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["append",["helper",["flash-message"],null,[["flash"],[["get",["flash"]]]]],false],["text","\\n"]],"locals":["flash"]},{"statements":[["text","Sign In"]],"locals":[]},{"statements":[["text","Sign Up"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-up"],null,2],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-in"],null,1],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Change Password"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["change-password"],null,4],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","a",[]],["static-attr","href","#"],["modifier",["action"],[["get",[null]],"signOut"]],["flush-element"],["text","Sign Out"],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Search"]],"locals":[]},{"statements":[["text","About"]],"locals":[]},{"statements":[["text","Exercises"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["exercises"],null,8],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["about"],null,7],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["search"],null,6],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/my-application.hbs"}})}),define("betterSetter/templates/components/navbar-header",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"nQ71jaEX",block:'{"statements":[["append",["unknown",["hamburger-menu"]],false],["text","\\n"],["block",["link-to"],["application"],[["class"],["navbar-brand"]],0],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","strong",[]],["flush-element"],["text","betterSetter💪"],["close-element"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/navbar-header.hbs"}})})
define("betterSetter/templates/components/password-confirmation-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"R452K1KB",block:'{"statements":[["open-element","label",[]],["static-attr","for","password-confirmation"],["flush-element"],["text","Password Confirmation"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password-confirmation","Password Confirmation",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/password-confirmation-input.hbs"}})}),define("betterSetter/templates/components/password-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"yTguXAav",block:'{"statements":[["open-element","label",[]],["static-attr","for","kind"],["flush-element"],["text","Password"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password","Password",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/password-input.hbs"}})}),define("betterSetter/templates/components/sign-in-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"AOUTyE6J",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign In\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/sign-in-form.hbs"}})}),define("betterSetter/templates/components/sign-up-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"VWX/B1uW",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n"],["append",["helper",["password-confirmation-input"],null,[["password"],[["get",["credentials","passwordConfirmation"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign Up\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/sign-up-form.hbs"}})}),define("betterSetter/templates/components/workout-form",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"cCtA2zCO",block:'{"statements":[["open-element","h1",[]],["static-attr","class","work"],["flush-element"],["text","Workout"],["close-element"],["text","\\n"],["open-element","form",[]],["modifier",["action"],[["get",[null]],"createWorkout"],[["on"],["submit"]]],["flush-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","placeholder","value","required"],["date","Date dd/mm/yyyy",["get",["newWorkout","date"]],"required"]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value","required"],["Day`s workout, i.e. chest, legs etc",["get",["newWorkout","workout"]],"required"]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Amount, i.e. weight, distance",["get",["newWorkout","amount"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["How many reps or laps",["get",["newWorkout","reps"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Time of workout",["get",["newWorkout","time"]]]]],false],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-danger"],["static-attr","type","reset"],["flush-element"],["text","Reset"],["close-element"],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-success"],["static-attr","type","submit"],["flush-element"],["text","Enter Workout"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/components/workout-form.hbs"}})}),define("betterSetter/templates/exercise",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"zNZOEh8v",block:'{"statements":[["open-element","h3",[]],["flush-element"],["text","Date: "],["append",["unknown",["model","date"]],false],["append",["helper",["input"],null,[["type","placeholder","value"],["date",["get",["model","date"]],["get",["model","date"]]]]],false],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","Workout"],["append",["helper",["input"],null,[["value"],[["get",["model","workout"]]]]],false],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","Amount"],["append",["helper",["input"],null,[["value"],[["get",["model","amount"]]]]],false],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","Reps"],["append",["helper",["input"],null,[["value"],[["get",["model","reps"]]]]],false],["close-element"],["text","\\n"],["open-element","h3",[]],["flush-element"],["text","Time"],["append",["helper",["input"],null,[["value"],[["get",["model","time"]]]]],false],["close-element"],["text","\\n"],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","button",[]],["static-attr","class","btn btn-danger"],["modifier",["action"],[["get",[null]],"deleteWorkout"]],["flush-element"],["text","Delete"],["close-element"],["text","\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-warning"],["modifier",["action"],[["get",[null]],"editWorkout"]],["flush-element"],["text","Save"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/exercise.hbs"}})}),define("betterSetter/templates/exercises",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"3eRIrO4p",block:'{"statements":[["text","\\n\\n"],["append",["helper",["workout-form"],null,[["createWorkout"],["createWorkout"]]],false],["text","\\n"],["open-element","h2",[]],["static-attr","class","past"],["flush-element"],["text","Past Workouts:"],["close-element"],["text","\\n"],["open-element","section",[]],["flush-element"],["text","\\n"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["model"]]],null,1],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text"," "],["open-element","h3",[]],["flush-element"],["text","📅 "],["append",["unknown",["exercise","date"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["block",["link-to"],["exercise",["get",["exercise"]]],null,0]],"locals":["exercise"]}],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/exercises.hbs"}})}),define("betterSetter/templates/search",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wfa2Ean1",block:'{"statements":[["open-element","h3",[]],["flush-element"],["text","Search Exercises"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","script",[]],["flush-element"],["text","\\n  (function() {\\n    var cx = \'013534363753203501291:cwhdxqjcrk8\';\\n    var gcse = document.createElement(\'script\');\\n    gcse.type = \'text/javascript\';\\n    gcse.async = true;\\n    gcse.src = \'https://cse.google.com/cse.js?cx=\' + cx;\\n    var s = document.getElementsByTagName(\'script\')[0];\\n    s.parentNode.insertBefore(gcse, s);\\n  })();\\n"],["close-element"],["text","\\n"],["open-element","gcse:search",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","div",[]],["flush-element"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/search.hbs"}})}),define("betterSetter/templates/sign-in",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Bk4LcuQJ",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign In"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-in-form"],null,[["submit","reset","credentials"],["signIn","reset",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/sign-in.hbs"}})}),define("betterSetter/templates/sign-up",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"1hy+KF+y",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign Up"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-up-form"],null,[["submit"],["signUp"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/sign-up.hbs"}})}),define("betterSetter/templates/users",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8ViM3qb2",block:'{"statements":[],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"betterSetter/templates/users.hbs"}})}),define("betterSetter/config/environment",[],function(){try{var e="betterSetter/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n=JSON.parse(unescape(t)),a={default:n}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("betterSetter/app").default.create({name:"betterSetter",version:"0.0.0+"})