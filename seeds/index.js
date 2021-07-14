const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/beach-camp', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '"connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 187; i++) {
		const random = Math.floor(Math.random() * 187);
		const price = Math.floor(Math.random() * 1200);
		const camp = new Campground({
			location: `${cities[random].city}, ${cities[random].admin_name}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			image: 'https://source.unsplash.com/collection/483251/',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eaque temporibus, veniam eos veritatis qui! Exercitationem eos similique velit repudiandae ex totam expedita doloremque ullam, inventore accusamus quia atque voluptatum.',
			price
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
