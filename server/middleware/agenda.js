const Organization = require('../models/Organization');
const Agenda = require('agenda');

const agenda = new Agenda({ db: { address: process.env.MONGO_URL } });

agenda.define('checkIsActive', async (job) => {
  const organization = await Organization.find({});

  for (const item of organization) {
    let dateNow = new Date();
    let difference = dateNow.getTime() - item.DateisActive.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    //console.log(TotalDays)
    if (TotalDays > 365) {
      const organization = await Organization.findOneAndUpdate(
        { DateisActive: item.DateisActive },
        { isActive: 'غير مرخصة' },
        { new: true, runValidators: true }
      );
    }
  }
});

module.exports = agenda;
