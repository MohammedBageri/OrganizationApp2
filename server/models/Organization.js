const mongoose = require('mongoose');
const validator = require('validator');

const ActivitiesAndProjectsByOthersOrganizationSchema = mongoose.Schema({
  name: { type: String },
  fundingSourceAndNationality: { type: String },
  executionPlace: { type: String },
  numberBeneficiaries: { type: Number },
  executionTime: { type: String },
  costProject: { type: String },
  activityUpload: { type: String },
});
const BankAccountSchema = new mongoose.Schema({
  bankName: { type: String },
  address: { type: String },
  numberAccount: { type: String },
  currency: { type: String },
  balance: { type: String },
  bankUpload:{type:String}
});
const BoardOfTrusteSchema = new mongoose.Schema({
  name: { type: String },
  dateOfBirth: { type: Date },
  placeOfBirth: { type: String },
  job: { type: String },
  adjective: { type: String },
  phone: { type: String },
  currentPlace: { type: String },
  BoardOfTrusteUpload:{type:String}
});
const EmployeeStatsSchema = new mongoose.Schema({
  numberStaff: { type: Number },
  maleStaff: { type: Number },
  femaleStaff: { type: Number },
  noteStaff: { type: String },
  numberContractors: { type: Number },
  maleContractors: { type: Number },
  femaleContractors: { type: Number },
  noteContractors: { type: String },
  numberVolunteers: { type: Number },
  maleVolunteers: { type: Number },
  femaleVolunteers: { type: Number },
  noteVolunteers: { type: String },
  numberOthers: { type: Number },
  maleOthers: { type: Number },
  femaleOthers: { type: Number },
  noteOthers: { type: String },
 filesUpload:{
  type: [String],
 }
});

const ExpenditureSchema = new mongoose.Schema({
  nameExpenditure: { type: String },
  credit: { type: String },
  note: { type: String },
  expenditureUpload:{type:String}
});

const FounderSchema = new mongoose.Schema({
  dateOfBirth: { type: Date },
  placeOfBirth: { type: String },
  job: { type: String },
  gualification: { type: String },
  phone: { type: String },
  currentPlace: { type: String },
  name: { type: String },
  founderUpload: { type: String },
});

const OrganizationGoalSchema = new mongoose.Schema({
  goal: { type: String },
  organizationGoalUpload:{type:String}

});

const OrganizationProjectSchema = new mongoose.Schema({
  name: { type: String },
  fundingSource: { type: String },
  ExecutionPlace: { type: String },
  beneficiaries: { type: String },
  costProject: { type: String },
  projectUpload:{type:String}
});
const OrganizationRegulationSchema = new mongoose.Schema({
  regulation: { type: String },
  isAvailable: {
    type: String,
    enum: {
      values: ['غير متوفر', 'متوفر'],
      message: '{VALUE} is not supported',
    },
  },
  numberDoors: { type: String }, 
  numberLuck: { type: String },
  numberMaterials: { type: String },
  note: { type: String },
  organizationRegulationUpload:{type:String}
});

const OversightCommitteSchema = new mongoose.Schema({
  name: { type: String },
  dateOfBirth: { type: Date },
  placeOfBirth: { type: String },
  job: { type: String },
  qualification: { type: String },
  phone: { type: String },
  currentPlace: { type: String },
  oversightCommitteUpload: { type: String },
});

const PeopleAndSupportingStationSchema = new mongoose.Schema({
  nameSupportingStation: { type: String },
  nationality: { type: String },
  peopleAndSupportingStationUpload:{type:String}

});

const ProjectsByPeopleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  fundingSource: { type: String },
  executionPlace: { type: String },
  beneficiaries: { type: String },
  executionTime: { type: String },
  costProject: { type: String },
  projectsByPeopleUpload:{type:String}
});

const RevenueSchema = new mongoose.Schema({
  nameRevenue: { type: String },
  debit: {
    type: String,
  },
  note: { type: String },
  revenueUpload:{type:String}
});

