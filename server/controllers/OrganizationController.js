const { OrganizationService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const Organization = require('../models/Organization');
const User = require('../models/User');

const getAllOrganizations = async (req, res) => {
  const { isActive, localOrInternational, type, city } = req.query;
  const queryObject = {};

  if (isActive) {
    queryObject.isActive = isActive;
  }
  if (localOrInternational) {
    queryObject.localOrInternational = localOrInternational;
  }
  if (type) {
    queryObject.type = type;
  }
  if (city) {
    queryObject.city = city;
  }

  let organization = await OrganizationService.getAllOrganizations(queryObject);

  res.status(StatusCodes.OK).json({ organization });
};
const getSingleOrganization = async (req, res) => {
  const { id } = req.params;

  const organization = await OrganizationService.getSingleOrganization(id)
  res.status(StatusCodes.OK).json({ organization });
};
const createOrganization = async (req, res) => {
  const result = await OrganizationService.createOrganization(req);
  
  res.status(StatusCodes.CREATED).json({ result });
};
const updateOrganization = async (req, res) => {
  const { id } = req.params;
  
  const updateOrganization = await OrganizationService.updateOrganization(id,req);
  res.status(StatusCodes.OK).json({ updateOrganization });
};
const deleteOrganization = async (req, res) => {
  const { id } = req.params;

  const organization = await OrganizationService.deleteOrganization(id)

  res.status(StatusCodes.OK).json({ organization });
};
const Counter = async (req, res) => {
  const organization = await Organization.find({});
  const user = await User.find({});
  const isActive = await Organization.find({ isActive: 'مرخصة' });
  const notActive = await Organization.find({ isActive: 'غير مرخصة' });

  const organizationslastRenewalDate = await Organization.find({}).sort('-lastRenewalDate').limit(5);

  const result = {
    organizations: `Count of organizations :${organization.length}`,
    users: `Count of users :${user.length}`,
    organizationsIsActive: `Count of organizaions active:${isActive.length} `,
    organizationsNotActive: `count of organizations not active ${notActive.length}`,
  };

  res.status(StatusCodes.OK).json({ result, organizationslastRenewalDate });
};
const newActivities = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newActivities(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const getOrganizationByEmail = async (req, res) => {
  const { email } = req.params;

  const organization = await OrganizationService.getOrganizationByEmail(email)
  res.status(StatusCodes.OK).json({ organization });
};
const newOrganizationProject = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newOrganizationProject(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newOrganizationRegulation = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newOrganizationRegulation(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newOversightCommitte = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newOversightCommitte(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newPeopleAndSupporting = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newPeopleAndSupporting(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newProjectsByPeople = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newProjectsByPeople(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newRevenue = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newRevenue(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newStandingCommitte = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newStandingCommitte(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newBankAccount = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newBankAccount(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newBoardOfTruste = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newBoardOfTruste(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newEmployeeStats = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newEmployeeStats(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newExpenditure = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newExpenditure(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newFounder = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newFounder(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
const newOrganizationGoal = async (req,res)=>{
  const { id } = req.params;
  const result = await OrganizationService.newOrganizationGoal(id,req);
  
  res.status(StatusCodes.CREATED).json({ result });
}
module.exports = {
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
};
