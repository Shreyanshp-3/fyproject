const mongoose = require("mongoose");

module.exports =  () => {
	const connectionParams = {
		// useNewUrlParser: true, // Deprecated, but still supported for backward compatibility
		// useUnifiedTopology: true, // Use the new server discovery and monitoring engine
		// useCreateIndex: true, // Recommended to avoid deprecation warnings for `ensureIndex`
		// useFindAndModify: false, // Recommended to use `findOneAndUpdate` and `findOneAndDelete` instead

		// no need of these cause mongo db will do itself
		// using these createing unnecessary warnings so commmneted to get 
		// rid of the warnings
	};

	try {
		 mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to the database successfully");
	} catch (error) {
		console.error("Error connecting to the database:", error.message);
	}
};
