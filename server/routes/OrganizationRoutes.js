const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const permissions = require('../utils/permission');
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

const { authenticateUser,checkAuthenticateUser, authorizePermissions ,permissionsUser } = require('../middleware/authentication');
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
  newOrganizationGoal ,
  updateNewActivities,
  updateNewOrganizationProject,
  updateNewOrganizationRegulation,
  updateNewOversightCommitte,
  updateNewPeopleAndSupporting,
  updateNewProjectsByPeople,
  updateNewRevenue,
  updateNewStandingCommitte,
  updateNewBankAccount,
  updateNewBoardOfTruste,
  updateNewExpenditure,
  updateNewFounder,
  updateNewOrganizationGoal,
  createOrganizationOrder,
  updateNewBranche,
  updateNewFacilitiesAndCenter
} = require('../controllers/OrganizationController');
 
router.route('/').get(getAllOrganizations).post(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN), upload,createOrganization);
router.route('/new_activity/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),activityUpload, newActivities);
router.route('/new_organizationProject/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),projectUpload, newOrganizationProject);
router.route('/new_organizationRegulation/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),organizationRegulationUpload, newOrganizationRegulation);
router.route('/new_oversightCommitte/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),oversightCommitteUpload, newOversightCommitte);
router.route('/new_peopleAndSupporting/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),peopleAndSupportingStationUpload, newPeopleAndSupporting);
router.route('/new_projectsByPeople/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),projectsByPeopleUpload, newProjectsByPeople);
router.route('/new_standingCommitte/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),standingCommitteUpload, newStandingCommitte);
router.route('/new_revenue/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),revenueUpload, newRevenue);
router.route('/new_bankAccount/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),bankUpload, newBankAccount);
router.route('/new_boardOfTruste/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),BoardOfTrusteUpload,newBoardOfTruste);
router.route('/new_employeeStats/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),employeeStatsUpload, newEmployeeStats);
router.route('/new_expenditure/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),expenditureUpload,newExpenditure);
router.route('/new_founder/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),founderUpload, newFounder);
router.route('/new_organizationGoal/:id').patch(checkAuthenticateUser,permissionsUser(roles.CREATE_ORGANIZATION,roles.SUPERADMIN),organizationGoalUpload, newOrganizationGoal);

//-------------------------------------------------
router.route('/:id').delete(authenticateUser,permissionsUser(roles.DELETE_ORGANIZATION,roles.SUPERADMIN),deleteOrganization).patch(upload,updateOrganization);
router.route('/update_new_activity/:id').patch(activityUpload, updateNewActivities);
router.route('/update_new_organizationProject/:id').patch(projectUpload, updateNewOrganizationProject);
router.route('/update_new_organizationRegulation/:id').patch(organizationRegulationUpload, updateNewOrganizationRegulation);
router.route('/update_new_oversightCommitte/:id').patch(oversightCommitteUpload, updateNewOversightCommitte);
router.route('/update_new_peopleAndSupporting/:id').patch(peopleAndSupportingStationUpload, updateNewPeopleAndSupporting);
router.route('/update_new_projectsByPeople/:id').patch(projectsByPeopleUpload, updateNewProjectsByPeople);
router.route('/update_new_revenue/:id').patch(revenueUpload, updateNewRevenue);
router.route('/update_new_standingCommitte/:id').patch(standingCommitteUpload, updateNewStandingCommitte);
router.route('/update_new_bankAccount/:id').patch(bankUpload, updateNewBankAccount);
router.route('/update_new_boardOfTruste/:id').patch(BoardOfTrusteUpload,updateNewBoardOfTruste);
router.route('/update_new_expenditure/:id').patch(expenditureUpload,updateNewExpenditure);
router.route('/update_new_founder/:id').patch(founderUpload, updateNewFounder);
router.route('/update_new_organizationGoal/:id').patch(organizationGoalUpload, updateNewOrganizationGoal);
//--------------------------------------------------------------------
router.route('/organization_order').post(upload,createOrganizationOrder);
router.route('/Counter').get(Counter);
router.route('/:id').get(getSingleOrganization);
router.route('/getOrganizationByEmail/:email').get(getOrganizationByEmail);
router.route('/branche/:id').patch(updateNewBranche);
router.route('/facilitiesAndCenter/:id').patch(updateNewFacilitiesAndCenter);



module.exports = router;
