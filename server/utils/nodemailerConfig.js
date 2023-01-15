module.exports = {
  service: 'Zoho',
  //port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
    // user:'novelsoft.test.mail@zohomail.com',
    // pass:'A@123a@123',
  },
};
