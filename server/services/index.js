const { getAllCities, getSingleCity, deleteCity, createCity, updateCity } = require('./CityService');
const { getAllStates, getSingleState, deleteState, createState, updateState } = require('./StateService');
const {
  getAllOrder,
  getSingleOrder,
  orderUnderProccessing,
  orderNotCompleted,
  orderUnderImplementing,
  isActive,
  deleteOrder,
  orderCompleted,
  orderUploadCertficate
} = require('./OrderService');
const {
  getAllOrganizations,
  getSingleOrganization,
  updateNewBranche,
  deleteOrganization,
  createOrganization,
  updateOrganization,
  getOrganizationByEmail,
  updateNewFacilitiesAndCenter,
  newActivities,
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
  updateNewOrganizationGoal
 

  
} = require('./OrganizationService');
const {
  getAllNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
  
} = require('./NewsService');
const {
  getAllMapAreas,
  getSingleMapArea,
  deleteMapArea,
  createMapArea,
  updateMapArea,
  
} = require('./MapAreaService');
module.exports = {
  CityService: {
    getAllCities,
    getSingleCity,
    deleteCity,
    createCity,
    updateCity,
  },
  StateService: {
    getAllStates,
    getSingleState,
    deleteState,
    createState,
    updateState,
  },
  OrderService: {
    getAllOrder,
    getSingleOrder,
    orderUnderProccessing,
    isActive,
    deleteOrder,
    orderNotCompleted,
    orderUnderImplementing,
    orderCompleted,
    orderUploadCertficate
  },
  OrganizationService:{
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
    updateNewFacilitiesAndCenter,
    updateNewStandingCommitte,
    updateNewBankAccount,
    updateNewBoardOfTruste,
    updateNewExpenditure,
    updateNewFounder,
    updateNewOrganizationGoal,
    updateNewBranche
    
  },
  NewsService:{
    getAllNews,
    getSingleNews,
    createNews,
    updateNews,
    deleteNews,
    
  },
  MapAreaService:{
  getAllMapAreas,
  getSingleMapArea,
  deleteMapArea,
  createMapArea,
  updateMapArea,
    
  }
};
