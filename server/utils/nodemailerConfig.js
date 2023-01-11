module.exports = {
  service: 'Zoho',
  // port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
};

// module.exports = {
//   service: 'gmail',
// 		auth: {
// 			user: '',
// 			pass: '',
// 		},
// }
