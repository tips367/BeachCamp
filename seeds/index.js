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
			author: '610970842249231ab85aa57d',
			location: `${cities[random].city}, ${cities[random].admin_name}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eaque temporibus, veniam eos veritatis qui! Exercitationem eos similique velit repudiandae ex totam expedita doloremque ullam, inventore accusamus quia atque voluptatum.',
			price,
			geometry: {
				type: 'Point',
				coordinates: [ `${cities[random].lng}`, `${cities[random].lat}` ]
			},
			images: [
				{
					url:
						'https://res.cloudinary.com/davodacdr/image/upload/v1628266146/BeachCamp/fuq70ihrfwav0az8q0du.jpg',
					filename: 'BeachCamp/fuq70ihrfwav0az8q0du'
				},
				{
					url:
						'https://res.cloudinary.com/davodacdr/image/upload/v1628266144/BeachCamp/btk6qbvkuxad9oi7l6uy.jpg',
					filename: 'BeachCamp/btk6qbvkuxad9oi7l6uy'
				}
			]
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
