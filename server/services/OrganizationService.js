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
const updateOrganization = async (id, updatedOrganization) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  if (!organization.logo) {
    updatedOrganization.body.logo = updatedOrganization.files[0].path;
  }
  // if (organization.OrganizationalChart) {
  //   if (updatedOrganization.files[1]) {
  //     updatedOrganization.body.OrganizationalChart = updatedOrganization.files[1].path;
  //   }
  // }
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
  const order = await Order.findOne({organization:organization._id})
  return [organization,order];
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
const newBankAccount = async (id,bankAccount) => {
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
    files.push(
      employeeStat.files[i].destination + employeeStat.files[i].filename
    );
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
  newOrganizationGoal
};
