$(function () {
	// Собственно, наша приложуха
	WebApp = {
		init: function() {
			this.initPlugins();
			this.initEventBindings();
		},

		initPlugins: function() {
			return this;
		},

		initEventBindings: function() {
			return this;
		};
	}

	WebApp.init();
});