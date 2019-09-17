var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var blogSchema = new mongoose.Schema({
	company: String,
	title: String,
	image: String, //{ type: String, default: placeholder.jpg }
	location: String,
	Experience:  String,

	body: String,
		created: { type: Date, default: Date.now },
		author: [{
	     id: {
	       type: mongoose.Schema.Types.ObjectId,
	       ref: "User"
	     },
	    //  username: String,
}]
});
module.exports = mongoose.model("Blog",blogSchema);
