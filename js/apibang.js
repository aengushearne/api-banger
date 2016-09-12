new Vue({
  el: '#app',
 		  data: {
 		  	showMeUr: [],
 		  	ajaxUrl: '',
  },
  methods: { 
  		dialAPI: function () {
        var self = this;
        $.ajax({
            url: this.ajaxUrl,
            dataType: "json",
            success: function (data) {
                self.showMeUr = data;
            },
            error: function (error) {
                self.showMeUr = error;
            }
        });
    }

	}

})