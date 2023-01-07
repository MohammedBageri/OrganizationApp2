const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');

const {
  upload,
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
} = require('../middleware/upload');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const {
  getAllOrganizations,
  getSingleOrganization,
  deleteOrganization,
  createOrganization,
  updateOrganization,
  Counter,
  newActivities,
  getOrganizationByEmail,
  newOrganizationProject,
  newOrganizationRegulation,
  newOversightCommitte,
  newPeopleAndSupporting,
  newProjectsByPeople,
  newRevenue,
  newStandingCommitte,
  newBankAccount,
  newBoardOfTruste,
  newEmployeeStats,
  newExpenditure,
  newFounder,
  newOrganizationGoal
} = require('../controllers/OrganizationController');

router.route('/').get(getAllOrganizations).post(upload,createOrganization);
router.route('/new_activity/:id').patch(activityUpload, newActivities);
router.route('/new_organizationProject/:id').patch(projectUpload, newOrganizationProject);
router.route('/new_organizationRegulation/:id').patch(organizationRegulationUpload, newOrganizationRegulation);
router.route('/new_oversightCommitte/:id').patch(oversightCommitteUpload, newOversightCommitte);
router.route('/new_peopleAndSupporting/:id').patch(peopleAndSupportingStationUpload, newPeopleAndSupporting);
router.route('/new_projectsByPeople/:id').patch(projectsByPeopleUpload, newProjectsByPeople);
router.route('/new_standingCommitte/:id').patch(standingCommitteUpload, newStandingCommitte);
router.route('/new_revenue/:id').patch(revenueUpload, newRevenue);
router.route('/new_bankAccount/:id').patch(bankUpload, newBankAccount);
router.route('/new_boardOfTruste/:id').patch(BoardOfTrusteUpload,newBoardOfTruste);
router.route('/new_employeeStats/:id').patch(employeeStatsUpload, newEmployeeStats);
router.route('/new_expenditure/:id').patch(expenditureUpload,newExpenditure);
router.route('/new_founder/:id').patch(founderUpload, newFounder);
router.route('/new_organizationGoal/:id').patch(organizationGoalUpload, newOrganizationGoal);
router.route('/Counter').get(Counter);
router.route('/:id').get(getSingleOrganization);
router.route('/getOrganizationByEmail/:email').get(getOrganizationByEmail);
router.route('/:id').delete(deleteOrganization).patch(upload,updateOrganization);

module.exports = router;
