const sendEmail = require('./sendEmail');

const sendEmailOrder = async ({
  email,
  messageEn ,
  messageAr
}) => {
  
  return sendEmail({
    to: email,
    subject: 'Order Confirmation',
    html: `${messageEn} <br><br>
   ${messageAr}
   `,
  });
};

module.exports = sendEmailOrder;
 