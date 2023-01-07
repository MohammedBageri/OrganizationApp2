const multer = require('multer');
const storge = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, './public/upload-files/');
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + file.originalname.match(/\..*$/)[0]);
  },
});

const fileFilter = (req, file, cd) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
    cd(null, true);
  } else {
    cd(null, false);
  }
};
const upload = multer({ storage: storge, fileFilter: fileFilter }).any(['logo', 'OrganizationalChart']);
const uploadBond = multer({ storage: storge, fileFilter: fileFilter }).single('bond');
const uploadCertficate = multer({ storage: storge, fileFilter: fileFilter }).single('certficate');
const activityUpload = multer({ storage: storge, fileFilter: fileFilter }).single('activityUpload');

const bankUpload = multer({ storage: storge, fileFilter: fileFilter }).single('bankUpload');
const BoardOfTrusteUpload = multer({ storage: storge, fileFilter: fileFilter }).single('BoardOfTrusteUpload');
const employeeStatsUpload = multer({ storage: storge, fileFilter: fileFilter }).array('filesUpload',6);
const expenditureUpload = multer({ storage: storge, fileFilter: fileFilter }).single('expenditureUpload');
const founderUpload = multer({ storage: storge, fileFilter: fileFilter }).single('founderUpload');
const organizationGoalUpload = multer({ storage: storge, fileFilter: fileFilter }).single('organizationGoalUpload');

const projectUpload = multer({ storage: storge, fileFilter: fileFilter }).single('projectUpload');
const organizationRegulationUpload = multer({ storage: storge, fileFilter: fileFilter }).single(
  'organizationRegulationUpload'
);
const oversightCommitteUpload = multer({ storage: storge, fileFilter: fileFilter }).single('oversightCommitteUpload');
const peopleAndSupportingStationUpload = multer({ storage: storge, fileFilter: fileFilter }).single(
  'peopleAndSupportingStationUpload'
);
const projectsByPeopleUpload = multer({ storage: storge, fileFilter: fileFilter }).single('projectsByPeopleUpload');
const revenueUpload = multer({ storage: storge, fileFilter: fileFilter }).single('revenueUpload');
const standingCommitteUpload = multer({ storage: storge, fileFilter: fileFilter }).single('standingCommitteUpload');


module.exports = {
  upload,
  uploadBond,
  uploadCertficate,
  activityUpload,
  bankUpload,
  BoardOfTrusteUpload,
  expenditureUpload,
  founderUpload,
  organizationGoalUpload,
  projectUpload,
  organizationRegulationUpload,
  oversightCommitteUpload,
  peopleAndSupportingStationUpload,
  projectsByPeopleUpload,
  revenueUpload,
  standingCommitteUpload,
  employeeStatsUpload,
 
};
