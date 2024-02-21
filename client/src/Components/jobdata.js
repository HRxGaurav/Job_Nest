const jobData = [
  {
    id: 1,
    roleName: "Software Engineer",
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    ctcOrStipend: "20-25",
    experienceRequired: "2-5 years",
  },
  {
    id: 2,
    roleName: "Data Scientist",
    companyName: "Microsoft",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    ctcOrStipend: "10-14",
    experienceRequired: "3-7 years",
  },
  {
    id: 3,
    roleName: "Product Manager",
    companyName: "Apple Inc.",
    companyLogo: "https://logo.clearbit.com/apple.com",
    ctcOrStipend: "30-35",
    experienceRequired: "5-10 years",
  },
  {
    id: 4,
    roleName: "Software Engineer",
    companyName: "Amazon",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    ctcOrStipend: "20-25",
    experienceRequired: "3-6 years",
  },
  {
    id: 5,
    roleName: "Data Analyst",
    companyName: "Facebook",
    companyLogo: "https://logo.clearbit.com/facebook.com",
    ctcOrStipend: "10-14",
    experienceRequired: "2-4 years",
  },
  {
    id: 6,
    roleName: "DevOps Engineer",
    companyName: "Netflix",
    companyLogo: "https://logo.clearbit.com/netflix.com",
    ctcOrStipend: "20-25",
    experienceRequired: "4-7 years",
  },
  {
    id: 7,
    roleName: "UX/UI Designer",
    companyName: "Airbnb",
    companyLogo: "https://logo.clearbit.com/airbnb.com",
    ctcOrStipend: "10-14",
    experienceRequired: "3-6 years",
  },
  {
    id: 8,
    roleName: "Machine Learning Engineer",
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    ctcOrStipend: "30-35",
    experienceRequired: "5-8 years",
  },
  {
    id: 9,
    roleName: "Cybersecurity Analyst",
    companyName: "IBM",
    companyLogo: "https://logo.clearbit.com/ibm.com",
    ctcOrStipend: "20-25",
    experienceRequired: "4-6 years",
  },
  {
    id: 10,
    roleName: "Backend Developer",
    companyName: "Twitter",
    companyLogo: "https://logo.clearbit.com/twitter.com",
    ctcOrStipend: "10-14",
    experienceRequired: "3-5 years",
  },
  {
    id: 11,
    roleName: "Frontend Developer",
    companyName: "Uber",
    companyLogo: "https://logo.clearbit.com/uber.com",
    ctcOrStipend: "10-14",
    experienceRequired: "3-6 years",
  },
  {
    id: 12,
    roleName: "Full Stack Developer",
    companyName: "LinkedIn",
    companyLogo: "https://logo.clearbit.com/linkedin.com",
    ctcOrStipend: "20-25",
    experienceRequired: "4-7 years",
  },
  {
    id: 13,
    roleName: "Product Designer",
    companyName: "Pinterest",
    companyLogo: "https://logo.clearbit.com/pinterest.com",
    ctcOrStipend: "10-14",
    experienceRequired: "4-8 years",
  },
  {
    id: 14,
    roleName: "Data Engineer",
    companyName: "Salesforce",
    companyLogo: "https://logo.clearbit.com/salesforce.com",
    ctcOrStipend: "30-35",
    experienceRequired: "5-9 years",
  },
  {
    id: 15,
    roleName: "Software Engineer",
    companyName: "Adobe",
    companyLogo: "https://logo.clearbit.com/adobe.com",
    ctcOrStipend: "20-25",
    experienceRequired: "3-6 years",
  },
  // {
  //   id: 16,
  //   roleName: "Cloud Engineer",
  //   companyName: "Oracle",
  //   companyLogo: "https://logo.clearbit.com/oracle.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 17,
  //   roleName: "AI/ML Research Scientist",
  //   companyName: "NVIDIA",
  //   companyLogo: "https://logo.clearbit.com/nvidia.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "6-10 years",
  // },
  // {
  //   id: 18,
  //   roleName: "Product Manager",
  //   companyName: "Square",
  //   companyLogo: "https://logo.clearbit.com/squareup.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 19,
  //   roleName: "Blockchain Developer",
  //   companyName: "Coinbase",
  //   companyLogo: "https://logo.clearbit.com/coinbase.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 20,
  //   roleName: "QA Engineer",
  //   companyName: "Dropbox",
  //   companyLogo: "https://logo.clearbit.com/dropbox.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-5 years",
  // },
  // {
  //   id: 21,
  //   roleName: "Software Developer",
  //   companyName: "Slack",
  //   companyLogo: "https://logo.clearbit.com/slack.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 22,
  //   roleName: "UX Researcher",
  //   companyName: "SurveyMonkey",
  //   companyLogo: "https://logo.clearbit.com/surveymonkey.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-8 years",
  // },
  // {
  //   id: 23,
  //   roleName: "Technical Writer",
  //   companyName: "Atlassian",
  //   companyLogo: "https://logo.clearbit.com/atlassian.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 24,
  //   roleName: "Product Marketing Manager",
  //   companyName: "HubSpot",
  //   companyLogo: "https://logo.clearbit.com/hubspot.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 25,
  //   roleName: "Site Reliability Engineer",
  //   companyName: "Shopify",
  //   companyLogo: "https://logo.clearbit.com/shopify.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 26,
  //   roleName: "Mobile App Developer",
  //   companyName: "Zynga",
  //   companyLogo: "https://logo.clearbit.com/zynga.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 27,
  //   roleName: "System Administrator",
  //   companyName: "VMware",
  //   companyLogo: "https://logo.clearbit.com/vmware.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-9 years",
  // },
  // {
  //   id: 28,
  //   roleName: "Network Engineer",
  //   companyName: "Cisco",
  //   companyLogo: "https://logo.clearbit.com/cisco.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 29,
  //   roleName: "Technical Program Manager",
  //   companyName: "PayPal",
  //   companyLogo: "https://logo.clearbit.com/paypal.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "6-10 years",
  // },
  // {
  //   id: 30,
  //   roleName: "AI Engineer",
  //   companyName: "Intel",
  //   companyLogo: "https://logo.clearbit.com/intel.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 31,
  //   roleName: "Cloud Architect",
  //   companyName: "Red Hat",
  //   companyLogo: "https://logo.clearbit.com/redhat.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 32,
  //   roleName: "Security Engineer",
  //   companyName: "Symantec",
  //   companyLogo: "https://logo.clearbit.com/symantec.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 33,
  //   roleName: "UX Designer",
  //   companyName: "Adobe",
  //   companyLogo: "https://logo.clearbit.com/adobe.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 34,
  //   roleName: "Business Analyst",
  //   companyName: "Accenture",
  //   companyLogo: "https://logo.clearbit.com/accenture.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 35,
  //   roleName: "Data Architect",
  //   companyName: "Informatica",
  //   companyLogo: "https://logo.clearbit.com/informatica.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 36,
  //   roleName: "Product Owner",
  //   companyName: "Adobe",
  //   companyLogo: "https://logo.clearbit.com/adobe.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 37,
  //   roleName: "Quality Assurance Engineer",
  //   companyName: "Logitech",
  //   companyLogo: "https://logo.clearbit.com/logitech.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 38,
  //   roleName: "Embedded Software Engineer",
  //   companyName: "Qualcomm",
  //   companyLogo: "https://logo.clearbit.com/qualcomm.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 39,
  //   roleName: "UI Developer",
  //   companyName: "Intuit",
  //   companyLogo: "https://logo.clearbit.com/intuit.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 40,
  //   roleName: "Network Administrator",
  //   companyName: "Hewlett Packard Enterprise",
  //   companyLogo: "https://logo.clearbit.com/hpe.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 41,
  //   roleName: "Big Data Engineer",
  //   companyName: "Cloudera",
  //   companyLogo: "https://logo.clearbit.com/cloudera.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 42,
  //   roleName: "IT Support Specialist",
  //   companyName: "Dell",
  //   companyLogo: "https://logo.clearbit.com/dell.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-5 years",
  // },
  // {
  //   id: 43,
  //   roleName: "Database Administrator",
  //   companyName: "MongoDB",
  //   companyLogo: "https://logo.clearbit.com/mongodb.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 44,
  //   roleName: "Project Manager",
  //   companyName: "SAP",
  //   companyLogo: "https://logo.clearbit.com/sap.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 45,
  //   roleName: "System Engineer",
  //   companyName: "Cisco",
  //   companyLogo: "https://logo.clearbit.com/cisco.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 46,
  //   roleName: "Scrum Master",
  //   companyName: "Walmart",
  //   companyLogo: "https://logo.clearbit.com/walmart.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 47,
  //   roleName: "Full Stack Developer",
  //   companyName: "Hulu",
  //   companyLogo: "https://logo.clearbit.com/hulu.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 48,
  //   roleName: "UX/UI Designer",
  //   companyName: "PayPal",
  //   companyLogo: "https://logo.clearbit.com/paypal.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 49,
  //   roleName: "Business Intelligence Analyst",
  //   companyName: "Intel",
  //   companyLogo: "https://logo.clearbit.com/intel.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 50,
  //   roleName: "Software Test Engineer",
  //   companyName: "Nokia",
  //   companyLogo: "https://logo.clearbit.com/nokia.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 51,
  //   roleName: "Cloud Solutions Architect",
  //   companyName: "VMware",
  //   companyLogo: "https://logo.clearbit.com/vmware.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 52,
  //   roleName: "Network Security Engineer",
  //   companyName: "Cisco",
  //   companyLogo: "https://logo.clearbit.com/cisco.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 53,
  //   roleName: "Software Quality Assurance Engineer",
  //   companyName: "Synopsys",
  //   companyLogo: "https://logo.clearbit.com/synopsys.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 54,
  //   roleName: "Site Reliability Engineer",
  //   companyName: "Twitter",
  //   companyLogo: "https://logo.clearbit.com/twitter.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 55,
  //   roleName: "Data Scientist",
  //   companyName: "LinkedIn",
  //   companyLogo: "https://logo.clearbit.com/linkedin.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 56,
  //   roleName: "UX Researcher",
  //   companyName: "Pinterest",
  //   companyLogo: "https://logo.clearbit.com/pinterest.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 57,
  //   roleName: "Web Developer",
  //   companyName: "Adobe",
  //   companyLogo: "https://logo.clearbit.com/adobe.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 58,
  //   roleName: "Product Designer",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 59,
  //   roleName: "Software Engineer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 60,
  //   roleName: "AI/ML Engineer",
  //   companyName: "IBM",
  //   companyLogo: "https://logo.clearbit.com/ibm.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 61,
  //   roleName: "Product Manager",
  //   companyName: "Amazon",
  //   companyLogo: "https://logo.clearbit.com/amazon.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 62,
  //   roleName: "Network Engineer",
  //   companyName: "Facebook",
  //   companyLogo: "https://logo.clearbit.com/facebook.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 63,
  //   roleName: "Cloud Architect",
  //   companyName: "Alibaba Group",
  //   companyLogo: "https://logo.clearbit.com/alibabagroup.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 64,
  //   roleName: "Security Analyst",
  //   companyName: "Palantir Technologies",
  //   companyLogo: "https://logo.clearbit.com/palantir.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 65,
  //   roleName: "Software Developer",
  //   companyName: "Netflix",
  //   companyLogo: "https://logo.clearbit.com/netflix.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 66,
  //   roleName: "Machine Learning Engineer",
  //   companyName: "Tesla",
  //   companyLogo: "https://logo.clearbit.com/tesla.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 67,
  //   roleName: "Data Engineer",
  //   companyName: "Twitter",
  //   companyLogo: "https://logo.clearbit.com/twitter.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 68,
  //   roleName: "UX/UI Designer",
  //   companyName: "Netflix",
  //   companyLogo: "https://logo.clearbit.com/netflix.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 69,
  //   roleName: "Backend Developer",
  //   companyName: "Apple",
  //   companyLogo: "https://logo.clearbit.com/apple.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 70,
  //   roleName: "Cloud Solutions Architect",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 71,
  //   roleName: "Database Administrator",
  //   companyName: "Oracle",
  //   companyLogo: "https://logo.clearbit.com/oracle.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 72,
  //   roleName: "Mobile App Developer",
  //   companyName: "Snap Inc.",
  //   companyLogo: "https://logo.clearbit.com/snap.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 73,
  //   roleName: "Site Reliability Engineer",
  //   companyName: "Pinterest",
  //   companyLogo: "https://logo.clearbit.com/pinterest.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 74,
  //   roleName: "UX Researcher",
  //   companyName: "Amazon",
  //   companyLogo: "https://logo.clearbit.com/amazon.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 75,
  //   roleName: "Data Scientist",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 76,
  //   roleName: "Web Developer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 77,
  //   roleName: "Product Manager",
  //   companyName: "Facebook",
  //   companyLogo: "https://logo.clearbit.com/facebook.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 78,
  //   roleName: "Network Engineer",
  //   companyName: "Apple",
  //   companyLogo: "https://logo.clearbit.com/apple.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 79,
  //   roleName: "Cloud Architect",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 80,
  //   roleName: "Security Engineer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 81,
  //   roleName: "UI Developer",
  //   companyName: "Twitter",
  //   companyLogo: "https://logo.clearbit.com/twitter.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 82,
  //   roleName: "DevOps Engineer",
  //   companyName: "Netflix",
  //   companyLogo: "https://logo.clearbit.com/netflix.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 83,
  //   roleName: "Data Analyst",
  //   companyName: "Facebook",
  //   companyLogo: "https://logo.clearbit.com/facebook.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 84,
  //   roleName: "Frontend Developer",
  //   companyName: "Amazon",
  //   companyLogo: "https://logo.clearbit.com/amazon.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 85,
  //   roleName: "QA Engineer",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 86,
  //   roleName: "Software Engineer",
  //   companyName: "Apple",
  //   companyLogo: "https://logo.clearbit.com/apple.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 87,
  //   roleName: "AI/ML Engineer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 88,
  //   roleName: "Database Developer",
  //   companyName: "Oracle",
  //   companyLogo: "https://logo.clearbit.com/oracle.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 89,
  //   roleName: "Product Designer",
  //   companyName: "Apple",
  //   companyLogo: "https://logo.clearbit.com/apple.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 90,
  //   roleName: "Software Test Engineer",
  //   companyName: "Facebook",
  //   companyLogo: "https://logo.clearbit.com/facebook.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 91,
  //   roleName: "Machine Learning Engineer",
  //   companyName: "IBM",
  //   companyLogo: "https://logo.clearbit.com/ibm.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 92,
  //   roleName: "Full Stack Developer",
  //   companyName: "Amazon",
  //   companyLogo: "https://logo.clearbit.com/amazon.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 93,
  //   roleName: "Cybersecurity Analyst",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 94,
  //   roleName: "Data Engineer",
  //   companyName: "Facebook",
  //   companyLogo: "https://logo.clearbit.com/facebook.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 95,
  //   roleName: "Frontend Developer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 96,
  //   roleName: "UX Designer",
  //   companyName: "Apple",
  //   companyLogo: "https://logo.clearbit.com/apple.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 97,
  //   roleName: "Software Engineer",
  //   companyName: "Netflix",
  //   companyLogo: "https://logo.clearbit.com/netflix.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "3-6 years",
  // },
  // {
  //   id: 98,
  //   roleName: "Product Manager",
  //   companyName: "Twitter",
  //   companyLogo: "https://logo.clearbit.com/twitter.com",
  //   ctcOrStipend: "20-25",
  //   experienceRequired: "5-8 years",
  // },
  // {
  //   id: 99,
  //   roleName: "DevOps Engineer",
  //   companyName: "Microsoft",
  //   companyLogo: "https://logo.clearbit.com/microsoft.com",
  //   ctcOrStipend: "10-14",
  //   experienceRequired: "4-7 years",
  // },
  // {
  //   id: 100,
  //   roleName: "Data Scientist",
  //   companyName: "Google",
  //   companyLogo: "https://logo.clearbit.com/google.com",
  //   ctcOrStipend: "30-35",
  //   experienceRequired: "5-8 years",
  // },
];


export default jobData;