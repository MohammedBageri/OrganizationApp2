const Organization = require('../models/Organization');
const CustomError = require('../errors');
const Order = require('../models/Order');
const removeFileIfExist = require('../utils/removeFileIfExist');

const getAllOrganizations = async (queryObject) => {
  return Organization.find(queryObject)
    .populate({ path: 'mapArea' })
    .populate([{ path: 'branche.city' }, { path: 'branche.state' }])
    .populate([{ path: 'mainCenter.city' }, { path: 'mainCenter.state' }])
    .populate([{ path: 'facilitiesAndCenter.city' }, { path: 'facilitiesAndCenter.state' }]);
};
const getSingleOrganization = async (id) => {
  const organization = await Organization.findOne({ _id: id })
    .populate({ path: 'mapArea' })
    .populate([{ path: 'branche.city' }, { path: 'branche.state' }])
    .populate([{ path: 'mainCenter.city' }, { path: 'mainCenter.state' }])
    .populate([{ path: 'facilitiesAndCenter.city' }, { path: 'facilitiesAndCenter.state' }]);

  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  return organization;
};
const createOrganization = async (organization) => {
  organization.body.logo = organization.files[0].path;
  organization.body.permitNumber = Math.random().toString().slice(2, 12);
  organization.body.permitDate = Date.now();

  if (organization.files[1]) {
    organization.body.OrganizationalChart = organization.files[1].path;
  }
  const newOrganization = await Organization.create(organization.body);

  // await Order.create({
  //   organization: newOrganization._id,
  //   status: 'قيد الإنتظار',
  // });

  return newOrganization;
};
const updateOrganization = async (id, updatedOrganization) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  if (updatedOrganization.files.length) {
    if (updatedOrganization.files[0].fieldname === 'OrganizationalChart') {
      updatedOrganization.body.OrganizationalChart = updatedOrganization.files[0].path;
    }
    if (updatedOrganization.files[0].fieldname === 'logo') {
      updatedOrganization.body.logo = updatedOrganization.files[0].path;
    }
    if (updatedOrganization.files.length === 2) {
      if (updatedOrganization.files[1].fieldname === 'OrganizationalChart') {
        updatedOrganization.body.OrganizationalChart = updatedOrganization.files[1].path;
      }
      if (updatedOrganization.files[0].fieldname === 'logo') {
        updatedOrganization.body.logo = updatedOrganization.files[0].path;
      }
    }
  }
       
  await Organization.updateOne({ _id: id }, updatedOrganization.body, {
    new: true,
    runValidators: true,
  });
  return await Organization.findOne({ _id: id });
};
const deleteOrganization = async (id) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  await Order.deleteOne({ organization: id });

  return await organization.remove();
};
const newActivities = async (id, activity) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const activities = organization.activitiesAndProjectsByOthersOrganization;
  if (activity.file) {
    activity.body.activityUpload = activity.file.path;
  }

  activities.push(activity.body);
  await Organization.updateOne(
    { _id: id },
    { activitiesAndProjectsByOthersOrganization: activities },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const getOrganizationByEmail = async (email) => {
  const organization = await Organization.findOne({ email: email })
    .populate({ path: 'mapArea' })
    .populate([{ path: 'branche.city' }, { path: 'branche.state' }])
    .populate([{ path: 'mainCenter.city' }, { path: 'mainCenter.state' }])
    .populate([{ path: 'facilitiesAndCenter.city' }, { path: 'facilitiesAndCenter.state' }]);
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${email}`);
  }
  const order = await Order.findOne({ organization: organization._id });
  return [organization, order];
};
const newOrganizationProject = async (id, project) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const projects = organization.organizationProject;
  if (project.file) {
    project.body.projectUpload = project.file.path;
  }

  projects.push(project.body);
  await Organization.updateOne(
    { _id: id },
    { organizationProject: projects },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newOrganizationRegulation = async (id, regulation) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const regulations = organization.organizationRegulation;
  if (regulation.file) {
    regulation.body.organizationRegulationUpload = regulation.file.path;
  }

  regulations.push(regulation.body);
  await Organization.updateOne(
    { _id: id },
    { organizationRegulation: regulations },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newOversightCommitte = async (id, oversightCommitte) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const oversightCommittes = organization.oversightCommitte;
  if (oversightCommitte.file) {
    oversightCommitte.body.oversightCommitteUpload = oversightCommitte.file.path;
  }

  oversightCommittes.push(oversightCommitte.body);
  await Organization.updateOne(
    { _id: id },
    { oversightCommitte: oversightCommittes },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newPeopleAndSupporting = async (id, support) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const supports = organization.peopleAndSupporting;
  if (support.file) {
    support.body.peopleAndSupportingStationUpload = support.file.path;
  }

  supports.push(support.body);
  await Organization.updateOne(
    { _id: id },
    { peopleAndSupporting: supports },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newProjectsByPeople = async (id, project) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const projects = organization.projectsByPeople;
  if (project.file) {
    project.body.projectsByPeopleUpload = project.file.path;
  }

  projects.push(project.body);
  await Organization.updateOne(
    { _id: id },
    { projectsByPeople: projects },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newRevenue = async (id, revenue) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const revenues = organization.revenue;
  if (revenue.file) {
    revenue.body.revenueUpload = revenue.file.path;
  }

  revenues.push(revenue.body);
  await Organization.updateOne(
    { _id: id },
    { revenue: revenues },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newStandingCommitte = async (id, standingCommitte) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const standingCommittes = organization.standingCommitte;
  if (standingCommitte.file) {
    standingCommitte.body.standingCommitteUpload = standingCommitte.file.path;
  }

  standingCommittes.push(standingCommitte.body);
  await Organization.updateOne(
    { _id: id },
    { standingCommitte: standingCommittes },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newBankAccount = async (id, bankAccount) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const bankAccounts = organization.bankAccount;
  if (bankAccount.file) {
    bankAccount.body.bankUpload = bankAccount.file.path;
  }
  bankAccounts.push(bankAccount.body);
  await Organization.updateOne(
    { _id: id },
    { bankAccount: bankAccounts },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newBoardOfTruste = async (id, boardOfTruste) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const newBoardOfTruste = organization.boardOfTruste;
  if (boardOfTruste.file) {
    boardOfTruste.body.BoardOfTrusteUpload = boardOfTruste.file.path;
  }

  newBoardOfTruste.push(boardOfTruste.body);
  await Organization.updateOne(
    { _id: id },
    { boardOfTruste: newBoardOfTruste },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newEmployeeStats = async (id, employeeStat) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const files = [];
  for (var i in employeeStat.files) {
    files.push(employeeStat.files[i].destination + employeeStat.files[i].filename);
  }
  if (employeeStat.files) {
    employeeStat.body.filesUpload = files;
  }
  await Organization.updateOne(
    { _id: id },
    { employeeStats: employeeStat.body },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newExpenditure = async (id, expenditure) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  const newExpenditure = organization.expenditure;
  if (expenditure.file) {
    expenditure.body.expenditureUpload = expenditure.file.path;
  }
  newExpenditure.push(expenditure.body);
  await Organization.updateOne(
    { _id: id },
    { expenditure: newExpenditure },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newFounder = async (id, founder) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const newFounder = organization.founder;
  if (founder.file) {
    founder.body.founderUpload = founder.file.path;
  }

  newFounder.push(founder.body);
  await Organization.updateOne(
    { _id: id },
    { founder: newFounder },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
const newOrganizationGoal = async (id, organizationGoal) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }

  const goals = organization.organizationGoal;
  if (organizationGoal.file) {
    organizationGoal.body.organizationGoalUpload = organizationGoal.file.path;
  }

  goals.push(organizationGoal.body);
  await Organization.updateOne(
    { _id: id },
    { organizationGoal: goals },
    {
      new: true,
      runValidators: true,
    }
  );
  return organization;
};
//--------------------------------------------
const updateNewActivities = async (id, activity) => {
  const newActivities = await Organization.findOne({ 'activitiesAndProjectsByOthersOrganization._id': id });
  const activities = newActivities.activitiesAndProjectsByOthersOrganization;
  if (!newActivities) {
    throw new CustomError.NotFoundError(`No activity with id : ${id}`);
  }
  if (activity.file) {
    activity.body.activityUpload = activity.file.path;
  }

  const result = activities.find(({ _id }) => _id == id);
  result.name = activity.body.name;
  result.fundingSourceAndNationality = activity.body.fundingSourceAndNationality;
  result.executionPlace = activity.body.executionPlace;
  result.executionTime = activity.body.executionTime;
  result.costProject = activity.body.costProject;
  result.activityUpload = activity.body.activityUpload;

  await newActivities.save();
  return await Organization.findOne({ 'activitiesAndProjectsByOthersOrganization._id': id });
};
const updateNewOrganizationProject = async (id, project) => {
  const newProjects = await Organization.findOne({ 'organizationProject._id': id });
  const projects = newProjects.organizationProject;
  if (!newProjects) {
    throw new CustomError.NotFoundError(`No project with id : ${id}`);
  }
  if (project.file) {
    project.body.projectUpload = project.file.path;
  }

  const result = projects.find(({ _id }) => _id == id);
  result.name = project.body.name;
  result.fundingSource = project.body.fundingSource;
  result.ExecutionPlace = project.body.ExecutionPlace;
  result.beneficiaries = project.body.beneficiaries;
  result.costProject = project.body.costProject;
  result.projectUpload = project.body.projectUpload;

  await newProjects.save();
  return await Organization.findOne({ 'organizationProject._id': id });
};
const updateNewOrganizationRegulation = async (id, regulation) => {
  const newRegulation = await Organization.findOne({ 'organizationRegulation._id': id });
  const regulationList = newRegulation.organizationRegulation;
  if (!newRegulation) {
    throw new CustomError.NotFoundError(`No regulation with id : ${id}`);
  }
  if (regulation.file) {
    regulation.body.organizationRegulationUpload = regulation.file.path;
  }

  const result = regulationList.find(({ _id }) => _id == id);
  result.regulation = regulation.body.regulation;
  result.isAvailable = regulation.body.isAvailable;
  result.numberDoors = regulation.body.numberDoors;
  result.numberLuck = regulation.body.numberLuck;
  result.numberMaterials = regulation.body.numberMaterials;
  result.note = regulation.body.note;
  result.organizationRegulationUpload = regulation.body.organizationRegulationUpload;

  await newRegulation.save();
  return await Organization.findOne({ 'organizationRegulation._id': id });
};
const updateNewOversightCommitte = async (id, oversightCommitte) => {
  const newOversightCommitte = await Organization.findOne({ 'oversightCommitte._id': id });
  const oversightCommitteList = newOversightCommitte.oversightCommitte;
  if (!newOversightCommitte) {
    throw new CustomError.NotFoundError(`No oversightCommitte with id : ${id}`);
  }
  if (oversightCommitte.file) {
    oversightCommitte.body.organizationRegulationUpload = oversightCommitte.file.path;
  }

  const result = oversightCommitteList.find(({ _id }) => _id == id);
  result.name = oversightCommitte.body.name;
  result.dateOfBirth = oversightCommitte.body.dateOfBirth;
  result.placeOfBirth = oversightCommitte.body.placeOfBirth;
  result.job = oversightCommitte.body.job;
  result.qualification = oversightCommitte.body.qualification;
  result.phone = oversightCommitte.body.phone;
  result.currentPlace = oversightCommitte.body.currentPlace;
  result.oversightCommitteUpload = oversightCommitte.body.oversightCommitteUpload;

  await newOversightCommitte.save();
  return await Organization.findOne({ 'oversightCommitte._id': id });
};
const updateNewPeopleAndSupporting = async (id, support) => {
  const supports = await Organization.findOne({ 'peopleAndSupporting._id': id });
  const supportList = supports.peopleAndSupporting;
  if (!supports) {
    throw new CustomError.NotFoundError(`No support with id : ${id}`);
  }
  if (support.file) {
    support.body.peopleAndSupportingStationUpload = support.file.path;
  }

  const result = supportList.find(({ _id }) => _id == id);
  result.nameSupportingStation = support.body.nameSupportingStation;
  result.nationality = support.body.nationality;
  result.peopleAndSupportingStationUpload = support.body.peopleAndSupportingStationUpload;

  await supports.save();
  return await Organization.findOne({ 'peopleAndSupporting._id': id });
};
const updateNewProjectsByPeople = async (id, project) => {
  const projects = await Organization.findOne({ 'projectsByPeople._id': id });
  const projectsList = projects.projectsByPeople;
  if (!projects) {
    throw new CustomError.NotFoundError(`No project with id : ${id}`);
  }
  if (project.file) {
    project.body.projectsByPeopleUpload = project.file.path;
  }

  const result = projectsList.find(({ _id }) => _id == id);
  result.name = project.body.name;
  result.fundingSource = project.body.fundingSource;
  result.executionPlace = project.body.executionPlace;
  result.beneficiaries = project.body.beneficiaries;
  result.executionTime = project.body.executionTime;
  result.costProject = project.body.costProject;

  await projects.save();
  return await Organization.findOne({ 'projectsByPeople._id': id });
};
const updateNewRevenue = async (id, revenue) => {
  const newRevenue = await Organization.findOne({ 'revenue._id': id });
  const revenueList = newRevenue.revenue;
  if (!newRevenue) {
    throw new CustomError.NotFoundError(`No revenue with id : ${id}`);
  }
  if (revenue.file) {
    revenue.body.revenueUpload = revenue.file.path;
  }
  const result = revenueList.find(({ _id }) => _id == id);
  result.nameRevenue = revenue.body.nameRevenue;
  result.debit = revenue.body.debit;
  result.note = revenue.body.note;
  result.revenueUpload = revenue.body.revenueUpload;

  await newRevenue.save();
  return await Organization.findOne({ 'revenue._id': id });
};
const updateNewStandingCommitte = async (id, standingCommitte) => {
  const newStandingCommitte = await Organization.findOne({ 'standingCommitte._id': id });
  const standingCommitteList = newStandingCommitte.standingCommitte;
  if (!newStandingCommitte) {
    throw new CustomError.NotFoundError(`No standingCommitte with id : ${id}`);
  }
  if (standingCommitte.file) {
    standingCommitte.body.standingCommitteUpload = standingCommitte.file.path;
  }
  const result = standingCommitteList.find(({ _id }) => _id == id);
  result.name = standingCommitte.body.name;
  result.countMale = standingCommitte.body.countMale;
  result.countFemale = standingCommitte.body.countFemale;
  result.note = standingCommitte.body.note;
  result.standingCommitteUpload = standingCommitte.body.standingCommitteUpload;

  await newStandingCommitte.save();
  return await Organization.findOne({ 'standingCommitte._id': id });
};
const updateNewBankAccount = async (id, bankAccount) => {
  const newBankAccount = await Organization.findOne({ 'bankAccount._id': id });
  const bankAccountList = newBankAccount.bankAccount;
  if (!newBankAccount) {
    throw new CustomError.NotFoundError(`No bankAccount with id : ${id}`);
  }
  if (bankAccount.file) {
    bankAccount.body.bankUpload = bankAccount.file.path;
  }

  const result = bankAccountList.find(({ _id }) => _id == id);
  result.bankName = bankAccount.body.bankName;
  result.address = bankAccount.body.address;
  result.numberAccount = bankAccount.body.numberAccount;
  result.currency = bankAccount.body.currency;
  result.balance = bankAccount.body.balance;
  result.bankUpload = bankAccount.body.bankUpload;

  await newBankAccount.save();
  return await Organization.findOne({ 'bankAccount._id': id });
};
const updateNewBoardOfTruste = async (id, boardOfTruste) => {
  const newBoardOfTruste = await Organization.findOne({ 'boardOfTruste._id': id });
  const boardOfTrusteList = newBoardOfTruste.boardOfTruste;
  if (!newBoardOfTruste) {
    throw new CustomError.NotFoundError(`No boardOfTruste with id : ${id}`);
  }
  if (boardOfTruste.file) {
    boardOfTruste.body.BoardOfTrusteUpload = boardOfTruste.file.path;
  }

  const result = boardOfTrusteList.find(({ _id }) => _id == id);
  result.name = boardOfTruste.body.name;
  result.dateOfBirth = boardOfTruste.body.dateOfBirth;
  result.placeOfBirth = boardOfTruste.body.placeOfBirth;
  result.job = boardOfTruste.body.job;
  result.adjective = boardOfTruste.body.adjective;
  result.phone = boardOfTruste.body.phone;
  result.currentPlace = boardOfTruste.body.currentPlace;
  result.BoardOfTrusteUpload = boardOfTruste.body.BoardOfTrusteUpload;

  await newBoardOfTruste.save();
  return await Organization.findOne({ 'boardOfTruste._id': id });
};
const updateNewExpenditure = async (id, expenditure) => {
  const newExpenditure = await Organization.findOne({ 'expenditure._id': id });
  const expenditureList = newExpenditure.expenditure;
  if (!newExpenditure) {
    throw new CustomError.NotFoundError(`No expenditure with id : ${id}`);
  }
  if (expenditure.file) {
    expenditure.body.expenditureUpload = expenditure.file.path;
  }

  const result = expenditureList.find(({ _id }) => _id == id);
  result.nameExpenditure = expenditure.body.nameExpenditure;
  result.credit = expenditure.body.credit;
  result.note = expenditure.body.note;
  result.expenditureUpload = expenditure.body.expenditureUpload;

  await newExpenditure.save();
  return await Organization.findOne({ 'expenditure._id': id });
};
const updateNewFounder = async (id, founder) => {
  const newFounder = await Organization.findOne({ 'founder._id': id });
  const founderList = newFounder.founder;
  if (!newFounder) {
    throw new CustomError.NotFoundError(`No founder with id : ${id}`);
  }
  if (founder.file) {
    founder.body.founderUpload = founder.file.path;
  }

  const result = founderList.find(({ _id }) => _id == id);
  result.dateOfBirth = founder.body.dateOfBirth;
  result.placeOfBirth = founder.body.placeOfBirth;
  result.job = founder.body.job;
  result.gualification = founder.body.gualification;
  result.phone = founder.body.phone;
  result.currentPlace = founder.body.currentPlace;
  result.name = founder.body.name;
  result.founderUpload = founder.body.founderUpload;

  await newFounder.save();
  return await Organization.findOne({ 'founder._id': id });
};
const updateNewOrganizationGoal = async (id, organizationGoal) => {
  const newOrganizationGoal = await Organization.findOne({ 'organizationGoal._id': id });
  const goalList = newOrganizationGoal.organizationGoal;
  if (!newOrganizationGoal) {
    throw new CustomError.NotFoundError(`No goal with id : ${id}`);
  }
  if (organizationGoal.file) {
    organizationGoal.body.organizationGoalUpload = organizationGoal.file.path;
  }

  const result = goalList.find(({ _id }) => _id == id);
  result.goal = organizationGoal.body.goal;
  result.organizationGoalUpload = organizationGoal.body.organizationGoalUpload;

  await newOrganizationGoal.save();
  return await Organization.findOne({ 'organizationGoal._id': id });
};
const createOrganizationOrder = async (organization) => {
  organization.body.logo = organization.files[0].path;
  organization.body.permitNumber = Math.random().toString().slice(2, 12);
  organization.body.permitDate = Date.now();
  if (organization.files[1]) {
    organization.body.OrganizationalChart = organization.files[1].path;
  }
  const newOrganization = await Organization.create(organization.body);

  await Order.create({
    organization: newOrganization._id,
    status: 'قيد الإنتظار',
  });

  return newOrganization;
};
const updateNewBranche = async (id, branche) => {
  const organization = await Organization.findOne({ _id: id });
  organization.branche = branche.body
  await organization.save()

  return await Organization.findOne({ _id: id });
 
};
const updateNewFacilitiesAndCenter = async (id, facilitiesAndCenter) => {
  const organization = await Organization.findOne({ _id: id });
  organization.facilitiesAndCenter = facilitiesAndCenter.body
  await organization.save()

  return await Organization.findOne({ _id: id });

};
module.exports = {
  getAllOrganizations,
  getSingleOrganization,
  deleteOrganization,
  createOrganization,
  updateOrganization,
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
  newOrganizationGoal,
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
};
