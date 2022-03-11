import Arun from '../image/Arun Mohan.png';
import Ashish from '../image/Ashish.png';
import Bala from '../image/Bala.png';
import Dinesh from '../image/Dinesh.png';
import Francis from '../image/profile.jpg';
import Kari from '../image/Kari.jpg';
import Keerthi from '../image/keerthi.jpg';
import Maneet from '../image/Maneet.png';
import Nakul from '../image/Nakul.png';
import Safi  from '../image/Safi.png';
import Sharang from '../image/Sharang.png';

const data = [
	
	{
		id: 1,
		name: 'Arun Mohan',
		dob:"01 July",
		gender: "Male",
		image: `${Arun}`		
	},
	{
		id: 2,
		name: 'Ashish Kumar Mupparam',
		dob:"25 August",
		gender: "Male",
		image: `${Ashish}`		
	},
	{
		id: 3,
		name: 'Balasubramanian V',
		dob:"30 November",
		gender: "Male",
		image: `${Bala}`		
	},
	{
		id: 4,
		name: 'Dinesh Senthilmurugan',
		dob:"07 November",
		gender: "Male",
		image: `${Dinesh}`		
	},
	{
		id: 5,
		name: 'Francis Cruz',
		dob:"11 March",
		gender: "Male",
		image: `${Francis}`		
	},
	{
		id: 6,
		name: 'Kari Kaliyaperumal',
		dob:"10 October",
		gender: "Male",
		image: `${Kari}`		
	},
	{
		id: 7,
		name: 'Keerthi Gunda',
		dob:"25 August",
		gender: "Female",
		image: `${Keerthi}`
	},
	{
		id: 8,
		name: 'Maneet Kaur',
		dob:"07 October",
		gender: "Female",
		image: `${Maneet}`
	},
	{
		id: 9,
		name: 'Nakul Pareek',
		dob:"07 October",
		gender: "Male",
		image: `${Nakul}`
	},
	{
		id: 10,
		name: 'Safiyullah S A',
		dob:"10 October",
		gender: "Male",
		image: `${Safi}`
	},
	{
		id: 11,
		name: 'Sharang Dixit',
		dob:"10 October",
		gender: "Male",
		image: `${Sharang}`
	},
	// {
	// 	id: 12,
	// 	name: 'Peter Jacob',
	// 	dob:"12 October",
	// 	age: 31,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 13,
	// 	name: 'Anjana Kothari',
	// 	dob:"12 October",
	// 	age: 20,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 14,
	// 	name: 'Jatin Ranganathan',
	// 	dob:"13 October",
	// 	age: 23,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 15,
	// 	name: 'Vicky Natarajan',
	// 	dob:"13 October",
	// 	age: 24,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 16,
	// 	name: 'Chirag Handa',
	// 	dob:"15 October",
	// 	age: 48,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 17,
	// 	name: 'Subhash Bava',
	// 	dob:"15 October",
	// 	age: 38,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 18,
	// 	name: 'Ranu Kumar',
	// 	dob:"16 October",
	// 	age: 26,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 19,
	// 	name: 'Alka Sami',
	// 	dob:"17 October",
	// 	age: 30,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 20,
	// 	name: 'Aishwarya',
	// 	dob:"17 October",
	// 	age: 32,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 21,
	// 	name: 'Pradeep Saxena',
	// 	dob:"21 October",
	// 	age: 29,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 22,
	// 	name: 'Shanti Bhatia',
	// 	dob:"21 October",
	// 	age: 20,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 23,
	// 	name: 'Kalyan Golla',
	// 	dob:"22 October",
	// 	age: 51,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 24,
	// 	name: 'Darpan Yogi',
	// 	dob:"23 October",
	// 	age: 52,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 25,
	// 	name: 'Parveen Nath',
	// 	dob:"23 October",
	// 	age: 37,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 26,
	// 	name: 'Virendra Kumar',
	// 	dob:"24 October",
	// 	age: 33,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 27,
	// 	name: 'Geetanjali Pillay',
	// 	dob:"26 October",
	// 	age: 34,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 28,
	// 	name: 'Sunita D’Alia',
	// 	dob:"26 October",
	// 	age: 22,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 29,
	// 	name: 'Sweta Mishra',
	// 	dob:"26 October",
	// 	age: 19,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 30,
	// 	name: 'David Grover',
	// 	dob:"29 October",
	// 	age: 25,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 31,
	// 	name: 'Rajendra Gulati',
	// 	dob:"29 October",
	// 	age: 25,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 32,
	// 	name: 'Aditi Sathe',
	// 	dob:"29 October",
	// 	age: 25,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 33,
	// 	name: 'Aadil Sehgal',
	// 	dob:"29 October",
	// 	age: 31,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 34,
	// 	name: 'Jiya Goda',
	// 	dob:"29 October",
	// 	age: 25,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 35,
	// 	name: 'Owais Tak',
	// 	dob:"29 October",
	// 	age: 20,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 36,
	// 	name: 'Gowri Bala',
	// 	dob:"29 October",
	// 	age: 22,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 37,
	// 	name: 'Mahmood Babu',
	// 	dob:"29 October",
	// 	age: 42,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 38,
	// 	name: 'Aniruddh Chana',
	// 	dob:"29 October",
	// 	age: 25,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },
	// {
	// 	id: 39,
	// 	name: 'Arun Kohli',
	// 	dob:"29 October",
	// 	age: 26,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },	
	// {
	// 	id: 40,
	// 	name: 'Shobha Bhatnagar',
	// 	dob:"29 October",
	// 	age: 27,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 41,
	// 	name: 'Nandini Wali',
	// 	dob:"29 October",
	// 	age: 29,
	// 	gender: "Female",
	// 	image: `${avtarFemale}`
	// },
	// {
	// 	id: 42,
	// 	name: 'Lakshmi Barad',
	// 	dob:"29 October",
	// 	age: 28,
	// 	gender: "Male",
	// 	image: `${avtarMale}`
	// },	
]

export default data;