const StandingCommitteSchema = new mongoose.Schema({
  name: { type: String },
  countMale: { type: Number },
  countFemale: { type: Number },
  note: { type: String },
  standingCommitteUpload: { type: String },
});

//------

const MainCenterSchema = new mongoose.Schema({
  street: { type: String },
  buildingType: { type: String },
  ownOrRent: {
    type: String,
    enum: { values: ['إيجار', 'ملك'], message: '{VALUE} is not supported' },
  },
  state: { type: mongoose.Types.ObjectId, ref: 'State' },
  city: {
    type: mongoose.Types.ObjectId,
    ref: 'City',
  },
});

const BrancheSchema = new mongoose.Schema({
  name: { type: String },
  dateCreated: { type: Date },
  permitNumber: { type: String },
  street: { type: String },
  ownOrRent: {
    type: String,
    enum: { values: ['إيجار', 'ملك'], message: '{VALUE} is not supported' },
  },
  state: { type: mongoose.Types.ObjectId, ref: 'State' },
  city: {
    type: mongoose.Types.ObjectId,
    ref: 'City',
  },
});

const FacilitiesAndCenterSchema = new mongoose.Schema({
  name: { type: String },
  dateCreated: { type: Date },
  activityType: { type: String },
  phone: { type: String },
  state: { type: mongoose.Types.ObjectId, ref: 'State' },
  city: {
    type: mongoose.Types.ObjectId,
    ref: 'City',
  },
});

const RisksSchema = new mongoose.Schema({
  Risk: { type: String },
  riskUpload: {
    type: String,
  },
});

//--------------
const OrganizationSchema = new mongoose.Schema({
  nameAr: {
    type: String,
    //  required: [true, "Please provide name"],
  },
  nameEn: {
    type: String,
    //  required: [true],
  },
  type: {
    type: String,
    enum: {
      values: ['مؤسسة', 'جمعية', 'منظمة'],
      message: '{VALUE} is not supported',
    },
    // required: [true],
  },
  lastRenewalDate: {
    type: Date,
    // required: [true],
  },
  permitNumber: {
    type: String,
    // required: [true],
  },
  permitDate: {
    type: Date,
    //required: [true],
  },
  fieldWork: {
    type: String,
    //required: [true, "Please provide field Work"],
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  website: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['مرخصة', 'غير مرخصة', 'قيد الإنتظار'],
    default: 'غير مرخصة',
  },
  DateisActive: {
    type: Date,
  },
  phone: {
    type: String,
    //required: [true],
  },
  localOrInternational: {
    type: String,
    enum: {
      values: ['محلية', 'دولية'],
      message: '{VALUE} is not supported',
    },
    // required: [true],
  },
  logo: {
    type: String,
   // required: [true],
  },
  OrganizationalChart: {
    type: String,
  },
  bond: {
    type: String,
  },
  certficate: {
    type: String,
  },
  mapArea: { type: mongoose.Types.ObjectId, ref: 'MapArea' },
  activitiesAndProjectsByOthersOrganization: [ActivitiesAndProjectsByOthersOrganizationSchema],
  bankAccount: [BankAccountSchema], 
  boardOfTruste: [BoardOfTrusteSchema],
  employeeStats: EmployeeStatsSchema,
  expenditure: [ExpenditureSchema],
  founder: [FounderSchema],
  organizationGoal: [OrganizationGoalSchema],
  organizationProject: [OrganizationProjectSchema],
  organizationRegulation: [OrganizationRegulationSchema],
  oversightCommitte: [OversightCommitteSchema],
  peopleAndSupporting: [PeopleAndSupportingStationSchema],
  projectsByPeople: [ProjectsByPeopleSchema],
  revenue: [RevenueSchema],
  standingCommitte: [StandingCommitteSchema],
  mainCenter: MainCenterSchema,
  branche: [BrancheSchema],
  facilitiesAndCenter: [FacilitiesAndCenterSchema],
  risks: [RisksSchema],
});

module.exports = mongoose.model('Organization', OrganizationSchema);
