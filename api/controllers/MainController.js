var MainController = {
	test: function (req, res){
		res.view();
	},

	user: function (req, res){
		res.view({name: "fuck yeah!"});
	}
};

module.exports = MainController;
