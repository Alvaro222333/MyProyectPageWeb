"use-strict"
angular
	.module("App", [
		//bower modules
		"angular-confirm",
		"ngAnimate",
		"ngCookies",
		"ngIdle",
		"ngMaterial",
		"ngResource",
		"ngRoute",
		"ngSanitize",
		"ui.bootstrap",
		"ui.router",
		//Custome modules
		"home",
		"student",
		"classlist",
		"course",
		"dashboard",
		
		"subjectlist",
		"subject",
		"teacher",
		"teacherlist",
	])
	.controller("AppCtrl", ["$scope",
		function ($scope) {
			// bool hide = true;
			$scope.hide = true;
		}
	])
	.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("home", {
					url: "/home",
					template: "<home></home>"
				})
				.state("student", {
					url: "/student",
					template: "<student></student>"
				})
				.state("classlist", {
					url: "/classlist",
					template: "<classlist></classlist>"
				})
				.state("course", {
					url: "/course",
					template: "<course></course>"
				})
				.state("dashboard", {
					url: "/dashboard",
					template: "<dashboard></dashboard>"
				})
				
				.state("subjectlist", {
					url: "/subjectlist",
					template: "<subjectlist></subjectlist>"
				})
				.state("subject", {
					url: "/subject",
					template: "<subject></subject>"
				})
				.state("teacher", {
					url: "/teacher",
					template: "<teacher></teacher>"
				})
				.state("teacherlist", {
					url: "/teacherlist",
					template: "<teacherlist></teacherlist>"
				})


			$urlRouterProvider.otherwise("/dashboard")
		}
	])
	.service("Api", ["$resource",
		function ($resource) {
			this.student = $resource("../api/student", null, {
				"get": { method: "GET" },
				"post": { method: "POST" },
				"put": { method: "PUT" },
				"delete": { method: "DELETE" }
			});
			this.course = $resource("../api/course", null, {
				"get": { method: "GET" },
				"post": { method: "POST" },
				"put": { method: "PUT" },
				"delete": { method: "DELETE" }
			});
			this.subject = $resource("../api/subject", null, {
				"get": { method: "GET" },
				"post": { method: "POST" },
				"put": { method: "PUT" },
				"delete": { method: "DELETE" }
			});
			this.teacher = $resource("../api/teacher", null, {
				"get": { method: "GET" },
				"post": { method: "POST" },
				"put": { method: "PUT" },
				"delete": { method: "DELETE" }
			});
		}
	]);