module.exports = {
  host: 'smtp.ethereal.email',
  port: 587,
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